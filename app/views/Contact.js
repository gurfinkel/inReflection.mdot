import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Header } from '../sections/Header';

export class Contact extends React.Component {
    static navigationOptions = {
        header: null,
    };
    
    constructor(props) {
        super(props);
        
        this.state = {
            msg: 'Enter Message',
            name: 'Enter Name',
            email: 'Enter you Email Address',
        };
    }
    
    clearFields = () => this.setState({ msg: '', name: '', email: '', });
    
    sendMessage = () => {
        Alert.alert(this.state.name, this.state.msg);
        this.props.navigation.goBack();
    };
    
    render() {
        return (
            <View style={ styles.container }>
                <Header message='Press to Login'></Header>
                <Text style={ styles.heading }>Contact us</Text>
                
                <TextInput
                    style={ styles.inputs }
                    onChangeText={ (text) => this.setState({ name: text })}
                    value={ this.state.name }
                ></TextInput>
    
                <TextInput
                    style={ styles.multiInput }
                    onChangeText={ (text) => this.setState({ msg: text })}
                    value={ this.state.msg }
                    multyline={ true }
                    numberOfLines={ 4 }
                ></TextInput>
    
                <TextInput
                    style={ styles.inputs }
                    onChangeText={ (text) => this.setState({ email: text })}
                    value={ this.state.email }
                ></TextInput>
                
                <TouchableHighlight onPress={ this.sendMessage } underlayColor='#31e981'>
                    <Text style={ styles.buttons }>
                        Send Message
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight onPress={ this.clearFields } underlayColor='#31e981'>
                    <Text style={ styles.buttons }>
                        Reset Form
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 8,
        alignItems: 'center',
        paddingBottom: '45%',
    },
    
    heading: {
        fontSize: 16,
        flex: 1,
    },
    
    inputs: {
        padding: 10,
        width: '85%',
        flex: 1,
    },
    
    multiInput: {
        paddingTop: 20,
        width: '90%',
        flex: 2,
    },
    
    buttons: {
        marginTop: 15,
        fontSize: 16,
    },
});
