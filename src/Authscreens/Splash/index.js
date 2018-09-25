import React from 'react';
import {View,Text, Image, StatusBar} from 'react-native';
import styles from './styles';

export default class splash extends React.Component{
    componentWillMount = () =>{
        setTimeout(()=>{
            this.props.navigation.navigate('App')
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