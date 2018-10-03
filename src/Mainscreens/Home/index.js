import React from 'react';
import {View,Text,TouchableOpacity,TextInput,AsyncStorage,FlatList,Image,ActivityIndicator,StatusBar} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Axios from 'axios';

export default class Home extends React.Component{
  state = { 
    poster:'',
  name:[], 
  rating:'', 
  genre:'',
  response: [],
  coming_response: '',
  loading: false
}
  
  componentWillMount=()=>{
    this.setState({loading: true})
     Axios.get('https://lcahgoa.in/index.php/app/event/').then(p=>{
      this.setState({loading: false})
        console.log(p.data.comingsoon)
        this.setState({
          response: p.data.allevents,
          coming_response: p.data.comingsoon[0].url,
        })

     })
  }
  onPreviewGo =(movie_name,movie_poster,movie_rating,movie_genre,movie_starcast,movie_description)=>{
    console.log(movie_name)
    AsyncStorage.setItem('MOVIE_NAME',movie_name)
    AsyncStorage.setItem('MOVIE_POSTER',movie_poster)
    AsyncStorage.setItem('MOVIE_RATING',movie_rating)
    AsyncStorage.setItem('MOVIE_GENRE',movie_genre)
    AsyncStorage.setItem('MOVIE_STARCAST',movie_starcast)
    AsyncStorage.setItem('MOVIE_DESCRIPTION',movie_description)
      this.props.navigation.navigate('Preview')

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
    render(){
      if (this.state.loading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center',backgroundColor: 'transparent' }}>
            <ActivityIndicator />
            <StatusBar hidden={true} />
          </View>
        )
      }
        const { response,coming_response }= this.state;
        return(
            <View style={ styles.container }>
               <Text style = { styles.headtxt }>Now Showing...</Text>
               <View style = {styles.showingview}>
               <FlatList
                data={response}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <View style={styles.items}>
                      <View style={styles.rowitems}>
                         <Image style={ styles.img }
                         source={{uri: item.POSTER}}
                         ></Image>
                         <View style = { styles.moviedetail }>
                         <Text style={styles.rowtitle}> {item.event_name}</Text>
                          <Text style={styles.rowendtitle}> Ratings:  {item.RATING}</Text>
                        
                        <Text style={ styles.rowendtitle }>Genre: {item.GENRE}</Text>
                        <View style = {styles.rowitems}>
                           <TouchableOpacity
                           onPress= {()=> this.onPreviewGo(item.event_name,item.POSTER,item.RATING,item.GENRE,item.STARCAST,item.DESCRIPTION) }
                           >
                             <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.btnpreview}>
                               <Text style={styles.btntxt}>PREVIEW</Text>
                             </LinearGradient>
                             </TouchableOpacity>
                             <TouchableOpacity>
                             <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.btnpreview}>
                               <Text style={styles.btntxt}>BOOK</Text>
                               </LinearGradient>
                             </TouchableOpacity>
                         </View>
                         </View>

                      </View>
                    </View>
                )}
              />
               </View>
               <Text style={styles.txtcmng}>Coming Soon...</Text>
               <View style={ styles.cmngview }>
                               <Image
                style={ styles.cmngimg }
                source={{ uri:coming_response }}
                ></Image> 
               
               </View>
            </View>
        )
    }
}
