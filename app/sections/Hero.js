import React from 'react';
import { StyleSheet, Image } from 'react-native';

export class Hero extends React.Component {
    render() {
        return (
            <Image
                style={ styles.heroImage }
                source={ require('./img/laptop2.jpg') }
            >
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    heroImage: {
        height: undefined,
        width: undefined,
        flex: 8,
    }
});