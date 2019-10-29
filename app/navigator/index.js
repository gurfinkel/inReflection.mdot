import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Adventure } from '../views/Adventure';
import { Appearance } from '../views/Appearance';
import { LookDetails } from '../views/LookDetails';
import { Sex } from '../views/Sex';
import { Wardrobe } from '../views/Wardrobe';

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
    }
);

export default createAppContainer(AppNavigator);
