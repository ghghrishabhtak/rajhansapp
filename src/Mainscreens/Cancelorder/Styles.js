import {StyleSheet} from 'react-native';
import colors from '../../Config/Colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
        padding: 10,

    },
    datetxt:{
        marginTop: 5,
        fontSize: 15,
        color: colors.black
    },
    categorytxt:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnpreview:{
        backgroundColor: colors.Royal_blue,
        alignItems: 'center',
         borderRadius: 3,
         marginRight: 5,
         justifyContent: 'center',
         paddingVertical: 6,
         paddingHorizontal: 10

         
         
     },
     btntxt:{
        color: colors.white,
        fontSize: 12
     },
     bothbtnview:{
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
     },
     bothbtn:{
        backgroundColor: colors.Royal_blue,
        alignItems: 'center',
         borderRadius: 3,
         marginTop: 5,
         justifyContent: 'center',
         paddingVertical: 8,
         paddingHorizontal: 10,
         width: 135,
         marginLeft: 3
     },
     txt:{
         color: colors.black,
         fontSize: 15
     },
     detailview:{
         borderWidth:1,
         borderColor:colors.blue,
         borderRadius:3,
         padding:5
        }
})