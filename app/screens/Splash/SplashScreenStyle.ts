import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import * as CONST from '../../theme/StringConstants';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({

    homeImg: {
      width: scale(375),
      height: scale(812),
    },

    headingText: {
        marginTop: verticalScale(200),
        fontSize: scale(30),
        fontWeight: 'bold',
        color: '#ebf5ff',
        textAlign:'center',
        textShadowColor: 'rgba(1, 1, 1, 0.75)',
        textShadowOffset: {width: 25, height: 20},
        textShadowRadius: 10,
    }
});
