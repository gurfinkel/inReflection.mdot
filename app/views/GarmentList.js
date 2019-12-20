import React, { Component } from 'react';
import { StyleSheet, SectionList, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { inject, observer } from 'mobx-react';

import { HeaderIcon } from '../sections/HeaderIcon';
import { GarmentCategory } from './GarmentCategory';
import { GarmentItem } from './GarmentItem';

@inject('store') @observer
export class GarmentList extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <TouchableOpacity onPress={ () => navigation.navigate('SettingsRT') } style={ styles.headerLeftStyles }>
                    <HeaderIcon iconType={ 2 } />
                </TouchableOpacity>
            ),
            headerTitle: (
                <TouchableWithoutFeedback style={ styles.headerCenterStyles }>
                    <HeaderIcon iconType={ 0 } />
                </TouchableWithoutFeedback>
            ),
            headerRight: (
                <TouchableOpacity onPress={ () => navigation.navigate('LooksRT') } style={ styles.headerRightStyles }>
                    <HeaderIcon iconType={ 1 } />
                </TouchableOpacity>
            ),
        }
    };
    
    render() {
        const items = this.props.store.garments;
        
        return(
            items && items.length ?
            <SectionList
                renderItem={({ item, index, section }) => <GarmentItem info={ item } />}
                renderSectionHeader={ ({ section: { title } }) => <GarmentCategory title={ title } /> }
                sections={ items }
                keyExtractor={ (item, index) => item + index }
            /> : <View />
        )
    }
}

const styles = StyleSheet.create({
    containerStyles: {
        marginLeft: 5,
        marginRight: 5,
    },
    
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
    
    headerRightStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        height: '100%',
        width: '100%',
    },
});
