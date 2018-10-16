import React from 'react';
import {View,Text,TouchableOpacity,TextInput,AsyncStorage,FlatList,Image,ActivityIndicator,StatusBar,ScrollView} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Axios from 'axios';
import Loading from '../../Components/Loadings';
import groupBy from 'lodash.groupby';

export default class Home extends React.Component{
  state = { 
    poster:'',
  name:[], 
  rating:'', 
  genre:'',
  response: [],
  dataarray:[],
  coming_response: [],
  loading: false,
  moviename: ''
}
  
  componentWillMount=()=>{
    this.setState({loading: true})
     Axios.get('https://lcahgoa.in/index.php/app/event/').then(p=>{
      this.setState({loading: false})
        //  console.log(groupBy(p.data.allevents,item=>item.event_name))
        //  let groupData=groupBy(p.data.allevents,item=>item.event_name);
      
        let eventname=[];
        let eventarray=[];
        this.setState({dataarray : p.data.allevents});
        for (let i = 0; i < p.data.allevents.length; i++) {

          var found =  eventname.some(function (en) {
                return en ===p.data.allevents[i].event_name;
             });
       

            if (!found) {
              eventarray.push(p.data.allevents[i])
              eventname.push(p.data.allevents[i].event_name)
              } else {
             
             }
         
         }

        this.setState({
          response:eventarray,
          coming_response: p.data.comingsoon,
        })

     })
  }
  onPreviewGo =(movie_name,movie_poster,movie_rating,movie_genre,movie_starcast,movie_description,movie_video)=>{
    console.log(movie_name)
    AsyncStorage.setItem('MOVIE_NAME',movie_name)
    AsyncStorage.setItem('MOVIE_POSTER',movie_poster)
    AsyncStorage.setItem('MOVIE_RATING',movie_rating)
    AsyncStorage.setItem('MOVIE_GENRE',movie_genre)
    AsyncStorage.setItem('MOVIE_STARCAST',movie_starcast)
    AsyncStorage.setItem('MOVIE_DESCRIPTION',movie_description)
    AsyncStorage.setItem('VIDEO',movie_video)
      this.props.navigation.navigate('PREVIEW',{otherParam: movie_name,
                                       moviearray: this.state.dataarray,})

  }
  onBookGo = (movie_name) => {
    this.props.navigation.navigate('BOOK',{
                                     moviename: movie_name,
                                     moviearray: this.state.dataarray,
                                    });
  }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Rajhans',
        drawerLabel: 'Rajhans',
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
      showRating = (itemrating) =>{
        if(itemrating === '*****'){
          return(
            <View style={ styles.ratingview }>
            <Image
            source={require('../../Images/star.png')}
            ></Image>
            <Image
            source={require('../../Images/star.png')}
            ></Image>
            <Image
            source={require('../../Images/star.png')}
            ></Image>
            <Image
            source={require('../../Images/star.png')}
            ></Image>
            <Image
            source={require('../../Images/star.png')}
            ></Image>
            </View>
          )
        }
        else if(itemrating === '****'){
          return(
            <View style={ styles.ratingview }>
            <Image
            source={require('../../Images/star.png')}
            ></Image>
            <Image
            source={require('../../Images/star.png')}
            ></Image>
            <Image
            source={require('../../Images/star.png')}
            ></Image>
            <Image
            source={require('../../Images/star.png')}
            ></Image>
            </View>
          )
        }
        else if(itemrating === '***'){
          return(
            <View style={ styles.ratingview }>
            <Image
            source={require('../../Images/star.png')}
            ></Image>
            <Image
            source={require('../../Images/star.png')}
            ></Image>
            <Image
            source={require('../../Images/star.png')}
            ></Image>
            </View>
          )
        }
        else if(itemrating === '**'){
          return(
            <View style={ styles.ratingview }>
            <Image
            source={require('../../Images/star.png')}
            ></Image>
            <Image
            source={require('../../Images/star.png')}
            ></Image>
            </View>
          )
        }
        else if(itemrating === '*'){
          return(
            <View style={ styles.ratingview }>
            <Image
            source={require('../../Images/star.png')}
            ></Image>
            </View>
          )
        }
      }

      renderMovies =  (item) => {
        const { moviename } = this.state
        if (moviename==item.event_name) { 
        } else {
          return(
            <View style={styles.items}>
            <View style={styles.rowitems}>
               <Image style={ styles.img }
               source={{uri: item.POSTER}}
               ></Image>
               <View style = { styles.moviedetail }>
               <Text style={styles.rowtitle}> {item.event_name}</Text>
               <View style={{ flexDirection: 'row' }}>
                <Text style={styles.rowendtitle}> Ratings:</Text>
                {this.showRating(item.RATING)}
                </View>
              <Text style={ styles.rowendtitle }> Genre: {item.GENRE}</Text>
              <View style = {styles.rowitems}>
                 <TouchableOpacity
                 onPress= {()=> this.onPreviewGo(item.event_name,item.POSTER,item.RATING,item.GENRE,item.STARCAST,item.DESCRIPTION,item.VIDEO) }
                 >
                   <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.btnpreview}>
                     <Text style={styles.btntxt}>Preview</Text>
                   </LinearGradient>
                   </TouchableOpacity>
                   <TouchableOpacity
                   onPress={()=> this.onBookGo(item.event_name) }
                   >
                   <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.btnpreview}>
                     <Text style={styles.btntxt}>Book</Text>
                     </LinearGradient>
                   </TouchableOpacity>
               </View>
               </View>
            </View>
          </View>
          )
        }
      }
      showMov = (res) =>{
         if(res.length == ''|| res.length == null){
           return(
             <View style = {{ justifyContent: 'center', alignItems: 'center', height:'100%' }}>
             <Text style = {{ color: colors.black }}>Right Now No Movies Available</Text>
             </View>
           )
         }
         else{
          return(
            <FlatList
          data={res}
          keyExtractor={item => item.event_id}
          renderItem={({ item }) => (
             this.renderMovies(item)
          )}
        />
          )
         }
      }


    render(){
      const { response,coming_response,loading }= this.state;
      if (loading) {
        return (
          <Loading/>
        )
      }
        
        return(
          <ScrollView contentContainerStyle={{ backgroundColor: colors.grey, height: '100%' }}>
            <View style={ styles.container }>    
               <Text style = { styles.headtxt }>Now Showing...</Text>
               <View style = {styles.showingview}>
               { this.showMov(response) }
               {/* <FlatList
                data={response}
                keyExtractor={item => item.event_id}
                renderItem={({ item }) => (
                   this.renderMovies(item)
                )}
              /> */}
               </View>
               <Text style={styles.txtcmng}>Coming Soon...</Text>
               <View style={ styles.cmngview }>
               <ScrollView>
               <FlatList
                data={coming_response}
                horizontal= {true}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  
                  <Image
                  style={ styles.cmngimg }
                  source={{ uri:item.url }}
                  ></Image> 
                )}
              />
              </ScrollView>           
               </View>
               <StatusBar hidden={true} />
               
            </View>
            </ScrollView>
            
        )
    }
}
