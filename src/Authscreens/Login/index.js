import React from 'react';
import {View,Text, Image,TouchableOpacity, StatusBar, TextInput,AsyncStorage, Alert,ActivityIndicator,ScrollView} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import  colors  from "../../Config/Colors";
import Axios from 'axios';
import Loading from '../../Components/Loadings';
import {userLogin} from '../../Redux/Actions/Auth';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Toast from 'react-native-simple-toast';


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
    //    const { result, logindata } = this.props;
       if(name === ''& password === ''){
        Toast.show('Please enter username and password', Toast.LONG);
       }
       else if(name === ''){
        Toast.show('Please enter username', Toast.LONG);
       }
       else if(password === ''){
        Toast.show('Please enter password', Toast.LONG);
       }
       else{
        //    this.props.userLogin(name,password)
        //    console.log(logindata.data)
        //    if(logindata.data.status == 'True'){
        //                 AsyncStorage.setItem('USER_ID',logindata.data.user.user_id)
        //                 AsyncStorage.setItem('USERNAME',logindata.data.user.username)
        //                 AsyncStorage.setItem('USER_FIRSTNAME',logindata.data.user.user_firstname)
        //                 AsyncStorage.setItem('USER_LASTNAME',logindata.data.user.user_lastname)
        //                 AsyncStorage.setItem('USER_PHONE',logindata.data.user.user_phone)
        //                 AsyncStorage.setItem('USER_TYPE',logindata.data.user.user_type)
        //                 AsyncStorage.setItem('USER_DEPENDENT',logindata.data.user.user_dependent)
        //                 this.props.navigation.navigate('Main');
        //             }else {
        //                 Toast.show('Error, Invalid username/password.', Toast.LONG);
        //             }
        this.setState({loading: true})
        Axios.get('https://lcahgoa.in/index.php/app/userlogin?username='+name+'&password='+password,{
            timeout: 60000
        })
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
        }).catch(error=>{
            this.setState({loading: false})
            console.log(error)
            if(error == 'Error: Network Error'){
                Alert.alert('Please check your internet connection,'
                + 'Try again...')
            }
            else if(error == 'Error: timeout of 60000ms exceeded'){
                Alert.alert('Your Internet connection is very poor,'
                + 'Try again...')
            }
            else{
                Alert.alert(''+error)
            }
        })
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
// Login.propTypes = { 
//     userLogin: propTypes.func.isRequired, 
//     result: propTypes.object.isRequired
//  }
// mapStateToProps=(state)=>{
//     return{
//         result: state,
//         logindata: state.response
//     }
// }
// dispatchStateToProps={userLogin}
// export default connect(mapStateToProps, dispatchStateToProps)(Login)