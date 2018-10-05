import React from 'react';
import {View,Text,TouchableOpacity,TextInput,AsyncStorage,Alert,WebView,StatusBar} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors'

export default class Trailer extends React.Component{
    static navigationOptions = {
        title: 'Trailer',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        }
      };
    render(){
        return(
            <View style={ styles.container }>
                <WebView
                source={{uri:'https://www.youtube.com/embed/kWGU9POrbHE'}}
                >
                </WebView>
                <StatusBar hidden={true} />
            </View>
        )
    }
}