
import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: '#28627040'
    },

    fieldValue: {
        fontSize: scale(16),
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: scale(20),
        marginTop: verticalScale(10),
    },

    leftView: {
        backgroundColor:'#286270',
        width:scale(350),
        paddingVertical: scale(10),
        borderWidth: scale(1),
        borderColor: '#000000',
        borderRadius: scale(10),
        marginTop: verticalScale(30),
        paddingRight: scale(10),
    },
    
});
