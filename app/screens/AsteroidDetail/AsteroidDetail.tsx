/**
 * Asteroid Detail Screen
 */
import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './AsteroidDetailStyle';

export interface Props {
    navigation: any;
    id: string;
    route: any;
}

interface S {
    weatherData: any;
    showData: any
}

interface SS {
    id: any;
}

class AsteroidDetail extends Component<Props, S, SS> {
    constructor(props: Props) {
        super(props);
        this.state = {
            weatherData: null,
            showData: false,
        }
    }

    renderAsteroidDetailContainer = () => {
        console.log('@@@======', this.props.route.params.asteroidDetail)
        const { name, nasa_jpl_url, is_potentially_hazardous_asteroid, id } = this.props.route.params.asteroidDetail;
        return (
            <Animatable.View useNativeDriver animation="slideInUp" delay={300} style={styles.inputFormHeader}>
                <View style={styles.asteroidDetailContainer}>
                    <Text style={styles.fieldValue}>Id: {id}</Text>
                    <Text style={styles.fieldValue}>Name: {name}</Text>
                    <Text style={styles.fieldValue}>Nasa_jpl_url: {nasa_jpl_url}</Text>
                    <Text style={styles.fieldValue}>Is_potentially_hazardous_asteroid: {String(is_potentially_hazardous_asteroid)}</Text>
                </View>
            </Animatable.View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderAsteroidDetailContainer()}
            </View>
        );
    }
};

export default AsteroidDetail;

