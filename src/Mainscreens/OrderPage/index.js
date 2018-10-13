import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, AsyncStorage, Alert} from 'react-native';
import styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Config/Colors';
import Axios from 'axios';

export default class Orderpage extends React.Component{
    state = { 
        orderid: '',
        orderarray: [],
        counts: '',
        name: '',
        number: '',
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
     static navigationOptions =  {
        title: 'Order Page',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        },
      };
     renderSeats = (seat) =>{
        var s = '';
        var u = ',';
         for(let i=0;i<seat.length;i++){
               s = s+seat[i].seat_row_nr + '-' + seat[i].seat_nr+u
         }
         return <Text style = { styles.seatview }>: [ {s.replace(/,\s*$/, "")} ]</Text>;
     }
     confirmBook = (oids,onames,ouids) =>{
        Axios.get('https://lcahgoa.in/index.php/app/confirmOrder/?order_id='+oids+'&profileemail='+onames+'&currentUser='+ouids+'&method=7').then(p=>{
            console.log(p)
            if(p.data.status == 'True'){
                this.props.navigation.navigate('confirmbook',{
                    msg: p.data.Message
                })
            }
            else{
              Alert.alert('Something went wrong')
            }
        })
     }
     cancelOrder = (orrid,uuid) =>{
         Axios.get('https://lcahgoa.in/index.php/app/newcancelorder/?orderid='+orrid+'&user_id='+uuid+'&is_admin=NO').then(ps=>{
             console.log(ps)
             if(ps.data.success == 'Your order has been canceled successfully.'){
                 Alert.alert('your order cancel successfully')
             } else{
                 Alert.alert('Something went wrong please check u book your ticket or not')
             }
         })
     }
    render(){
        const { orderid, orderarray, counts, name, number } = this.state;
        return(
            <View style={ styles.container }>
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
            </View>
        )
    }
}