import React from 'react';
import {View,Text, Image,TouchableOpacity, StatusBar, TextInput,AsyncStorage, Alert,ActivityIndicator,ScrollView} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import  colors  from "../../Config/Colors";
import Axios from 'axios';
import Loading from '../../Components/Loadings'

export default class Login extends React.Component{
    
    forgetpasswords=()=>{
        this.props.navigation.navigate('ForgetScreen')
    }
   state = {
       name: '',
       password: '',
       loading: false,
   }
   getLogin=()=>{
       const{ name,password } = this.state;
       if(name === ''& password === ''){
           Alert.alert('Please enter username and password')
       }
       else if(name === ''){
        Alert.alert('Please enter username')
       }
       else if(password === ''){
        Alert.alert('Please enter password')
       }
       else{
        this.setState({loading: true})
        Axios.get('https://lcahgoa.in/index.php/app/userlogin?username='+name+'&password='+password)
        .then(p =>{
            this.setState({loading: false})
            console.log(p)
            if(p.data.status == 'True'){
                AsyncStorage.setItem('USER_ID',p.data.user.user_id)
                AsyncStorage.setItem('USERNAME',p.data.user.username)
                AsyncStorage.setItem('USER_FIRSTNAME',p.data.user.user_firstname)
                AsyncStorage.setItem('USER_LASTNAME',p.data.user.user_lastname)
                AsyncStorage.setItem('USER_PHONE',p.data.user.user_phone)
                AsyncStorage.setItem('USER_TYPE',p.data.user.user_type)
                AsyncStorage.setItem('USER_DEPENDENT',p.data.user.user_dependent)
                this.props.navigation.navigate('Main');
            }else {
                Alert.alert('Error', 'Invalid username/password.')

            }
        }).catch()
    }
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
        if (this.state.loading) {
            return (
                <Loading/>
            )
          }
        return(
            
            <View style = {styles.container}>
            <ScrollView>
            <View style = {styles.loginimageview}>
                <Image
                source={require('../../Images/applogo.jpg')}
                style = {styles.loginimg}
                ></Image>
                </View>
                <TextInput
                style = {styles.usernames}
                placeholder = 'Username'
                onChangeText = {(text)=>this.setState({name:text})}
                value = {this.state.name}
                ></TextInput>
                <TextInput
                style = {styles.passwords}
                secureTextEntry={true}
                placeholder = 'Password'
                onChangeText = {(password)=>this.setState({password})}
                value = {this.state.password}
                ></TextInput>
                <StatusBar hidden={true} />
                <TouchableOpacity onPress = {this.getLogin}>
                <View style={styles.btn}>
                <Text style={{color:"#FFF", paddingHorizontal: 10, paddingVertical: 4}}>Login</Text>
                </View>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress = {this.forgetpasswords}> */}
                <Text style = {styles.forgettxt}>Forget Your Password?</Text>
                {/* </TouchableOpacity> */}
                </ScrollView>
                <View style = {styles.fotterview}>
                    <Text style = {styles.fottertxt}>Copyright © 2018 in Rajhans. All rights reserved.</Text>
                </View>   
            </View>
            
            
        )
    }
}
