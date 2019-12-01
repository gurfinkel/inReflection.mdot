import { AsyncStorage } from 'react-native';

import utils from '../utils';

const webApiUrl = 'http://api.inreflection.net:3000';

const getGarments = async(sex) => {
    try {
        const page = 1;
        const perPage = 200;
        const modelType = getModelType(sex);
        let response = await fetch(`${webApiUrl}/garments/list?page=${page}&perPage=${perPage}&type=${modelType}`);
        let responseJson = await response.json();
        
        return responseJson;
    } catch (error) {
        console.error(error);
    }
};

const getRacks = async(sex) => {
    try {
        const modelType = getModelType(sex);
        let response = await fetch(`${webApiUrl}/racks/list?type=${modelType}`);
        let responseJson = await response.json();
        
        return responseJson;
    } catch (error) {
        console.error(error);
    }
};

const getLooks = async(sex) => {
    try {
        const modelType = getModelType(sex);
        let response = await fetch(`${webApiUrl}/looks/list?type=${modelType}`);
        let responseJson = await response.json();
        
        return responseJson;
    } catch (error) {
        console.error(error);
    }
};

const getOccasions = async(sex) => {
    try {
        const modelType = getModelType(sex);
        let response = await fetch(`${webApiUrl}/occasions/list?type=${modelType}`);
        let responseJson = await response.json();
        
        return responseJson;
    } catch (error) {
        console.error(error);
    }
};

const getModelType = (sex) => {
    return utils.isBoy(sex) ? 'for_boys' : 'for_girls';
};

class DataService {
    async getGarments(sex) {
        let garments = await getGarments(sex);
    
        garments = garments.map(x => ({ ...x, checked: false }));
    
        return garments;
    }
    
    async setGarments(sex, items) {
        const key = utils.isBoy(sex) ? 'garments_for_boys' : 'garments_for_girls';
        
        await AsyncStorage.setItem(key, JSON.stringify(items));
    }

    async getGarmentsChecklist(sex) {
        let racks = await getRacks(sex);
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
        let looks = await getLooks(sex);
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
        let occasions = await getOccasions(sex);
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
