import { createDrawerNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import SplashScreen from './Authscreens/Splash';
import LoginScreen from './Authscreens/Login';
import AboutUsScreen from './Mainscreens/Aboutus';
import FaqScreen from './Mainscreens/Faq';
import HiringScreen from './Mainscreens/Hiringofhall'; 
import Drawer from './Drawer/Drawerscreen';
import ForgetScreen from './Mainscreens/Forgetpassword'


const LoginStack = createStackNavigator({
    LoginsScreen: {
        screen: LoginScreen,
    },
        ForgetScreen:{
            screen: ForgetScreen
        },
    
})

const AboutusStack = createStackNavigator({
    ABOUT: {
        screen: AboutUsScreen,
    },
})
const HiringStack = createStackNavigator({
    HIRING: {
        screen: HiringScreen,
    },
})
const FaqStack = createStackNavigator({
    FAQ: {
        screen: FaqScreen,

    },
})


const AppStack = createDrawerNavigator(
    {
        Login: LoginStack,
        About_Us:AboutusStack,
        Hiring :HiringStack,
        Faq:FaqStack,
    },
    {
        initialRouteName: 'Login',
        contentComponent: Drawer,
    }
);
export default createSwitchNavigator(
    {
        AuthLoading: SplashScreen,
        App: AppStack,

    },
    {
        initialRouteName: 'AuthLoading',
    }
);