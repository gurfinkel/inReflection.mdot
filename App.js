import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTshirt } from '@fortawesome/free-solid-svg-icons'
import { faPersonBooth } from '@fortawesome/free-solid-svg-icons'

import { Adventure } from './app/views/Adventure';
import { Appearance } from './app/views/Appearance';
import { Header } from './app/sections/Header';
import { LookDetails } from './app/views/LookDetails';
import { Sex } from './app/views/Sex';
import { Wardrobe } from './app/views/Wardrobe';

const AppNavigator = createStackNavigator(
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
    },
    {
        initialRouteName: 'SexRT',
        defaultNavigationOptions: {
            headerRight: <TouchableOpacity><FontAwesomeIcon icon={ faTshirt } /></TouchableOpacity>,
            headerTitle: <Header></Header>,
            headerLeft: <TouchableOpacity><FontAwesomeIcon icon={ faPersonBooth } /></TouchableOpacity>,
        },
    }
);

export default createAppContainer(AppNavigator);
