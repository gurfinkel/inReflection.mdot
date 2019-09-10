import React from 'react';
import { StyleSheet, View, Text, Platform, Image } from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { isLoggedIn: false, };
    }
    
    toggleUser = () => {
        this.setState(previousState =>  {
            return { isLoggedIn: !previousState.isLoggedIn };
        });
    };
    
    render() {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        
        return (
            <View style={ styles.headStyle }>
                <Image
                    style={ styles.logoStyle }
                    source={ require('./img/Globo_logo_REV.png') }
                >
                </Image>
                <Text
                    style={ styles.headText }
                    onPress={ this.toggleUser }
                >
                    { display }
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
        flex: 1,
    },
    
    headStyle: {
        borderBottomWidth: 2,
        borderColor: '#000000',
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: 'ios' === Platform.OS ? '#35605a' : '#31e981',
        flex: 1,
        flexDirection: 'row',
    },
    
    logoStyle: {
        flex: 1,
        height: undefined,
        width: undefined,
    }
});
