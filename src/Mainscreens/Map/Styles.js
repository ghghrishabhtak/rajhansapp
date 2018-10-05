import { StyleSheet } from 'react-native';
import colors from '../../Config/Colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white
    },
    seatStyle:{
        flexDirection: 'row',
        marginTop: 3,
        justifyContent: 'center'
    },
    seatimgstyle:{
        marginLeft: 3,
        marginRight: 3
    },
    seattxtstyle:{
        marginLeft: 3,
        marginRight: 3
    }
})