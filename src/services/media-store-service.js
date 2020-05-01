// Main service file
// MSS - media store service
export default class MSS {

    // initial data
    data = {
        books:[
            // 0
            {
                title       : '1984',
                author      : 'G. Orwell',
                pictureUrl  : 'https://images-na.ssl-images-amazon.com/images/I/81Hs%2BIrRmwL.jpg',
                price       : 35,
                liked       : 189,
                description : "Nineteen Eighty-Four: A Novel, often published as 1984, is a dystopian novel by English novelist George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime",
                bestseller  : true,
            },
            // 1
            {
                title       : 'Sword of Destiny',
                author      : 'A. Sapkowski',
                pictureUrl  : 'https://images-na.ssl-images-amazon.com/images/I/81KVUwnRuML.jpg',
                price       : 52,
                liked       : 346,
                description : "Sword of Destiny is the second of the two collections of short stories, both preceding the main Witcher Saga. The stories were written by Polish fantasy author Andrzej Sapkowski. The first Polish edition was published in 1992; the English edition was published in the UK by Gollancz in 2015",
                bestseller  : true,
            },
            // 2
            {
                title       : 'War & Peace: tome 4',
                author      : 'L. Tolstoy',
                pictureUrl  : 'https://images-na.ssl-images-amazon.com/images/I/51s4UBf-y8L.jpg',
                price       : 27,
                liked       : 270,
                description : "War and Peace is a novel by the Russian author Leo Tolstoy, published serially, then in its entirety in 1869. It is regarded as one of Tolstoy's finest literary achievements and remains a classic of world literature",
                bestseller  : false,
            },
            // 3
            {
                title       : 'React.js',
                author      : 'L. Lopez',
                pictureUrl  : 'https://images-na.ssl-images-amazon.com/images/I/41301Q9P5NL._SX331_BO1,204,203,200_.jpg',
                price       : 23,
                liked       : 86,
                description : "Welcome to React.js Book. A narrative tutorial book. I've been a web developer since Netscape Navigator days in the 1990's. When it was known as the first browser to support JavaScript. Today of course, JavaScript landscape is nothing as it used to be.",
                bestseller  : true,
            },
            // 4
            {
                title       : 'Release It!',
                author      : 'M. T. Nygard',
                pictureUrl  : 'https://miro.medium.com/max/4500/1*j7STUZvdTtUCLgjFncTgWA.jpeg',
                price       : 45,
                liked       : 489,
                description : "A single dramatic software failure can cost a company millions of dollars - but can be avoided with simple changes to design and architecture. This new edition of the best-selling industry standard shows you how to create systems that run longer, with fewer failures, and recover better when bad things happen.",
                bestseller  : true,
            },
            // 5
            {
                title       : 'Pride & Prejudice',
                author      : 'J. Austen',
                pictureUrl  : 'https://m.media-amazon.com/images/I/51tiK-eB3JL.jpg',
                price       : 49,
                liked       : 257,
                description : "Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book",
                bestseller  : false,
            },

        ],
        movies:[
            // 0
            {
                title: 'The Avengers',
                director: 'J.& A. Russo',
                pictureUrl: 'https://tvguide1.cbsistatic.com/feed/1/809/99924809.jpg',
                price: 15,
                liked: 108,
                description: "Rogers, Stark, Romanoff, Barton, and Thor rally in defense of New York City, the wormhole's location. Banner arrives and transforms into the Hulk, and together the Avengers battle the Chitauri while evacuating civilians. The Hulk finds Loki and beats him into submission. Romanoff makes her way to the wormhole generator, where Selvig, freed from Loki's mind control, reveals that Loki's scepter can be used to shut down the generator. Meanwhile, Fury's superiors from the World Security Council attempt to end the invasion by launching a nuclear missile at Midtown Manhattan. Stark intercepts the missile and takes it through the wormhole toward the Chitauri fleet. The missile detonates, destroying the Chitauri mothership and disabling their forces on Earth.",
                bestseller: false,
            },
            // 1
            {
                title: 'Avatar',
                director: 'J. Cameron',
                pictureUrl: 'https://i.pinimg.com/originals/3f/18/9f/3f189f1f786a5e2dcb08a2b81e829c34.jpg',
                price: 25,
                liked: 786,
                description: "James Cameron. SOME BODY ONE'S TOLD ME THAT WORLD IS GONNA ROLL ME. LYA LYA LYA LYA LYA LA LYA LYA LYAAA LYAAAAA",
                bestseller: true,
            },
            // 2
            {
                title: 'Fast & Furiuos 8',
                director: 'F. Gary Gray',
                pictureUrl: 'https://i.pinimg.com/originals/8f/a7/db/8fa7dbac6ae5e03f4a2b1757e58e09e0.jpg',
                price: 20,
                liked: 543,
                description: "Dom encounters a mysterious woman, Cipher, who gets him involved in the world of terrorism. The crew has to reunite to stop Cipher and save the man who brought them together as a family.",
                bestseller: false,
            },
            // 3
            {
                title: 'Peaky Blinders',
                director: 'S. Knight',
                pictureUrl: 'https://vignette.wikia.nocookie.net/peaky-blinders/images/a/a0/Series_5_Promotional.jpg/revision/latest/scale-to-width-down/340?cb=20190918165356',
                price: 70,
                liked: 679,
                description: "Peaky Blinders is a British period crime drama television series created by Steven Knight. Set in Birmingham, England, the series follows the exploits of the Shelby crime family in the direct aftermath of the First World War. ... The fifth series premiered on BBC One on 25 August 2019 and finished on 22 September 2019.",
                bestseller: true,
            },
            // 4
            {
                title: 'Sherlock Holmes: A Game of Shadows',
                director: 'G. Ritchie',
                pictureUrl: 'https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_.jpg',
                price: 50,
                liked: 234,
                description: "Sherlock Holmes investigates a series of murders that lead him to Professor Moriarty. However, he, along with his associate, Dr Watson, must do everything to thwart the professor's evil plans.",
                bestseller: false,
            },
            // 5
            {
                title: 'From Paris with love',
                director: 'P. Morel',
                pictureUrl: 'https://www.gstatic.com/tv/thumb/v22vodart/3501155/p3501155_v_v8_ad.jpg',
                price: 32,
                liked: 399,
                description: "An unlikely pair of a young employee from the office of the US Ambassador in Paris and an American spy come together in order to stop a terrorist attack in the city.",
                bestseller: false,
            },
        ],
        games:[
            // 0
            {
                title: "Tom Clancy's Rainbow Six Siege",
                genre: 'Shooter, Action',
                developer: 'Ubisoft Montreal',
                price: 15,
                liked: 471,
                description: "Tom Clancy's Rainbow Six Siege is an online tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft. It was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on December 1, 2015.",
                bestseller: true,
                pictureUrl: 'https://images.g2a.com/newlayout/323x433/1x1x0/8a01585e44b4/5c655f4d5bafe30a6d34a3e2',
            },
            // 1
            {
                title: "Assassin's Creed IV: Black Flag",
                genre: 'Stealth-Action',
                developer: 'Ubisoft',
                price: 25,
                liked: 135,
                description: "Assassin's Creed IV: Black Flag is an action-adventure video game developed by Ubisoft Montreal and published by Ubisoft. It is the sixth major installment in the Assassin's Creed series. Its historical timeframe precedes that of Assassin's Creed III, though its modern-day sequences succeed III's own.",
                bestseller: false,
                pictureUrl: 'https://cdn-products.eneba.com/resized-products/vqv03fmtmnvnvlolm6b5_390x400_1x-0.jpg',
            },
            // 2
            {
                title: "Brawl Stars",
                genre: 'Action',
                developer: 'Supercell',
                price: 0,
                liked: 1450,
                description: "Brawl Stars is a freemium mobile video game developed and published by the Finnish video game company Supercell.",
                bestseller: false,
                pictureUrl: 'https://img.redbull.com/images/c_crop,x_548,y_0,h_1080,w_864/c_fill,w_860,h_1075/q_auto,f_auto/redbullcom/2020/3/5/zdul8ghfo1hogo5jkn1e/brawl-stars',
            },
            // 3
            {
                title: "The Elder Scrolls V: Skyrim",
                genre: 'Adventure',
                developer: 'Bethesda',
                price: 19,
                liked: 410,
                description: "The Elder Scrolls V: Skyrim is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks.",
                bestseller: true,
                pictureUrl: 'https://s1.gaming-cdn.com/images/products/1512/orig/the-elder-scrolls-v-skyrim-special-edition-cover.jpg',
            },
            // 4
            {
                title: "Minecraft",
                genre: 'Adventure, Sandbox',
                developer: 'Microsoft',
                price: 25,
                liked: 1589,
                description: "Minecraft s a sandbox construction game created by Mojang AB founder Markus 'Notch' Person, inspired by Infiniminer, Dwarf Fortress, Dungeon Keeper, and Notch's past games Legend of the Chambered and RubyDung. Gameplay involves players interacting with the game world by placing and breaking various types of blocks in a three-dimensional environment.",
                bestseller: true,
                pictureUrl: 'https://cdn-products.eneba.com/resized-products/Xl1yxdDvS66HrBBK3wVM03JuBzJrcXmJyz91if0l2NA_390x400_1x-0.jpeg',
            },
            // 5
            {
                title: "Flappy Bird",
                genre: 'Arcade',
                developer: 'dotGears',
                price: 0,
                liked: 532,
                description: "Say 'Goodbye' to your nerves",
                bestseller: false,
                pictureUrl: 'https://www.mobygames.com/images/shots/l/664061-flappy-bird-iphone-screenshot-title-screen.jpg',
            },
        ],
        music:[]
    }

    getter(item) {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(this.data[item])
            }, 2000)
        }) 
    }

    getAllBooks () {
        return this.getter('books')
    }

    getAllGames () {
        return this.getter('games')
    }

    getAllMovies () {
        return this.getter('movies')
    }

    getBooks() {
        return this.data['books'];
    }

    getMostLiked(topic) {
        return new Promise( (resolve) => {
            setTimeout( () => {
                let maxLikes = 0;
                this.data[topic].forEach((item) => {
                    if (item.liked > maxLikes) {
                        maxLikes = item.liked
                    }
                })
                const item = this.data[topic].filter( ( item ) => {
                    return item.liked === maxLikes;
                })
                const idx = this.data[topic].findIndex( ( item ) => {
                    return item.liked === maxLikes;
                })
                resolve( {item: item[0], idx} )
            }, 1500);
        });
    };

    getBestseller(topic) {
        return new Promise( (resolve) => {
            setTimeout( () => {
                let bestsellers = this.data[topic].filter( item => {
                    return item.bestseller === true;
                });
                let bestsellerAmount = bestsellers.length;
                const itemBesteller = bestsellers[Math.round(Math.random() * (bestsellerAmount - 1)) ];
                const idx = this.data[topic].findIndex( item => {
                    return item.title === itemBesteller.title;
                });
                resolve({ item: itemBesteller, idx});
            }, 1500);
        });
    };

    getUnusual(topic, parameter) {
        return parameter === 'mostLiked' ? this.getMostLiked(topic) : this.getBestseller(topic);
    }

    getSpecificItem( id, topic ) {
        return new Promise( (resolve) => {
            setTimeout( () => {
                resolve((this.data[topic])[id]);
            }, 2000)
        });
    }
};
