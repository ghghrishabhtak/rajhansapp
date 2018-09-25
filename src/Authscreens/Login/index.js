import React from 'react';
import {View,Text, Image,TouchableOpacity, StatusBar, TextInput} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import  colors  from "../../Config/Colors";

export default class Login extends React.Component{

   state = {
       username: '',
       password: ''
   }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Login',
        drawerLabel: 'Login',
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
            <View style = {styles.loginimageview}>
                <Image
                source={require('../../Images/applogo.jpg')}
                style = {styles.loginimg}
                ></Image>
                </View>
                <TextInput
                style = {styles.usernames}
                placeholder = 'Username'
                onChangeText = {(username)=>this.setState({username})}
                ></TextInput>

                <TextInput
                style = {styles.passwords}
                secureTextEntry={true}
                placeholder = 'Password'
                onChangeText = {(password)=>this.setState({password})}></TextInput>
                <StatusBar hidden={true} />
                <TouchableOpacity>
                <View style={styles.btn}>
                <Text style={{color:"#FFF", paddingHorizontal: 10, paddingVertical: 4}}>Login</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style = {styles.forgettxt}>Forget Your Password?</Text>
                </TouchableOpacity>
                <View style = {styles.fotterview}>
                    <Text style = {styles.fottertxt}>Copyright © 2014 in Rajhans. All rights reserved.</Text>
                </View>
            </View>
        )
    }
}
