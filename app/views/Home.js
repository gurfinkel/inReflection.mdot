import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Home extends React.Component {
    render() {
        return (
            <View>
                <Text>This will be the Homepage</Text>
                <Text>These other lines are here</Text>
                <Text>So you can see the text in the app</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
