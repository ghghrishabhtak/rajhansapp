import React from 'react';
import { AsyncStorage, View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, Modal, TouchableHighlight, Alert } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from '../Config/Colors';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';

export default class MyDrawer extends React.Component {
    state= {
         route: [],
        modalVisible: false,
          }
    componentWillMount() {

        AsyncStorage.getItem('USERNAME')
            .then(usertype => {
                console.log(usertype)
                if( usertype === ''||usertype === null ){
                    this.setState({
                        route: [
                            { icon: 'archway', label: 'Hiring of Hall', key: 'Hiring' },
                            { icon: 'users-cog', label: 'About us', key: 'About_Us' },
                            { icon: 'question', label: 'FAQ', key: 'Faq' },
                            { icon: 'sign-in-alt', label: 'Login', key: 'Login' },
                            
                        ]
                    })
                } else {
                    this.setState({
                        route: [
                            { icon: 'home', label: 'Home', key: 'Home' },
                            { icon: 'user', label: 'Personal Info', key: 'Personal' },
                            { icon: 'history', label: 'Order History', key: 'OrderHistory' },
                            { icon: 'archway', label: 'Hiring of Hall', key: 'Hiring' },
                            { icon: 'film', label: 'Movie Suggestion', key: 'Suggestion' },
                            { icon: 'comment', label: 'Feedback', key: 'Feedback' },
                            { icon: 'users-cog', label: 'About us', key: 'About_Us' },
                            { icon: 'question', label: 'FAQ', key: 'Faq' },
                            { icon: 'power-off', key: 'Login',label: 'Logout'  },
                        ]
                    })
                }

            })
    }

   

    renderDrawerItem = (route) => {

        const onpress = (route.key === 'Login')
             ? () =>  AsyncStorage.clear().then(p => this.props.navigation.navigate(route.key))
             : () =>  this.props.navigation.navigate(route.key); 
        return (
            <TouchableOpacity onPress={onpress} style={{ flexDirection: 'row', padding: 8, marginLeft: 10, marginRight: 10 }}>
                <Icon name={route.icon} size={25}  />
                <Text style={{ padding: 6, marginLeft: 10, marginRight: 10, fontSize: 16, color: colors.blue }}>{route.label}</Text>
            </TouchableOpacity>
        )
    }
    //   getLogout = () =>{
    //     AsyncStorage.clear().then(p => this.props.navigation.navigate('Login'))
    //   }
    //   getNoLogout = () =>{
    //     this.popupDialog.dismiss()
    //   }

    render() {
        return (
            <ScrollView>
                <View style = {
                    styles.menustyle
                }>
                <View style={styles.bluebox}>
                            <Image source={require('../Images/appname.png')} style={styles.ImageStyle} />
                    </View>
                    {this.state.route.map(route => <View key={route.key}>
                        {this.renderDrawerItem(route)}</View>)}
                    
                </View>
                {/* <PopupDialog
               width= {270}
               height = { 150 } 
               haveOverlay= { true }
               containerStyle={{ justifyContent: 'center' }}
                 dialogTitle={<DialogTitle title="Logout" />}
                 ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
                    <View
                    style={{ flex: 1,  }}
                    >
                    <Text style={{ fontSize: 18, alignSelf: 'center' }}>Do you want to Logout?</Text>
                    <View
                    style={{ marginTop: 40, flexDirection: 'row', alignSelf: 'flex-end'  }}
                    >
                    <TouchableOpacity
                    onPress={this.getNoLogout}
                    ><Text style={{ color: colors.black, }}>No</Text></TouchableOpacity>
                    <TouchableOpacity 
                    onPress= {this.getLogout}
                    >
                    <Text style={{ color: colors.black, marginLeft: 20, marginRight: 20 }}>Yes</Text></TouchableOpacity>
                    </View>
                    </View>
                    </PopupDialog> */}
            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        //  backgroundColor: '#fff',

    },
    bluebox: {
        
        height: 110,
        backgroundColor: '#fff',
       
    },
    ImageStyle: {
        width: 262,
        height: 90,
        alignSelf: 'center',
        marginTop: 20
    },
    TextStyle: {
        textAlign: 'center',
        color: '#F5FCFF',

        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
    },
    menustyle:{
        marginTop: 10
    }
})