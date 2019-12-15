export default class ConfigStore {
    constructor() {
        this.sexImg = require('../../assets/sexBG.jpg');
    }
    
    get SexImg() {
        return this.sexImg;
    }
}
