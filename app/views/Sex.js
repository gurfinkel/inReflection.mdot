import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export class Sex extends React.Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={ styles.container }>
                <View style={ styles.buttonRow }>
                    <TouchableOpacity disabled={true} onPress={ () => { navigate('AdventureRT', { sex: 1, }); } } style={ styles.leftButtonStyles }>
                        <Text style={ styles.buttonText }>Boy</Text>
                        <Text style={ styles.smallText }>We are working on it.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => { navigate('AdventureRT', { sex: 0, }); } } style={ styles.rightButtonStyles }>
                        <Text style={ styles.buttonText }>Girl</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },

    buttonRow: {
        flex: 1,
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
        fontWeight: 'bold',
    },

    smallText: {
        fontFamily: 'Cochin',
    },
});
