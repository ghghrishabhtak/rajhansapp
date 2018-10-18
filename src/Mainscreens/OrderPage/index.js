import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, AsyncStorage, Alert, ScrollView} from 'react-native';
import styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Config/Colors';
import Axios from 'axios';
import Loading from '../../Components/Loadings';
import Toast from 'react-native-simple-toast';
import Icon from "react-native-vector-icons/Ionicons";

export default class Orderpage extends React.Component{
    state = { 
        orderid: '',
        orderarray: [],
        counts: '',
        name: '',
        number: '',
        networkerror: false,
        loading: false
     }
     componentWillMount = () =>{
        const oid= this.props.navigation.getParam('order_id')
        const oarr= this.props.navigation.getParam('order_array')
        const cs= this.props.navigation.getParam('showcount')
        // const sname = await AsyncStorage.getItem('USERNAME')
        // const sno = await AsyncStorage.getItem('USER_PHONE')
        AsyncStorage.getItem('USERNAME').then(sname=>{
            this.setState({
                name: sname
            })
        })
        AsyncStorage.getItem('USER_PHONE').then(smob=>{
            this.setState({
                number: smob
            })
        })
        this.setState({
            orderid: oid,
            orderarray: oarr,
            counts: cs,
            // name: sname,
            // number: sno 
        })
     }
     static navigationOptions = ({navigation}) =>  ({
        title: 'Order Page',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        },
        headerLeft:  (
            <TouchableOpacity
            onPress = { ()=>navigation.navigate('HOME') }
            >
                <Icon
                name = 'md-arrow-back'
                size={ 32 }
                style={{ marginLeft: 15 }}
                color= {colors.white}
                ></Icon>
            </TouchableOpacity>
               )
      });
     renderSeats = (seat) =>{
        var s = '';
        var u = ',';
         for(let i=0;i<seat.length;i++){
               s = s+seat[i].seat_row_nr + '-' + seat[i].seat_nr+u
         }
         return <Text style = { styles.seatview }>: [ {s.replace(/,\s*$/, "")} ]</Text>;
     }
     confirmBook = (oids,onames,ouids) =>{
        this.setState({loading: true})
        Axios.get('https://lcahgoa.in/index.php/app/confirmOrder/?order_id='+oids+'&profileemail='+onames+'&currentUser='+ouids+'&method=7',{
            timeout: 60000
        }).then(p=>{
            this.setState({loading: false})
            console.log(p)
            if(p.data.status == 'True'){
                this.props.navigation.navigate('CONFIRMBOOK',{
                    msg: p.data.Message
                })
                
            }
            else{
              Alert.alert('Something went wrong')
            }
        }).catch(error=>{
            this.setState({loading: false})
            console.log(error)
            if(error == 'Error: Network Error'){
                Alert.alert('Please check your Internet connection' 
                +'Try again...')
            }
            else if(error == 'Error: timeout of 60000ms exceeded'){
                Alert.alert('Your Internet connection is very poor'
                 +'Try again...')
            }
            else{
                Alert.alert(''+error)
            }
        })
     }
     cancelOrder = (orrid,uuid) =>{
        this.setState({loading: true})
         Axios.get('https://lcahgoa.in/index.php/app/newcancelorder/?orderid='+orrid+'&user_id='+uuid+'&is_admin=NO',{
             timeout: 60000
         }).then(ps=>{
            this.setState({loading: false})
             console.log(ps)
             if(ps.data.success == true){
                Toast.show(ps.data.msg, Toast.LONG);
                    this.props.navigation.navigate('HOME')
             } else{
                Toast.show(ps.data.msg, Toast.LONG);
             }
         }).catch(error=>{
            this.setState({loading: false})
            console.log(error)
            if(error == 'Error: Network Error'){
                Alert.alert('Please check your connection, Try again...')
            }
            else if(error == 'Error: timeout of 60000ms exceeded'){
                Alert.alert('Your Internet connection is very poor, Try again...')
            }
            else{
                Alert.alert(''+error)
            }
        })
     }
    render(){
        const { orderid, orderarray, counts, name, number, loading } = this.state;
        if(loading){
            return (
                <Loading/>
              )
            }
        return(
            <View style={ styles.container }>
            <ScrollView>
               <Text style={ styles.ftxt }>PLEASE CONFIRM YOUR ORDER DETAILS.</Text>
               <Text style={ styles.stxt }>Show Details</Text>
               <View style = { styles.detailView }>
                   <View style = { styles.vvview }>
                        <Text style={ styles.headtxt }>Movie</Text>
                        <Text style={ styles.movietxt }>: { orderarray[0].event_name }</Text>
                   </View>
                   <View style= { styles.allview }>
                       <Text style={ styles.headtxt }>No. Of Tickets</Text>
                       <Text style={ styles.tktview }>: {orderarray.length}</Text>
                   </View>
                   <View style= { styles.allview }>
                      <Text style={ styles.headtxt }>Seat numbers</Text>
                      { this.renderSeats(orderarray) }
                      
                   </View>
                   <View style={ styles.allview }>
                     <Text style={ styles.headtxt }>Category</Text>
                     <Text style={ styles.catview }>: {orderarray[0].category_name}</Text>
                   </View>
                   <View style={ styles.allview }>
                      <Text style= { styles.headtxt }>Date</Text>
                      <Text style={ styles.dateview }>: {orderarray[0].order_date}</Text>
                   </View>
                   <View style={ styles.lastdetailview }>
                       <Text style={ styles.headtxt }>Time</Text>
                       <Text style={ styles.timeview }>: {orderarray[0].event_time}</Text>
                   </View>
               </View>
               <Text style={ styles.txtyourdetail }>Your Detail:</Text>
               <View style={ styles.detailView }>
                   <View style={ styles.vvview }>
                   <Text style={ styles.headtxt }>Email</Text>
                   <Text style={ styles.emailview }>: {name}</Text>
                   </View>
                   <View style={ styles.allview }>
                       <Text style={ styles.headtxt }>Mobile</Text>
                       <Text style={ styles.mobileview }>: {number}</Text>
                   </View>
                   <View style={ styles.allview }>
                      <Text style={ styles.headtxt }>Dependent Count</Text>
                      <Text style={ styles.dependentview }>: {orderarray.length}</Text>
                      {/* <Text style={ styles.paidview }>Paid Count : 0</Text> */}
                   </View>
                   <View style={ styles.lastdetailview }>
                     <Text style={ styles.headtxt }>Current Show Count</Text>
                     <Text style={ styles.showView }>: {counts.myself} myself, {counts.spouse} spouse, {counts.childrens} childrens,
                    </Text>
                   </View>
                   <Text style={ styles.pview }> {counts.parents} parents, {counts.guestMembers} guestMembers</Text>
               </View>
               <View style={ styles.btnview }>
               <TouchableOpacity
               onPress={ ()=>this.cancelOrder(orderid,counts.currentUserId) }
               >
               <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.btnpreview}>
                     <Text style={styles.btntxt}>Cancel Booking</Text>
                     </LinearGradient></TouchableOpacity>
                     <TouchableOpacity
                       onPress={ ()=>this.confirmBook(orderid,name,counts.currentUserId) }
                     >
                     <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.btnpreview}>
                     <Text style={styles.btntxt}>Confirm Booking</Text>
                     </LinearGradient></TouchableOpacity>      
               </View>
               <StatusBar hidden={true} />
               {/* <Toast
               ref = 'toast'
               ></Toast> */}
               </ScrollView>
            </View>
        )
    }
}