import React from 'react';

import { LookList } from "./LookList";

export class Appearance extends React.Component {
    render() {
        return <LookList navigate={ this.props.navigation.navigate }></LookList>;
    }
}
