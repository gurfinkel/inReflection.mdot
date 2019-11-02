import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Button, Icon, Text } from "native-base";

import { HeaderIcon } from '../sections/HeaderIcon';

@inject('store') @observer
export class Settings extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: null,
            headerTitle: (
                <TouchableWithoutFeedback style={ styles.headerCenterStyles }>
                    <HeaderIcon iconType={ 2 } />
                </TouchableWithoutFeedback>
            ),
            headerRight: (
                <TouchableOpacity onPress={ () => navigation.navigate('GarmentListRT') } style={ styles.headerRightStyles }>
                    <HeaderIcon iconType={ 0 } />
                </TouchableOpacity>
            ),
        }
    };
    
    contactUs = async () => {
        Alert.alert('Coming soon', 'We are working on it.');
        // await this.props.store.setSex(userSex);
        // this.props.navigation.navigate('GarmentListRT');
    };
    
    resetStorage = async () => {
        Alert.alert('Coming soon', 'We are working on it.');
        // await this.props.store.setSex(userSex);
        // this.props.navigation.navigate('GarmentListRT');
    };
    
    render() {
        return(
            <View style={ styles.containerStyles }>
                <View style={ styles.buttonRow }>
                    <Button onPress={ () => this.resetStorage() } style={ styles.buttonStyles } large>
                        <Icon type="FontAwesome5" name='broom' style={ styles.buttonIcon } />
                        <Text style={ styles.buttonText }>Reset</Text>
                    </Button>
                </View>
                <View style={ styles.buttonRow }>
                    <Button onPress={ () => this.contactUs() } style={ styles.buttonStyles } large>
                        <Icon type="FontAwesome5" name='comment-alt' style={ styles.buttonIcon } />
                        <Text style={ styles.buttonText }>Contact Us</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyles: {
        flex: 1,
        justifyContent: 'center',
    },
    
    buttonRow: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
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
    
    headerCenterStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    
    headerRightStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        height: '100%',
        width: '100%',
    },
});
