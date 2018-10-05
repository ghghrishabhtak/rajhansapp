import { StyleSheet } from 'react-native';
import colors from '../../Config/Colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 20
    },
    txt:{
        textAlign: 'center',
        color: colors.blue,
        fontSize: 15,
        marginTop: 22
    },
    useremail:{
        marginTop: 70,
       borderBottomWidth: 1,   
    },
    feedbackinput:{
        height: 200,
        borderBottomWidth: 1,
        marginTop: 1,
        padding: 10
    },
    sendbtn:{
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 15,
      backgroundColor: colors.blue,
      paddingVertical: 10,
      paddingHorizontal: 15
    },
    btntxt:{
        color: colors.white
    }
})