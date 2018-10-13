import { StyleSheet } from 'react-native';
import colors from '../../Config/Colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white
    },
    imgview:{
        alignItems: 'center',
        marginTop: 10
    },
    img:{
        height: 240,
        width: 200
    },
    Ratingview:{
        flexDirection: 'row'
    },
    txtsame:{
        marginTop: 10,
        fontSize: 12,
        marginLeft: 10,  
    },
    txtratings:{
        marginTop: 10,
        fontSize: 12,
        marginLeft: 10
    },
    txtstar:{
        marginTop: 10,
        fontSize: 12,
        marginLeft: 2
    },
    txtgenre:{
        marginTop: 10,
        fontSize: 12,
        marginLeft: 2
    },
    txtintro:{
        marginTop: 12,
        fontSize: 17,
        marginLeft: 3
    },
    btnview:{
        flexDirection: 'row',
        marginTop: 50,
        alignSelf: 'center',
        
    },
    booktktview:{
        backgroundColor: colors.Royal_blue,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: 145,
        height: 40,
        marginLeft: 5
    },
    btntxt:{
        color: colors.white
    },
    ratingview:{
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 5
    }
})