import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    bgImg: {
        width: scale(375),
        height: scale(812)
    },

    asteroidListCell: {
        alignItems: 'center',
        backgroundColor: '#6a8ead',
        paddingVertical: scale(10),
        borderWidth: scale(1),
        borderColor: '#000000',
        borderRadius: scale(10),
        marginTop: verticalScale(250),
        paddingRight: scale(10),
        alignSelf:'center',
        width: scale(350),
    },

    fieldValue: {
        fontSize: scale(15),
        color: '#ffffff',
        fontWeight: 'bold',
        marginLeft: scale(20),
        marginTop: verticalScale(10),
        marginBottom: verticalScale(10),
    },

    
});
