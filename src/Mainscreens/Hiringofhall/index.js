import React from "react";
import {View,TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Hiring extends React.Component{

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Hiring',
        drawerLabel: 'Hiring',
        headerTintColor: '#056839',
        headerStyle: {
          backgroundColor: '#8DC63F',
        },
        headerLeft: (
          <TouchableOpacity onPress={navigation.toggleDrawer}>
            <Icon name="md-menu"
              style={{ marginLeft: 10 }} size={30} color="#056839" />
          </TouchableOpacity>
        ),
      })
    render(){
        return(
            <View style = {styles.container}>
               <Text>Hello Hiring</Text>
            </View>
        )
    }
}