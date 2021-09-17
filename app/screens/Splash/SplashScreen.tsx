/**
 * Splash Screen
 */
import React , { useEffect } from 'react';
import { 
    View,
    Text, 
    Image,
    ImageBackground,
    StyleSheet,
    StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import styles from './SplashScreenStyle';

export interface Props {
    navigation: any;
    id: string;    
  }
  
  interface S {
    country:any;
    countryData:any
  }
  
  interface SS {
    id: any;
  }

const SplashScreen: React.FC<Props> = ({ navigation,route:any }) => {
    useEffect(() => {
        setTimeout( async() => {
           navigation.replace('Home')
        }, 5000);
      }, []);
    

    return (
        <ImageBackground source={require('../../assests/images/splshBg.jpeg')} style={styles.homeImg}>
            <Animatable.View useNativeDriver animation="zoomInDown" duration="1500" style={styles.header}>
                <Text style={styles.headingText}>Nasa Asteroid Project</Text>
            </Animatable.View>
        </ImageBackground>
    );
};

export default SplashScreen;

