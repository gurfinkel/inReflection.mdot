import React, { Component } from 'react';
import {SectionList, View} from 'react-native';
import { inject, observer } from 'mobx-react';

import { GarmentCategory } from './GarmentCategory';
import { GarmentItem } from './GarmentItem';

@inject('store') @observer
export class GarmentList extends Component {
    render() {
        const items = this.props.store.garments;
        
        return(
            items && items.length ?
            <SectionList
                renderItem={({ item, index, section }) => <GarmentItem info={ item } />}
                renderSectionHeader={ ({ section: { title } }) => (<GarmentCategory title={ title } />) }
                sections={ items }
                keyExtractor={ (item, index) => item + index }
            /> : <View />
        )
    }
}
