import React, { Component } from 'react';
import { StyleSheet, Alert, Linking, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
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
    
    constructor(props) {
        super(props);
        
        this.cleanUpStorage = this.cleanUpStorage.bind(this);
    }
    
    contactUs = async () => {
        Alert.alert('Coming soon', 'We are working on it.');
        
        await this.sendEmail(
            'stylistadvisedme@gmail.com',
            'There is a problem with your app',
            ''
        );
    };
    
    sendEmail = async (to, subject, body, options = {}) => {
        const { cc, bcc } = options;
        
        let url = `mailto:${to}`;
        
        // Create email link query
        const query = new URLSearchParams({
            subject: subject,
            body: body,
            cc: cc,
            bcc: bcc
        }).toString();
        
        if (query.length) {
            url += `?${query}`;
        }
        
        // check if we can use this link
        const canOpen = await Linking.canOpenURL(url);
        
        if (!canOpen) {
            throw new Error('Provided URL can not be handled');
        }
        
        return Linking.openURL(url);
    };
    
    resetStorage = async () => {
        Alert.alert(
            'Warning',
            'Are you sure?',
            [
                {
                    text: 'OK',
                    onPress: this.cleanUpStorage,
                },
                {
                    text: 'Cancel',
                },
            ],
            { cancelable: false },
        );
    };
    
    cleanUpStorage = async() => {
        await this.props.store.cleanUpStorage();
        this.props.navigation.navigate('SexRT');
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
        padding: 10,
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
