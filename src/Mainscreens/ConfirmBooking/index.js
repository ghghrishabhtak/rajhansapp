import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Config/Colors';

export default class Confirmbooking extends React.Component{
    state = { messages: '' }
    componentWillMount = () =>{
        const msgs = this.props.navigation.getParam('msg')
        this.setState({
            messages: msgs
        })
    }
    static navigationOptions =  {
        title: 'Order Confirmation Page',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        },
      };
    gotoHome=()=>{
        this.props.navigation.navigate('HOME')
    }
    gotoOrder=()=>{
        this.props.navigation.popToTop();
        this.props.navigation.navigate('OrderHistory')
    }
    render(){
        return(
            <View style={ styles.container }>
                 <Text style={ styles.seattxt }>{this.state.messages}</Text>
                 {/* <Text style={ styles.othertxt }>SMS and Email has been sent to you. You can show the SMS/Email of Your Booking Confirmation</Text> */}
                 <Text style={ styles.mailtxt }>You can also get a mail using a button.</Text>
                 <View style={ styles.btnview }>
                 <TouchableOpacity
                 onPress={this.gotoHome}
                 >
               <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.btnpreview}>
                     <Text style={styles.btntxt}>Home</Text>
                     </LinearGradient></TouchableOpacity>
                     <TouchableOpacity
                     onPress={this.gotoOrder}
                     >
                     <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.btnpreview}>
                     <Text style={styles.btntxt}>View Order</Text>
                     </LinearGradient></TouchableOpacity>
                 </View>
                 <Text style={ styles.lasttxt }>Please carry your ID cards. Enjoy Rajhans experience!</Text>
                 <StatusBar hidden={true} />
            </View>
        )
    }
}