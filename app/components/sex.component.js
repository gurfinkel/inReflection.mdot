import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    Button,
    Icon,
    Form,
} from 'native-base';

export default class Sex extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        const { navigate } = this.props.navigation;
        const { settings } = this.props.stores;
        
        navigate(settings.sex ? 'LooksRT' : 'SexRT');
    }
    
    goToAdventure = async (userSex) => {
        const { navigate } = this.props.navigation;
        const { settings } = this.props.stores;
        
        await settings.setSex(userSex);
        navigate('LooksRT');
    };
    
    render() {
        const { settings } = this.props.stores;
        
        return (
            <Form style={ styles.container }>
                <View style={ styles.buttonRow }>
                    <Button onPress={ () => this.goToAdventure('1') } style={ styles.buttonStyles } large>
                        <Icon type="FontAwesome5" name='male' style={ styles.buttonIcon } />
                    </Button>
                    <Button onPress={ () => this.goToAdventure('2') } style={ styles.buttonStyles } large>
                        <Icon type="FontAwesome5" name='female' style={ styles.buttonIcon } />
                    </Button>
                </View>
            </Form>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    
    buttonRow: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    buttonStyles: {
        backgroundColor: '#808080',
        marginLeft: 5,
        marginRight: 5,
        paddingBottom: 10,
        paddingTop: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    buttonIcon: {
        color: '#ffffff',
        fontSize: 42,
        fontWeight: 'bold',
    },
});
