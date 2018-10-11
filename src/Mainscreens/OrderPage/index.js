import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Styles';

export default class Orderpage extends React.Component{
    render(){
        return(
            <View style={ styles.container }>
               <Text>PLEASE CONFIRM YOUR ORDER DETAILS.</Text>
               <Text>Show Details</Text>
            </View>
        )
    }
}