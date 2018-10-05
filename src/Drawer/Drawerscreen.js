import React from 'react';
import { AsyncStorage, View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import colors from '../Config/Colors'

export default class MyDrawer extends React.Component {
    state= { route: [] }
    componentWillMount() {

        AsyncStorage.getItem('USERNAME')
            .then(usertype => {
                console.log(usertype)
                if( usertype === ''||usertype === null ){
                    this.setState({
                        route: [
                            { icon: 'md-add', label: 'Hiring of Hall', key: 'Hiring' },
                            { icon: 'md-contacts', label: 'About us', key: 'About_Us' },
                            { icon: 'md-alert', label: 'FAQ', key: 'Faq' },
                            { icon: 'md-log-in', label: 'Login', key: 'Login' },
                            
                        ]
                    })
                } else {
                    this.setState({
                        route: [
                            { icon: 'md-home', label: 'Home', key: 'Home' },
                            { icon: 'md-home', label: 'Personal Info', key: 'Personal' },
                            { icon: 'md-list', label: 'Order History', key: 'OrderHistory' },
                            { icon: 'md-add', label: 'Hiring of Hall', key: 'Hiring' },
                            { icon: 'md-film', label: 'Movie Suggestion', key: 'Suggestion' },
                            { icon: 'ios-paper', label: 'Feedback', key: 'Feedback' },
                            { icon: 'md-contacts', label: 'About us', key: 'About_Us' },
                            { icon: 'md-alert', label: 'FAQ', key: 'Faq' },
                            { label: 'Logout', key: 'Login', icon: 'md-log-out' },
                        ]
                    })
                }

            })
    }


    renderDrawerItem = (route) => {

        const onpress = (route.key === 'Login') ?
            () => AsyncStorage.clear().then(p => this.props.navigation.navigate(route.key))
            : () => this.props.navigation.navigate(route.key)
        return (
            <TouchableOpacity onPress={onpress} style={{ flexDirection: 'row', padding: 8, marginLeft: 10, marginRight: 10 }}>
                <Icon name={route.icon} size={30} />
                <Text style={{ padding: 8, marginLeft: 10, marginRight: 10, fontSize: 16, color: colors.blue }}>{route.label}</Text>
            </TouchableOpacity>
        )
    }
    

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