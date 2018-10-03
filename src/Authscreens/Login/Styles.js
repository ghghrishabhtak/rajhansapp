import {StyleSheet} from 'react-native';
import  colors  from "../../Config/Colors";
 export default StyleSheet.create({
     container:{
         backgroundColor: colors.white,
         flex: 1,
        
     },
     loginimageview:{
         alignItems: 'center',
         marginTop: 20
     },
     loginimg:{
         height: 170,
         width: 170
     },
     usernames:{
         marginTop: 70,
        borderBottomWidth: 1,
        marginLeft: 30,
        marginRight: 30,
        height: 35   
     },
     passwords:{
        marginTop: 20,
        borderBottomWidth: 1,
        marginLeft: 30,
        marginRight: 30,
        height: 35

     },
     btn:{
        marginTop:20,
        backgroundColor: colors.blue,
        padding: 10,
        alignItems: 'center',
        alignSelf: 'center',
        width: 90   
    },
    forgettxt:{
        textAlign: 'center',
        fontSize: 15,
        color: colors.red,
        marginTop: 18
    },
    fotterview:{
        backgroundColor: colors.blue,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 5
    },
    fottertxt:{
        textAlign: 'center',
        color: colors.white,
        fontSize: 11
    },
    cmngimg:{
        height:300,
        width:500
    }
 })