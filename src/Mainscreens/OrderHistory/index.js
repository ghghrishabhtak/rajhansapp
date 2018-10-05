import React from 'react';
import { View,Text,FlatList,AsyncStorage,TouchableOpacity,StatusBar } from 'react-native';
import styles from './Styles';
import Axios from 'axios';
import colors from '../../Config/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default class History extends React.Component{
    state={ response: [], userid: '' }
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Order History',
        drawerLabel: 'Order History',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        },
        headerLeft: (
          <TouchableOpacity onPress={navigation.toggleDrawer}>
            <Icon name="md-menu"
              style={{ marginLeft: 10 }} size={30} color={colors.white} />
          </TouchableOpacity>
        ),
      })
    componentWillMount=()=>{
        AsyncStorage.getItem('USER_ID').then(uid=>{
            Axios.get('https://lcahgoa.in/index.php/app/personalinfo?user_id='+uid).then(p=>{
           console.log(p.data)
           this.setState({
               response: p.data
           })
       })
        })
      
    }
    onCancalPress=(item)=>{
       AsyncStorage.setItem('ORDER_NO',item.order_id)
       AsyncStorage.setItem('ORDER_DATE',item.order_date)
       this.props.navigation.navigate('CancelorderScreen')
    }
    checkButton =(item)=>{
       if(item.order_status === 'cancel'){
           
       }else{
           return(
          <TouchableOpacity
          onPress={()=> this.onCancalPress(item) }
          >     
        <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.btnpreview}>
        <Text style={styles.btntxt}>CANCEL ORDER</Text>
      </LinearGradient></TouchableOpacity>)
       }
    }
    checkStatus=(item)=>{
      if(item.order_status === 'cancel'){
        return(  
            <Text style={ styles.txtfailure }>Your order is failed</Text>
        )
      } else{
        return(  
            <Text style={ styles.txtsuccessfull }>Your order is successful</Text>
        ) 
      }
    }
    render(){
        const { response } = this.state
        return(
            <View style={ styles.container }>
               <FlatList
               data= { response }
               keyExtractor={item => item}
               renderItem={({ item })=>(
                   <View style={ styles.listview }>
                     <View style={ styles.orderview }>
                         <Text style={ styles.txtorder }>Order No {item.order_id}</Text>
                         <Text style={ styles.txtrate }>{item.order_total_price}</Text>
                     </View>
                     <View style={ styles.dateview }>
                        <View>
                            <Text>{ item.order_date }</Text>
                            <Text>Ticket: {item.order_tickets_nr}</Text>
                        </View>
                        {this.checkButton(item)}
                        {/* <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.btnpreview}>
                     <Text style={styles.btntxt}>CANCEL ORDER</Text>
                   </LinearGradient> */}
                     </View>
                         <Text style={ styles.txtnote }>Note:{item.order_note}</Text>
                         {this.checkStatus(item)}
                         {/* <Text style={ styles.txtsuccessfull }>Your order is successful</Text> */}
                         <View style={ styles.lineview }></View>
                   </View>
               )
            
            }
               ></FlatList>
               <StatusBar hidden={true} />
            </View>
        )
    }
}