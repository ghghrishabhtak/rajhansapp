import React from 'react';
import {View,Text, Image, StatusBar,AsyncStorage,Alert} from 'react-native';
import styles from './styles';

export default class splash extends React.Component{
    componentWillMount = () =>{
        setTimeout(()=>{
            AsyncStorage.getItem('USERNAME').then(userget=>{
                if( userget === ''||userget === null ){
                    this.props.navigation.navigate('App')
                }
                else{
                    this.props.navigation.navigate('Main')
                }
                
            })
            
        },3000)
    }
    render(){
        return(
            <View style={styles.container}>
                <Image
                source={require('../../Images/applogo.jpg')}
                style = {styles.logoimage}
                ></Image>
                 <StatusBar hidden={true} />

            </View>
        )
    }
}