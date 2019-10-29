import React, { Component } from 'react';
import { SectionList } from 'react-native';

import { LookCategory } from './LookCategory';
import { LookItem } from './LookItem';

export class LookList extends Component {
    render() {
        return(
            <SectionList
                renderItem={({ item, index, section }) => <LookItem navigate={ this.props.navigate } info={ item } />}
                renderSectionHeader={ ({ section: { title, description } }) => (
                    <LookCategory title={ title } description={ description } />
                )}
                sections={ this.props.items }
                keyExtractor={ (item, index) => item + index }
            />
        )
    }
}
