import React from 'react';
import { StyleSheet, Alert, AsyncStorage, Text, TouchableOpacity, View } from 'react-native';

import utils from '../utils';

export class Sex extends React.Component {
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
            Alert.alert('We are working on it.');
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
                    <TouchableOpacity onPress={ () => this.goToAdventure('1') } style={ styles.buttonStyles }>
                        <Text style={ styles.buttonText }>Boy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => this.goToAdventure('0') } style={ styles.buttonStyles }>
                        <Text style={ styles.buttonText }>Girl</Text>
                    </TouchableOpacity>
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
        borderColor: '#ffffff',
        backgroundColor: '#2196F3',
        borderWidth: 2,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
    },
    
    buttonText: {
        color: '#ffffff',
        fontSize: 36,
        fontWeight: 'bold',
    },
});
