import React from 'react';
import { View,Text,TouchableOpacity, AsyncStorage, TextInput, ScrollView,Alert } from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';
import Axios from 'axios';

export default class Personal extends React.Component{
    state = { email: '',mobile: '',category: '', department: '', oldpassword: '', newpassword: '', confirmpassword: '', mobile_no: '' }

    componentWillMount =()=>{
       AsyncStorage.getItem('USERNAME').then(mail=>{
           this.setState({
               email: mail
           })
       })
       AsyncStorage.getItem('USER_PHONE').then(phone=>{
        this.setState({
            mobile: phone
        })
    })
    AsyncStorage.getItem('USER_TYPE').then(usertype=>{
        this.setState({
            category: usertype
        })
    })
    
    AsyncStorage.getItem('USER_DEPENDENT').then(userdependent=>{
        this.setState({
            department: userdependent
        })
    })
    }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Personal info',
        drawerLabel: 'Personal info',
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
      getPassword=()=>{
          const { email, oldpassword, newpassword, confirmpassword} = this.state;
          if( oldpassword ===''|| newpassword===''|| confirmpassword===''){
               Alert.alert('Please fill required fields')
          }
          else if( confirmpassword != newpassword ){
            Alert.alert('Password and Confirm password must be same')
          }
          else{
            Axios.get('https://lcahgoa.in/index.php/app/changepassword?username='+email+'&oldpassword='+oldpassword+'&newpassword='+newpassword).then(p=>{
                console.log(p)
                if(p.data.status === 'True'){
                    Alert.alert('Password change successfully')
                    
                }else{
                    Alert.alert('Something went wrong!')
                }
            })
          }
      }
      getMobile=()=>{
          const { mobile, email } = this.state;
          if( mobile === '' ){
              Alert.alert('Please enter mobile fields')
          }
          else{
            Axios.get('https://lcahgoa.in/index.php/app/updateuserinfo?username='+email+'&profilemobile='+mobile).then(p=>{
                console.log(p)
                if(p.data.status === 'True'){
                    Alert.alert('Mobile number updated successfully')
                }else{
                    Alert.alert('Something went wrong')
                }
            })
          }
      }
    render(){
        return(
            <View style={ styles.container }>
            <ScrollView>
               <View style={ styles.emailview }>
                   <Text style={ styles.txtsame }>Email:</Text>
                   <Text style={ styles.txtmail }>{ this.state.email }</Text>
               </View>
               <View style={ styles.emailview }>
                  <Text style={ styles.txtsame } >Mobile:</Text>
                  <Text style={ styles.txtmobile }>{ this.state.mobile }</Text>
               </View>
               <View style={ styles.emailview }>
                  <Text style={ styles.txtsame } >User Category:</Text>
                  <Text style={ styles.txtcategory }>{ this.state.category }</Text>
               </View>
               <View style={ styles.emailview }>
                  <Text style={ styles.txtsame } >No of department:</Text>
                  <Text style={ styles.txtdepartment }>{ this.state.department }</Text>
               </View>
               <View style={ styles.viewbtn }>
               <TouchableOpacity
                  onPress={() => {
                    this.popupDialog.show();
                  }}
               >
                   <View style={ styles.viewpassword }>
                       <Text style={ styles.btntxt }>Change Password</Text>
                   </View></TouchableOpacity>
                   <TouchableOpacity
                                     onPress={() => {
                                        this.popupDial.show();
                                      }}
                   >
                   <View style={ styles.viewpassword }>
                       <Text style={ styles.btntxt }>Change Mobile No</Text>
                   </View>
                   </TouchableOpacity>
               </View>
               </ScrollView>
               <PopupDialog
               width= {270}
               height = { 250 } 
               haveOverlay= { true }
               containerStyle={{ justifyContent: 'flex-start' }}
                 dialogTitle={<DialogTitle title="Change Password" />}
                 ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
                    <View style={{ flex: 1 }}>
                    <ScrollView>
                       <TextInput
                       placeholder= 'Enter old Password'
                       style= { styles.oldpasstxtinput }
                       onChangeText = {(oldpassword)=>this.setState({oldpassword})}
                       ></TextInput>
                       <TextInput
                       placeholder= 'Enter new Password'
                       style= { styles.oldpasstxtinput }
                       onChangeText = {(newpassword)=>this.setState({newpassword})}
                       ></TextInput>
                       <TextInput
                       placeholder= 'Enter confirm Password'
                       style= { styles.oldpasstxtinput }
                       onChangeText = {(confirmpassword)=>this.setState({confirmpassword})}
                       ></TextInput>
                       <TouchableOpacity
                       onPress={ this.getPassword }
                       >
                       <View style = { styles.passwordsubmitview }>
                           <Text style = { styles.submittxt }>Submit</Text>
                       </View>
                       </TouchableOpacity>
                       </ScrollView>
                   </View>
                   
               </PopupDialog>
               <PopupDialog
               containerStyle={{ justifyContent: 'flex-start' }}
               width= {270}
               height = { 150 } 
                 dialogTitle={<DialogTitle title="Change Mobile No" />}
                 ref={(popup) => { this.popupDial = popup; }}
                >
                    <View style= {{ flex: 1 }} >
                    <TextInput
                       placeholder= 'Enter Mobile no'
                       style= { styles.oldpasstxtinput }
                       onChangeText = {(confirmpassword)=>this.setState({confirmpassword})}
                       ></TextInput>
                       <TouchableOpacity
                       onPress={ this.getMobile }
                       >
                       <View style = { styles.passwordsubmitview }>
                           <Text style = { styles.submittxt }>Submit</Text>
                       </View>
                       </TouchableOpacity>
                   </View>
               </PopupDialog>
               </View>
        )
    }
}