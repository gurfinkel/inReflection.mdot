import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import { GarmentList } from './GarmentList';

import { HeaderIcon } from '../sections/HeaderIcon';

import { getGarmentsChecklist } from '../services/dataService';

export class Wardrobe extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: null,
            headerTitle: (
                <TouchableWithoutFeedback style={ styles.headerCenterStyles }>
                    <HeaderIcon iconType={ 0 } />
                </TouchableWithoutFeedback>
            ),
            headerRight: (
                <TouchableOpacity onPress={ () => navigation.navigate('AppearanceRT') } style={ styles.headerRightStyles }>
                    <HeaderIcon iconType={ 1 } />
                </TouchableOpacity>
            ),
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
        const userSex = await AsyncStorage.getItem('userSex');
        const wardrobe = await AsyncStorage.getItem('wardrobe');
    
        this.setState({ userSex });
    
        if (wardrobe) {
            this.setState({ items: JSON.parse(wardrobe), });
        } else {
            const items = getGarmentsChecklist().map((x) => { x.checked = false; x.data = x.data.map((y) => { y.checked = false; return y; }); return x; });
            
            await AsyncStorage.setItem('wardrobe', JSON.stringify(items), (err, result) => {
                this.setState({ items });
            });
        }
    };

    onGarmentCheck = async (id) => {
        const items = this.state.items;
        let item = null;

        for (const x of items) {
            for (const y of x.data) {
                if (id === y.id) {
                    item = y;
                }
            }
        }

        item.checked = !item.checked;

        await AsyncStorage.setItem('wardrobe', JSON.stringify(items), (err, result) => {
            this.setState({ items });
        });
    };
    
    render() {
        return <GarmentList items={ this.state.items } onItemCheck={ this.onGarmentCheck } />;
    }
}

const styles = StyleSheet.create({
    headerCenterStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    
    headerRightStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        height: '100%',
        width: '100%',
    },
});
