import { action, observable } from 'mobx';

import DataService from '../services/dataService';

class Store {
    @observable garments;
    @observable items;
    @observable looks;
    @observable sex;

    constructor() {
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        this.sex = await DataService.getSex();
       
        if (this.sex) {
            this.garments = await DataService.getGarmentsChecklist(this.sex);
            this.items = await DataService.getGarments(this.sex);
            this.looks = await DataService.getLooksChecklist(this.sex);
        } else {
            this.garments = [];
            this.items = [];
            this.looks = [];
        }
    };

    @action setSex = async (sex) => {
        this.sex = sex;
        this.garments = await DataService.getGarmentsChecklist(this.sex);
        this.items = await DataService.getGarments(this.sex);
        this.looks = await DataService.getLooksChecklist(this.sex);

        DataService.setSex(sex);
    };

    @action onGarmentCheck = async (id) => {
        for (let i = 0; i < this.items.length; ++i) {
            const item = this.items[i];
            if (id === item.id) {
                item.checked = !item.checked;
                break;
            }
        }
        
        await DataService.setGarments(this.sex, this.items);
    
        this.garments = await DataService.getGarmentsChecklist(this.sex);
        this.looks = await DataService.getLooksChecklist(this.sex);
    };
    
    @action cleanUpStorage = async () => {
        this.sex = null;
        await DataService.cleanUpStorage();
    };
}

export default new Store();
