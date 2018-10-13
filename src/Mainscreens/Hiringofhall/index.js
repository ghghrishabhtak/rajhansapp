import React from "react";
import {View,TouchableOpacity, Text, WebView,StatusBar} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import  colors  from "../../Config/Colors";

export default class Hiring extends React.Component{

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Hiring of Hall',
        drawerLabel: 'Hiring of Hall',
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
            <View style = {styles.container}>
               <WebView
        source={{uri: 'https://lcahgoa.in/index.php/app/hiringforhall/'}}
        style={{marginTop: 10}}
        startInLoadingState
      />
               <StatusBar hidden={true} />
            </View>
        )
    }
}