import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({

    bgHome:{
        width: scale(375),
        height: scale(812),

    },

 
    inputFormHeader: {
        marginTop: verticalScale(90),
    },

    inputStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: verticalScale(20),
        color: '#e8f4ff',
        fontWeight: 'bold',
    },

    inputText: {
        textAlign: 'center',
        marginTop: verticalScale(22),
        fontWeight: 'bold',        
        borderWidth: scale(3), 
        borderColor:'#1e2933',
        borderRadius: scale(8),

    },

    submitBtn: {
        marginTop: verticalScale(50),
        alignSelf: 'center',
        width: scale(200),
        height: scale(50),
        borderRadius: scale(15),
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e8f4ff',
        flexDirection:'row'
    },
    submitBtn1: {
        marginTop: verticalScale(50),
        alignSelf: 'center',
        width: scale(200),
        height: scale(50),
        borderRadius: scale(15),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f4ff',
        borderColor: '#1e2933',
        
    },

    submit1:{
        fontSize:20,
        fontWeight: 'bold',
        color:'#1e2933',
        alignSelf:'center',
        textAlign:'center'
    },

    submitText: {
        fontSize: scale(20),
        fontWeight: 'bold',
    },

    headingText: {
        fontSize: scale(30),
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#e8f4ff',
        marginVertical: scale(30),
    },

    search: {
        fontSize: scale(20),
        marginLeft: scale(20),
        marginVertical: scale(10),
        textAlign: 'center',
        fontWeight: 'bold',
    },

    SubmitImg:{
        height:30,
        width:30,
        marginLeft:scale(20)
    }
    
});
