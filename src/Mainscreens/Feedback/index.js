import React from 'react';
import {View,Text,TouchableOpacity,TextInput,AsyncStorage,Alert,ScrollView,StatusBar} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Axios from 'axios';


export default class Feedback extends React.Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Feedback',
        drawerLabel: 'Feedback',
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
    state = { mail: '', Feedback: '' }
    componentWillMount =()=>{
        AsyncStorage.getItem('USERNAME').then(getemail=>{
           this.setState({
               mail: getemail
           })
        }
        )
    }
    getSend=()=>{
        const {mail,Feedback} = this.state;
        if( Feedback === '' ){
          Alert.alert('Please write feedback')
        }else{
       Axios.get('https://lcahgoa.in/index.php/app/feedback?emailid='+mail+'&comments='+Feedback).then(p=>{
           console.log(p)
           if(p.data.status == 'True'){
            Alert.alert('Suggestion sent successfully')
            this.setState({
             Feedback: ''     
         })
           } else{
               Alert.alert('Something went wrong')
           }
       })
        }
    }
    render(){
        return(
          <View style = {styles.container}>
          <ScrollView>
              <Text style = {styles.txt}>We Would Love To Hear From You</Text>
              <TextInput
              style = { styles.useremail }
              value = {this.state.mail}
              editable = {false}
              ></TextInput>
              <TextInput
              style = { styles.feedbackinput }
              placeholder = 'Feedback'
              multiline = { true }
              onChangeText= {text=>this.setState({ Feedback: text })}
              value= { this.state.Feedback }
              numberOfLines = {4}
              ></TextInput>
              <TouchableOpacity
              onPress= {this.getSend}
              >
              <View style={ styles.sendbtn }>
                  <Text style={ styles.btntxt }>SEND</Text>
              </View>
              </TouchableOpacity>
              </ScrollView>
              <StatusBar hidden={true} />
          </View>
        )
    }
}