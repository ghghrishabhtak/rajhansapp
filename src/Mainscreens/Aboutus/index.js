import React from "react";
import {View, Text, TouchableOpacity,Image,WebView,StatusBar} from 'react-native';
import styles from './styles';
import  colors  from "../../Config/Colors";
import Icon from 'react-native-vector-icons/Ionicons';

export default class About extends React.Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'About Us',
        drawerLabel: 'About Us',
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
        return(
            <View style={styles.container}>
               <View style={styles.viewimg}>
                 <Image source={require('../../Images/bout.jpg')}
                 style = {styles.img}
                 ></Image>
               </View>
               <WebView
        source={{uri: 'https://lcahgoa.in/index.php/app/aboutus'}}
        style={{marginTop: 20}}
        startInLoadingState
      />
               <StatusBar hidden={true} />
            </View>
        )
    }
}