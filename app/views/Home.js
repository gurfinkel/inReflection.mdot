import React from 'react';
import { StyleSheet, AsyncStorage, View } from 'react-native';
import {StackNavigator} from "react-navigation";

import { Adventure } from './Adventure';
import { Appearance } from './Appearance';
import { Header } from '../sections/Header';
import { LookDetails } from './LookDetails';
import { Sex } from './Sex';
import { Wardrobe } from './Wardrobe';

const MainRoutes = StackNavigator(
    {
        AdventureRT: {
            screen: Adventure,
        },
        
        AppearanceRT: {
            screen: Appearance,
        },
        
        LookDetailsRT: {
            screen: LookDetails,
        },
        
        SexRT: {
            screen: Sex,
        },
        
        WardrobeRT: {
            screen: Wardrobe,
        },
    }, {
        initialRouteName: 'SexRT',
    }
);

export class Home extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <Header style={ styles.headerStyles }></Header>
                <MainRoutes style={ styles.contentStyles }></MainRoutes>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    headerStyles: {
        flex: 1,
    },
    
    contentStyles: {
        flex: 9,
    },
});
