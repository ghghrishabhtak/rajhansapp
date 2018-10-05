import React from 'react';
import {View,Text,TouchableOpacity,TextInput,AsyncStorage,Alert,FlatList,StatusBar} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Book extends React.Component{
    state={ 
        data: [],
    }

    componentWillMount = async ()=>{
        const moviedate=await AsyncStorage.getItem('MOVIE_DATE')

        this.setState({
            data: {moviedate}
        })
    }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Home',
        drawerLabel: 'Home',
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
      goToMap = () =>{
          this.props.navigation.navigate('Mapscreen')
      }
    render(){
        const { data } = this.state
        return(
            <View style={ styles.container }>
               <FlatList
               data={[{key: 'Saturday'}]}
               keyExtractor={item => item}
               renderItem={({ item })=>(
                   <View style={styles.listview }>
                       <View style={ styles.txtview }>
                       <Text style={ styles.txt }>Date:</Text>
                       <Text style={ styles.txt }>{item.key}</Text>
                       </View>
                       <View>
                           <FlatList
                           horizontal= {true}
                           data={[{time:'06:25'}]}
                           keyExtractor={ item=> item }
                           renderItem={({ item })=>(
                               <View style={ styles.horlistview }>
                               <TouchableOpacity
                               onPress= { this.goToMap }
                               >
                                   <View style={ styles.showview }>
                                       <Text style={ styles.txttime }>{item.time}</Text>
                                   </View>
                                   </TouchableOpacity>
                                   <Text style={ styles.txtpeak }>peak show</Text>
                               </View>
                           )}
                           ></FlatList>
                           <View style={ styles.lineview }></View>
                       </View>
                   </View>
               )
            
            }
               ></FlatList>
               <StatusBar hidden={true} />
            </View>
        )
    }
}