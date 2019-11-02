import { AsyncStorage } from 'react-native';

import utils from '../utils';

const garmentsForBoys = [];

const garmentsForGirls = [];

const garmentsByCategoriesForBoys = [];

const garmentsByCategoriesForGirls = [
    {
        id: 1,
        name: 'Pants, jumpsuits and shorts',
        items: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ],
    },

    {
        id: 2,
        name: 'Skirts and dresses',
        items: [ 15, 16, 17, 18, 19, 20 ],
    },

    {
        id: 3,
        name: 'Sweaters, sweatshirts, blouses and other tops',
        items: [ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41 ],
    },

    {
        id: 4,
        name: 'Jackets, blazers and coats',
        items: [ 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60 ],
    },

    {
        id: 5,
        name: 'Shoes',
        items: [ 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81 ],
    },

    {
        id: 6,
        name: 'Bags',
        items: [ 82, 83, 84, 85, 86, 87, 88, 89 ],
    },

    {
        id: 7,
        name: 'Jewelry',
        items: [ 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101 ],
    },

    {
        id: 8,
        name: 'Belts',
        items: [ 102, 103, 104 ],
    },

    {
        id: 9,
        name: 'Scarves',
        items: [ 105, 106, 107, 108 ],
    },

    {
        id: 10,
        name: 'Bathing suits and lingerie',
        items: [ 109, 110, 111, 112, 113 ],
    },
];

const looksForBoys = [];

const looksForGirls = [];

const looksByCategoriesForBoys = [
    {
        id: 1,
        name: 'Business is business',
        description: "For those who don't wear a uniform to work, you need to find an outfit that will make a good impression at the office - and we don't mean one with excessive (ulterior) motifs!",
        dilemma: [
            'From bed to work in one minute flat',
            'Date night',
            'I have a tricky day ahead',
            'Asking for a raise',
            'From office to nightclub',
        ],
        items: [ 1 ],
    },
];

const looksByCategoriesForGirls = [
    {
        id: 1,
        name: 'Business is business',
        description: "For those who don't wear a uniform to work, you need to find an outfit that will make a good impression at the office - and we don't mean one with excessive (ulterior) motifs!",
        dilemma: [
            'From bed to work in one minute flat',
            'Date night',
            'I have a tricky day ahead',
            'Asking for a raise',
            'From office to nightclub',
        ],
        items: [ 1, 2, 3, 4, 5 ],
    },
    {
        id: 2,
        name: 'Family affairs',
        description: "Between dinner with your current boyfriend, a date with a potential one and a day at the park with the kids, it's important not to get your looks mixed up.",
        dilemma: [
            'I want to look like Tinderella, not Barbarella',
            'Date night',
            "I'm meeting my future in-laws; I want to look like a catch, not bait",
            "I'm meeting his best friend",
            'At the courthouse for my divorce',
            'My ex has invited me to dinner',
            "I'm auditioning for stepmother",
            "I'm having lunch with my great-aunt who hasn't read a fashion magazine since 1970",
            'In the sandbox',
            'Model mom',
        ],
        items: [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ],
    },
    {
        id: 3,
        name: 'Key pieces',
        description: "There are clothes and accessories that can create a whole look in themselves - or break it, if you don't know how to wear them. Fringe, leopard prints and sailor shirts may abound, but there's no need to get on your high horse, pull out your claws, or rock the boat to create your look.",
        dilemma: [
            'Calamity (not plain) Jane',
            "Coachella, even though it's Shakespeare in the Park",
            'Which way to the sea?',
            'The Love Boat',
            'Garden party, without going full bloom',
            'Me Jane, you Tarzan',
            "I love leather and rock'n'roll",
            'Say it with flowers',
        ],
        items: [ 16, 17, 18, 19, 20, 21, 22, 23 ],
    },
    {
        id: 4,
        name: 'Evening wear',
        description: "The LBD is, of course, our go-to garment for any evening event. But if you want to stray a little from the beaten path, what should you wear at night to look festive (but not decked out in your Sunday best)?",
        dilemma: [
            'Cocktail arty',
            'My cousin Audrey',
            'Dinner in a hip restaurant',
            'Dinner at home with friends',
            'A dinner with no dress code',
            "A friend's birthday party",
            "Girls' night out",
            'Saturday Night Fever',
            'Dinner on the dunes',
            "It's Christmas!",
            "New Year's Eve - it's showtime"
        ],
        items: [ 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34 ],
    },
    {
        id: 5,
        name: 'Vacation Time',
        description: "Whether you're off for a weekend in the country or a vacation by the sea, you need to pack the right ingredients in your suitcase.",
        dilemma: [
            "Next stop: the airport!",
            "The beach is the new red carpet",
            "Country chic on Saturday",
            "Down-to-earth rustic on Sunday",
            "Sunny day BBQ",
            "Beach party",
            "A Passage to India",
            "A dinner in the mountains without going off-piste",
            "Visiting the Eiffel Tower",
        ],
        items: [ 35, 36, 37, 38, 39, 40, 41, 42, 43 ],
    },
    {
        id: 6,
        name: 'Extra-special occasions',
        description: "There will be times when you really have no idea what to wear, when simply peering into your closet makes you want to go back to bed. Especially if it's raining outside. Don't despair - even in these moments, there is a solution.",
        dilemma: [
            "Normcore with a sparkle",
            "Very, very simple",
            "Effortless chic",
            "For hardcore shopping",
            "Singing in the rain",
            "Oh baby it's cold out there",
            "Museum buff",
        ],
        items: [ 44, 45, 46, 47, 48, 49, 50 ],
    },
];

class DataService {
    async getGarments(sex) {
        const key = utils.isBoy(sex) ? 'garments_for_boys' : 'garments_for_girls';
        let items = await AsyncStorage.getItem(key);

        if (items) {
            items = JSON.parse(items)
        } else {
            items = utils.isBoy(sex) ? garmentsForBoys : garmentsForGirls;
            items = items.map(x => ({ ...x, checked: false }));

            AsyncStorage.setItem(key, JSON.stringify(items));
        }

        return items;
    }
    
    async setGarments(sex, items) {
        const key = utils.isBoy(sex) ? 'garments_for_boys' : 'garments_for_girls';
        
        await AsyncStorage.setItem(key, JSON.stringify(items));
    }

    async getGarmentsChecklist(sex) {
        const items = utils.isBoy(sex) ? garmentsByCategoriesForBoys : garmentsByCategoriesForGirls;
        let sumItems = await this.getGarments(sex);

        return items
            .map((category) => {
                return {
                    id: category.id,
                    title: category.name,
                    data: category.items.map((item) => sumItems.find(garment => garment.id === item)),
                }
            }
        );
    }

    async getLooks(sex) {
        const items = utils.isBoy(sex) ? looksForBoys : looksForGirls;
        let sumItems = await this.getGarments(sex);

        return items
            .map((x) => {
                return {
                    id: x.id,
                    name: x.name,
                    description: x.description,
                    ingredients: x.ingredients.map((item) => sumItems.find(garment => garment.id === item)),
                    recipe: x.recipe,
                    img: x.img,
                }
            }
        );
    }

    async getLooksChecklist(sex) {
        let items = utils.isBoy(sex) ? looksByCategoriesForBoys : looksByCategoriesForGirls;
        let sumItems = await this.getLooks(sex);

        return items
            .map((category) => {
                return {
                    id: category.id,
                    title: category.name,
                    description: category.description,
                    data: category.items.map((item) => sumItems.find(look => look.id === item)),
                }
            }
        );
    }

    async getSex() {
        // await AsyncStorage.clear();
        return await AsyncStorage.getItem('userSex');
    }

    setSex(sex) {
        AsyncStorage.setItem('userSex', sex);
    }
}

export default new DataService();
