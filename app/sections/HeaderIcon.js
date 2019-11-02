import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCogs, faPersonBooth, faTshirt } from '@fortawesome/free-solid-svg-icons';

import utils from '../utils';

export class HeaderIcon extends Component {
    render() {
        const iconType = this.props.iconType;
    
        if (utils.isWardrobeSection(iconType)) {
            return (
                <FontAwesomeIcon color='#808080' icon={ faTshirt } size={ 36 } />
            );
        } else if (utils.isLooksSection(iconType)) {
            return (
                <FontAwesomeIcon color='#808080' icon={ faPersonBooth } size={ 36 } />
            );
        } else {
            return (
                <FontAwesomeIcon color='#808080' icon={ faCogs } size={ 36 } />
            );
        }
    }
}
