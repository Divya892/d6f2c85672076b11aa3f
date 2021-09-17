/**
 * Home Screen
 */
import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StatusBar,
    Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Icon, Text, Item, Input } from 'native-base';
import styles from './AsteroidHomeStyle';
import scale from '../../utils/Scale';
import { Props } from '../AsteroidList/AsteroidList';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface props {
    value: any;
    navigation: any;
    id: string;
}

interface S {
    asteroidData: any
    asteroid: any
    asteroidList: any
}

interface SS {
    id: any;
}

class AsteroidHome extends Component<Props, S, SS>{
    constructor(props: any) {
        super(props);
        this.state = {
            asteroid: '',
            asteroidData: null,
            asteroidList: '',
        }
    }

    onPressSubmitButton = async () => {
        try {
            let response = await fetch(
                `https://api.nasa.gov/neo/rest/v1/neo/${this.state.asteroid}?api_key=O7337gk6G9cQJHH49YtcmYg9nLUfFJhUMD4rYbHM`
            );
            let json = await response.json();
            this.setState({ asteroidData: json }, () => {
                if (json.status === 404) {
                    alert(json.message);
                    return;
                }
                this.props.navigation.navigate('AsteroidListScreen', { asteroidData: this.state.asteroidData })
            })
            console.log('@@@ Asteroid Detail JSON Success Callback ============', json);
        } catch (error) {
            console.log('@@@ Asteroid Detail JSON Error Callback ============', error);
            alert('Invalid Asteroid ID')
        }
    }

    onPressRandomAsteroidButton = async () => {
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
                this.props.navigation.navigate('AsteroidDataListScreen', { asteroidList: this.state.asteroidList })
            })
            console.log('@@@ Random data JSON Success Callback ============', json);
        } catch (error) {
            console.log('@@@ Random data JSON Error Callback ============', error);
        }
    }

    renderTextInputAndButtonContainer = () => {
        return (
            <View style={styles.inputFormHeader}>
                <Animatable.Text animation='jello' style={styles.headingText}>Search Asteroid Details</Animatable.Text>
                <Animatable.View animation='fadeInLeftBig'>
                    {
                        this.state.asteroid.trim().length === 0 ?
                            <Item style={{ width: scale(200), alignSelf: 'center', }}>
                                <Input
                                    style={styles.inputText}
                                    placeholder='Enter Asteroid ID'
                                    keyboardType='numeric'
                                    placeholderTextColor='#e8f4ff'
                                    value={this.state.asteroid}
                                    onChangeText={(value) => this.setState({ asteroid: value })} />
                            </Item> :
                            <Item style={{ width: scale(200), alignSelf: 'center', }}>
                                <Input
                                    style={styles.inputStyle}
                                    placeholder='Enter Asteroid ID'
                                    value={this.state.asteroid}
                                    onChangeText={(value) => this.setState({ asteroid: value })} />
                            </Item>
                    }
                </Animatable.View>
                {
                    this.state.asteroid.trim().length === 0 ?
                        <TouchableOpacity style={styles.submitBtn} disabled>
                            <Image style={styles.SubmitImg} source={require('../../assests/images/Submit.jpeg')} />
                            <Text style={[styles.submit1, { marginRight: scale(60) }]}>Submit</Text>
                        </TouchableOpacity> :
                        <Button large iconLeft style={styles.submitBtn1} onPress={() => this.onPressSubmitButton()}>
                            <Text style={styles.submit1}>Submit</Text>
                        </Button>
                }
                <Animatable.View animation='slideInUp'>
                    <Button bordered success style={[styles.submitBtn1]} onPress={() => this.onPressRandomAsteroidButton()}>
                        <Text style={[styles.submitText, { color: '#1e2933' }]} >Random Asteroid</Text>
                    </Button>
                </Animatable.View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={require('../../assests/images/bghome.jpeg')} style={styles.bgHome}>
                    <KeyboardAwareScrollView>
                        {this.renderTextInputAndButtonContainer()}
                    </KeyboardAwareScrollView>
                </ImageBackground>
            </View>
        );
    }
};

export default AsteroidHome;

