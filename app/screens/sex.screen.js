import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    ImageBackground,
    View,
} from 'react-native';
import {
    inject,
} from 'mobx-react';
import {
    Container,
    Content,
} from 'native-base';

import Sex from '../components/sex.component';

@inject('stores')
export default class SexScreen extends Component {
    render() {
        const { stores } = this.props;
        
        return (
            <Container>
                <View style={ styles.container }>
                    <Content scrollEnabled={false}>
                        <ImageBackground source={ stores.config.SexImg } style={ styles.sexBackground }>
                            <View style={ styles.sexForeground }>
                                <Sex { ...this.props } />
                            </View>
                        </ImageBackground>
                    </Content>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    
    sexBackground: {
        flex: 1,
        height: null,
        width: null,
    },
    
    sexForeground: {
        flex: 1,
        marginTop: Dimensions.get('window').height / 1.75,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 90,
        bottom: 0,
    },
});
