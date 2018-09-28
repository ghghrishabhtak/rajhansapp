import React from 'react';
import {View,Text,TouchableOpacity,TextInput,AsyncStorage,FlatList,Image} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';

export default class Home extends React.Component{

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
    state={ 
        data: [
       { 
           pictureimage: require('../../Images/sonakshiakira.jpg'),
         picturename: 'Akira',
         picturerating: '4',
         picture_genre: 'comedy,drama'
    },
    ]
 }
    render(){
        const { data }= this.state;
        return(
            <View style={ styles.container }>
               <Text style = { styles.headtxt }>Now Showing...</Text>
               <View style = {styles.showingview}>
               <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.items}>
                      <View style={styles.rowitems}>
                         <Image style={ styles.img }
                         source={ item.pictureimage }
                         ></Image>
                         <View style = { styles.moviedetail }>
                         <Text style={styles.rowtitle}> {item.picturename}</Text>
                        <Text style={styles.rowendtitle}> Ratings:  {item.picturerating}</Text>
                        <Text style={ styles.rowendtitle }>Genre: {item.picture_genre}</Text>
                        <View style = {styles.rowitems}>
                           <TouchableOpacity>
                             <View style={ styles.btnpreview }>
                               <Text style={styles.btntxt}>PREVIEW</Text>
                             </View>
                             </TouchableOpacity>
                             <TouchableOpacity>
                             <View style={ styles.btnpreview }>
                               <Text style={styles.btntxt}>BOOK</Text>
                             </View>
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
               </View>
            </View>
        )
    }
}
