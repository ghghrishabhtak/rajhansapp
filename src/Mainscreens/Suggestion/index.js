import React from 'react';
import {View,Text,TouchableOpacity,TextInput,AsyncStorage,Alert,ScrollView,StatusBar} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Axios from 'axios';
import Toast from 'react-native-simple-toast';

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
            Toast.show('Please write suggestion', Toast.LONG);
        }
        else{
           Axios.get('https://lcahgoa.in/index.php/app/moviesuggestion?email_id='+mail+'&comments='+suggestion).then(p=>{
               console.log(p)
               if(p.data.status == 'True'){
                Toast.show('Suggestion sent successfully', Toast.LONG);
                   this.setState({
                  suggestion: ''     
                })
               }else{
                Toast.show('Something went wrong', Toast.LONG);
               }               
           })
        }
    }
    render(){
        return(
            
          <View style = {styles.container}>
          <ScrollView>
              <Text style = {styles.txt}>We Would Love To Hear Movie Suggestion From You</Text>
              <TextInput
              style = { styles.useremail }
              value = {this.state.mail}
              editable = {false}
              ></TextInput>
              <TextInput
              style = { styles.feedbackinput }
              placeholder = 'Write here Suggestion'
              multiline = { true }
              onChangeText= {text=>this.setState({ suggestion: text })}
              value={this.state.suggestion}
              ></TextInput>
              <TouchableOpacity
              onPress={ this.getSuggestion }
              >
              <View style={ styles.sendbtn }>
                  <Text style={ styles.btntxt }>Send</Text>
              </View>
              </TouchableOpacity>
              </ScrollView>
              <StatusBar hidden={true} />
          </View>
          
        )
    }
}