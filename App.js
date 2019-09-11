import React from 'react';
import { StackNavigator } from 'react-navigation';

import { Contact } from './app/views/Contact';
import { Home } from './app/views/Home';

const MyRoutes = StackNavigator(
    {
        HomeRT: {
            screen: Home,
        },
        
        ContactRT: {
            screen: Contact,
        },
    }, {
        initialRouteName: 'HomeRT',
    }
);

export default function App() {
    return (
        <MyRoutes></MyRoutes>
    );
}
