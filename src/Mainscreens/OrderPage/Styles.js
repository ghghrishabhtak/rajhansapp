import { StyleSheet } from 'react-native';
import Colors from '../../Config/Colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.white
    },
    ftxt:{
        textAlign: 'center',
        color: Colors.black,
        marginTop: 5
    },
    stxt:{
       textAlign: 'center',
       color: Colors.black,
       marginTop: 3 
    },
    detailView:{
        marginHorizontal: 5,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.blue,
        padding: 2,
        
    },
    allview:{
        flexDirection: 'row',
        marginTop: 13,
        marginLeft: 2
    },
    headtxt:{
        color: Colors.blue
    },
    movietxt:{
        color: Colors.blue,
        marginLeft: 94
    },
    tktview:{
        color: Colors.blue,
        marginLeft: 43
    },
    seatview:{
        color: Colors.blue,
        marginLeft: 45
    },
    catview:{
        color: Colors.blue,
        marginLeft: 75
    },
    dateview:{
       color: Colors.blue,
       marginLeft: 102 
    },
    lastdetailview:{
        flexDirection: 'row',
        marginTop: 13,
        marginLeft: 2,
        marginBottom: 5
    },
    timeview:{
        color: Colors.blue,
        marginLeft: 102
    },
    vvview:{
        flexDirection: 'row',
        marginTop: 2,
        marginLeft: 2
    },
    txtyourdetail:{
        textAlign: 'center',
        color: Colors.black,
        marginTop: 5
    },
    emailview:{
        color: Colors.blue,
        marginLeft: 99
    },
    mobileview:{
        color: Colors.blue,
        marginLeft: 92
    },
    dependentview:{
        color: Colors.blue,
        marginLeft: 27
    },
    paidview:{
        marginLeft: 13,
        color: Colors.blue
    },
    showView:{
        color: Colors.blue,
        marginLeft: 12
    },
    pview:{
     alignSelf: 'center',
     color: Colors.blue
    },
    btnview:{
        flexDirection: 'row',
       alignSelf: 'center',
        marginTop: 5
    },
    btnpreview:{
        backgroundColor: Colors.Royal_blue,
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
        color: Colors.white,
     },
})