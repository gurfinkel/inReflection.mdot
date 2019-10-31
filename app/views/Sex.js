import React, { Component } from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Button, Icon, Text } from 'native-base';

import utils from '../utils';

@inject('store') @observer
export class Sex extends Component {
    static navigationOptions = {
        header: null
    };
    
    componentDidMount() {
        this.props.navigation.navigate(this.props.store.sex ? 'GarmentListRT' : 'SexRT');
    }
    
    goToAdventure = async (userSex) => {
        if (utils.isBoy(userSex)) {
            // Alert.alert('Coming soon', 'We are working on it.');
            await this.props.store.setSex(userSex);
            this.props.navigation.navigate('GarmentListRT');
        } else {
            await this.props.store.setSex(userSex);
            this.props.navigation.navigate('GarmentListRT');
        }
    };
    
    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.buttonRow }>
                    <Button onPress={ () => this.goToAdventure('1') } style={ styles.buttonStyles } large>
                        <Icon type="FontAwesome5" name='male' style={ styles.buttonIcon } />
                        <Text style={ styles.buttonText }>Boy</Text>
                    </Button>
                    <Button onPress={ () => this.goToAdventure('2') } style={ styles.buttonStyles } large>
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
        backgroundColor: '#808080',
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
