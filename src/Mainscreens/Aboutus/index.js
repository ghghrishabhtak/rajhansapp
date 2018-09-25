import React from "react";
import {View, Text} from 'react-native';
import styles from './styles';

export default class About extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
               <Text>Hello About</Text>
            </View>
        )
    }
}