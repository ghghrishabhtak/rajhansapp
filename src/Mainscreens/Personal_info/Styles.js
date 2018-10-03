import { StyleSheet } from 'react-native';
import colors from '../../Config/Colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white
    },
    emailview:{
        flexDirection: 'row',
        
        marginTop: 15
    },
    txtsame:{
        color: colors.black,
        fontSize: 15,
        marginLeft: 28
    },
    txtmail:{
        color: colors.black,
        fontSize: 15,
        marginLeft: 98
    },
    txtmobile:{
        color: colors.black,
        fontSize: 15,
        marginLeft: 88
    },
    txtcategory:{
        color: colors.black,
        fontSize: 15,
        marginLeft: 40
    },
    txtdepartment:{
        color: colors.black,
        fontSize: 15,
        marginLeft: 17
    },
    viewbtn:{
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    viewpassword:{
        backgroundColor: colors.Royal_blue,
        width: 125,
        borderRadius: 3,
        padding: 3,
        justifyContent: 'center',
        padding: 5
    },
    btntxt:{
        color: colors.white
    },
    oldpasstxtinput:{
        borderBottomWidth: 1,
        marginLeft: 30,
        marginRight: 30,
        height: 35,
        marginTop: 10
    },
    passwordsubmitview:{
        backgroundColor: colors.Royal_blue,
        width: 60,
        borderRadius: 3,
        padding: 3,
        marginLeft: 100,
        padding: 5,
        marginTop: 15
    },
    submittxt:{
        color: colors.white
    }

})