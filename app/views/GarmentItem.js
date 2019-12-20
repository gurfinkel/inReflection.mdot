import React from 'react';

import {
    StyleSheet,
} from 'react-native';

import {
    inject,
    observer,
} from 'mobx-react';

import {
    Body,
    CheckBox,
    Left,
    ListItem,
    Right,
    Text,
    Thumbnail,
} from 'native-base';

@inject('store') @observer
export class GarmentItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            checked: props.info.checked,
        };
        
        this.onItemClick = this.onItemClick.bind(this);
    }
    
    onItemClick = async () => {
        this.setState({ checked: !this.state.checked });
        await this.props.store.onGarmentCheck(this.props.info.id);
    };

    render() {
        const { info } = this.props;
        
        return (
            <ListItem thumbnail
                onPress={ this.onItemClick }
                style={ styles.itemStyles }
            >
                <Left>
                    <Thumbnail square source={{ uri: 'data:image/png;base64,' + info.picture }} style={ styles.imageStyles } />
                </Left>
                <Body>
                    <Text style={ styles.textStyles }>{ info.name }</Text>
                </Body>
                <Right>
                    <CheckBox checked={ this.state.checked } />
                </Right>
            </ListItem>
        )
    }
}

const styles = StyleSheet.create({
    itemStyles: {
        marginBottom: 3,
        marginRight: 10,
        marginTop: 3,
    },
    
    imageStyles: {
        height: 106,
        width: 70,
    },
    
    textStyles: {
        flex: 1,
    },
});
