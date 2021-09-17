/**
 * Asteroid Data List Screen
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './RandomAsteroidListStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface Props {
    navigation: any;
    id: string;
    route: any;
}

interface S {
    asteroidList: any;
    asteroidData: any
}

interface SS {
    id: any;
}

class RandomAsteroidList extends Component<Props, S, SS> {
    constructor(props: any) {
        super(props);
        this.state = {
            asteroidData: this.props.route.params.asteroidList,
            asteroidList: null,
        }
    }

    componentDidMount() {
        console.log('@@@ Navigation =========', this.state.asteroidData)
    }

    onPressSubmitButton = async () => {
        try {
            let response = await fetch(
                `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=O7337gk6G9cQJHH49YtcmYg9nLUfFJhUMD4rYbHM`
            );
            let json = await response.json();
            this.setState({ asteroidList: json.near_earth_objects }, () => {
                if (json.status === 404) {
                    alert(json.message);
                    return;
                }
                this.props.navigation.navigate('AsteroidDataListScreen', { asteroidList: this.state.asteroidData })
            })
            console.log('@@@ Random Asteroid List JSON Success ============', json);
        } catch (error) {
            console.log('@@@ Random Asteroid List JS Error ============', error);
        }
    }

    renderRandomAsteroidCellContainer = (item: any, index: any) => {
        return (
            <Animatable.View animation='jello'>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AsteroidDetailScreen', { asteroidDetail: item })}>
                    <View style={styles.leftView}>
                        <Text style={styles.fieldValue}>Id: {item.id}</Text>
                        <Text style={styles.fieldValue}>Name: {item.name}</Text>
                        <Text style={styles.fieldValue}>Nasa_jpl_url: {item.nasa_jpl_url}</Text>
                        <Text style={styles.fieldValue}>Is_potentially_hazardous_asteroid: {`${item.is_potentially_hazardous_asteroid}`}</Text>
                    </View>
                </TouchableOpacity>
            </Animatable.View>
        )
    }

    renderAsteroidListConatiner = () => {
        return (
            <View style={{ alignItems: 'center' }}>
                <FlatList
                    data={this.state.asteroidData}
                    renderItem={({ item, index }) => this.renderRandomAsteroidCellContainer(item, index)}
                    keyExtractor={(item) => item.id}
                    extraData={this.state}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderAsteroidListConatiner()}
            </View>
        );
    }
};

export default RandomAsteroidList;

