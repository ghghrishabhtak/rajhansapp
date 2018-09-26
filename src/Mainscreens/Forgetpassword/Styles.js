import { StyleSheet } from 'react-native';
import colors from '../../Config/Colors'

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white
    },
    txt:{
        textAlign:'center',
        color: colors.black,
        fontSize: 25,
        marginTop: 20
    },
    emailtxt:{
        marginTop: 200,
        borderBottomWidth: 1,
        marginLeft: 30,
        marginRight: 30,         
    },
    btn:{
        marginTop:30,
        backgroundColor: colors.blue,
        padding: 15,
        alignItems: 'center',
        alignSelf: 'center'   
    },
    txtbtn:{
        color: colors.white
    }
})