import { action, observable } from 'mobx';

import DataService from '../services/dataService';

class Store {
    @observable garments;
    @observable looks;
    @observable sex;

    constructor() {
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        this.sex = await DataService.getSex();

        if (this.sex) {
            this.garments = await DataService.getGarmentsChecklist(this.sex);
            this.looks = await DataService.getLooksChecklist(this.sex);
        } else {
            this.garments = [];
            this.looks = [];
        }
    };

    @action setSex = async (sex) => {
        this.sex = sex;
        this.garments = await DataService.getGarmentsChecklist(this.sex);
        this.looks = await DataService.getLooksChecklist(this.sex);

        DataService.setSex(sex);
    };

    @action onGarmentCheck(id) {
        let newValue = false;

        for (let i = 0; i < this.garments.length; ++i) {
            const x = this.garments[i];
            const garment = x.data.find(y => id === y.id);

            if (garment) {
                newValue = !garment.checked;
                garment.checked = newValue;
                break;
            }
        }

        for (let i = 0; i < this.looks.length; ++i) {
            const x = this.looks[i];

            for (let j = 0; j < x.data.length; ++j) {
                const y = x.data[j];
                const garment = y.ingredients.find(y => id === y.id);

                if (garment) {
                    garment.checked = newValue;
                    break;
                }
            }
        }
    }
}

export default new Store();
