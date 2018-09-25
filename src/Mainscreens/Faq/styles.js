import {StyleSheet} from 'react-native';
import  colors  from "../../Config/Colors";
 export default StyleSheet.create({
     container:{
         backgroundColor: '#FFF',
         flex: 1,
         
     },
     dropdownview:{
         marginHorizontal: 20,
         flexDirection: 'row',
         height: 50,
         borderWidth: 1,
         borderRadius: 5,
         borderColor: colors.blue,
         paddingHorizontal: 10,
         paddingVertical: 5,
         marginTop: 20
     },
     txt:{
         color:colors.blue
     },
     txtcontent:{
        color:colors.black
    },
     txtview:{
         marginHorizontal: 20,
         marginTop: 10
     },
     line:{
         height: 1,
         backgroundColor: 'lightgrey',
         marginTop: 10
     }
 })