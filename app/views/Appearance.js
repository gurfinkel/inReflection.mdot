import React from 'react';
import { StyleSheet, AsyncStorage, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import { LookList } from './LookList';

import { HeaderIcon } from '../sections/HeaderIcon';

export class Appearance extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <TouchableOpacity onPress={ () => navigation.navigate('WardrobeRT') } style={ styles.headerLeftStyles }>
                    <HeaderIcon iconType={ 0 } />
                </TouchableOpacity>
            ),
            headerTitle: (
                <TouchableWithoutFeedback style={ styles.headerCenterStyles }>
                    <HeaderIcon iconType={ 1 } />
                </TouchableWithoutFeedback>
            ),
            headerRight: null,
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            userSex: 0,
            items: [],
        }
    }

    componentDidMount() {
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        await AsyncStorage.getItem('userSex', (err, userSex) => {
            this.setState({ userSex });
        });

        console.log('Appearance view got user sex: ' + this.state.userSex);
    };
    
    render() {
        return <LookList navigate={ this.props.navigation.push }></LookList>;
    }
}

const styles = StyleSheet.create({
    headerLeftStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        height: '100%',
        width: '100%',
    },
    
    headerCenterStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
});
