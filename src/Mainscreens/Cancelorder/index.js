import React from 'react';
import { View,Text,TouchableOpacity,AsyncStorage, Alert } from 'react-native';
import styles from './Styles';
import Axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Config/Colors';
import SERVER_URL from '../../Config/constant';
import Loading from '../../Components/Loadings';
import Moment from 'moment';
import Colors from '../../Config/Colors';



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
    static navigationOptions = {
        title: 'Cancel Order',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        }
      };
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
                    Alert.alert(p.data.msg)
                }else{
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
                     Alert.alert('Your order has been canceled successfully.')
                     this.props.navigation.navigate('OrderHistory')
                }
                else{
                    Alert.alert('Something went wrong!!')
                }
            })
    

    }
    goToHome=()=>{
        this.props.navigation.navigate('Home')
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
                     <Text style={styles.btntxt}>CANCEL SEAT</Text>
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
                     <Text style={styles.btntxt}>HOME</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={ this.cancelAllSeat }
                    >
                        <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.bothbtn}>
                     <Text style={styles.btntxt}>CANCEL ALL SEATS</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}