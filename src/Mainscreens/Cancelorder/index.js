import React from 'react';
import { View,Text,TouchableOpacity,AsyncStorage, StatusBar } from 'react-native';
import styles from './Styles';
import Axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Config/Colors';
import SERVER_URL from '../../Config/constant';
import Loading from '../../Components/Loadings';
import Moment from 'moment';
import Colors from '../../Config/Colors';
import Toast from 'react-native-simple-toast';
import Icon from "react-native-vector-icons/Ionicons";

export default class Cancel extends React.Component{
    state = {
         category: '',
         date: '',
         seat_row: '',
         seat_no: '',
         time: '',
         listvisible: false,
         orederid:'',
         useerid:'',
         seatid:'',
         loading: false
     }
    static navigationOptions = ({navigation}) => ({
        title: 'Cancel Order',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        },
        headerLeft:  (
         <TouchableOpacity
         onPress = { ()=>navigation.navigate('ORDER') }
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
    componentWillMount= async ()=>{
        this.setState({loading: true})
        const ui= await AsyncStorage.getItem('USER_ID');
        AsyncStorage.getItem('ORDER_NO').then(oid=>{
            Axios.get('https://lcahgoa.in/index.php/app/cancelticket?order_id='+oid).then(p=>{
                this.setState({loading: false})
                console.log(p)
                this.setState({
                    useerid:ui,
                    orederid:oid,
                    category: p.data.seatsDetails[0].category_name,
                    seat_row:p.data.seatsDetails[0].seat_row_nr,
                    seat_no:p.data.seatsDetails[0].seat_nr,
                    //date:p.data.seatsDetails[0].order_date,
                    date:Moment(p.data.seatsDetails[0].order_date).format('ddd, DD MMM YYYY hh:mm A'),
                    seatid:p.data.seatsDetails[0].seat_id,
                })
            })
        })
        
    }
    seatCancel=()=>{
      const { orederid, useerid, seatid } = this.state;
            Axios.get('https://lcahgoa.in/index.php/app/cancelseat?orderid='+orederid+'&user_id='+useerid+'&seatid='+seatid)
            .then(p=>{
                console.log(p)
                if(p.data.success == false){
                    Toast.show(p.data.msg, Toast.LONG);
                }else{
                    Toast.show('Seat Cancel Successfully', Toast.LONG);
                this.setState({
                    listvisible: true
                 })
                }
            })

        
    }
    cancelAllSeat=()=>{
        const { orederid, useerid } = this.state;
            Axios.get('https://lcahgoa.in/index.php/app/newcancelorder?orderid='+orederid+'&user_id='+useerid)
            .then(res=>{
                console.log(res)
                if(res.data.msg == 'Your order has been canceled successfully.'){
                    Toast.show('Your order has been canceled successfully.', Toast.LONG);
                    this.props.navigation.navigate('ORDER')
                }
                else{
                    Toast.show('Something went wrong!!', Toast.LONG);
                }
            })
    

    }
    goToHome=()=>{
        this.props.navigation.goBack(null);
        this.props.navigation.navigate('HOME');
    }

    render(){
        const { category, date, seat_row, seat_no, loading } = this.state
        if(loading){
            return (
                <Loading/>
              )
            }
        return(
            <View style={ styles.container }>
            
                { this.state.listvisible?
                    null:
               <View  style={styles.detailview}>
                <Text style={ styles.datetxt }>{ date }</Text>
                <View style = { styles.categorytxt }>
                  <View>
                      <Text style={ styles.txt }>Category: {category}</Text>
                      <Text style={ styles.txt }>Seat No: {seat_row}-{seat_no}</Text>
                   </View>
                   <View>
                       <TouchableOpacity
                       onPress={ this.seatCancel }
                       >
                    <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.btnpreview}>
                     <Text style={styles.btntxt}>Cancel Seat</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                   </View>
                 </View> 
                </View> }
                
               
                
                <View style={ styles.bothbtnview }>
                <TouchableOpacity
                onPress={ this.goToHome }
                >
                <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.bothbtn}>
                     <Text style={styles.btntxt}>Home</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={ this.cancelAllSeat }
                    >
                        <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.bothbtn}>
                     <Text style={styles.btntxt}>Cancel All Seats</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
                <StatusBar hidden={true} />
            </View>
        )
    }
}