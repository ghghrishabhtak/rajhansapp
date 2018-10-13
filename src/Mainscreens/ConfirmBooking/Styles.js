import { StyleSheet } from 'react-native';
import colors from '../../Config/Colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white
    },
    seattxt:{
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.Royal_blue,
        marginTop: 50,
        fontSize: 16
    },
    othertxt:{
        textAlign: 'center',
        color: colors.Royal_blue,
        marginTop: 10,
        marginHorizontal: 10,
        fontSize: 16
    },
    mailtxt:{
        textAlign: 'center',
        color: colors.Royal_blue,
        marginTop: 40,
        marginHorizontal: 10,
        fontSize: 16

        
    },
    btnview:{
        flexDirection: 'row',
       alignSelf: 'center',
        marginTop: 20
    },
    btnpreview:{
        backgroundColor: colors.Royal_blue,
        alignItems: 'center',
         borderRadius: 3,
        //  marginTop: 3,
        //  marginRight: 5,
         justifyContent: 'center',
         width: 120,
         height: 42,
         marginHorizontal: 5,
         
         
     },
     btntxt:{
        color: colors.white,
     },
     lasttxt:{
         textAlign: 'center',
         color: colors.Royal_blue,
         marginTop: 20,
         fontSize: 16
     }
})