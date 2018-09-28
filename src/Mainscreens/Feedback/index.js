import React from 'react';
import {View,Text,TouchableOpacity,TextInput,AsyncStorage} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import Icon from 'react-native-vector-icons/Ionicons';


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
    render(){
        return(
          <View style = {styles.container}>
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
              ></TextInput>
              <TouchableOpacity>
              <View style={ styles.sendbtn }>
                  <Text style={ styles.btntxt }>SEND</Text>
              </View>
              </TouchableOpacity>
          </View>
        )
    }
}