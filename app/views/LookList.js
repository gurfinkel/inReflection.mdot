import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

import { getLooksChecklist } from "../services/dataService";

import { LookItem } from "./LookItem";

export class LookList extends React.Component {
    render() {
        const sex = this.props.sex;
        const looks = getLooksChecklist(sex);

        return(
            <SectionList
                renderItem={({ item, index, section }) => <LookItem info={ item }></LookItem>}
                renderSectionHeader={ ({ section: { title, description } }) => (
                    <View style={ styles.categoryStyles }>
                        <Text style={ styles.titleStyles }>{ title }</Text>
                        <Text style={ styles.descriptionStyles }>{ description }</Text>
                    </View>
                )}
                sections={ looks }
                keyExtractor={ (item, index) => item + index }
            ></SectionList>
        )
    }
}

const styles = StyleSheet.create({
    categoryStyles: {
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 2,
    },

    titleStyles: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    descriptionStyles: {
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 2,
        fontSize: 24,
        fontWeight: 'bold',
    },
});
