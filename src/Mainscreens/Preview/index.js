import React from 'react';
import { View,Text,TouchableOpacity, AsyncStorage, TextInput, ScrollView, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../Config/Colors';
import LinearGradient from 'react-native-linear-gradient'

export default class Preview extends React.Component{
    state = {
         name: '',
         poster: '',
         rating: '',
         starcast: '',
         genre: '',
         description: '',
         key: ['MOVIE_NAME','MOVIE_POSTER','MOVIE_RATING','MOVIE_GENRE','MOVIE_STARCAST','MOVIE_DESCRIPTION'] 
        }
     componentWillMount= async ()=>{
         
        // const itemposter = this.props.navigation.getParam('poster');
        // const itemname = this.props.navigation.getParam('name');
        // const itemrating = this.props.navigation.getParam('rating');
        // const itemgenre = this.props.navigation.getParam('genre');
        // const itemcast = this.props.navigation.getParam('starcast');
        // const itemdesciption = this.props.navigation.getParam('description');
        // console.log('hello'+itemgenre)
        // this.setState({
        //     name: itemname,
        //     poster: itemposter,
        //     rating: itemrating,
        //     genre: itemgenre,
        //     starcast: itemcast,
        //     description: itemdesciption
        // }) 
         const moviename=await AsyncStorage.getItem('MOVIE_NAME')
         console.log(moviename)
         const movieposter=await AsyncStorage.getItem('MOVIE_POSTER')
         const movierating=await AsyncStorage.getItem('MOVIE_RATING')
         const moviecast=await AsyncStorage.getItem('MOVIE_STARCAST')
         const moviedescription=await AsyncStorage.getItem('MOVIE_DESCRIPTION')
         const moviegenre=await AsyncStorage.getItem('MOVIE_GENRE')
         this.setState({
            name:moviename,
            poster:movieposter,
            rating:movierating,
            starcast:moviecast,
            description:moviedescription,
            genre:moviegenre
         })

     }
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Preview',
        drawerLabel: 'Preview',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue 
        },
        headerLeft: (
          <TouchableOpacity onPress={navigation.toggleDrawer}>
            <Icon name="md-menu"
              style={{ marginLeft: 10 }} size={30} color={colors.white} />
          </TouchableOpacity>
        ),
      })
      onTrailerGo =()=>{
          this.props.navigation.navigate('TrailerScreen')
      }
    render(){
        return(
            
            <View style={ styles.container }>
            <ScrollView>
               <View style = { styles.imgview }>
                   <Image
                   source={{ uri:this.state.poster }}
                   style={ styles.img }
                   ></Image>
               </View>
               <View style={ styles.Ratingview }>
                       <Text style={ styles.txtsame }>Ratings:</Text>
                       <Text style={ styles.txtratings }>{this.state.rating}</Text>
                   </View>
                   <View style={ styles.Ratingview }>
                       <Text style={ styles.txtsame }>Star cast:</Text>
                       <Text style={ styles.txtstar }>{ this.state.starcast }</Text>
                   </View>
                   <View style={ styles.Ratingview }>
                       <Text style={ styles.txtsame }>Genre:</Text>
                       <Text style={ styles.txtgenre }>{ this.state.genre }</Text>
            </View>
            <Text style={ styles.txtintro }>{ this.state.description }</Text>
            </ScrollView>
            
            <View style={ styles.btnview }>
            <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.booktktview}>
                     <Text style={ styles.btntxt }>Book Ticket</Text>
                     
                     </LinearGradient>
                     <TouchableOpacity
                     onPress={ this.onTrailerGo }
                     >
                     <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.booktktview}>
                     <Text style={ styles.btntxt }>Watch Trailer</Text>
                     </LinearGradient></TouchableOpacity>
                     
            </View>
            <StatusBar hidden={true} />
            </View>
            
        )
    }
}