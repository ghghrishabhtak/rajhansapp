import React from 'react';
import {View,Text,TouchableOpacity,TextInput,AsyncStorage,Alert,FlatList,StatusBar} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Axios from 'axios';
import Loading from '../../Components/Loadings';
import groupBy from 'lodash.groupby';
import Moment from 'moment';

export default class Book extends React.Component{
    state={ 
       date: '',
       time: '',
       type: '',
       datas: []
    }

    componentWillMount = () => {
        const { navigation } = this.props;
        const moviename=navigation.getParam('moviename',null);
        const movies=navigation.getParam('moviearray',null);
        console.log(moviename+' : '+movies[0].event_name)
       
        let events=[];
        let time=[];
        let groupData=groupBy(movies,item=>item.event_name);
      
        console.log(groupData[moviename])
        let moviearr=groupData[moviename];
        let groupDate=groupBy(moviearr,item=>item.event_date);
        let dates = Object.keys(groupDate); 
        for (let i = 0; i < dates.length; i++) {

            for (let j = 0; j < groupDate[dates[i]].length; j++) {

                time.push({
                    event_time:Moment(groupDate[dates[i]][j].event_time,"hh:mm A").format('hh:mm A') ,
                    event_type: groupDate[dates[i]][j].event_type,
                    event_id: groupDate[dates[i]][j].event_id,
                })
               
              }
            events.push({event_date:Moment(dates[i],"YYYY MM DD").format('dddd, DD MMMM YYYY'), time:time});
            //events.push({event_date:dates[i], time:time});
            time=[];
        }
         this.setState({
             datas:events
         })       
    }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: navigation.getParam('moviename',null),
        drawerLabel: navigation.getParam('moviename',null),
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
      goToMap = (eventid) =>{
          this.props.navigation.navigate('MapScreen',{
              eventsid: eventid
          })
      }
      showtype=(type)=>{
          if( type == 'peak' ){
              return(
                  <Text style={ styles.txtpeak }>Peak Show</Text>
              )
          }
          else{
            return(
                <Text style={ styles.txtpeak }>Non Peak Show</Text>
            )
          }
      }
    render(){
        const { datas } = this.state
        return(
            <View style={ styles.container }>
               <FlatList
               data={datas}
               keyExtractor={item => item.event_date}
               renderItem={({ item })=>(
                   <View style={styles.listview }>
                       <Text style={ styles.txt }>Date: {item.event_date}</Text>
                      <FlatList
                           horizontal= {true}
                           data={item.time}
                           keyExtractor={ item=> item.event_id }
                           renderItem={({ item })=>(
                               <View style={ styles.horlistview }>
                               <TouchableOpacity
                               onPress= {()=> this.goToMap(item.event_id) }
                               >
                                   <View style={ styles.showview }>
                                       <Text style={ styles.txttime }>{item.event_time}</Text>
                                   </View>
                                   </TouchableOpacity>
                                   {/* <Text style={ styles.txtpeak }>{item.event_type} Show</Text> */}
                                   { this.showtype(item.event_type) }
                               </View>
                           )}
                           >
                           </FlatList>
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