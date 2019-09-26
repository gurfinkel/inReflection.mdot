import React, { Component } from 'react';
import { SectionList } from 'react-native';

import { GarmentCategory } from './GarmentCategory';
import { GarmentItem } from './GarmentItem';

export class GarmentList extends Component {
    onGarmentCheck(id) {
        console.log('Garment checked: ' + id);
    };
    
    render() {
        return(
            <SectionList
                renderItem={({ item, index, section }) => <GarmentItem info={ item } onItemCheck={ this.onGarmentCheck } />}
                renderSectionHeader={ ({ section: { title } }) => (
                    <GarmentCategory title={ title } />
                )}
                sections={ this.props.items }
                keyExtractor={(item, index) => item + index}
            />
        )
    }
}
