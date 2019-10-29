import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { inject, observer } from 'mobx-react';

import { LookList } from './LookList';
import { HeaderIcon } from '../sections/HeaderIcon';

@inject('store') @observer
export class Appearance extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <TouchableOpacity onPress={ () => navigation.navigate('WardrobeRT') } style={ styles.headerLeftStyles }>
                    <HeaderIcon iconType={ 0 } />
                </TouchableOpacity>
            ),
            headerTitle: (
                <TouchableWithoutFeedback style={ styles.headerCenterStyles }>
                    <HeaderIcon iconType={ 1 } />
                </TouchableWithoutFeedback>
            ),
            headerRight: null,
        }
    };
    
    render() {
        return this.props.store.looks && this.props.store.looks.length ?
            <LookList items={ this.props.store.looks } navigate={ this.props.navigation.push } /> : <View />;
    }
}

const styles = StyleSheet.create({
    headerLeftStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        height: '100%',
        width: '100%',
    },
    
    headerCenterStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
});
