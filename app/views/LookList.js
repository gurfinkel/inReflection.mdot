import React, { Component } from 'react';
import { SectionList } from 'react-native';

import { getLooksChecklist } from "../services/dataService";

import { LookCategory } from './LookCategory';
import { LookItem } from './LookItem';

export class LookList extends Component {
    render() {
        const sex = this.props.sex;
        const looks = getLooksChecklist(sex);

        return(
            <SectionList
                renderItem={({ item, index, section }) => <LookItem navigate={ this.props.navigate } info={ item } />}
                renderSectionHeader={ ({ section: { title, description } }) => (
                    <LookCategory title={ title } description={ description } />
                )}
                sections={ looks }
                keyExtractor={ (item, index) => item + index }
            />
        )
    }
}
