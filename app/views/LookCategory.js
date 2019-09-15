import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Card, CardItem, Body, Text } from 'native-base';

export class LookCategory extends Component {
    render() {
        const title = this.props.title;
        const description = this.props.description;
        
        return (
            <Card style={ styles.categoryStyles }>
                <CardItem header bordered>
                    <Text style={ styles.titleStyles }>{ title }</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text style={ styles.descriptionStyles }>{ description }</Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    categoryStyles: {
        marginLeft: 10,
        marginRight: 10,
    },
    
    titleStyles: {
        color: '#808080',
        fontSize: 24,
        fontWeight: 'bold',
    },
    
    descriptionStyles: {
        color: '#808080',
        fontSize: 12,
    },
});
