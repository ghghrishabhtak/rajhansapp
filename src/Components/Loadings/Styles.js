import {StyleSheet} from 'react-native';
import colors from '../../Config/Colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.transparent,
        justifyContent: 'center'
    },
    loadingview:{
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 10,
    },
    txt:{
      marginLeft: 10,
      marginTop: 5
    },
   
})