import {StyleSheet} from 'react-native';
import colors from '../../Config/Colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white
    },
    listview:{
        padding: 5
    },
    txtview:{
        flexDirection: 'row',
        margin: 5
    },
    txt:{
      color: colors.blue,
      fontSize: 15,
      margin: 10
    },
    horlistview:{
        margin: 10,
        
    },
    showview:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.blue,
        padding: 8,
        alignItems: 'center'
    },
    txttime:{
        color: colors.black,
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5
    },
    txtpeak:{
        margin: 5,
        alignItems: 'center',
        color: colors.black
    },
    lineview:{
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
        
    }
})