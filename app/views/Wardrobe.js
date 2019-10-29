import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { inject, observer } from 'mobx-react';

import { GarmentList } from './GarmentList';
import { HeaderIcon } from '../sections/HeaderIcon';

@inject('store') @observer
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
            this.props.store.garments && this.props.store.garments.length ?
                <GarmentList items={ this.props.store.garments } /> : <View />
        );
    }
}

const styles = StyleSheet.create({
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
