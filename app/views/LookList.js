import React, { Component } from 'react';
import { StyleSheet, SectionList, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { inject, observer } from 'mobx-react';

import { HeaderIcon } from '../sections/HeaderIcon';
import { LookCategory } from './LookCategory';
import { LookItem } from './LookItem';

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'GarmentListRT' })],
});

@inject('store') @observer
export class LookList extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <TouchableOpacity onPress={ () => navigation.dispatch(resetAction) } style={ styles.headerLeftStyles }>
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
    
    render() {
        const items = this.props.store.looks;
        
        return(
            items && items.length ?
            <SectionList
                renderItem={({ item, index, section }) => <LookItem navigation={ this.props.navigation } info={ item } />}
                renderSectionHeader={ ({ section: { title, description } }) => <LookCategory title={ title } description={ description } />}
                sections={ items }
                keyExtractor={ (item, index) => item + index }
            /> : <View />
        )
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
