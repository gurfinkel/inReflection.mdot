import { AsyncStorage } from 'react-native';

import { action, observable } from 'mobx';

export default class SettingsStore {
    @observable userSex = null;
    
    constructor() {
        this.sexImg = require('../../assets/sexBG.jpg');
    }
    
    get SexImg() {
        return this.sexImg;
    }
    
    async getSex() {
        return await AsyncStorage.getItem('userSex');
    }
    
    setSex(sex) {
        AsyncStorage.setItem('userSex', sex);
    }
    
    async cleanUpStorage() {
        await AsyncStorage.clear();
    }
}
