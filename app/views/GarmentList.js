import React, { Component } from 'react';
import { SectionList } from 'react-native';

import { getGarmentsChecklist } from '../services/dataService';

import { GarmentCategory } from './GarmentCategory';
import { GarmentItem } from './GarmentItem';

export class GarmentList extends Component {
    render() {
        const sex = this.props.sex;
        const categories = getGarmentsChecklist(sex);

        return(
            <SectionList
                renderItem={({ item, index, section }) => <GarmentItem info={ item } />}
                renderSectionHeader={ ({ section: { title } }) => (
                    <GarmentCategory title={ title } />
                )}
                sections={categories}
                keyExtractor={(item, index) => item + index}
            />
        )
    }
}
