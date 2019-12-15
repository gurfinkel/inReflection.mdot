import { AsyncStorage } from 'react-native';

import utils from '../utils';

class DataService {
    _apiBase = 'http://35.223.42.69:3000/api';
    
    async _getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        
        return await res.json();
    }
    
    _getModelType(sex) {
        return utils.isBoy(sex) ? 'for_boys' : 'for_girls';
    }
    
    async _getGarments(sex) {
        try {
            const page = 1;
            const perPage = 200;
            const modelType = this._getModelType(sex);
            let resourceJson = await this._getResource(`/garments/list?page=${page}&perPage=${perPage}&type=${modelType}`);
            
            return resourceJson;
        } catch (error) {
            console.error(error);
        }
    };
    
    async _getRacks(sex) {
        try {
            const modelType = this._getModelType(sex);
            let resourceJson = await this._getResource(`/racks/list?type=${modelType}`);
            
            return resourceJson;
        } catch (error) {
            console.error(error);
        }
    }
    
    async _getLooks(sex) {
        try {
            const modelType = this._getModelType(sex);
            let resourceJson = await this._getResource(`/looks/list?type=${modelType}`);
            
            return resourceJson;
        } catch (error) {
            console.error(error);
        }
    };
    
    async _getOccasions(sex) {
        try {
            const modelType = this._getModelType(sex);
            let resourceJson = await this._getResource(`/occasions/list?type=${modelType}`);
            
            return resourceJson;
        } catch (error) {
            console.error(error);
        }
    };
    
    async getGarments(sex) {
        let garments = await this._getGarments(sex);
    
        garments = garments.map(x => ({ ...x, checked: false }));
    
        return garments;
    }
    
    async setGarments(sex, items) {
        const key = utils.isBoy(sex) ? 'garments_for_boys' : 'garments_for_girls';
        
        await AsyncStorage.setItem(key, JSON.stringify(items));
    }

    async getGarmentsChecklist(sex) {
        let racks = await this._getRacks(sex);
        let garments = await this.getGarments(sex);
        return racks.map((category) => {
            return {
                id: category.id,
                title: category.name,
                data: category.items.map((item) => garments.find(garment => garment.id === item)),
            }
        });
    }

    async getLooks(sex) {
        let looks = await this._getLooks(sex);
        let garments = await this.getGarments(sex);
    
        return looks.map((x) => {
                return {
                    id: x.id,
                    name: x.name,
                    description: x.description,
                    ingredients: x.ingredients.map((item) => garments.find(garment => garment.id === item)),
                    recipe: x.recipe,
                    picture: x.picture,
                }
            }
        );
    }

    async getLooksChecklist(sex) {
        let occasions = await this._getOccasions(sex);
        let looks = await this.getLooks(sex);
    
        return occasions.map((category) => {
                return {
                    id: category.id,
                    title: category.name,
                    description: category.description,
                    data: category.items.map((item) => looks.find(look => look.id === item)),
                }
            }
        );
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

export default new DataService();
