import { StyleSheet } from 'react-native';
import colors from '../../Config/Colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white
    },
    listview:{
        marginTop: 5,
        padding: 3
    },
    orderview:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtorder:{
       fontSize: 15,
       color: colors.black, 
       marginLeft: 5
    },
    txtrate:{
        fontSize: 15,
       color: colors.black,
       marginRight: 5
    },
    dateview:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 5
    },
    btnpreview:{
        backgroundColor: colors.Royal_blue,
        alignItems: 'center',
         borderRadius: 3,
         marginTop: 3,
         marginRight: 5,
         justifyContent: 'center',
         padding: 8
         
     },
     btntxt:{
        color: colors.white,
        fontSize: 8
     },
     txtnote:{
        marginLeft: 5
     },
     txtsuccessfull:{
        textAlign: 'center',
        color: colors.green,
        marginTop: 5 
     },
     lineview:{
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
        marginTop: 6
    },
    txtfailure:{
        textAlign: 'center',
        color: colors.red,
        marginTop: 5
    }
})