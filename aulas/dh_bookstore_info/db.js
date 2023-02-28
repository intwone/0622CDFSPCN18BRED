const colectionBooks = [
    {
        id: 1,
        title: "Recess: School's Out",
        total_pages: 99,
        author: "Cheryl Herculeson",
        release_year: "2005",
        stock: 40,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 2,
        title: "'Human' Factor, The (Human Factor, The)",
        total_pages: 393,
        author: "Rickard Itschakov",
        release_year: "2001",
        stock: 51,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 3,
        title: "idng Alone for Thousands of Miles (Qian li zou dan qi)",
        total_pages: 42,
        author: "Cicely Plid",
        release_year: "99",
        stock: 33,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },

    {
        id: 4,
        title: "ayer, The",
        total_pages: 178,
        author: "Binny Tofpik",
        release_year: "2000",
        stock: 64,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 5,
        title: "Needle, The (Igla)",
        total_pages: 274,
        author: "Charleen Gundrey",
        release_year: "1993",
        stock: 56,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 6,
        title: "End of the Game (Der Richter und sein Henker)",
        total_pages: 269,
        author: "Peri Rigbye",
        release_year: "2008",
        stock: 25,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 7,
        title: "Midin Sweden",
        total_pages: 33,
        author: "onstance Vatre",
        release_year: "2008",
        stock: 42,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },

    {
        id: 8,
        title: "Why Stop Now",
        total_pages: 307,
        author: "Marice Rupprecht",
        release_year: "2009",
        stock: 8,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 9,
        title: "Almost You",
        total_pages: 90,
        author: "Siana Mably",
        release_year: "1994",
        stock: 44,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 10,
        title: "Prom Night III: The Last Kiss",
        total_pages: 497,
        author: "Parnell Corson",
        release_year: "2003",
        stock: 96,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 11,
        title: "Bothersome Man, The (Brysomme mannen, Den)",
        total_pages: 283,
        author: "Sutherlan Newiss",
        release_year: "1991",
        stock: 77,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 12,
        title: "Hustler, The",
        total_pages: 218,
        author: "Deeann Jochanany",
        release_year: "1996",
        stock: 30,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 13,
        title: "Along Came Jones",
        total_pages: 333,
        author: "Alejandro Warters",
        release_year: "2008",
        stock: 9,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 14,
        title: "Barbershop 2: Back in Business",
        total_pages: 52,
        author: "Carlie Shall",
        release_year: "2011",
        stock: 58,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 15,
        title: "Bide, The (Die Brücke)",
        total_pages: 30,
        author: "Amber Blevin",
        release_year: "1990",
        stock: 35,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 16,
        title: "Telling You",
        total_pages: 252,
        author: "Ignace MacDiarmond",
        release_year: "1998",
        stock: 64,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 17,
        title: "Blood of Redemption",
        total_pages: 428,
        author: "Ignacius idsdale",
        release_year: "199",
        stock: 2,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 18,
        title: "Carry on Spying (Agent Oooh!)",
        total_pages: 490,
        author: "Carlota Storm",
        release_year: "2000",
        stock: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 19,
        title: "Nomads",
        total_pages: 155,
        author: "Galvin Barroux",
        release_year: "1996",
        stock: 54,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 20,
        title: "Life and Death of Colonel Blimp, The",
        total_pages: 500,
        author: "Augie Levin",
        release_year: "1992",
        stock: 16,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 21,
        title: "Waterloo",
        total_pages: 284,
        author: "Judd Oxbrough",
        release_year: "1999",
        stock: 79,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 22,
        title: "Heart Is Deceitful Above All Things, The",
        total_pages: 119,
        author: "Loleta Comazzo",
        release_year: "2011",
        stock: 3,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 23,
        title: "Soldiers of Fortune",
        total_pages: 229,
        author: "Mikaela Flintoffe",
        release_year: "2008",
        stock: 3,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 24,
        title: "Simply Irresistible",
        total_pages: 286,
        author: "Tina Coldbathe",
        release_year: "1998",
        stock: 32,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 25,
        title: "Subject Two",
        total_pages: 109,
        author: "Osbourn Darbey",
        release_year: "2007",
        stock: 4,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 26,
        title: "Go for Broke!",
        total_pages: 378,
        author: "Alanna Plaster",
        release_year: "2010",
        stock: 93,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 27,
        title: "Archie To Riverdale and Back Again",
        total_pages: 417,
        author: "Meggi Beadles",
        release_year: "1988",
        stock: 59,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 28,
        title: "Alla älskar Alice",
        total_pages: 225,
        author: "Jeffry Gibbeson",
        release_year: "2004",
        stock: 56,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 29,
        title: "Surgeon, The",
        total_pages: 264,
        author: "Garvey Cleworth",
        release_year: "1992",
        stock: 87,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 30,
        title: "Daughter of Dr. Jeckyll",
        total_pages: 165,
        author: "Edythe Maurice",
        release_year: "2002",
        stock: 89,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 31,
        title: "Chambermidon the Titanic, The (Femme de chambre du Titanic, La)",
        total_pages: 115,
        author: "Marnia Cubberley",
        release_year: "1998",
        stock: 75,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 32,
        title: "The Hearts of Age",
        total_pages: 378,
        author: "Tymon Girodin",
        release_year: "2010",
        stock: 68,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 33,
        title: "Mr. Kinky",
        total_pages: 117,
        author: "Russ Collocott",
        release_year: "2009",
        stock: 66,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 34,
        title: "Play it to the Bone",
        total_pages: 376,
        author: "Haily Stilldale",
        release_year: "1976",
        stock: 74,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 35,
        title: "Love Field",
        total_pages: 126,
        author: "Johna Burgin",
        release_year: "2012",
        stock: 52,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 36,
        title: "Dirty Love",
        total_pages: 210,
        author: "Hort Restorick",
        release_year: "2012",
        stock: 40,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 37,
        title: "The Beaver Trilogy",
        total_pages: 127,
        author: "Maurene Rickell",
        release_year: "1995",
        stock: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 38,
        title: "Doppelgänger Paul",
        total_pages: 51,
        author: "Marrissa Woolford",
        release_year: "1994",
        stock: 70,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 39,
        title: "Annabelle",
        total_pages: 123,
        author: "John Osbourn",
        release_year: "2003",
        stock: 80,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 40,
        title: "Wild Wild West Revisited, The",
        total_pages: 158,
        author: "Daveen Boak",
        release_year: "2007",
        stock: 40,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 41,
        title: "Aristocats, The",
        total_pages: 77,
        author: "Jason Ratie",
        release_year: "2009",
        stock: 55,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 42,
        title: "Lionheart",
        total_pages: 184,
        author: "Adolf Detloff",
        release_year: "2009",
        stock: 39,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 43,
        title: "Sometime in August (Mitte Ende August)",
        total_pages: 480,
        author: "Kitti Punshon",
        release_year: "2007",
        stock: 13,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 44,
        title: "Criss Cross",
        total_pages: 53,
        author: "Ronica Shildrick",
        release_year: "2008",
        stock: 94,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 45,
        title: "That Awkward Moment",
        total_pages: 140,
        author: "Trip Riguard",
        release_year: "1983",
        stock: 50,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 46,
        title: "Last Days, The (Últimos días, Los)",
        total_pages: 281,
        author: "Armando Doswell",
        release_year: "2006",
        stock: 86,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 47,
        title: "Fled",
        total_pages: 134,
        author: "Kenon Yong",
        release_year: "1995",
        stock: 56,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 48,
        title: "Hope Springs",
        total_pages: 65,
        author: "Arther Mercy",
        release_year: "2006",
        stock: 48,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 49,
        title: "Final Inquiry, The (Inquiry, The) (inchiesta, L')",
        total_pages: 162,
        author: "Hannie Seres",
        release_year: "1994",
        stock: 70,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 50,
        title: "Resurrecting the Champ",
        total_pages: 140,
        author: "Fraze Whickman",
        release_year: "1997",
        stock: 75,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 51,
        title: "Given Word, The (O Pagador de Promessas)",
        total_pages: 121,
        author: "Xever Nelsen",
        release_year: "2005",
        stock: 69,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 52,
        title: "Cave, The",
        total_pages: 448,
        author: "Prince Saladine",
        release_year: "1995",
        stock: 79,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 53,
        title: "Treasure of the Yankee Zephyr (Race for the Yankee Zephyr)",
        total_pages: 470,
        author: "Fawne Wakeham",
        release_year: "2007",
        stock: 45,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 54,
        title: "Lake Plaid",
        total_pages: 183,
        author: "Genevieve Coe",
        release_year: "2007",
        stock: 97,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 55,
        title: "Vivre sa vie: Film en douze tableaux (My Life to Live)",
        total_pages: 412,
        author: "Elle Patton",
        release_year: "1989",
        stock: 34,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 56,
        title: "Kevin Hart: Let Me Explain",
        total_pages: 244,
        author: "Marwin Petrelluzzi",
        release_year: "1998",
        stock: 52,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 57,
        title: "Return of the Secaucus 7",
        total_pages: 110,
        author: "Ervin Dowse",
        release_year: "1987",
        stock: 76,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 58,
        title: "Flaming Star",
        total_pages: 248,
        author: "Jennee Warburton",
        release_year: "1997",
        stock: 31,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 59,
        title: "Misunderstood",
        total_pages: 149,
        author: "Sarajane Kemball",
        release_year: "2008",
        stock: 17,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 60,
        title: "Drones",
        total_pages: 423,
        author: "Kinsley Le Prevost",
        release_year: "2009",
        stock: 67,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 61,
        title: "In Eagle Shadow Fist (Ding tian li di) (Fist of Anger)",
        total_pages: 269,
        author: "Johna Betteney",
        release_year: "1999",
        stock: 6,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 62,
        title: "Istanbul",
        total_pages: 149,
        author: "Petra Clark",
        release_year: "2001",
        stock: 87,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 63,
        title: "Anvil! The Story of Anvil",
        total_pages: 430,
        author: "Sallie Menloe",
        release_year: "1987",
        stock: 6,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 64,
        title: "Thale",
        total_pages: 437,
        author: "Emelen Samples",
        release_year: "2001",
        stock: 7,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 65,
        title: "Day of the Dolphin, The",
        total_pages: 283,
        author: "Rochella Alessandretti",
        release_year: "2007",
        stock: 37,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 66,
        title: "Istanbul",
        total_pages: 65,
        author: "Don McKissack",
        release_year: "1999",
        stock: 7,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 67,
        title: "HealtH",
        total_pages: 173,
        author: "Colette Lauga",
        release_year: "1995",
        stock: 17,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 68,
        title: "Tales from the Script",
        total_pages: 334,
        author: "Malcolm Ionn",
        release_year: "2012",
        stock: 10,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 69,
        title: "Desert Hearts",
        total_pages: 355,
        author: "Bernarr Rayne",
        release_year: "2005",
        stock: 24,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 70,
        title: "Golden Coach, The (Le carrosse d'or)",
        total_pages: 294,
        author: "Elsie Petroselli",
        release_year: "1995",
        stock: 46,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 71,
        title: "Patsy",
        total_pages: 339,
        author: "Laney Van Daalen",
        release_year: "1988",
        stock: 11,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 72,
        title: "Jeff, Who Lives at Home",
        total_pages: 281,
        author: "Shandy Godain",
        release_year: "1992",
        stock: 13,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 73,
        title: "Two Deaths",
        total_pages: 385,
        author: "Tyrus Tesyro",
        release_year: "1992",
        stock: 17,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 74,
        title: "Thieves' Highway",
        total_pages: 165,
        author: "Bren Cartmail",
        release_year: "2011",
        stock: 2,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 75,
        title: "Foosball (Metegol)",
        total_pages: 265,
        author: "Brandais Verman",
        release_year: "1993",
        stock: 66,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 76,
        title: "Aelita: The Queen of Mars (Aelita)",
        total_pages: 95,
        author: "Gabriel Stitcher",
        release_year: "2010",
        stock: 53,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 77,
        title: "Belarmino",
        total_pages: 365,
        author: "Lucina Ganniclifft",
        release_year: "2011",
        stock: 49,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 78,
        title: "Unknown Soldier, The (Tuntematon sotilas)",
        total_pages: 404,
        author: "Martha Kembrey",
        release_year: "1997",
        stock: 50,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 79,
        title: "Dawn of the Dead",
        total_pages: 62,
        author: "Ron Wadie",
        release_year: "2012",
        stock: 74,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 80,
        title: "Sicko",
        total_pages: 484,
        author: "Alejoa Slimming",
        release_year: "1998",
        stock: 92,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 81,
        title: "Greetings",
        total_pages: 155,
        author: "Alessandro MacNulty",
        release_year: "1993",
        stock: 84,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 82,
        title: "Sexy Beast",
        total_pages: 55,
        author: "Barnaby Martyntsev",
        release_year: "1998",
        stock: 14,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 83,
        title: "Scarlet Street",
        total_pages: 423,
        author: "Valli Skitteral",
        release_year: "2006",
        stock: 18,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 84,
        title: "Trois",
        total_pages: 489,
        author: "Rosanne Grelka",
        release_year: "1997",
        stock: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 85,
        title: "With a Bike, The (Le gamin au vélo)",
        total_pages: 36,
        author: "Dynah Trott",
        release_year: "2005",
        stock: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 86,
        title: "Arsène Lupin",
        total_pages: 346,
        author: "Jacquenetta Worshall",
        release_year: "2000",
        stock: 92,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 87,
        title: "Arn: The Knight Templar (Arn - Tempelidaren)",
        total_pages: 75,
        author: "Sloan Turfes",
        release_year: "1993",
        stock: 10,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 88,
        title: "Satan Bug, The",
        total_pages: 315,
        author: "Orson Endricci",
        release_year: "2012",
        stock: 98,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 89,
        title: "Devils on the Doorstep (Guizi lai le)",
        total_pages: 436,
        author: "Val Fealey",
        release_year: "2011",
        stock: 10,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 90,
        title: "Wicked Little Things",
        total_pages: 482,
        author: "Aguie Leatherland",
        release_year: "1998",
        stock: 54,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 91,
        title: "Indie Game: The Movie",
        total_pages: 349,
        author: "Emmit Robotham",
        release_year: "2011",
        stock: 89,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 92,
        title: "Eden",
        total_pages: 260,
        author: "Fons Grigorini",
        release_year: "1999",
        stock: 15,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 93,
        title: "Notorious C.H.O.",
        total_pages: 404,
        author: "Teddie Bradly",
        release_year: "2005",
        stock: 78,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 94,
        title: "Hands Across the Table",
        total_pages: 174,
        author: "Boote Wildber",
        release_year: "2013",
        stock: 91,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 95,
        title: "Honey (Miele)",
        total_pages: 467,
        author: "Brigitta Parkman",
        release_year: "2001",
        stock: 43,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 96,
        title: "From Beyond the Grave (Creatures)",
        total_pages: 170,
        author: "Beau Pizer",
        release_year: "1998",
        stock: 23,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 97,
        title: "Hangar 18",
        total_pages: 236,
        author: "Rancell Wickliffe",
        release_year: "1985",
        stock: 33,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 98,
        title: "Sons and Lovers",
        total_pages: 437,
        author: "Chantal id",
        release_year: "195",
        stock: 9,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 99,
        title: "Frost/Nixon",
        total_pages: 202,
        author: "Patrizia Fairbourne",
        release_year: "2009",
        stock: 97,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 100,
        title: "Train of Shadows (Tren de sombras)",
        total_pages: 413,
        author: "Barry Briztman",
        release_year: "1986",
        stock: 70,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
]
