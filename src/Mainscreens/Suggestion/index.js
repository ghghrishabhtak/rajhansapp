import React from 'react';
import {View,Text,TouchableOpacity,TextInput,AsyncStorage} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
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