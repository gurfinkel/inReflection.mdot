import React from 'react';
import { StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

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
    }

    render() {
        return (
            <CheckBox key={ this.props.info.id } title={ this.props.info.name } checked={ this.state.checked } onPress={ this.setChecked } style={styles.checkBoxStyles}></CheckBox>
        )
    }
}

const styles = StyleSheet.create({
    checkBoxStyles: {
        fontSize: 12,
    },
});
