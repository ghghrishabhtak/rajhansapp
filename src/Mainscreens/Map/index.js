import React from 'react';
import {View,Image,Text, Dimensions,WebView,AsyncStorage} from 'react-native';
import styles from './Styles';
import Loading from '../../Components/Loadings';

export default class Map extends React.Component{
    state = {
        width: Dimensions.get('window').width,
        event_id: '',
        user_id: '',
        user_type: '',
        webloading: false
    }
    componentWillMount= async()=>{
        const eid=this.props.navigation.getParam('eventsid',null);
        const uid = await AsyncStorage.getItem('USER_ID');
        const utype = await AsyncStorage.getItem('USER_TYPE');
        console.log('id'+eid)

        this.setState({
            event_id: eid,
            user_id: uid,
            user_type: utype
        })

    }
    static navigationOptions = {
        title: 'Map',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        }
      };

      injectjs() {

        let message = "Hello";
    
        let jsCode = 'alert('+message+')';
    
        return jsCode;
      }
    

      onMessage(data) {
        console.log(data);
         }


     render(){
         const { width,event_id,user_id,user_type,webloading } = this.state;
         if (webloading) {
            return (
              <Loading/>
            )
          }
         return(
             <View style={styles.container}>
               <View style={ styles.seatStyle }>
                <Image
                source={require('../../Images/chair_empty.png')}
                style={ styles.seatimgstyle }
                ></Image>
                <Text style={ styles.seattxtstyle }>Vacent</Text>
                <Image
                source={require('../../Images/chair_green.png')}
                style={ styles.seatimgstyle }
                ></Image>
                <Text style={ styles.seattxtstyle } >Selected</Text>
                <Image
                source={require('../../Images/chair_red.png')}
                style={ styles.seatimgstyle }
                ></Image>
                <Text style={ styles.seattxtstyle } >Booked</Text>
                <Image
                source={require('../../Images/chair_blue.png')}
                style={ styles.seatimgstyle }
                ></Image>
                <Text
                style={ styles.seattxtstyle }
                >Unavailable</Text>
               </View>
                 <WebView
                 source={{uri:'https://lcahgoa.in/index.php/app/seatmap?eventid='+event_id+'&user_id='+user_id+'&user_type='+user_type+'&width='+width}}
                 startInLoadingState
                 javaScriptEnabled
                 injectedJavaScript={this.injectjs}
                 onMessage={this.onMessage}
                 ></WebView>
             </View>
         )
     }
}