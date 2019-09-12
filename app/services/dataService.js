const garments = [
    { id: 1, name: 'Black jeans' },
    { id: 2, name: 'Raw denim jeans' },
    { id: 3, name: 'Blue jeans' },
    { id: 4, name: 'White jeans' },
    { id: 5, name: 'High-waisted pants' },
    { id: 6, name: 'Black velvet pants' },
    { id: 7, name: 'Silk print pants' },
    { id: 8, name: 'Black cropped pants' },
    { id: 9, name: 'Black pants' },
    { id: 10, name: 'Sailor pants' },
    { id: 11, name: 'Seersucker pants' },
    { id: 12, name: 'Sweatpants' },
    { id: 13, name: 'Jumpsuit' },
    { id: 14, name: 'Denim shorts' },

    { id: 15, name: 'Pencil skirt' },
    { id: 16, name: 'Long skirt' },
    { id: 17, name: 'Long pleated skirt' },
    { id: 18, name: 'Simple black dress' },
    { id: 19, name: 'Long floral-print dress' },
    { id: 20, name: 'Long shirtdress' },

    { id: 21, name: 'Black turtleneck' },
    { id: 22, name: 'Black round-neck sweater' },
    { id: 23, name: 'Beige round-neck sweater' },
    { id: 24, name: 'Black V-neck sweater' },
    { id: 25, name: 'Hot pink sweater' },
    { id: 26, name: 'Chunky knit sweater' },
    { id: 27, name: 'Gray sweatshirt' },
    { id: 28, name: 'White ruffled blouse' },
    { id: 29, name: 'White collarless blouse' },
    { id: 30, name: 'Plaid shirt' },
    { id: 31, name: 'Striped shirt' },
    { id: 32, name: 'Blue shirt' },
    { id: 33, name: 'White shirt' },
    { id: 34, name: 'Denim shirt' },
    { id: 35, name: 'Tank top' },
    { id: 36, name: 'White T-shirt' },
    { id: 37, name: 'Black T-shirt' },
    { id: 38, name: 'Striped sailor shirt' },
    { id: 39, name: 'Embroidered tunic' },
    { id: 40, name: 'Long beach tunic' },
    { id: 41, name: 'Gold top' },

    { id: 42, name: 'Black leather jacket' },
    { id: 43, name: 'Black blazer' },
    { id: 44, name: 'Navy blazer' },
    { id: 45, name: 'Peacoat' },
    { id: 46, name: 'Windbreaker' },
    { id: 47, name: 'Ultralight down jacket' },
    { id: 48, name: 'Tweed jacket' },
    { id: 49, name: 'Tuxedo jacket' },
    { id: 50, name: 'Black trench coat' },
    { id: 51, name: 'Beige trench coat' },
    { id: 52, name: "Navy men's overcoat" },
    { id: 53, name: "Camel men's overcoat" },
    { id: 54, name: 'Velvet jacket' },
    { id: 55, name: 'Bomber jacket' },
    { id: 56, name: 'Sequined jacket' },
    { id: 57, name: 'Khaki military jacket' },
    { id: 58, name: 'Denim jacket' },
    { id: 59, name: 'Leopard-print coat' },
    { id: 60, name: 'Shearling coat' },

    { id: 61, name: 'Penny loafers' },
    { id: 62, name: 'Patent leather loafers' },
    { id: 63, name: 'Jeweled flats' },
    { id: 64, name: 'Black derbies' },
    { id: 65, name: 'Brown derbies' },
    { id: 66, name: 'Black platform sandals' },
    { id: 67, name: 'Black ballet flats' },
    { id: 68, name: 'Fur-lined boots' },
    { id: 69, name: 'Black high heels' },
    { id: 70, name: 'Black kitten heels' },
    { id: 71, name: 'Black velvet flats' },
    { id: 72, name: 'Cowboy boots' },
    { id: 73, name: 'Flat black slide sandals' },
    { id: 74, name: 'Natural leather sandals' },
    { id: 75, name: 'Lace-up gladiator sandals' },
    { id: 76, name: 'Flat gold sandals' },
    { id: 77, name: 'Lace-up sneakers' },
    { id: 78, name: 'Slim-on sneakers' },
    { id: 79, name: 'Gum boots' },
    { id: 80, name: 'Biker boots' },
    { id: 81, name: 'Farm and ranch boots' },

    { id: 82, name: 'Saddle bag' },
    { id: 83, name: 'Mini black evening bag' },
    { id: 84, name: 'Gold handbag' },
    { id: 85, name: 'Fringed bag' },
    { id: 86, name: 'Black handbag' },
    { id: 87, name: 'Black tote bag' },
    { id: 88, name: 'Straw tote bag' },
    { id: 89, name: 'Brown satchel' },

    { id: 90, name: 'Cuff bracelet' },
    { id: 91, name: 'Gold bangles' },
    { id: 92, name: 'Rhinestone bangles' },
    { id: 93, name: 'Bracelets' },
    { id: 94, name: 'Charm necklace' },
    { id: 95, name: 'Long rhinestone necklace' },
    { id: 96, name: 'Long pearl necklace' },
    { id: 97, name: 'Long gold necklace' },
    { id: 98, name: 'Wooden bead necklace' },
    { id: 99, name: 'Rhinestone brooches' },
    { id: 100, name: 'Classic watch' },
    { id: 101, name: "Men's watch" },

    { id: 102, name: 'Black belt' },
    { id: 103, name: 'Brown belt' },
    { id: 104, name: 'Cummerbund' },

    { id: 105, name: 'Large shawl' },
    { id: 106, name: 'Scarf' },
    { id: 107, name: 'Print foulard' },
    { id: 108, name: 'Black foulard' },

    { id: 109, name: 'Bikini' },
    { id: 110, name: 'Camisole' },
    { id: 111, name: 'Black bra' },
    { id: 112, name: 'Black panties' },
    { id: 113, name: "Undies that should'n always be kept under wraps..." },
];

const garmentsByCategories = [
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

const looks = [
    {
        id: 1,
        name: 'From bed to work in one minute flat',
        ingredients: [ 53, 6, 21, 102, 80, 82 ],
        description: "Your alarm didn't go off",
        recipe: "Play it simple and steer clear of questionable combos. When you don't have time, don't experiment. Stick with chic basics that won't attract the attention of the fashion police. Biker boots loosen up what would otherwise be a rather strict look",
        img: require('./img/IMG_2485.jpg'),
    },
    {
        id: 2,
        name: 'Before an appointment at the bank, I have to manage my assets',
        ingredients: [ 43, 2, 32, 102, 70, 86 ],
        description: "You've overdone it spending on high-end labels and your bank account is in the red. You have to persuade your banker to give you a loan.",
        recipe: "Leave your brand-new clothes in the closet - you don't want your loan officer to figure out where all the money went. To convince him that you're a serious woman who can rein in her expenses, choose a blazer (extra points if it has banker stripes). And to show that your account is not the only thing that's bare, show a little cleavage. Heels are a look you can bank on: if you can rise above it all - even when your account's in the red - you've found the golden ticket for getting out of debt.",
        img: require('./img/IMG_2485.jpg'),
    },
    {
        id: 3,
        name: 'I have a tricky day ahead',
        ingredients: [ 7, 24, 71, 92, 100 ],
        description: "Your day is set to be endless stream of boring meetings and stressful appointments. Followed by a professional dinner right after work, with no time to pop home in between.",
        recipe: "Arm yourself with clothes that keep you feeling upbeat. Pants with a printed motif immediately make things brighter. Velvet flats will see you through until the wee hours. Ans if you get bored during a meeting, you can play with your bracelets. Having fun at work is always a recipe for success.",
        img: require('./img/IMG_2485.jpg'),
    },
    {
        id: 4,
        name: 'Asking for a raise',
        ingredients: [ 44, 3, 36, 102, 64, 100 ],
        description: "Your coworkers say you shouldn't automatically expect a raise. But you really feel you deserve one.",
        recipe: "If there's ever a time to go totally anti-bling, it's now. You don't need to look like a damsel in distress (your boss knows how much he pays you), but point out to him that you don't intend to spend the rest of your life in loose-fitting jeans and white T-shirt. Throw in that you're wearing your father's blazer and watch. If he knows anything about fashion, he'll show compassion.",
        img: require('./img/IMG_2485.jpg'),
    },
    {
        id: 5,
        name: 'From office to nightclub',
        ingredients: [ 49, 8, 29, 111, 69, 95 ],
        description: "There's no time to go home to change into a shiny top before you head out for a night on the town.",
        recipe: "Bet all your chips on the tuxedo jacket: it's chic at the office and sexy at the nightclub. Just take off your blouse and wear nothing under the jacket - Yves Saint Laurent did it before anyone else. Wear the necklace around your neck during the day and as a belt in the evening. Now you're all set to commute, work and dance.",
        img: require('./img/IMG_2485.jpg'),
    },
];

const looksByCategories = [
    {
        id: 1,
        name: 'Business is business',
        description: "For those who don't wear a uniform to work, you need to find an outfit that will make a good impression at the office - and we don't mean one with excessive (ulterior) motifs!",
        dilemma: [
            'From bed to work in one minute flat',
            'Before an appointment at the bank, I have to manage my assets',
            'I have a tricky day ahead',
            'Asking for a raise',
            'From office to nightclub',
        ],
        items: [ 1, 2, 3, 4, 5 ],
    },
];

export function getGarments() {
    return garments;
}

export function getGarmentsChecklist() {
    return garmentsByCategories
        .map((category) => { return {
                id: category.id,
                title: category.name,
                data: category.items.map((item) => garments.find(garment => garment.id === item)),
            }
        }
    );
}

export function getLooks(sex) {
    return looks;
}

export function getLooksChecklist(sex) {
    return looksByCategories
        .map((category) => { return {
                id: category.id,
                title: category.name,
                description: category.description,
                data: category.items.map((item) => looks.find(look => look.id === item)),
            }
        }
    );
}

export default { getGarments, getGarmentsChecklist, getLooks, getLooksChecklist };
