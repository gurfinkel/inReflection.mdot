import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

import {
    NavigationActions,
    StackActions
} from 'react-navigation';

import {
    inject,
} from 'mobx-react';

import {
    observer,
} from 'mobx-react/native';

import {
    Container,
    Content,
    Spinner,
} from 'native-base';

import { HeaderIcon } from '../sections/HeaderIcon';

import Looks from '../components/looks.component';

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'GarmentListRT' })],
});

@inject('stores') @observer
export default class LooksScreen extends Component {
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
    
    constructor(props) {
        super(props);
        
        this._bootstrapAsync(props);
    }
    
    _bootstrapAsync = async (props) => {
        const { stores } = props;
        const userSex = await stores.settings.getSex();
        
        stores.looks.getLooks(userSex);
    };
    
    render() {
        const { stores } = this.props;
        
        const content = stores.looks.loading ? <Spinner color='gray' /> : <Looks { ...this.props } />;
        
        return (
            <Container>
                <View style={ styles.container }>
                    <Content scrollEnabled={ true }>
                        <View>
                            { content }
                        </View>
                    </Content>
                </View>
            </Container>
        );
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
    
    container: {
        flex: 1,
    },
});
