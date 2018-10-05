import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import styles from './Styles';
import Axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default class Cancel extends React.Component{
    state = { response: [] }
    componentWillMount=()=>{
      
    }
    render(){
        return(
            <View style={ styles.container }>
                <Text></Text>
            </View>
        )
    }
}