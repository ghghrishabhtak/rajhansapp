import React from 'react';
import { View,Text,TouchableOpacity, AsyncStorage, TextInput, ScrollView,Alert,StatusBar } from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';
import Axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-simple-toast';


export default class Personal extends React.Component{
    state = { email: '',mobile: '',category: '', department: '', oldpassword: '', newpassword: '', confirmpassword: '', mobile_no: '',  }

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
               Toast.show('Please fill required fields', Toast.LONG);
          }
          else if( confirmpassword != newpassword ){
            Toast.show('Password and Confirm password must be same', Toast.LONG);
          }
          else{
            Axios.get('https://lcahgoa.in/index.php/app/changepassword?username='+email+'&oldpassword='+oldpassword+'&newpassword='+newpassword,{
                timeout: 60000
            }).then(p=>{
                console.log(p)
                if(p.data.status === 'True'){
                    Toast.show('Password change successfully', Toast.LONG);
                    
                }else{
                    Toast.show('Something went wrong!', Toast.LONG);
                }
            }).catch(error=>{
                this.setState({loading: false})
                console.log(error)
                if(error == 'Error: Network Error'){
                    Alert.alert('Please check your Internet connection,'
                    + 'Try again...')
                }
                else if(error == 'Error: timeout of 60000ms exceeded'){
                    Alert.alert('Your Internet connection is very poor,' 
                    +'Try again...')
                }
                else{
                    Alert.alert(''+error)
                }
            })
          }
      }
      getMobile=()=>{
          const { mobile_no, email } = this.state;
          if( mobile_no === '' ){
              Toast.show('Please enter mobile fields', Toast.LONG);
          }
          else{
            Axios.get('https://lcahgoa.in/index.php/app/updateuserinfo?username='+email+'&profilemobile='+mobile_no,{
                timeout: 60000
            }).then(p=>{
                console.log(p)
                if(p.data.status === 'True'){
                    Toast.show('Mobile number updated successfully', Toast.LONG);
                }else{
                    Toast.show('Something went wrong', Toast.LONG);
                }
            }).catch(error=>{
                this.setState({loading: false})
                console.log(error)
                if(error == 'Error: Network Error'){
                    Alert.alert('Please check your Internet connection,' 
                    +'Try again...')
                }
                else if(error == 'Error: timeout of 60000ms exceeded'){
                    Alert.alert('Your Internet connection is very poor,'
                    + 'Try again...')
                }
                else{
                    Alert.alert(''+error)
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
                   <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.viewpassword}>
                     <Text style={styles.btntxt}>Change Password</Text>
                     </LinearGradient></TouchableOpacity>
                   <TouchableOpacity
                                     onPress={() => {
                                        this.popupDial.show();
                                      }}
                   >
                   <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.viewpassword}>
                     <Text style={styles.btntxt}>Change Mobile no</Text>
                     </LinearGradient>
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
                       secureTextEntry={true}
                       style= { styles.oldpasstxtinput }
                       onChangeText = {(oldpassword)=>this.setState({oldpassword})}
                       ></TextInput>
                       <TextInput
                       placeholder= 'Enter new Password'
                       secureTextEntry={true}
                       style= { styles.oldpasstxtinput }
                       onChangeText = {(newpassword)=>this.setState({newpassword})}
                       ></TextInput>
                       <TextInput
                       placeholder= 'Enter confirm Password'
                       secureTextEntry={true}
                       style= { styles.oldpasstxtinput }
                       onChangeText = {(confirmpassword)=>this.setState({confirmpassword})}
                       ></TextInput>
                       <TouchableOpacity
                       onPress={ this.getPassword }
                       >
                       <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.passwordsubmitview}>
                     <Text style={styles.submittxt}>Submit</Text>
                     </LinearGradient>
                       </TouchableOpacity>
                       </ScrollView>
                       <StatusBar hidden={true} />
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
                       onChangeText = {(mobile_no)=>this.setState({mobile_no})}
                       ></TextInput>
                       <TouchableOpacity
                       onPress={ this.getMobile }
                       >
                       <LinearGradient colors={[ '#689a92','#2c3dbc']} style={styles.passwordsubmitview}>
                     <Text style={styles.submittxt}>Submit</Text>
                     </LinearGradient>
                       </TouchableOpacity>
                   </View>
               </PopupDialog>
               </View>
        )
    }
}