import React from 'react';
import {View, Text,TouchableOpacity,TextInput, StatusBar, Button} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../Config/Colors'

export default class Forget extends React.Component{

    static navigationOptions = {
        title: 'Forget Password',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        }
      };
      

    state = { email: '' }
    render(){
        return(
            <View style={styles.container}>
               <TextInput
               placeholder='Enter your Email'
               onChangeText = {(email)=>this.setState({email})}
               style = {styles.emailtxt}
               ></TextInput>
               <TouchableOpacity>
               <View style={styles.btn}>
                   <Text style={styles.txtbtn}>Submit</Text>
               </View>
               </TouchableOpacity>
               <StatusBar hidden={true} />
            </View>
        )
    }
}