import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import { LookList } from './LookList';

import { HeaderIcon } from '../sections/HeaderIcon';

export class Appearance extends React.Component {
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
        return <LookList navigate={ this.props.navigation.navigate }></LookList>;
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
    headerLeftStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        height: '100%',
        width: '100%',
    },
});
