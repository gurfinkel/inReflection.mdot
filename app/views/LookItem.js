import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Body, ListItem, Text } from 'native-base';

export class LookItem extends Component {
    render() {
        return (
            <ListItem
                key={ this.props.info.id }
                onPress={ () => { this.props.navigation.push('LookDetailsRT', { id: this.props.info.id, }); } }
                style={ styles.itemStyles }>
                <Body>
                    <Text>{ this.props.info.name }</Text>
                </Body>
            </ListItem>
        )
    }
}

const styles = StyleSheet.create({
    itemStyles: {
        marginRight: 15,
    },
});
