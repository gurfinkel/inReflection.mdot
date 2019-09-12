import React from 'react';
import { StyleSheet, SectionList, Text } from 'react-native';

import { getGarmentsChecklist } from '../services/dataService';

import { GarmentItem } from './GarmentItem';

export class GarmentList extends React.Component {
    render() {
        const sex = this.props.sex;
        const categories = getGarmentsChecklist(sex);

        return(
            <SectionList
                renderItem={({ item, index, section }) => <GarmentItem info={ item }></GarmentItem>}
                renderSectionHeader={ ({ section: { title } }) => (
                    <Text style={ styles.categoryStyles }>{ title }</Text>
                )}
                sections={categories}
                keyExtractor={(item, index) => item + index}
            ></SectionList>
        )
    }
}

const styles = StyleSheet.create({
    categoryStyles: {
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 2,
        fontSize: 24,
        fontWeight: 'bold',
    },
});
