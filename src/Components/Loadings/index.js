import React from 'react';
import {View,Text,ActivityIndicator,StatusBar} from 'react-native';
import styles from './Styles';

export default class Loading extends React.Component{
    render(){
        return(
            <View style={ styles.container }>
               <View style={ styles.loadingview }>
                  <ActivityIndicator
                  size= {30}
                  ></ActivityIndicator>
                  <Text style={ styles.txt }>Loading...</Text>
               </View>
               <StatusBar hidden={true} />
            </View>
        )
    }
}