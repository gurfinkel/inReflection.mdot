import React, { Component } from 'react';
import { StyleSheet, Alert, AsyncStorage, View } from 'react-native';
import { Button, Icon, Text } from 'native-base';

import utils from '../utils';

export class Sex extends Component {
    static navigationOptions = {
        header: null
    };
    
    componentDidMount() {
        this._bootstrapAsync();
    }
    
    _bootstrapAsync = async () => {
        const userSex = await AsyncStorage.getItem('userSex');
        this.props.navigation.navigate(userSex ? 'WardrobeRT' : 'SexRT');
    };
    
    goToAdventure = async (userSex) => {
        if (utils.isBoy(userSex)) {
            Alert.alert('Coming soon', 'We are working on it.');
        } else {
            await AsyncStorage.setItem('userSex', userSex, (err, result) => {
                this.props.navigation.navigate('WardrobeRT', { sex: userSex, });
            });
        }
    };
    
    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.buttonRow }>
                    <Button onPress={ () => this.goToAdventure('1') } style={ styles.buttonStyles } primary large>
                        <Icon type="FontAwesome5" name='male' style={ styles.buttonIcon } />
                        <Text style={ styles.buttonText }>Boy</Text>
                    </Button>
                    <Button onPress={ () => this.goToAdventure('0') } style={ styles.buttonStyles } danger large>
                        <Icon type="FontAwesome5" name='female' style={ styles.buttonIcon } />
                        <Text style={ styles.buttonText }>Girl</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    
    buttonRow: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    buttonStyles: {
        marginLeft: 5,
        marginRight: 5,
        paddingBottom: 10,
        paddingTop: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    buttonText: {
        color: '#ffffff',
        fontSize: 36,
        fontWeight: 'bold',
    },
    
    buttonIcon: {
        color: '#ffffff',
        fontSize: 36,
        fontWeight: 'bold',
    },
});
