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
                    <TouchableOpacity style={ styles.leftButtonStyles } onPress={ () => { navigate('WardrobeRT', { sex: 1, }); } }>
                        <Text style={ styles.buttonText }>Wardrobe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.rightButtonStyles }onPress={ () => { navigate('AppearanceRT', { sex: 0, }); } }>
                        <Text style={ styles.buttonText }>Looks</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        flex: 3,
        flexDirection: 'row',
    },

    leftButtonStyles: {
        borderRightColor: '#ffffff',
        borderRightWidth: 2,
        backgroundColor: '#35605a',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    rightButtonStyles: {
        borderLeftColor: '#ffffff',
        borderLeftWidth: 2,
        backgroundColor: '#35605a',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        color: '#ffffff',
        fontSize: 36,
    },
});
