import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { GarmentList } from '../views/GarmentList';
import { LookDetails } from '../views/LookDetails';
import { LookList } from '../views/LookList';
import { Settings } from '../views/Settings';
import SexScreen from '../screens/sex.screen';

const Sex = {
    screen: SexScreen,
    navigationOptions: {
        header: null
    },
};

const RouteConfig = createStackNavigator(
    {
        GarmentListRT: {
            screen: GarmentList,
        },
        LookDetailsRT: {
            screen: LookDetails,
        },
        LookListRT: {
            screen: LookList,
        },
        SettingsRT: {
            screen: Settings,
        },
        SexRT: Sex,
    },
    {
        initialRouteName: 'SexRT',
    }
);

const AppNavigator = createAppContainer(RouteConfig);

export default AppNavigator;
