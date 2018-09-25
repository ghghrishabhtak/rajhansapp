import React from 'react';
import { AsyncStorage, View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class MyDrawer extends React.Component {

    renderDrawerItem = (route) => {

        const onpress = (route.key === 'Login') ?
            () => AsyncStorage.clear().then(p => this.props.navigation.navigate(route.key))
            : () => this.props.navigation.navigate(route.key)
        return (
            <TouchableOpacity onPress={onpress} style={{ flexDirection: 'row', padding: 8, marginLeft: 10, marginRight: 10 }}>
                <Icon name={route.icon} size={30} />
                <Text style={{ padding: 8, marginLeft: 10, marginRight: 10, fontSize: 16, }}>{route.label}</Text>
            </TouchableOpacity>
        )
    }

    render() {

        return (
            <ScrollView >
                <View>

                    <View style={styles.bluebox}>
                            <Image source={require('../Images/appname.png')} style={styles.ImageStyle} />
                    </View>
                    {this.renderDrawerItem({ icon: 'md-home', label: 'Login', key: 'Login' })}
                    {this.renderDrawerItem({ icon: 'ios-contacts', label: 'Hiring', key: 'Hiring' })}
                    {this.renderDrawerItem({ icon: 'md-time', label: 'About Us', key: 'About_Us' })}
                    {this.renderDrawerItem({ icon: 'md-calendar', label: 'Faq', key: 'Faq' })}

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
        width: '100%',
        height: 110,
marginTop:25,
        backgroundColor: '#fff'
    },
    ImageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        width: '90%',
        marginLeft: 10,
        height: 70,
    },
    TextStyle: {
        textAlign: 'center',
        color: '#F5FCFF',

        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
    },
})