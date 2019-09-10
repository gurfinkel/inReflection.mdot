import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';
import { Menu } from '../sections/Menu';

export class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <View style={ styles.container }>
                <Header message='Press to Login'></Header>
                <Hero></Hero>
                <Menu navigate={ navigate }></Menu>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
