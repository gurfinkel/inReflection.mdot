import { AsyncStorage } from 'react-native';

import { action, observable } from 'mobx';

import DataService from '../services/dataService';

export default class LooksStore {
    @observable loading = false;
    @observable items = null;
    
    async getLooks(sex) {
        this.loading = true;
        this.items = await DataService.getLooksChecklist(sex);
        this.loading = false;
        
        return this.items;
    }
    
    setLooks(sex, looks) {
        AsyncStorage.setItem('userSex', sex);
    }
    
    async cleanUpStorage() {
        await AsyncStorage.clear();
    }
}
