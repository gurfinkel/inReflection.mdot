import React from 'react';
import { StackNavigator } from 'react-navigation';

import { Adventure } from './app/views/Adventure';
import { Appearance } from './app/views/Appearance';
import { LookDetails } from './app/views/LookDetails';
import { Sex } from './app/views/Sex';
import { Wardrobe } from './app/views/Wardrobe';

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

export default function App() {
    return (
        <MainRoutes></MainRoutes>
    );
}
