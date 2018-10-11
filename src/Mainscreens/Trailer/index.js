import React from 'react';
import {View,Text,TouchableOpacity,TextInput,AsyncStorage,Alert,WebView,StatusBar} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors'

export default class Trailer extends React.Component{
    state={
        url: ''
    }
    componentWillMount=()=>{
        AsyncStorage.getItem('VIDEO').then(urll=>{
            this.setState({
                url: urll
            })
        })
    }
    static navigationOptions = {
        title: 'Trailer',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        }
      };
    

    render(){
        const { url } = this.state
        if(url == ''|| url == null){
            return(
                <View style={ styles.container }>
                    <Text>Trailor is not found</Text>
                    <StatusBar hidden={true} />
                </View>
            )
        }
        return(
            <View style={ styles.container }>
                <WebView
                source={{uri:url}}
                >
                </WebView>
                <StatusBar hidden={true} />
            </View>
        )
    }
}