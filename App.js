import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { StyleProvider } from 'native-base';

import getTheme from './native-base-theme/components';
import custom from './native-base-theme/variables/custom';

import AppNavigator from './app/navigator';
import Store from './app/mobx/appStore';
import stores from './app/stores';

export default class App extends Component {
    render() {
        return (
            <Provider store={ Store } stores={ stores }>
                <StyleProvider style={ getTheme(custom) }>
                    <AppNavigator />
                </StyleProvider>
            </Provider>
        );
    }
}
