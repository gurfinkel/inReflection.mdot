import React from 'react';
import { StyleSheet } from 'react-native';
import { Body, CheckBox, ListItem, Text } from 'native-base';

export class GarmentItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: props.info.checked,
        };

        this.setChecked = this.setChecked.bind(this);
    }

    setChecked() {
        this.setState({ checked: !this.state.checked });
        this.props.onItemCheck(this.props.info.id);
    }

    render() {
        return (
            <ListItem key={ this.props.info.id } onPress={ this.setChecked }>
                <CheckBox checked={ this.state.checked }  />
                <Body>
                    <Text>{ this.props.info.name }</Text>
                </Body>
            </ListItem>
        )
    }
}

const styles = StyleSheet.create({
    checkBoxStyles: {
        fontSize: 12,
    },
});
