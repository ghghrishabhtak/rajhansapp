import React from 'react';
import {View,Text,TouchableOpacity,TextInput,AsyncStorage,Alert} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Axios from 'axios';

export default class Suggestion extends React.Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Movie Suggestion',
        drawerLabel: 'Movie Suggestion',
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
    state = { mail: '', suggestion: '' }
    componentWillMount =()=>{
        AsyncStorage.getItem('USERNAME').then(getemail=>{
           this.setState({
               mail: getemail
           })
        }
        )
    }
    getSuggestion=()=>{
        const{ mail,suggestion } = this.state;
        if(suggestion === ''){
          Alert.alert('Please write suggestion')
        }
        else{
           Axios.get('https://lcahgoa.in/index.php/app/moviesuggestion?email_id='+mail+'&comments='+suggestion).then(p=>{
               console.log(p)
               if(p.data.status == 'True'){
                   Alert.alert('Feedback sent successfully')
                   this.setState({
                  suggestion: ''     
                })
               }else{
                   Alert.alert('Something went wrong')
               }               
           })
        }
    }
    render(){
        return(
          <View style = {styles.container}>
              <Text style = {styles.txt}>We Would Love To Hear Movie Suggestion From You</Text>
              <TextInput
              style = { styles.useremail }
              value = {this.state.mail}
              editable = {false}
              ></TextInput>
              <TextInput
              style = { styles.feedbackinput }
              placeholder = 'suggestion'
              multiline = { true }
              onChangeText= {text=>this.setState({ suggestion: text })}
              value={this.state.suggestion}
              ></TextInput>
              <TouchableOpacity
              onPress={ this.getSuggestion }
              >
              <View style={ styles.sendbtn }>
                  <Text style={ styles.btntxt }>SEND</Text>
              </View>
              </TouchableOpacity>
          </View>
        )
    }
}