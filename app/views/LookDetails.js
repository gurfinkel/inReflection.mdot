import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { getLooks } from "../services/dataService";

export class LookDetails extends React.Component {
    render() {
        const { navigation } = this.props;
        const lookId = navigation.getParam('id', 0);
        const look = getLooks().find((item) => lookId === item.id);

        return (
            <View style={ styles.container }>
                <Text style={ styles.textStyles }>{ look.name }</Text>
                <Text style={ styles.textStyles }>{ look.description }</Text>
                <Text style={ styles.textStyles }>{ look.recipe }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    textStyles: {
        fontSize: 12,
    },
});
