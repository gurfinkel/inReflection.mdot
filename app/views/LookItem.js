import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class LookItem extends React.Component {
    render() {
        return (
            <Text key={ this.props.info.id } onPress={ () => { this.props.navigate('LookDetailsRT', { id: this.props.info.id, }); } } style={styles.textStyles}>{ this.props.info.name }</Text>
        )
    }
}

const styles = StyleSheet.create({
    textStyles: {
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 5,
        margin: 5,
        padding: 5,
        fontSize: 12,
    },
});
