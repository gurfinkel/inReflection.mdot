const garments = [
    { id: 1, name: 'Black jeans' },
    { id: 2, name: 'Raw denim jeans' },
    { id: 3, name: 'Blue jeans' },
    { id: 4, name: 'White jeans' },
    { id: 5, name: 'High-waisted pants' },
    { id: 6, name: 'Black velvet pants', img: require('./img/black_velvet_pants.jp2'), },
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

    { id: 21, name: 'Black turtleneck', img: require('./img/black_turtleneck.jp2'), },
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
    { id: 53, name: "Camel men's overcoat", img: require('./img/camel_mens_overcoat.jp2'), },
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
    { id: 80, name: 'Biker boots', img: require('./img/biker_boots.jp2'), },
    { id: 81, name: 'Farm and ranch boots' },

    { id: 82, name: 'Saddle bag', img: require('./img/saddle_bag.jp2'), },
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

    { id: 102, name: 'Black belt', img: require('./img/black_belt.jp2'), },
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
        img: require('./img/from_bed_to_work_in_one_minute_flat.jp2'),
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
    {
        id: 6,
        name: 'I want to look like Tinderella, not Barbarella',
        ingredients: [ 48, 2, 35, 103, 69 ],
        description: "Your first date with a potential prince charming. Since he's only seen your face in your profile picture, it's probably best not to reveal too much right away.",
        recipe: "A little tank top for a feminine touch, a tweed blazer for the 'traditional + clean-cut' look, tight jeans to avoid looking too guy-ish, a belt to accentuate your waist and heels to make an impression. As long as you steer clear of a miniskirt and crop top, there's hope.",
    },
    {
        id: 7,
        name: 'Date night',
        ingredients: [ 50, 111, 112, 69 ],
        description: "Your sweetheart asks you to meet him for a drink at the end of the day",
        recipe: "Just a belted trench coat. Black is best, but if you prefer beige, your man won't object. If you're feeling cold, wear black stockings. With this outfit, you can't fail. And that's an understatement!",
    },
    {
        id: 8,
        name: "I'm meeting my future in-laws; I want to look like a catch, not bait",
        ingredients: [ 44, 4, 38, 71, 89 ],
        description: "No need to shock them from the get-go; the first time you meet his parents you should make a good impression - better to win them over to your side now.",
        recipe: "If you have time to prepare, roll up the sleeves of your blazer too show you're a girl who's ready for anything. Don't wear heels - they can look haughty. Velvet flats are chic but understated (it's not the time to show your fashion quotient, but rather your 'one-man woman' ratio). White pants are the key to this look - they'll give you an innocent, if not angelic air. Just right for melting the hearts of your future in-laws.",
    },
    {
        id: 9,
        name: "I'm meeting his best friend",
        ingredients: [ 52, 4, 34, 103, 65 ],
        description: "To make the right impression on your boyfriend's best buddy. As with the in-laws, it would be wise to have this influencer in the palm of your hand.",
        recipe: "Avoid looking like a tease to reassure this pal who has your nam's best interests at heart. The denim shirt is a good choice as it's a garment he could wear himself. He'll think his friend has finally found a woman who holds up and one who feels comfortable in her own skin. Even when fully dressed.",
    },
    {
        id: 10,
        name: "At the courthouse for my divorce",
        ingredients: [ 43, 4, 23, 102, 61, 82 ],
        description: "If the judge still hasn't realized that your ex-husband is lowballing his income to avoid paying alimony.",
        recipe: "White for innocence, beige for sweetness, a blazer for seriousness, college loafers to convey the message of student-level income. No jewelry, of course. A saddle bag will show you are not the kind of woman to blow your money on an It Bag.",
    },
    {
        id: 11,
        name: "My ex has invited me to dinner",
        ingredients: [ 54, 15, 110, 69, 100 ],
        description: "You haven't seen each other for years and out of the blue your ex invites you to dinner. Now's your chance to show him what he's been missing.",
        recipe: "Steer clear of the 'vamp for grabs' look and choose a subtler weapon of seduction: the pencil skirt. Don't wear a suggestive low-cut top - we said 'subtler seduction.' A silk lace camisole will do the trick and if he remarks that it's a little sexy, just reply, 'I'm not going to be out late, I'll be off to bed soon.' Don't carry a handbag: this will prove you didn't bring a toothbrush or a change of clothes, if ever he thought he still had a chance." ,
    },
    {
        id: 12,
        name: "I'm auditioning for stepmother",
        ingredients: [ 2, 31, 102, 63, 94 ],
        description: "For your first meeting with your future stepchildren, you need to get off on the right foot. Somewhere between mother and girlfriend is what you're aiming for",
        recipe: "Forget about being seductive (that can be scary for children). Choose neutral shades, except for your shoes, which can be embroidered with jewels, topped with pompoms, gold or sequined (even at lunchtime) to show you have no intention of playing the evil stepmother and that you're there to have fun." ,
    },
    {
        id: 13,
        name: "I'm having lunch with my great-aunt who hasn't read a fashion magazine since 1970",
        ingredients: [ 5, 28, 66, 107, 95 ],
        description: "You're meeting an older person who's no longer interested in fashion.",
        recipe: "Paradoxically, this is when you can be a real fashion victim, because everything your great-aunt loved in the 1970s is back in style today. With high-waisted pants, a ruffled blouse, a foulard worm as a belt and platform sandals, she'll think you're fabulous - without realizing you're actually at the cutting edge of style." ,
    },
    {
        id: 14,
        name: "In the sandbox",
        ingredients: [ 51, 3, 25, 67, 101, 88 ],
        description: "People with kids know the playground is prison for parents. Considering all the pitfalls in such a place, it's best to be comfortably dressed if you have to babysit your nephews, nieces or godchildren.",
        recipe: "Choose jeans in resistant indigo fabric, recommended for dealing with unforeseen events during a day at the park. A hot pink sweater can be hard to find in stores, but it's reassuring for children as they'll feel they can't lose you in the crowd. Plus it'll flatter your complexion. And wear ballet flats - we've all seen mothers wearing high heels on the playground and it just  doesn't work!" ,
    },
    {
        id: 15,
        name: "Model mom",
        ingredients: [ 52, 3, 27, 102, 77, 82 ],
        description: "When school gets out. You want to look like you know the score, but the only time you've been here was on the first day of school.",
        recipe: "Don't show up with a fancy handbag; you'll look like the kind of mom who doesn't know your kids need a snack after school. Your uniform should be jeans, sweatshirt and sneakers, because you might have to run to keep up with your kids in the park." ,
    },
    {
        id: 16,
        name: "Calamity (not plain) Jane",
        ingredients: [ 85, 4, 32, 102, 72, 101 ],
        description: "Because you like a fringed bag. And to show your man you can be (quite) wild. Or simply to amuse the kids.",
        recipe: "Fringe should always be used with a neutral background. White, black, gray and beige are allowed. No flashy colors with fringed accessories, unless you want to relive Woodstock 1969. Tassels and fringe prove you could sleep in a tipi, à la Pocahontas. With that you're already stylin'." ,
    },
    {
        id: 17,
        name: "Coachella, even though it's Shakespeare in the Park",
        ingredients: [ 14, 36, 103, 81, 85, 107, 90 ],
        description: "You want to dig out those denim shorts at last. Or you're after a bohemian chic style but don't want to be mistaken for a harpy hippie. The perfect excuse: a sunny outdoor festival.",
        recipe: "It takes a bit of attitude to pull off wearing denim shorts. Obviously there's an age limit and we'll let you be the judge of that. Sometimes a cotton peasant skirt can also do the trick, if the idea of denim shorts terrifies you. In all cases, farm and ranch boots are de rigueur. Never mind if it's scorching hot outside - sometimes you have to suffer to be cool. Wear the foulard as bracelet and if you have a fringed bag, now's the time to use it." ,
    },
    {
        id: 18,
        name: "Which way to the sea?",
        ingredients: [ 38, 2, 45, 77, 99 ],
        description: "You feel like wearing sailor shirt and who cares if some people think you're off to go clam digging.",
        recipe: "You're aiming for nautical style (with striped sailor shirt and peacoat), without looking like a cabin boy. Instead of rubber boots, wear sneakers and - to minimize the salty dog look - wear a rhinestone brooch. We call that glam rigging." ,
    },
    {
        id: 19,
        name: "The Love Boat",
        ingredients: [ 10, 49, 33, 73, 83 ],
        description: "You have sea legs and want to expand your horizons.",
        recipe: "Sailor pants have that chic je ne sais quoi. The must accessories are flat slide sandals and a mini evening bag; this will tone down the naval look. Add rhinestones anywhere you want; it'll be brilliant." ,
    },
    {
        id: 20,
        name: "Garden party, without going full bloom",
        ingredients: [ 11, 28, 74, 96, 88 ],
        description: "It's been far too long since you last wore your seersucker pants. That's true, you never get the chance to wear them!",
        recipe: "Skip the cheesy floral-print dress you're tempted to bring out for any garden gathering. The alternative? Seersucker pants are extremely lightweight, so they're perfect for the occasion. And a white ruffled blouse for an ever fresher look. For a bucolic touch, there's the straw tote - and to chase away the country bumpkin effect, wear a pearl necklace as a belt." ,
    },
    {
        id: 21,
        name: "Me Jane, you Tarzan",
        ingredients: [ 59, 4, 22, 102, 64 ],
        description: "Your animal instinct spurs you to buy a leopard-print coat.",
        recipe: "Although magazines try to persuade us that the head-to-toe animal look is all the rage, taming the wild with understated pieces seems a more reasonable approach to us. Choose between white or black pants and a black or white sweater, but avoid bringing out the beast with loud shades." ,
    },
    {
        id: 22,
        name: "I love leather and rock'n'roll",
        ingredients: [ 42, 1, 33, 102, 64 ],
        description: "Occasionally, upon spying our leather jacket in the closet, we suddenly have a Rolling Stones moment.",
        recipe: "Think of the dress code for sexiness and do just the opposite. No skirt with a leather jacket. No low-cut necklone with a leather jacket. And no heels with a leather jacket either. That's what being a Rolling Stone is all about." ,
    },
    {
        id: 23,
        name: "Say it with flowers",
        ingredients: [ 30, 19, 103, 81 ],
        description: "Because we never know how to wear that plaid shirt, which always has a 'walk in the woods' air about it.",
        recipe: "Think of what a lumberjack wouldn't do. For example, he wouldn't wear his shirt with a floral print dress. And voilà - that's just the right combo to feminize this rustic look. Complete it with a leather belt to retain the country feel. And to avoid all sappiness, wear suede boots. Wow, that was hard work!" ,
    },
    {
        id: 24,
        name: "Cocktail arty",
        ingredients: [ 42, 7, 33, 73, 86, 97 ],
        description: "An art exhibition opening.",
        recipe: "Obviously, you can always dig out your most beautiful top-label print dress and pass yourself off as a fashion work of art. At this type of event, however, it's best to keep a low profile. Black and white will always create a graphic effect and wearing a necklace as a bracelet is creative. Who said fashion isn't an art?" ,
    },
    {
        id: 25,
        name: "My cousin Audrey",
        ingredients: [ 18, 70, 83, 99 ],
        description: "Sometimes we end up at some ceremony or another and have no idea how or why we're there. Whether it's the opening of a button store or your cousin's cousin's charity gala, these events require sartorial thought.",
        recipe: "Take inspiration from Audrey Hepburn, the queen of the little black dress. Invest in sparkly accessories (lamé, sequined or rhinestones) that will keep any outfit from looking too understated. The LBD is a fabulous invention: if it's simple, you can wear it for a myriad of different occasions, since no one ever remembers a little black dress. By dressing it up with rhinestone brooches, you can make it look precious. And wearing your handbag chain as a bracelet makes the bag doubly useful." ,
    },
    {
        id: 26,
        name: "Dinner in a hip restaurant",
        ingredients: [ 49, 9, 33, 108, 71 ],
        description: "You're invited out to that hip restaurant everyone's talking about, but you have no idea what is considered a hip outfit these days (it's always changing!)",
        recipe: "'Less is more' fashion. The less you show off labels and the less you try and sum up the season's details in one outfit, the better the result will be. Black and while always make for a totally flawless look, even in a trendy crowd. If you feel daring, tie the foulard at your collar. And if you're asked where you got the pussy bow blouse, reply cooly, 'It's an idea of my own, but I think Yves Saint Laurent may have thought of it, too." ,
    },
    {
        id: 27,
        name: "Dinner at home with friends",
        ingredients: [ 3, 29, 102, 91, 71 ],
        description: "You've invited friends over for dinner and don't want them to feel they should have made an effort to dress up.",
        recipe: "Wear a slightly chic top but casual pants. That way, your friends will fell comfortable no matter how they've turned up. Whatever happens, make sure you wear mascara - you'll get points for looking chic without overdoing it." ,
    },
    {
        id: 28,
        name: "A dinner with no dress code",
        ingredients: [ 49, 9, 37, 69, 86 ],
        description: "You're invited to a dinner and you don't know anyone.",
        recipe: "Wager everything on black, the color everyone can agree on. When you don't know anyone, you don't want to arrive overdressed, or - even worse - underdressed. So wear black only and steer clear of slogan prints (a militant T-shirt can ruin your evening). The 'No Look' is the perfect illustration of 'less is more'." ,
    },
    {
        id: 29,
        name: "A friend's birthday party",
        ingredients: [ 55, 15, 41, 69 ],
        description: "Your friend's having a birthday party but hasn't asked anyone to come in costume.",
        recipe: "Looking cheery for a birthday party is the best gift you can give your friend. A gold top will do the trick. To avoid the 'holiday' look, pair it with a bomber jacket. And because a birthday is an official celebration, the pencil skirt adds a solemn touch." ,
    },
    {
        id: 30,
        name: "Girls' night out",
        ingredients: [ 13, 36, 75, 84 ],
        description: "An evening out with the girls - no men allowed.",
        recipe: "This is the time to wear anything you please! Guys never like jumpsuits. We, however, love the mechanic look. Wear flats, because there are a few men who find jumpsuits sexy with heels. This night out is not about being seductive. Make the most of it and wear tons of gloss - guys hate sticky lips." ,
    },
    {
        id: 31,
        name: "Saturday Night Fever",
        ingredients: [ 9, 41, 62, 83 ],
        description: "In a nightclub. You're going out in search of your soul mate (it could happen in a nightclub) or to chaperone your eighteen-year-old.",
        recipe: "Avoid looking like John Travolta in a white suit - it's a fine look, but it's all been seen and done before. The disco touch is in the gold top. It'll give oafs out cruising the chance to say, 'Wow, you must be good as gold'. And don't bother wearing heels: you need flats to dance all night. Even Cinderella couldn't make it past midnight in heels." ,
    },
    {
        id: 32,
        name: "Dinner on the dunes",
        ingredients: [ 19, 9, 62, 88, 93 ],
        description: "In southern climes, when a well-intentioned friend invites you to picnic on the beach.",
        recipe: "Think of a gypsy in a big flowing dress. But to keep mosquitoes at bay, wear pants under the dress. In the tote, bring a big shawl that can be useful in a multitude of ways - such as keeping the chill off if you don't end up roasting marshmallows over an open fire." ,
    },
    {
        id: 33,
        name: "It's Christmas!",
        ingredients: [ 17, 25, 104, 67, 92 ],
        description: "Christmas Eve.",
        recipe: "Do away with the usual 'dress + jewelry everywhere' look! The hot pink top conveys the festive spirit. You'll look glamorous with the long flowing skirt and a tad casual with the ballerina flats - you're with the family, after all. For sparkle, deck yourself out in rhinestones. And be joyful, it's Christmas!" ,
    },
    {
        id: 34,
        name: "New Year's Eve - it's showtime",
        ingredients: [ 56, 4, 36, 69, 91, 92 ],
        description: "To ring in New Year with good cheer.",
        recipe: "Whoopee, you can finally wear all the sequins you want without anyone saying, ironically, 'Wow, look who's channeling New Year's Eve!' Wear white for this night out. If you're asked why, simply say, 'It's a tradition in Brazil.' After all, having experienced many a New Year's Eve party, you've learned one thing: party attire is really just a state of mind." ,
    },
];

const looksByCategories = [
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
    return looks
        .map((look) => {
            look.ingredients = look.ingredients.map((item) => garments.find(garment => garment.id === item));
            return look;
        });
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
