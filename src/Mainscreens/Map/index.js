import React from 'react';
import {View,Image,Text, Dimensions,WebView,AsyncStorage} from 'react-native';
import styles from './Styles';
import Loading from '../../Components/Loadings';
import Axios from 'axios';

export default class Map extends React.Component{
    state = {
        width: Dimensions.get('window').width,
        event_id: '',
        user_id: '',
        user_type: '',
        ort_id: '',
        name: '',
        date: '',
        time: '',
        vanue: '',
        u_dependent: '',
        webloading: false
    }
    componentWillMount= async()=>{
        const eid=this.props.navigation.getParam('eventsid',null);
        const uid = await AsyncStorage.getItem('USER_ID');
        const utype = await AsyncStorage.getItem('USER_TYPE');
        const oid=this.props.navigation.getParam('ortsid',null);
        const pname = this.props.navigation.getParam('mname',null);
        const pdate = this.props.navigation.getParam('edate',null);
        const ptime =this.props.navigation.getParam('etime',null);
        const pvanue =this.props.navigation.getParam('oname',null);
        const udependent = await AsyncStorage.getItem('USER_DEPENDENT');
        console.log('id'+eid)

        this.setState({
            event_id: eid,
            user_id: uid,
            user_type: utype,
            ort_id: oid,
            name: pname,
            date: pdate,
            time: ptime,
            vanue: pvanue,
            u_dependent: udependent
        })

    }
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('mname'),
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        }
      });
    

      onMessage(data) {
          console.log(data);
          const { event_id,ort_id,name,date,time,vanue,user_type,u_dependent } = this.state;
          console.log('https://lcahgoa.in/index.php/app/addtocart/?csrf_test_name=' + "9503452c1433fcd9d7cb0f3f98bdac76" + "&event_id=" + event_id + "&catname=" + data.catname + "&catid=" + data.catid + "&ort_id=" + ort_id +
          "&catprice=" + data.catprice + "&event=" + name + "&time=" + time + "&date=" + date +
          "&vanue=" + vanue + "&booked_tickets_of_show=" + data.prevBookedShowTickets + "&booked_tickets_of_movie=" + data.prevBookedMovieTickets + "&event_type=" + data.event_type +
          "&user_type=" + user_type + "&user_dependent=" + u_dependent + "&paidseats=" + "0" + "&admiralId=" + data.admiralId + "&currentUser="
          + data.currentUserId + "&seat_id" + data.place + "&myself=" + data.myself + "&spouse=" + data.spouse + "&childrens=" +
          data.childrens + "&parents=" + data.parents + "&brothers=" + data.brothers +
          "&sisters=" + data.sisters + "&guests=" + data.guestMembers)
          
        Axios.get('https://lcahgoa.in/index.php/app/addtocart/?csrf_test_name=' + "9503452c1433fcd9d7cb0f3f98bdac76" + "&event_id=" + event_id + "&catname=" + data.catname + "&catid=" + data.catid + "&ort_id=" + ort_id +
        "&catprice=" + data.catprice + "&event=" + name + "&time=" + time + "&date=" + date +
        "&vanue=" + vanue + "&booked_tickets_of_show=" + data.prevBookedShowTickets + "&booked_tickets_of_movie=" + data.prevBookedMovieTickets + "&event_type=" + data.event_type +
        "&user_type=" + user_type + "&user_dependent=" + u_dependent + "&paidseats=" + "0" + "&admiralId=" + data.admiralId + "&currentUser="
        + data.currentUserId + "&seat_id" + data.place + "&myself=" + data.myself + "&spouse=" + data.spouse + "&childrens=" +
        data.childrens + "&parents=" + data.parents + "&brothers=" + data.brothers +
        "&sisters=" + data.sisters + "&guests=" + data.guestMembers).then(p=>{
            console.log(p);
            if(p.data.orderdetail.status === 'True'){
                this.props.navigation.navigate('Order',{
                    order_id: p.data.orderdetail.order_id,
                    order_array: p.data.current_order_info,
                    showcount: data 
                })
            }
        })
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
                 source={{uri:'https://lcahgoa.in/index.php/app/seatmap1?eventid='+event_id+'&user_id='+user_id+'&user_type='+user_type+'&width='+width}}
                 startInLoadingState={true}
                 javaScriptEnabled={true}
                 onMessage={(event)=> this.onMessage(JSON.parse(event.nativeEvent.data))}
                 ></WebView>
             </View>
         )
     }
}