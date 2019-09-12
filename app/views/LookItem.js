import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class LookItem extends React.Component {
    render() {
        const { navigation } = this.props;
        const { navigate } = navigation;

        return (
            <Text key={ this.props.info.id } onPress={ () => { navigate('LookDetailsRT', { id: this.props.info.id, }); } } style={styles.textStyles}>{ this.props.info.name }</Text>
        )
    }
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 12,
    },
});
