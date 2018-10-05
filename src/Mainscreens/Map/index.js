import React from 'react';
import {View,Image,Text} from 'react-native';
import styles from './Styles';

export default class Map extends React.Component{
    static navigationOptions = {
        title: 'Map',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        }
      };
     render(){
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
             </View>
         )
     }
}