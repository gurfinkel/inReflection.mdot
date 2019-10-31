import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Container } from 'native-base';

import { GarmentList } from './GarmentList';
import { HeaderIcon } from '../sections/HeaderIcon';

export class Wardrobe extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: null,
            headerTitle: (
                <TouchableWithoutFeedback style={ styles.headerCenterStyles }>
                    <HeaderIcon iconType={ 0 } />
                </TouchableWithoutFeedback>
            ),
            headerRight: (
                <TouchableOpacity onPress={ () => navigation.navigate('AppearanceRT') } style={ styles.headerRightStyles }>
                    <HeaderIcon iconType={ 1 } />
                </TouchableOpacity>
            ),
        }
    };
    
    render() {
        return (
            <Container style={ styles.containerStyles }>
                <GarmentList />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    containerStyles: {
        marginLeft: 5,
        marginRight: 5,
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
