import React from 'react';
import { View,Text,FlatList,AsyncStorage,TouchableOpacity,StatusBar,ActivityIndicator } from 'react-native';
import styles from './Styles';
import Axios from 'axios';
import colors from '../../Config/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Loading from '../../Components/Loadings';

export default class History extends React.Component{
    state={ 
        response: [], 
        userid: '',
        loading: false
     }
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
        this.setState({loading: true})
        AsyncStorage.getItem('USER_ID').then(uid=>{
            Axios.get('https://lcahgoa.in/index.php/app/personalinfo?user_id='+uid).then(p=>{
                this.setState({loading: false})
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
       this.props.navigation.navigate('CANCELORDER')
    }
    checkButton =(item)=>{
       if(item.order_status === 'cancel'){
           
       }else{
           return(
          <TouchableOpacity
          onPress={()=> this.onCancalPress(item) }
          >     
        <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.btnpreview}>
        <Text style={styles.btntxt}>Cancel Order</Text>
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
        const { response,loading } = this.state
        if(loading){
            return (
                <Loading/>
              )
            }
        return(
            <View style={ styles.container }>
            <View style={{ marginTop: 5 }}>
               <FlatList
               data= { response }
               keyExtractor={item => item.order_id}
               renderItem={({ item })=>(
                   <View style={ styles.listview }>
                     <View style={ styles.orderview }>
                         <Text style={ styles.txtorder }>Order No {item.order_id}</Text>
                         <Text style={ styles.txtrate }>₹ {item.order_total_price}</Text>
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
               </View>
               <StatusBar hidden={true} />
            </View>
        )
    }
}