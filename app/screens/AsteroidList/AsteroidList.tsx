/**
 * Asteroid List Screen
 */
import React, { Component } from 'react';
import {
    View,
    Image,
    ImageBackground,
    Text,
    SafeAreaView,
    TextInput,
    FlatList,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import COLOR_CONST from '../../../app/theme/ColorConstants';
import styles from './AsteroidListStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';

export interface Props {
    navigation: any;
    id: string;
}

interface S {
    asteroidList: any;
    asteroidData: any
}

interface SS {
    id: any;
}

class AsteroidList extends Component<Props, S, SS> {
    constructor(props: Props) {
        super(props);
        this.state = {
            asteroidData: this.props.route.params.asteroidData,
            asteroidList: null,
        }
    }

    componentDidMount() {
        console.log('@@@ Navigation =========', this.state.asteroidData)
    }

    renderAsteroidCell = () => {
        const { name, nasa_jpl_url, is_potentially_hazardous_asteroid, id } = this.state.asteroidData;
        return (
            <Animatable.View animation='slideInUp' style={styles.asteroidContainer}>
                <TouchableOpacity style={styles.asteroidListCell}>
                    <Text style={styles.fieldValue}>Name: {name}</Text>
                    <Text style={styles.fieldValue}>NASA JPL URL: {nasa_jpl_url}</Text>
                    <Text style={styles.fieldValue}>IS POTENTIAL HAZARDOUS ASTEROID: {String(is_potentially_hazardous_asteroid)}</Text>
                    <Text style={styles.fieldValue}>id: {id}</Text>
                </TouchableOpacity>
            </Animatable.View>
        )
    }

    render() {
        return (
            <ImageBackground source={require('../../assests/images/bginfo.jpeg')} style={styles.bgImg}>
                {this.renderAsteroidCell()}
            </ImageBackground>
        );
    }
};

export default AsteroidList;

