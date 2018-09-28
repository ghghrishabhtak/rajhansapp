import React from 'react';
import { View,Text } from 'react-native';
import styles from './Styles';

export default class Personal extends React.Component{
    render(){
        return(
            <View style={ styles.container }>
               <View style={ styles.emailview }>
                   <Text>Email</Text>
                   <Text>dfghhfgbhdggh</Text>
               </View>
            </View>
        )
    }
}