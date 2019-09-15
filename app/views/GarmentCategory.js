import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Card, CardItem, Body, Text } from 'native-base';

export class GarmentCategory extends Component {
    render() {
        const title = this.props.title;
        
        return (
            <Card style={ styles.categoryStyles}>
                <CardItem>
                    <Body>
                        <Text style={ styles.titleStyles }>{ title }</Text>
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
    }
});
