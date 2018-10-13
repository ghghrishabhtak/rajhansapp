import { createDrawerNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import SplashScreen from './Authscreens/Splash';
import LoginScreen from './Authscreens/Login';
import AboutUsScreen from './Mainscreens/Aboutus';
import FaqScreen from './Mainscreens/Faq';
import HiringScreen from './Mainscreens/Hiringofhall'; 
import Drawer from './Drawer/Drawerscreen';
import ForgetScreen from './Mainscreens/Forgetpassword';
import FeedbackScreen from './Mainscreens/Feedback';
import SuggestionScreen from './Mainscreens/Suggestion';
import HomeScreen from './Mainscreens/Home';
import PersonalScreen from './Mainscreens/Personal_info';
import PreviewScreen from './Mainscreens/Preview';
import BookScreen from './Mainscreens/Book_ticket';
import TrailerScreen from './Mainscreens/Trailer';
import Mapscreen from './Mainscreens/Map';
import OrderHistoryScreen from './Mainscreens/OrderHistory';
import CancelorderScreen from './Mainscreens/Cancelorder';
import OrderPageScreen from './Mainscreens/OrderPage';
import ConfirmBookingScreen from './Mainscreens/ConfirmBooking';


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

const FeedbackStack = createStackNavigator({
    FEEDBACK: {
        screen: FeedbackScreen,

    },
})

const SuggestionStack = createStackNavigator({
    SUGGESTION: {
        screen: SuggestionScreen,

    },
})

const HomeStack = createStackNavigator({
    HOME: {
        screen: HomeScreen,

    },
    Order: {
        screen: OrderPageScreen,

    },
    confirmbook: {
        screen: ConfirmBookingScreen,

    },
  
},{
    initialRouteName: 'HOME'
})


const PersonalStack = createStackNavigator({
    PERSONAL: {
        screen: PersonalScreen,

    },
})
const PreviewStack = createStackNavigator({
    PREVIEW: {
        screen: PreviewScreen,

    },
    TrailerScreen:{
        screen: TrailerScreen
    },
})

const BookStack = createStackNavigator({
    BOOK: {
        screen: BookScreen,
    },

    
    MapScreen:{
        screen: Mapscreen
    },
})
const OrderStack = createStackNavigator({
    ORDER: {
        screen: OrderHistoryScreen,
    },
    CancelorderScreen:{
        screen: CancelorderScreen
    }
})
const AppStack = createDrawerNavigator(
    {
        Login: LoginStack,
        About_Us:AboutusStack,
        Hiring :HiringStack,
        Faq:FaqStack,
        Feedback: FeedbackStack,
        Suggestion: SuggestionStack
    },
    {
        initialRouteName: 'Login',
        contentComponent: Drawer,
    }
);
const MainStack = createDrawerNavigator(
    {
        About_Us:AboutusStack,
        Hiring :HiringStack,
        Faq:FaqStack,
        Feedback: FeedbackStack,
        Suggestion: SuggestionStack,
        Home: HomeStack,
        Personal: PersonalStack,
        Preview: PreviewStack,
        Book: BookStack,
        OrderHistory: OrderStack,
        confirmbook: ConfirmBookingScreen
    },
    {
        initialRouteName: 'Home',
        contentComponent: Drawer,
    }
);

export default createSwitchNavigator(
    {
        AuthLoading: SplashScreen,
        App: AppStack,
        Main: MainStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);