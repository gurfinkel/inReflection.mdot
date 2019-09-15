import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { isBoy } from '../utils/utils';

export class Adventure extends React.Component {
    render() {
        const { navigation } = this.props;
        const { navigate } = navigation;
        const sex = navigation.getParam('sex', 0);
        const title = isBoy(sex) ? 'Boy' : 'Girl';

        return (
            <View style={ styles.container }>
                <Text style={ styles.titleStyles }>{ title }</Text>
                <View style={ styles.buttonRow }>
                    <TouchableOpacity style={ styles.buttonStyles } onPress={ () => { navigate('WardrobeRT', { sex: 1, }); } }>
                        <Text style={ styles.buttonText }>Wardrobe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.buttonStyles }onPress={ () => { navigate('AppearanceRT', { sex: 0, }); } }>
                        <Text style={ styles.buttonText }>Looks</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        flex: 1,
        padding: 10,
        height: '100%',
        width: '100%',
    },

    titleStyles: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    buttonRow: {
        flex: 9,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    buttonStyles: {
        borderColor: '#ffffff',
        borderWidth: 2,
        backgroundColor: '#2196F3',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
    },

    buttonText: {
        color: '#000000',
        fontSize: 36,
        fontWeight: 'bold',
    },
});
