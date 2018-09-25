import React from 'react';
import {View,Text, Image,TouchableOpacity, StatusBar, TextInput} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Login extends React.Component{

   state = {
       username: '',
       password: ''
   }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Login',
        drawerLabel: 'Login',
        headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#032091',
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
            </View>
        )
    }
}
