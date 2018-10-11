import { StyleSheet } from 'react-native';
import colors from '../../Config/Colors'

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.grey
    },
    headtxt:{
        textAlign: 'center',
        marginTop:15,
        color: colors.Royal_blue,
        fontSize: 18

    },
    showingview:{
        height:'40%',
        marginTop:10,
        backgroundColor: colors.white,
    },
    img:{
     width: 80,
     height: 115
    },
    moviedetail:{
        marginLeft: 10,
    },
    btnpreview:{
       backgroundColor: colors.Royal_blue,
       alignItems: 'center',
        borderRadius: 3,
        marginTop: 3,
        marginRight: 5,
        justifyContent: 'center',
        width: 95,
        height: 32,
    },
    btntxt:{
       color: colors.white
    },
    rowbtn: {
    alignItems:'center'
      },
      txtcmng:{
          textAlign: 'center',
          color: colors.Royal_blue,
          fontSize: 18,
          marginTop: 10,
      },
      cmngview:{
          backgroundColor: colors.Royal_blue,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '42%',
          padding: 2,
          //justifyContent: 'center',
          //alignItems: 'center'
         
      },
      cmngimg:{
        height:240,
        width:300,
    },
    TopBorder: {
        height: 0.3,
        backgroundColor: 'rgb(255,255,255)',
        marginTop: 28,
        },
        rowitems: { 
         flexDirection: 'row',
         marginLeft:5,
         },
        rowtitle: {
        fontFamily: 'SFProText-Regular',
        fontSize: 22,
        alignSelf: 'flex-start',
        },
        rowendtitle: {
        fontFamily: 'SFProText-Medium',
        fontSize: 17,
        alignSelf: 'flex-start',
        },
        priceview: {
        width: 101,
        height: 32,
        backgroundColor: 'rgb(23,206,199)',
        position: 'absolute',
        right: 20,
        top: -7.5,
        alignItems: 'center',
        justifyContent: 'center',
        },
        rowdprice: {
        fontFamily: 'SFProText-Medium',
        color: '#fff',
        fontSize: 16,
        },
        rowfooter: {
        height: 0.3,
        backgroundColor: 'rgb(255,255,255)',
        marginTop: 12,
        },
        items: {
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.blue,
        padding: 1
        },
        ratingview:{
            flexDirection: 'row',
            marginTop: 5,
            marginLeft: 3
        }
})