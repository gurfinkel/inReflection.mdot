import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { GarmentList } from '../views/GarmentList';
import { LookDetails } from '../views/LookDetails';
import { LookList } from '../views/LookList';
import { Sex } from '../views/Sex';

const AppNavigator = createStackNavigator(
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
        SexRT: {
            screen: Sex,
        },
    },
    {
        initialRouteName: 'SexRT',
    }
);

export default createAppContainer(AppNavigator);
