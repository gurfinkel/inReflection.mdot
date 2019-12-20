import React, { Component } from 'react';
import {
    StyleSheet,
    SectionList,
    View,
} from 'react-native';

import { LookCategory } from '../views/LookCategory';
import { LookItem } from '../views/LookItem';

export default class Looks extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { stores } = this.props;
        const items = stores.looks.items;
        
        return(
            items && items.length ?
                <SectionList
                    renderItem={({ item, index, section }) => <LookItem navigation={ this.props.navigation } info={ item } />}
                    renderSectionHeader={ ({ section: { title, description } }) => <LookCategory title={ title } description={ description } />}
                    sections={ items }
                    keyExtractor={ (item, index) => item + index }
                /> : <View />
        )
    }
}

const styles = StyleSheet.create({
});
