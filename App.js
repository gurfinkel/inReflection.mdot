import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import Navigator from './app/navigator';
import Store from './app/mobx/appStore';

export default class App extends Component {
    render() {
        return (
            <Provider store={ Store }>
                <Navigator />
            </Provider>
        );
    }
}
