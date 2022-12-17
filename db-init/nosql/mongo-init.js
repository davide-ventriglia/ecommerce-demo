db = db.getSiblingDB('ecommerce-demo');

db.createCollection('products');

db.products.insertMany([
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/f696430be718494fac1d6542cfb22542/EGS_MarvelsSpiderManMilesMorales_InsomniacGamesNixxesSoftware_S2_1200x1600-58989e7116de3f70a2ae6ea56ee202c6?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/marvels-spider-man-miles-morales",
            "pegi": "PEGI 16",
            "score": "4.8",
            "description": "Teenage Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. When a fierce power struggle threatens to destroy his home, Miles must take up the mantle of Spider-Man and own it.",
            "genre": [
                "Action",
                "Open World"
            ],
            "features": [
                "Cloud Saves",
                "Single Player",
                "Controller Support"
            ],
           "developer": [
                "Insomniac Games, Nixxes Software"
            ],
            "publisher": [
                "PlayStation PC LLC"
            ],
            "release_date": [
                "11/18/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Marvel\u2019s Spider-Man: Miles Morales",
        "price": 49.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/6e0edb69052f4f8a853fb8a60bde8eb8/timewell_trail_of_celestes-1gg9e.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/timewell_trail_of_celestes-0c45ea",
            "pegi": null,
            "score": null,
            "description": "Timewell: Trail of Celestes is an old-school story-driven 4 DOF 3D space shooter RPG. As A.I. SAT-V, explore exotic planets and fight with Constructs in an ever-deepening plot. Change her skills and adaptations on the fly. May you guide SAT-V to her destiny?",
            "genre": [
                "Action",
                "RPG",
                "Space"
            ],
            "features": [
                "Single Player",
                "Challenging Combat"
            ],
           "developer": [
                "OZBER CIN"
            ],
            "publisher": [
                "OZBER CIN"
            ],
            "available": [
                "11/18/22"
            ],
            "initial_release": [
                "09/12/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Timewell: Trail Of Celestes",
        "price": 19.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/8a9ed55b9194493a840486b58ac6c404/i-saw-black-clouds-3tu74.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/i-saw-black-clouds-67008d",
            "pegi": null,
            "score": null,
            "description": "After the unexpected death of a close friend, Kristina returns to her hometown looking for answers, only to unearth a string of dark secrets. I Saw Black Clouds is an interactive psychological thriller with supernatural elements and branching storylines.",
            "genre": [
                "Action-Adventure",
                "Horror",
                "Indie"
            ],
            "features": [
                "Controller Support",
                "Single Player"
            ],
           "developer": [
                "Ghost Dog Films"
            ],
            "publisher": [
                "Wales Interactive"
            ],
            "release_date": [
                "11/18/22"
            ],
            "initial_release": [
                "03/30/21"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "I Saw Black Clouds",
        "price": 8.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/1ec31f046d704703bc6e033f8776cae0/night-book-17lnr.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/night-book-77f2c7",
            "pegi": null,
            "score": null,
            "description": "Tricked into reading an ancient book, Loralyn summons a demon into her home. Night Book is an interactive occult thriller movie, created in lockdown, from the publishers of The Complex, Five Dates and Maid of Sker.",
            "genre": [
                "Adventure",
                "Indie",
                "Simulation"
            ],
            "features": [
                "Controller Support",
                "Single Player"
            ],
           "developer": [
                "Wales Interactive, Good Gate Media"
            ],
            "publisher": [
                "Wales Interactive"
            ],
            "release_date": [
                "11/18/22"
            ],
            "initial_release": [
                "07/27/21"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Night Book",
        "price": 8.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/50bbaf85f4454b1c88786efeede5b302/EGS_GoatSimulator3_CoffeeStainNorthAB_S2_1200x1600-99737fa8a749438ca909c776a4cd9b89?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/goat-simulator-3",
            "pegi": "PEGI 12",
            "score": "4.9",
            "description": "Pilgor\u2019s baaack! Gather your herd and venture forth into Goat Simulator 3; an all-new, totally realistic, multiplayer sandbox farmyard experience.",
            "genre": [
                "Comedy",
                "Adventure"
            ],
            "features": [
                "Co-op",
                "Multiplayer",
                "Single Player"
            ],
           "developer": [
                "Coffee Stain North AB"
            ],
            "publisher": [
                "Coffee Stain Publishing AB"
            ],
            "release_date": [
                "11/17/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Goat Simulator 3",
        "price": 12.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/62dde68a8e2a400da4f259d970803658/EGS_MyFantasticRanch_PieceofCakeFabulous_S2_1200x1600-257b90f0d0f4d43cd92d36a7c057706f?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/my-fantastic-ranch",
            "pegi": null,
            "score": null,
            "description": "Train dragons and unicorns in your fantastic ranch. Take care of them and build relationships between them and students through riding lessons. Become the most famous ranch in the enchanted kingdom!",
            "genre": [
                "\u00e2\u0080\u0093"
            ],
            "features": [
                "Cloud Saves",
                "Single Player"
            ],
           "developer": [
                "Piece of Cake Fabulous"
            ],
            "publisher": [
                "Nacon"
            ],
            "release_date": [
                "11/17/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "My Fantastic Ranch",
        "price": 23.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/5a0d22d5c77d4d498258589e1df15805/cursed-castilla--maldita-castilla-ex-1s525.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/cursed-castilla-maldita-castilla-ex-adaa43",
            "pegi": null,
            "score": null,
            "description": "An arcade action platformer full of creatures from medieval myths from Spain and the rest of Europe, as well as from chivalric romances. This game is an extended and improved version of the renowned classic arcade Maldita Castilla, originally created by the indie Locomalito.",
            "genre": [
                "Action-Adventure",
                "Indie",
                "Platformer"
            ],
            "features": [
                "Single Player",
                "Controller Support"
            ],
           "developer": [
                "Locomalito & Gryzor87"
            ],
            "publisher": [
                "Abylight Studios"
            ],
            "release_date": [
                "11/17/22"
            ],
            "initial_release": [
                "10/20/16"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Cursed Castilla (Maldita Castilla EX)",
        "price": 11.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/e72c116d0bfa48348d08dc9fc78b1a4a/download-fire-commander-offer-1w7lt.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/fire-commander-df24ad",
            "pegi": null,
            "score": null,
            "description": "See what it means to face the fire. Command a firefighting unit in an exciting tactical RTS. Save lives and care for your team in 30+ missions. Be a real hero!",
            "genre": [
                "Strategy",
                "Action"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Atomic Wolf, Pixel Crow Games"
            ],
            "publisher": [
                "Movie Games S.A."
            ],
            "release_date": [
                "11/15/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Fire Commander",
        "price": 11.99
    },
    {
        "details": {
            "image_url": "https://cdn2.unrealengine.com/atla-productart-1200x1600-1200x1600-59caced19b71.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/brawlhalla",
            "pegi": null,
            "score": "4.4",
            "description": "An epic platform fighter for up to 8 players online or locally. Try casual free-for-alls, ranked matches, or invite friends to a private room. And it's free! Play cross-platform with millions of players on PlayStation, Xbox, Nintendo Switch, iOS, Android and Steam! Frequent updates. Over fifty Legends.",
            "genre": [
                "Casual",
                "Fighting",
                "Indie"
            ],
            "features": [
                "Multiplayer"
            ],
            "developer": [
                "Blue Mammoth Games"
            ],
            "publisher": [
                "Ubisoft"
            ],
            "release_date": [
                "11/15/22"
            ],
            "initial_release": [
                "10/17/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Brawlhalla",
        "price": 19.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/ac98aa34584648f2b71152e509191c1c/EGS_DakarDesertRally_SaberPortoLtd_S6_1200x1600-9b39c1ea860c6ed7bd704bf8768563fa?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/dakar-desert-rally",
            "pegi": null,
            "score": null,
            "description": "Dakar Desert Rally is the biggest off-road rally racing adventure ever developed. Experience the speed and excitement of the largest rally race on the planet, featuring a wide variety of licensed vehicles from motorcycles, cars, trucks, quads and SSVs.",
            "genre": [
                "Simulation",
                "Racing"
            ],
            "features": [
                "Multiplayer",
                "Single Player"
            ],
           "developer": [
                "Saber Porto Ltd."
            ],
            "publisher": [
                "Saber Interactive Inc"
            ],
            "release_date": [
                "11/15/22"
            ],
            "initial_release": [
                "10/04/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Dakar Desert Rally",
        "price": 3.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/22528bcbf30b43a7a44d11be0dda1919/somerville-1204p.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/somerville-229529",
            "pegi": null,
            "score": null,
            "description": "In the wake of catastrophe you must find the means to make your family whole again. Somerville is a Sci-Fi adventure grounded in the intimate repercussions of large scale conflict.",
            "genre": [
                "Adventure"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Jumpship"
            ],
            "publisher": [
                "Jumpship"
            ],
            "release_date": [
                "11/15/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Somerville",
        "price": 19.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/e4a4cf4e51c3487a8ef5913b1cc921e9/download-beat-hazard-3-offer-2jkvu.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/beat-hazard-3-c8ef04",
            "pegi": null,
            "score": null,
            "description": "Are you ready to explore your music collection mapped as a stunning galaxy of wonders? Experience your music collection as never before with this intense music driven twin stick shooter. Each of your songs will have its own unique ebb and flow based on the music.",
            "genre": [
                "Indie",
                "Music",
                "Action"
            ],
            "features": [
                "Single Player",
                "Controller Support"
            ],
           "developer": [
                "Cold Beam Games Ltd"
            ],
            "publisher": [
                "Cold Beam Games Ltd"
            ],
            "release_date": [
                "11/14/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Beat Hazard 3",
        "price": 14.49
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/7b454b704a224782bd1280e61fbe3417/download-terracotta-offer-1nl4l.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/terracotta-72cc62",
            "pegi": null,
            "score": null,
            "description": "Journey into the Qin dynasty and enter  the first Chinese emperor\u2019s tomb. As one of his loyal terracotta warriors, tame your Tao, unleash world-shifting abilities, and overcome puzzles and challenges in the afterlife to rescue the cursed spirits of your fellow warriors.",
            "genre": [
                "Action",
                "Indie"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Appnormals Team"
            ],
            "publisher": [
                "Freedom Games"
            ],
            "release_date": [
                "11/14/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "TERRACOTTA",
        "price": 19.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/c7b771d17305491a9962d0c3de75fe8b/EGS_Starsand_TunnelVisionStudio_S2_1200x1600-91ced8d0de3c173e4ef0922e81957506?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/starsand",
            "pegi": null,
            "score": "4.3",
            "description": "Starsand is a mystic survival game set among the dunes of an arcane desert. An open-world full of danger, vast environments and mysterious happenings awaits you! Explore, hunt, craft, build \u2013 and SURVIVE.",
            "genre": [
                "Action",
                "Simulation",
                "Adventure"
            ],
            "features": [
                "Cloud Saves",
                "Single Player"
            ],
           "developer": [
                "Tunnel Vision Studio "
            ],
            "publisher": [
                "Toplitz Productions"
            ],
            "release_date": [
                "11/14/22"
            ],
            "initial_release": [
                "11/04/21"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Starsand",
        "price": 4.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/be936e5374e941b3bac749e1dc544f94/blossom-tales-ii-the-minotaur-prince-uime1.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/blossom-tales-ii-the-minotaur-prince-e74c95",
            "pegi": null,
            "score": null,
            "description": "The Minotaur King has returned...and it's all your fault! Lily's back for a new \"classic\" action-adventure set hundreds of years after The Sleeping King!",
            "genre": [
                "Puzzle",
                "Indie",
                "Action-Adventure"
            ],
            "features": [
                "Single Player",
                "Controller Support"
            ],
           "developer": [
                "Castle Pixel"
            ],
            "publisher": [
                "Playtonic Friends"
            ],
            "release_date": [
                "11/14/22"
            ],
            "initial_release": [
                "08/16/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Blossom Tales 2: The Minotaur Prince",
        "price": 9.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/58bb38901d564010b2e3ba836b3594c8/mcpixel-3-1gsge.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/mcpixel-3-fae9c2",
            "pegi": null,
            "score": null,
            "description": "McPixel 3 is a mind-blowing save-the-day adventure that sees the titular wanna-be hero avert one disaster after another at every turn using unconventional yet entertaining methods of mayhem.",
            "genre": [
                "Adventure"
            ],
            "features": [
                "Controller Support",
                "Single Player"
            ],
           "developer": [
                "Sos Sosowski"
            ],
            "publisher": [
                "Devolver Digital"
            ],
            "release_date": [
                "11/14/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "McPixel 3",
        "price": 9.75
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/155b39e2ce7b4ed2855125fb2ef1d1a1/CREW_Store_Portrait_1200x1600_1200x1600-182f20fdb49fb698ed54f603bed3966f?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/the-crew",
            "pegi": null,
            "score": null,
            "description": "The Crew is a revolutionary action-driving MMO that connects players online like never before. The Crew takes you and your friends on a wild ride across a massive, open-world recreation of the United States that is richly detailed and loaded with endless challenges. Generous in content and tailored for the connected generation, The Crew is the next-gen game that redefines action-driving.",
            "genre": [
                "Open World",
                "Racing"
            ],
            "features": [
                "Co-op",
                "Multiplayer",
                "Single Player"
            ],
           "developer": [
                "Ivory Tower in collaboration with Ubisoft Reflections"
            ],
            "publisher": [
                "\u00e2\u0080\u0093"
            ],
            "release_date": [
                "11/14/22"
            ],
            "initial_release": [
                "12/02/14"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "The Crew\u00ae \u2013 Standard Edition",
        "price": 49.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/070b53c6f90e4672921a3db624f52761/bloodshore-x4n9e.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/bloodshore-939cb0",
            "pegi": null,
            "score": null,
            "description": "Bloodshore is an interactive action movie about a televised battle royale between high-profile streamers, entertainers and death row inmates. You control the fate of Nick, a washed-up actor who fights for a life-changing cash prize.",
            "genre": [
                "Action",
                "Adventure",
                "Indie"
            ],
            "features": [
                "Controller Support",
                "Single Player"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": null,
        "price": 9.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/7fd889f14b0c44529299484a1ec719c8/download-liberated-offer-artel.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/liberated-f13008",
            "pegi": null,
            "score": null,
            "description": "Liberated is an action-adventure game that unfolds across the pages of a comic book. Seamlessly merging the art of hand-drawn graphic novels with interactivity and side-scrolling action, it\u2019s a revolutionary combination of video games and comics.",
            "genre": [
                "Narration",
                "Indie",
                "Action-Adventure"
            ],
            "features": [
                "Controller Support",
                "Single Player"
            ],
           "developer": [
                "Atomic Wolf / L.INC"
            ],
            "publisher": [
                "Walkabout Games"
            ],
            "release_date": [
                "11/11/22"
            ],
            "initial_release": [
                "07/30/20"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Liberated",
        "price": 15.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/c816cec291404812a9eacc03387dcbca/download-alba--a-wildlife-adventure-offer-zbvu8.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/alba-a-wildlife-adventure-93736a",
            "pegi": null,
            "score": "4.6",
            "description": "Even the smallest person can make a big difference. Join Alba, as she sets out to save her beautiful island and its wildlife. And possibly start a revolution.",
            "genre": [
                "Casual"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "ustwo games"
            ],
            "publisher": [
                "PID Games"
            ],
            "release_date": [
                "11/10/22"
            ],
            "initial_release": [
                "12/11/21"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Alba - A Wildlife Adventure",
        "price": 16.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/250eb8e2ba214c2490ada15e435df3b4/download-fabular--once-upon-a-spacetime-offer-19iy5.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/fabular-once-upon-a-spacetime-b73ba1",
            "pegi": null,
            "score": null,
            "description": "Cross blades with space knights in an epic roguelike where the futuristic and the medieval collide! Battle, loot and upgrade your way across the galaxy, defeating rival ships in gripping melee combat on a quest to save your kingdom from destruction.",
            "genre": [
                "Rogue-Lite"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Spiritus Games"
            ],
            "publisher": [
                "Prismatika"
            ],
            "release_date": [
                "11/10/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Fabular: Once Upon a Spacetime",
        "price": 14.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/a63c142ab48741d290c05bd57013cd6e/hunter-girls-1q38o.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/hunter-girls-96020a",
            "pegi": null,
            "score": null,
            "description": "Hunter Girls is an action-packed 2D running platformer. Prince Alex has been kidnapped, and now three beautiful girls set out to rescue him. Each has a different reason for starting this adventure that you will discover as you meet each; Agnes, Kim, and Flora.",
            "genre": [
                "Platformer",
                "Dungeon Crawler",
                "Action"
            ],
            "features": [
                "Challenging Combat",
                "Single Player"
            ],
           "developer": [
                "Meridian4"
            ],
            "publisher": [
                "Denis Lutsenko"
            ],
            "release_date": [
                "11/09/22"
            ],
            "initial_release": [
                "08/06/21"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Hunter Girls",
        "price": 1.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/1908e0b2a81f4f2e87f60a05c05a4312/paramnesia-12lrq.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/paramnesia-a49100",
            "pegi": null,
            "score": null,
            "description": "Paramnesia is an interactive detective visual novel where Maria, the protagonist of this story, is a member of two radical sects with contradictory opinions. Delve into her mind to understand herself and the truth.",
            "genre": [
                "Adventure",
                "Narration",
                "Indie"
            ],
            "features": [
                "Single Player"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": null,
        "price": 1.19
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/923f0ee996a14beb9d97354665d44fc8/franchise-hockey-manager-9-ysmqo.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/franchise-hockey-manager-9-88aadb",
            "pegi": null,
            "score": null,
            "description": "FHM returns for the 2022-23 season with plenty of additions to the deepest, most authentic hockey strategy gaming experience you can find.  Choose from teams around the globe and select a team to guide to glory, including a chance at the ultimate prize, the Stanley Cup\u00ae.",
            "genre": [
                "Sports",
                "Simulation"
            ],
            "features": [
                "Single Player",
                "Multiplayer"
            ],
           "developer": [
                "Out of the Park Developments and game54 Software"
            ],
            "publisher": [
                "Out of the Park Developments"
            ],
            "release_date": [
                "11/08/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Franchise Hockey Manager 9",
        "price": 39.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/1f5406cae3d244cd881a2628ca7d3d12/nadir--a-grimdark-deckbuilder-1xsp3.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/nadir-a-grimdark-deckbuilder-c70747",
            "pegi": null,
            "score": null,
            "description": "Nadir is a roguelike deck-builder with a twist: the cost to play a card is an enemy reaction you can predict. Craft your own cards to slay powerful demons. Gather resources, expand your city, grow in power and conquer the underworld.",
            "genre": [
                "Card Game"
            ],
            "features": [
                "Challenging Combat"
            ],
           "developer": [
                "Black Eye Games"
            ],
            "publisher": [
                "Black Eye Games"
            ],
            "release_date": [
                "11/08/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Nadir - A Grimdark Deckbuilder",
        "price": 15.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/5c7a78e0c4d640898d690c5e38c0392f/EGS_FootballManager2023_SportsInteractive_S2_1200x1600-f3675b8335f3ebe5837d7d525764f4ab?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/football-manager-2023",
            "pegi": null,
            "score": "4.7",
            "description": "Build your team, establish your managerial style and create a dynasty. Begin your journey to soccer glory. ",
            "genre": [
                "Simulation"
            ],
            "features": [
                "Cloud Saves",
                "Achievements",
                "Multiplayer",
                "Competitive",
                "Single Player"
            ],
           "developer": [
                "Sports Interactive"
            ],
            "publisher": [
                "SEGA"
            ],
            "release_date": [
                "11/08/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Football Manager 2023",
        "price": 8.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/43298d0c48f14635b5e47ec1ee09ee5a/vertical-third-tech-demo-n80z5.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/vertical-third-tech-demo-ccfff7",
            "pegi": null,
            "score": null,
            "description": "Interested in making games? Vertical Third is a massive gameplay framework for Unreal Engine 5. The Tech Demo is an example game included within Vertical Third on the Unreal Engine Marketplace. It is a great place to start with your adventure in to Game Development!",
            "genre": [
                "\u00e2\u0080\u0093"
            ],
            "features": [
                "Multiplayer"
            ],
            "developer": [
                "Stark Gaming Inc"
            ],
            "publisher": [
                "Stark Gaming Inc"
            ],
            "release_date": [
                "11/07/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Vertical Third Tech Demo",
        "price": 0
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/7c44e3f090b443aa9df71123419f2f74/download-atom-rpg-trudograd-offer-4svu3.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/atom-rpg-trudograd-a97244",
            "pegi": null,
            "score": "4.4",
            "description": "ATOM RPG: Trudograd is a turn-based post-apocalyptic roleplaying game, which continues the story of ATOM RPG as a stand-alone sequel/expansion, and follows the traditions set by classic cRPGs such as the early Fallout and Wasteland titles.",
            "genre": [
                "Turn-Based",
                "RPG",
                "Survival"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "ATOM TEAM"
            ],
            "publisher": [
                "ATOM TEAM"
            ],
            "release_date": [
                "11/07/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "ATOM RPG Trudograd",
        "price": 4.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/06d260c76b8944deb5284ea112de336c/download-bloodrayne-betrayal-fresh-bites-offer-xa89p.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/bloodrayne-betrayal-fresh-bites-8f1012",
            "pegi": null,
            "score": null,
            "description": "WayForward has enhanced this 2011 classic with new voice acting -- by Laura Bailey and Troy Baker -- as well as sharpened visuals and rebalanced gameplay. Fight and feed your way through an underground castle to confront Rayne\u2019s father at the behest of the Brimstone Society.",
            "genre": [
                "Action",
                "Platformer"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "WayForward"
            ],
            "publisher": [
                "Ziggurat Interactive"
            ],
            "release_date": [
                "11/04/22"
            ],
            "initial_release": [
                "09/09/21"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "BloodRayne Betrayal: Fresh Bites",
        "price": 15.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/9cbb00a07cdc4ebb8ab347fbadeafdc6/download-bloodrayne-terminal-cut-offer-6hx0l.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/bloodrayne-terminal-cut-929df8",
            "pegi": null,
            "score": null,
            "description": "Enhanced for modern systems, this definitive edition of the action horror game unleashed the red-headed dhampir on the world. In a story spanning five years, Rayne must stop a madman bent on using occult relics to bring about a new age of domination for the Third Reich.",
            "genre": [
                "Action",
                "Horror",
                "Shooter"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Terminal Reality"
            ],
            "publisher": [
                "Ziggurat Interactive"
            ],
            "release_date": [
                "11/04/22"
            ],
            "initial_release": [
                "11/20/20"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "BloodRayne: Terminal Cut",
        "price": 11.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/c29061ea66b2456b90966c36ed121326/download-bloodrayne-2-terminal-cut-offer-12ha3.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/bloodrayne-2-terminal-cut-a5d9d4",
            "pegi": null,
            "score": null,
            "description": "Enhanced for modern systems, this is a definitive edition of Rayne\u2019s second adventure: a blood-soaked rampage of vengeance against the Cult of Kagan, a group led by Rayne's half-siblings that seek to carry out Kagan's legacy by creating a new era of vampire supremacy.",
            "genre": [
                "Horror",
                "Action",
                "Shooter"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Terminal Reality"
            ],
            "publisher": [
                "Ziggurat Interactive"
            ],
            "release_date": [
                "11/04/22"
            ],
            "initial_release": [
                "11/20/20"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "BloodRayne 2: Terminal Cut",
        "price": 11.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/64261a8ee06244638608e47302223b11/who-pressed-mute-on-uncle-marcus-1il6v.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/who-pressed-mute-on-uncle-marucs-ee90a4",
            "pegi": null,
            "score": null,
            "description": "An eccentric FMV murder mystery with a twist: someone has poisoned Uncle Marcus. Uncover the truth in the yearly family quiz and try to save him before it is too late.",
            "genre": [
                "Adventure",
                "Casual",
                "Indie"
            ],
            "features": [
                "Controller Support",
                "Single Player"
            ],
           "developer": [
                "Wales Interactive, Good Gate Media"
            ],
            "publisher": [
                "Wales Interactive"
            ],
            "release_date": [
                "11/04/22"
            ],
            "initial_release": [
                "03/18/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Who Pressed Mute on Uncle Marcus?",
        "price": 9.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/05a8e51fa4f74c39bb35a54f30d3e99e/download-necroworm-offer-12q08.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/necroworm-5784e5",
            "pegi": null,
            "score": null,
            "description": "It's MIDNIGHT, you're DEAD, and got a bad case of THE MUNCHIES. Chew your way through 120 levels of addictive puzzle gameplay, where your only goal is to devour everything but your own wormy self. It's quick, tasty, and hard to resist. Just like a late-night snack.",
            "genre": [
                "Puzzle"
            ],
            "features": [
                "Controller Support",
                "Single Player"
            ],
           "developer": [
                "Postpunk Games"
            ],
            "publisher": [
                "Walkabout Games"
            ],
            "release_date": [
                "11/04/22"
            ],
            "initial_release": [
                "05/18/17"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "NecroWorm",
        "price": 3.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/1dcddbcc334945c48353b75a8fce5e5e/EGS_Dishonored2_ArkaneStudios_S2_1200x1600-96a53bbf6b94c5c93e568faebeffeb69?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/dishonored-2",
            "pegi": "PEGI 18",
            "score": "4.8",
            "description": "Dishonored 2 is set 15 years after the Lord Regent has been vanquished. An otherworldly usurper has seized Empress Emily Kaldwin\u2019s throne. As Emily or Corvo, travel to Karnaca to track down your enemies and take back what\u2019s rightfully yours.",
            "genre": [
                "Action",
                "Stealth",
                "Adventure"
            ],
            "features": [
                "Cloud Saves",
                "Single Player"
            ],
           "developer": [
                "Arkane Studios"
            ],
            "publisher": [
                "Bethesda Softworks"
            ],
            "release_date": [
                "11/03/22"
            ],
            "initial_release": [
                "11/11/16"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Dishonored 2",
        "price": 5.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/5f1eb1585c6049199a499059c2326087/download-monster-harvest-offer-6df43.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/monster-harvest-75f018",
            "pegi": null,
            "score": null,
            "description": "Monster Harvest is a monster collecting and farming action RPG with a twist! Grow, collect and mutate your crops then take them into battle",
            "genre": [
                "Action-Adventure",
                "Exploration",
                "Casual"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Maple Powered Games"
            ],
            "publisher": [
                "Merge Games Ltd"
            ],
            "release_date": [
                "11/03/22"
            ],
            "initial_release": [
                "08/31/21"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Monster Harvest",
        "price": 13.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/3786d94efeb348db95de16abba81e9e3/download-wrc-generations--the-fia-wrc-official-game-offer-7ihrm.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/wrc-11-fia-world-rally-championship-f0749b",
            "pegi": "PEGI 3",
            "score": "4.6",
            "description": "Rise to all the challenges of the most comprehensive, realistic and demanding rally simulation ever developed. Dive into the heart of the action and drive the cars from the 2022 WRC championship, including the new hybrid models.",
            "genre": [
                "Racing",
                "Simulation"
            ],
            "features": [
                "Single Player",
                "Multiplayer",
                "Controller Support",
                "Competitive"
            ],
           "developer": [
                "KT Racing"
            ],
            "publisher": [
                "Nacon"
            ],
            "release_date": [
                "11/03/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "WRC Generations - The FIA WRC Official Game",
        "price": 0.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/14dd2a1b57914e0f894536a1298a62da/download-wanderlust--travel-stories-offer-kt7nc.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/wanderlust-travel-stories-a81f0f",
            "pegi": null,
            "score": null,
            "description": "Wanderlust: Travel Stories is a bridge between literature and gaming. Step into the shoes of modern travelers\u2014explore their desires, hopes and fears, and shape how their stories unfold. Make this journey your own.",
            "genre": [
                "Narration",
                "Indie",
                "Adventure"
            ],
            "features": [
                "Single Player"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": null,
        "price": 5.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/17e437838637437597bfcf8a87ffd2e6/nira-1h946.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/nira-02f6ee",
            "pegi": null,
            "score": null,
            "description": "Explore procedurally generated islands in this fast-paced, sandbox survival adventure filled with building, crafting, fighting, farming and quests. Build a base, hunt, cook, battle ogres, make friends with a mysterious Totem, ride an alpaca, fly a plane and do whatever you need t",
            "genre": [
                "Survival",
                "Adventure",
                "Open World"
            ],
            "features": [
                "Single Player",
                "Controller Support",
                "Co-op"
            ],
           "developer": [
                "Baseline Games"
            ],
            "publisher": [
                "Graffiti Games"
            ],
            "release_date": [
                "11/01/22"
            ],
            "initial_release": [
                "10/14/21"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Nira",
        "price": 5.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/ef9a6499f8ff49f896412662dc6bf5b8/bite-the-bullet-qm72u.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/bite-the-bullet-22fa1f",
            "pegi": null,
            "score": null,
            "description": "Run, Gun and Eat your way through this roguelite RPG shooter. In a world where every enemy is edible, what you eat and how much you eat drives everything from your waistline to branching skill trees to weapon crafting. Shoot fast. Eat big. Satisfy your appetite for destruction.",
            "genre": [
                "Action-Adventure",
                "RPG",
                "Indie"
            ],
            "features": [
                "Single Player",
                "Co-op",
                "Controller Support"
            ],
           "developer": [
                "Mega Cat Studios"
            ],
            "publisher": [
                "Graffiti Games"
            ],
            "release_date": [
                "11/01/22"
            ],
            "initial_release": [
                "08/13/20"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Bite the Bullet",
        "price": 8.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/aceea62302034f568f7c2dd1d26be02f/download-cyber-hook-offer-1wu56.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/cyber-hook-064d2c",
            "pegi": null,
            "score": null,
            "description": "Speed through a gorgeous retrowave world using parkour skills and a grappling hook to scale and ride walls in this fast-paced, 3D platformer. Blast enemies, manipulate time and abuse physics to avoid falling to your death.",
            "genre": [
                "Action",
                "Indie",
                "Platformer"
            ],
            "features": [
                "Controller Support",
                "Single Player"
            ],
           "developer": [
                "Blazing Stick"
            ],
            "publisher": [
                "Graffiti Games"
            ],
            "release_date": [
                "11/01/22"
            ],
            "initial_release": [
                "09/24/20"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Cyber Hook",
        "price": 11.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/2fafdf19ba584f04afa0b73cd5598a07/download-danger-forever-offer-iheuk.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/danger-forever-a10e7e",
            "pegi": null,
            "score": null,
            "description": "Danger Forever is 3D Shoot'Em Up with RPG elements. Lone human rides her mecha-dragon through a hostile world of mechanoids and techno-demons.",
            "genre": [
                "Action",
                "Shooter",
                "Indie"
            ],
            "features": [
                "Competitive",
                "Controller Support",
                "Single Player"
            ],
           "developer": [
                "FireVector LLC"
            ],
            "publisher": [
                "Meridian4"
            ],
            "release_date": [
                "11/01/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Danger Forever",
        "price": 9.59
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/1780f9b34959408f807019b359955bf7/missile-command-recharged-2022-iv8w0.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/missile-command-recharged-2022-33e34b",
            "pegi": null,
            "score": null,
            "description": "Defend your cities from an assault of missiles, planes, tanks, and more!  Play solo or with a friend in co-op in this modern reimagining of the arcade classic.",
            "genre": [
                "Action",
                "Shooter",
                "Retro"
            ],
            "features": [
                "Co-op",
                "Controller Support",
                "Single Player"
            ],
           "developer": [
                "AdamVision, SneakyBox"
            ],
            "publisher": [
                "Atari"
            ],
            "release_date": [
                "11/01/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Missile Command: Recharged",
        "price": 7.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheLegendofHeroesTrailsfromZero_NihonFalcom_S2_1200x1600-0abec058d85e9be2dedbcb10937bb3a7?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/the-legend-of-heroes-trails-from-zero",
            "pegi": null,
            "score": null,
            "description": "When Lloyd Bannings is assigned to Crossbell's Special Support Section, he and his new teammates must prove themselves as they fight to overcome the injustice of a city gripped by corruption",
            "genre": [
                "RPG"
            ],
            "features": [
                "Single Player"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": null,
        "price": 39.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/3cb7b27265f544c1826264534fb8bbd0/evil-nun-the-broken-mask-1nf74.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/evil-nun-the-broken-mask-372461",
            "pegi": null,
            "score": null,
            "description": "You have been invited to a religious summer camp. When you arrive it is not what you expected and suddenly a nun hits you with a hammer. You wake up inside an abandoned school and you have to figure out how to get out. But to your surprise, you are not the only one trapped there.",
            "genre": [
                "Horror"
            ],
            "features": [
                "Controller Support",
                "Single Player",
                "Challenging Combat"
            ],
           "developer": [
                "Keplerians and Carlos Coronado"
            ],
            "publisher": [
                "Keplerians"
            ],
            "release_date": [
                "10/31/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Evil Nun: The Broken Mask",
        "price": 11.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/6aac3071aeae452990a71aac0a1fbc30/shapez-l0klk.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/shapez-0929c9",
            "pegi": null,
            "score": "4.7",
            "description": "shapez is a game about building factories to automate the creation and processing of increasingly complex shapes across an infinitely expanding map.",
            "genre": [
                "Puzzle"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "tobspr Games"
            ],
            "publisher": [
                "Prismatika"
            ],
            "release_date": [
                "10/31/22"
            ],
            "initial_release": [
                "06/07/20"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "shapez",
        "price": 9.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/1a1223658a7e4213911df20c3983e4c0/EGS_TormentedSouls_DualEffectGamesAbstractDigital_S2_1200x1600-3ca24fd6ba836410dd7974f5f39823dd?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/tormented-souls",
            "pegi": null,
            "score": null,
            "description": "Classic horror is back! Inspired by the original Resident Evil and Alone in the Dark, Tormented Souls modernises fixed perspective horror - as Caroline Walker investigates the mysterious disappearance of twin girls in a terrifying mansion-turned-hospital.",
            "genre": [
                "Horror",
                "Puzzle",
                "Survival"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Dual Effect Games & Abstract Digital"
            ],
            "publisher": [
                "PQube"
            ],
            "release_date": [
                "10/31/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Tormented Souls",
        "price": 19.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/b25f8af6c17f489ab7926a658e7648de/the-abbey-1atf5.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/the-abbey-b6fbc4",
            "pegi": null,
            "score": null,
            "description": "Thou shalt not kill!",
            "genre": [
                "Adventure"
            ],
            "features": [
                "Single Player"
            ],
            "developer": [
                "Crimson Cow"
            ],
            "publisher": [
                "Strategy First"
            ],
            "available": [
                "Oct 2022"
            ],
            "initial_release": [
                "08/25/08"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "The Abbey",
        "price": null
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/b447041b930440eb83a7e285d57520d7/mashed-lfum2.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/mashed-ebdee9",
            "pegi": null,
            "score": null,
            "description": "Compete over 13 challenging and diverse environments using whatever means necessary to batter and bruise your opponents into submission, and claim victory for yourself!",
            "genre": [
                "Racing"
            ],
            "features": [
                "Single Player"
            ],
            "developer": [
                "Supersonic Software"
            ],
            "publisher": [
                "Strategy First"
            ],
            "available": [
                "Oct 2022"
            ],
            "initial_release": [
                "06/25/04"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Mashed",
        "price": null
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/d53f364ea59045d5922012822521d010/download-system-purge-offer-1xntr.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/system-purge-9ab7b7",
            "pegi": null,
            "score": null,
            "description": "Trapped in a buried, forgotten facility, you must reach the core of an ancient machine to rescue your lost lover. System Purge is a challenging, atmospheric 2D platformer.",
            "genre": [
                "Horror",
                "Platformer",
                "Action"
            ],
            "features": [
                "Controller Support",
                "Single Player"
            ],
           "developer": [
                "Actual Nerds"
            ],
            "publisher": [
                "Actual Nerds"
            ],
            "release_date": [
                "10/28/22"
            ],
            "initial_release": [
                "04/05/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "System Purge",
        "price": 3.19
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/08388b8ac1f14cc19a8bdae879573e72/download-charons-staircase-offer-e5xhk.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/charons-staircase-b2d05f",
            "pegi": null,
            "score": null,
            "description": "In this first-person horror mystery game, you set out to bury the horrible past of a tyrannical government. Retrieve and destroy the documents that unravel the secrets that lie beneath Oack Grove. Will you discover the terrifying truth and find your way out?",
            "genre": [
                "Adventure",
                "Horror",
                "Narration"
            ],
            "features": [
                "Controller Support",
                "Single Player"
            ],
           "developer": [
                "Indigo Studios"
            ],
            "publisher": [
                "SOEDESCO"
            ],
            "release_date": [
                "10/28/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Charon's Staircase",
        "price": 24.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/012b11c602444c7389441e5736d2a5dc/the-shapeshifting-detective-ilap0.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/the-shapeshifting-detective-ef0f21",
            "pegi": null,
            "score": null,
            "description": "The Shapeshifting Detective is a supernatural murder mystery FMV game where you play as a detective who can shapeshift into other characters, allowing you to unlock secret conversations and private encounters.",
            "genre": [
                "Adventure",
                "Indie",
                "Simulation"
            ],
            "features": [
                "Controller Support",
                "Single Player"
            ],
           "developer": [
                "D'Avekki Studios Ltd, Wales Interactive"
            ],
            "publisher": [
                "Wales Interactive"
            ],
            "release_date": [
                "10/28/22"
            ],
            "initial_release": [
                "11/06/18"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "The Shapeshifting Detective",
        "price": 9.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/24285307a56445f1bc5d546df7af3025/EGS_SinsofaSolarEmpire2_IroncladGames_S2_1200x1600-a6b3bd273eaca243fcce3a92b4e786d1?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/sins-of-a-solar-empire-ii",
            "pegi": null,
            "score": "4.5",
            "description": "Battle for galactic dominance as one of three unique races in a real-time strategy game with unrivaled scale! You\u2019ll explore, expand, exploit, and exterminate through military force, diplomacy, trade, cultural influence, and other underhanded tactics.",
            "genre": [
                "Strategy"
            ],
            "features": [
                "Co-op",
                "Multiplayer",
                "Single Player"
            ],
           "developer": [
                "Ironclad Games"
            ],
            "publisher": [
                "Stardock Entertainment"
            ],
            "release_date": [
                "10/27/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Sins of a Solar Empire II",
        "price": 31.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/c749cd78da34408d8434a46271f4bb79/EGS_Saturnalia_SantaRagione_S4_1200x1600-2216ff4aa6997dfb13d8bd4c6f2fa99e?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/saturnalia",
            "pegi": "PEGI 16",
            "score": "4.3",
            "description": "A Survival Horror Adventure: as an ensemble cast, explore an isolated village of ancient ritual \u2013 its labyrinthine roads change each time you lose all your characters.",
            "genre": [
                "Horror",
                "Survival",
                "Adventure"
            ],
            "features": [
                "Achievements",
                "Single Player"
            ],
           "developer": [
                "Santa Ragione"
            ],
            "publisher": [
                "Santa Ragione"
            ],
            "release_date": [
                "10/27/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Saturnalia",
        "price": 9.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/964693002c1b447c949b155c71727c45/maid-of-sker-1pomm.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/maid-of-sker-2ae24e",
            "pegi": null,
            "score": null,
            "description": "Maid of Sker is a first-person survival horror, set in a remote hotel with a gory and macabre history from British folklore. Brave the nightmares of the Quiet Ones. Do not panic\u2026don\u2019t even breathe!",
            "genre": [
                "Action-Adventure",
                "Indie",
                "Horror"
            ],
            "features": [
                "Controller Support",
                "Single Player"
            ],
           "developer": [
                "Wales Interactive"
            ],
            "publisher": [
                "Wales Interactive"
            ],
            "release_date": [
                "10/27/22"
            ],
            "initial_release": [
                "07/28/20"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Maid of Sker",
        "price": 19.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/efd70465e9b34ad79ef61ba16d62d65a/download-paper-cut-mansion-offer-1ajzk.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/paper-cut-mansion-2c67e2",
            "pegi": null,
            "score": null,
            "description": "Paper Cut Mansion is a roguelite horror set in a papercraft world.",
            "genre": [
                "Adventure",
                "Indie"
            ],
            "features": [
                "Single Player",
                "Controller Support"
            ],
           "developer": [
                "Space Lizard Studio"
            ],
            "publisher": [
                "Thunderful Publishing"
            ],
            "release_date": [
                "10/27/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Paper Cut Mansion",
        "price": 17.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/1b60f39de33b4902a8d5fa543b1fb628/EGS_SackboyABigAdventure_SumoDigital_S2_1200x1600-cc68022e4d17a383c8571dc43586353c?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/sackboy-a-big-adventure",
            "pegi": "PEGI 7",
            "score": "4.8",
            "description": "PlayStation\u00ae icon Sackboy bursts into action on PC in a huge 3D multiplayer platforming adventure.  \u2022 An epic journey stuffed with platforming challenges. \u2022\tDeeply immersive controls. \u2022 Collaborative, chaotic, and joyful multiplayer fun.",
            "genre": [
                "Adventure",
                "Platformer"
            ],
            "features": [
                "Co-op",
                "Multiplayer",
                "Cloud Saves",
                "Single Player",
                "Controller Support"
            ],
           "developer": [
                "Sumo Digital"
            ],
            "publisher": [
                "PlayStation PC LLC"
            ],
            "release_date": [
                "10/27/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Sackboy\u2122: A Big Adventure",
        "price": 0
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/d2d162953fec40e381867d7af8371362/EGS_HonkaiImpact3rd_miHoYoLimited_S2_1200x1600-1b38bfc22a3cbe6a187573afb4811860?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/honkai-impact-3rd",
            "pegi": null,
            "score": "4.4",
            "description": "Honkai Impact 3rd is an anime action RPG game and playable for free across platforms. In a world corrupted by Honkai, brave girls lead a fledgling resistance of Valkyries. You will guide Valkyries with different equipment and strategies to protect the world.",
            "genre": [
                "Action",
                "RPG",
                "Adventure"
            ],
            "features": [
                "Challenging Combat",
                "Controller Support",
                "Co-op",
                "Single Player"
            ],
            "developer": [
                "miHoYo Limited"
            ],
            "publisher": [
                "miHoYo Limited"
            ],
            "release_date": [
                "10/27/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Honkai Impact 3rd",
        "price": 0
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/973f4aae211b472c9cb766f47d88d8d0/download-arkanoid--eternal-battle-offer-zmlsh.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/arkanoid-eternal-battle-e1b089",
            "pegi": "PEGI 3",
            "score": null,
            "description": "Discover or re-discover, the emblematic block breaker game in a fully modernized version! Classic elements from the franchise will definitely make a comeback, with a brand-new look, new rules, as well as new effects, bonuses and features!",
            "genre": [
                "Action",
                "Indie"
            ],
            "features": [
                "Multiplayer"
            ],
           "developer": [
                "Pastagames"
            ],
            "publisher": [
                "Microids"
            ],
            "release_date": [
                "10/27/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "ARKANOID - ETERNAL BATTLE",
        "price": 1.59
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/4e413bd62567408fbfe7b9b71ba3ce85/asterix-and-obelix-xxxl--the-ram-of-hibernia-1425f.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/asterix-and-obelix-xxxl-the-ram-of-hibernia-3eb1f4",
            "pegi": null,
            "score": null,
            "description": "Join Asterix & Obelix in a brand-new original story in\u2026 Hibernia! Explore this crazy action-adventure in a local coop mode up to 4 players !",
            "genre": [
                "Action-Adventure",
                "Fighting"
            ],
            "features": [
                "Challenging Combat",
                "Single Player",
                "Multiplayer"
            ],
           "developer": [
                "OSome Studio"
            ],
            "publisher": [
                "Microids"
            ],
            "release_date": [
                "10/27/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Asterix & Obelix XXXL : The Ram From Hibernia",
        "price": 39.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/fc3ec7982b584a4291d7943204ea424b/ACCI_StorePortrait_1200x1600_1200x1600-658c1341bd20c00262f05d8f3f010c30?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/assassins-creed-chronicles-india",
            "pegi": "PEGI 16",
            "score": null,
            "description": "Embody Arbaaz in his quest for retribution through a colourful depiction of Colonial India in 2.5D stealth gameplay.   \u2022 Travel across an amazing 19th Century India and its legendary landmarks.  \u2022 Experience the thrill of a stealthy assassin with a unique set of skills and weapons such as the double kill moves and the chakram. \u2022 Discover a brand new mode with stealth, speed and assassination rooms",
            "genre": [
                "Action",
                "Stealth",
                "Adventure"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Climax Studios | Ubisoft Montreal"
            ],
            "publisher": [
                "Ubisoft"
            ],
            "release_date": [
                "10/26/22"
            ],
            "initial_release": [
                "01/12/16"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Assassin's Creed Chronicles: India",
        "price": 7.49
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/f8c4ac7957164721802514c6fc99e66d/ACCC_StorePortrait_1200x1600_1200x1600-ad2c7ccbe4913a324078692b9492e3eb?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/assassins-creed-chronicles-china",
            "pegi": "PEGI 16",
            "score": null,
            "description": "Exact Shao Jun\u2019s vengeance on the Chinese Emperor in stunning 16th century China with fresh 2.5D stealth gameplay:  \u2022 Embody a stealthy Assassin with unique combat skills and gear like the Shoe Blade and the Rope Dart \u2022 Discover the story of Shao Jun, the last remaining Assassin of the Chinese Brotherhood \u2022 Dive into a beautiful Chinese setting by travelling across the great empire of China",
            "genre": [
                "Action",
                "Stealth",
                "Adventure"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Climax Studios | Ubisoft Montreal"
            ],
            "publisher": [
                "Ubisoft"
            ],
            "release_date": [
                "10/26/22"
            ],
            "initial_release": [
                "04/21/15"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Assassin's Creed Chronicles: China",
        "price": 7.49
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/3422379633b9432c892e10c11ff9f25d/ACCR_StorePortrait_1200x1600_1200x1600-699eccfed5260b689cf695e0f276aa03?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/assassins-creed-chronicles-russia",
            "pegi": "PEGI 16",
            "score": null,
            "description": "Join Nikola\u00ef Orelov in his search for redemption as you journey through an iconic, propaganda art style Russia in 2.5D gameplay.   \u2022 Survive the aftermath of October Revolution & travel accross Russia. \u2022 Experience the thrill of being a stealthy Assassin in an exclusive modern setting. \u2022 Switch between two playable characters: use Nikola\u00ef & Anastasia\u2019s unique playstyles.",
            "genre": [
                "Action",
                "Stealth",
                "Adventure"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Climax Studios | Ubisoft Montreal"
            ],
            "publisher": [
                "Ubisoft"
            ],
            "release_date": [
                "10/26/22"
            ],
            "initial_release": [
                "02/25/16"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Assassin's Creed Chronicles: Russia",
        "price": 7.49
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/8439a9a25ae64a688ac1c3dbd3a553ae/download-garbage-pail-kids-mad-mike-and-the-quest-for-stale-gum-offer-uvup8.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/garbage-pail-kids-mad-mike-and-the-quest-for-stale-gum-1ba051",
            "pegi": null,
            "score": null,
            "description": "The Garbage Pail Kids are back in this Long-Lost, All-New, Old-School platforming adventure.",
            "genre": [
                "Action-Adventure",
                "Platformer",
                "Card Game"
            ],
            "features": [
                "Single Player",
                "Controller Support"
            ],
           "developer": [
                "Retrotainment Games and Digital Eclipse"
            ],
            "publisher": [
                "iam8bit"
            ],
            "release_date": [
                "10/25/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Garbage Pail Kids: Mad Mike...",
        "price": 7.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/71e07bded36942308388b11038b369f5/download-the-mortuary-assistant-offer-zgvqq.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/the-mortuary-assistant-2d2620",
            "pegi": null,
            "score": null,
            "description": "Alone with the dead... Embalm corpses, banish demons, save your soul.",
            "genre": [
                "Horror"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Darkstone Digital"
            ],
            "publisher": [
                "DreadXP"
            ],
            "release_date": [
                "10/25/22"
            ],
            "initial_release": [
                "08/02/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "The Mortuary Assistant",
        "price": 19.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/53a75a4e637a46d1a2da5d8ae89c3209/download-murder-is-game-over-offer-9ix9v.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/murder-is-game-over-255da8",
            "pegi": null,
            "score": null,
            "description": "Murder Is Game Over is a pixel art point-and-click murder mystery involving the untimely death of a famous game designer. You and your trusty companion are on the case!",
            "genre": [
                "Adventure",
                "Indie",
                "Exploration"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Hitheryon Games"
            ],
            "publisher": [
                "Meridian4"
            ],
            "release_date": [
                "10/25/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Murder Is Game Over",
        "price": 3.19
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/d39859fd5813409a8e6b46925a41695a/download-i-see-red-offer-ku5bd.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/i-see-red-de79ef",
            "pegi": null,
            "score": null,
            "description": "In the rogue-lite, twin-stick shooter I See Red, you take justice into your own hands. Fight your way through dreary spaceships and use every tool at your disposal. Will you get your revenge?",
            "genre": [
                "Rogue-Lite"
            ],
            "features": [
                "Challenging Combat"
            ],
           "developer": [
                "Whiteboard Games"
            ],
            "publisher": [
                "Gameforge 4D GmbH"
            ],
            "release_date": [
                "10/24/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "I See Red",
        "price": 7.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/05057ec2d5ea43c3b0701cc1518e0577/EGS_GothamKnights_WarnerBrosGamesMontreal_S2_1200x1600-5a46b442e57afa637f013bbc09fe5487?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/gotham-knights",
            "pegi": "PEGI 16",
            "score": "4.3",
            "description": "Batman is dead. It is now up to the Batman Family - Batgirl, Nightwing, Red Hood, and Robin - to protect Gotham City.",
            "genre": [
                "Action",
                "Open World",
                "Adventure"
            ],
            "features": [
                "Cloud Saves",
                "Co-op",
                "Single Player"
            ],
           "developer": [
                "Warner Bros. Games Montreal | QLOC"
            ],
            "publisher": [
                "Warner Bros. Games"
            ],
            "release_date": [
                "10/21/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Gotham Knights",
        "price": 14.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/b59d2b0fd4bd4a2da5dfbac54c1e10d3/the-bunker-uch6m.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/the-bunker-03b712",
            "pegi": null,
            "score": null,
            "description": "The Bunker is an award-winning interactive psychological horror movie. You are John, born underground the day the bombs fell, now alone and trying to survive. But when an alarm goes off, a catastrophic chain of events begins. Unlock the secrets of your past as you try to escape.",
            "genre": [
                "Adventure",
                "Indie",
                "Horror"
            ],
            "features": [
                "Controller Support",
                "Single Player"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": null,
        "price": 9.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/1033d76fdb964f59877bfdb5635a8c33/late-shift-1k7q3.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/late-shift-8b0634",
            "pegi": null,
            "score": null,
            "description": "Late Shift is a high stakes FMV crime thriller. Forced into a brutal London heist, your choices matter in this interactive cinematic experience with adaptable storylines that lead to one of seven conclusions. Your decisions are you.",
            "genre": [
                "Adventure",
                "Indie",
                "Simulation"
            ],
            "features": [
                "Controller Support",
                "Single Player"
            ],
           "developer": [
                "CtrlMovie"
            ],
            "publisher": [
                "Wales Interactive"
            ],
            "release_date": [
                "10/21/22"
            ],
            "initial_release": [
                "04/18/17"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Late Shift",
        "price": 9.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/28ed8f56800c4bcc9eaa0c5264ec6917/EGS_NewTalesfromtheBorderlands_GearboxSoftware_S2_1200x1600-552829c46cce40a3a9d5a8dc4fb2c06f?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/new-tales-from-the-borderlands",
            "pegi": "PEGI 18",
            "score": "4.1",
            "description": "Decide the fates of altruistic scientist Anu, her ambitious, \"streetwise\" brother Octavio, and the fierce, frogurt-slinging Fran. Claw and con your way through five thrilling chapters!",
            "genre": [
                "Action",
                "Adventure"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Gearbox Software"
            ],
            "publisher": [
                "2K"
            ],
            "release_date": [
                "10/21/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "New Tales from the Borderlands",
        "price": 4.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/fa702d34a37248ba98fb17f680c085e3/EGS_Fallout3GameoftheYearEdition_BethesdaGameStudios_S2_1200x1600-e2ba392652a1f57c4feb65d6bbd1f963?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/fallout-3-game-of-the-year-edition",
            "pegi": "PEGI 18",
            "score": "4.6",
            "description": "Prepare for the Future\u2122 Experience the most acclaimed game of 2008 like never before with Fallout 3: Game of the Year Edition. Create a character of your choosing and descend into a post-apocalyptic world where every minute is a fight for survival",
            "genre": [
                "RPG",
                "Open World",
                "Adventure"
            ],
            "features": [
                "Cloud Saves",
                "Single Player"
            ],
           "developer": [
                "Bethesda Game Studios"
            ],
            "publisher": [
                "Bethesda Softworks"
            ],
            "release_date": [
                "10/20/22"
            ],
            "initial_release": [
                "10/13/09"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Fallout 3: Game of the Year Edition",
        "price": 6.59
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/3a4af54d18d44d6590ecfbb7c6ea6afd/download-the-pegasus-expedition-offer-fcw6m.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/the-pegasus-expedition-224279",
            "pegi": null,
            "score": null,
            "description": "The Pegasus Expedition is a story-driven sci-fi grand strategy game set in a key moment for humankind\u2019s survival. Facing an overwhelming threat at home, humanity sends expeditions to the Pegasus Galaxy in a desperate attempt to find a refuge for the population of Earth.",
            "genre": [
                "Strategy",
                "Turn-Based",
                "Adventure"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Kalla Gameworks"
            ],
            "publisher": [
                "Fulqrum Publishing"
            ],
            "release_date": [
                "10/20/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "The Pegasus Expedition",
        "price": 19.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/b90be973f6e74975ac1a6ff15dbfd0b3/EGS_FalloutTacticsBrotherhoodofSteel_BethesdaGameStudios_S2_1200x1600-4aa1e4a2770b319a549b91f2b52ddf67?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/fallout-tactics-brotherhood-of-steel",
            "pegi": "PEGI 16",
            "score": null,
            "description": "Tactical Squad-Based Combat comes to the Fallout\u00ae Universe! In these dark times, the Brotherhood - your Brotherhood - is all that stands between the rekindled flame of civilization and the howling, radiated wasteland.",
            "genre": [
                "RPG",
                "Strategy"
            ],
            "features": [
                "Cloud Saves",
                "Single Player"
            ],
           "developer": [
                "14\u00c2\u00b0 East"
            ],
            "publisher": [
                "Bethesda Softworks"
            ],
            "release_date": [
                "10/20/22"
            ],
            "initial_release": [
                "03/01/01"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Fallout Tactics: Brotherhood of Steel",
        "price": 2.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/aae22da1fb884fa395b25bc30dd61faf/EGS_Fallout2APostNuclearRolePlayingGame_BethesdaGameStudios_S2_1200x1600-d07a5a6352badc1a2111ed42a393d049?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/fallout-2",
            "pegi": "PEGI 16",
            "score": "4.8",
            "description": "Fallout\u00ae 2 is the sequel to the critically acclaimed game that took RPG'ing out of the dungeons and into a dynamic, apocalyptic retro-future. Mastering your character's skills and traits for survival, Fallout\u00ae 2 challenges you to endure in a post-nuclear world",
            "genre": [
                "RPG",
                "Open World"
            ],
            "features": [
                "Cloud Saves",
                "Single Player"
            ],
           "developer": [
                "Bethesda Game Studios"
            ],
            "publisher": [
                "Bethesda Softworks"
            ],
            "release_date": [
                "10/20/22"
            ],
            "initial_release": [
                "12/01/98"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Fallout 2: A Post Nuclear Role Playing Game",
        "price": 2.49
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/aafde465b31e4bd5a169ff1c8a164a17/evoland-legendary-edition-1j93v.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/evoland-legendary-edition-5753ec",
            "pegi": null,
            "score": "4.5",
            "description": "Evoland Legendary Edition brings you two great and unique RPGs, with their graphic style and gameplay changing as you progress through the game!",
            "genre": [
                "RPG",
                "Adventure",
                "Action"
            ],
            "features": [
                "Controller Support",
                "Single Player"
            ],
           "developer": [
                "Shiro Games"
            ],
            "publisher": [
                "Shiro Unlimited"
            ],
            "release_date": [
                "10/20/22"
            ],
            "initial_release": [
                "02/07/19"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Evoland Legendary Edition",
        "price": 19.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/2e412cfcbd954e7180930e9784a47e18/EGS_FalloutAPostNuclearRolePlayingGame_BethesdaGameStudios_S2_1200x1600-f4406e1a479760bfbebc4459f7c17932?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/fallout",
            "pegi": "PEGI 16",
            "score": "4.7",
            "description": "You've just unearthed the classic post-apocalyptic role-playing game that revitalized the entire CRPG genre. Make the right decisions or you could end up as another fallen hero in the wastelands\u2026",
            "genre": [
                "RPG",
                "Open World"
            ],
            "features": [
                "Cloud Saves",
                "Single Player"
            ],
           "developer": [
                "Bethesda Game Studios"
            ],
            "publisher": [
                "Bethesda Softworks"
            ],
            "release_date": [
                "10/20/22"
            ],
            "initial_release": [
                "09/30/97"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Fallout: A Post Nuclear Role Playing Game",
        "price": 2.49
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/8d420a45afa64866a861feb3184eb764/download-urbek-city-builder-offer-1000q.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/urbek-city-builder-17cf7d",
            "pegi": null,
            "score": null,
            "description": "Urbek is a city building game where you can build your own neighbourhoods: from nightlife district to industrial district. Don't exhaust your natural resources before you have an educated population to build more efficient structures.",
            "genre": [
                "City Builder"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Estudios Kremlinois"
            ],
            "publisher": [
                "RockGame S.A."
            ],
            "release_date": [
                "10/20/22"
            ],
            "initial_release": [
                "07/13/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Urbek City Builder",
        "price": 11.59
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/b39335d176d6484d84ead260a0373a61/download-mysterious-misadventures-of-mollie-and-mordecai-offer-kyfx5.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/mysterious-misadventures-of-mollie-and-mordecai-daa4a1",
            "pegi": null,
            "score": null,
            "description": "Escape the estate! Join Mollie and Mordecai, two victims of the evil wizard's magic that has turned them into living dolls, in this partner switching, puzzle solving Halloween adventure!",
            "genre": [
                "Adventure",
                "Action-Adventure"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Lunarfall"
            ],
            "publisher": [
                "Lunarfall"
            ],
            "release_date": [
                "10/20/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Mysterious Misadventures of Mollie and Mordecai",
        "price": 23.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/547a1ed2e29b4e2c83cbcb348fbf9fcc/EGS_TheJackboxPartyPack9_JackboxGamesInc_S2_1200x1600-d6d9adaa6df088f7d635578f283963f9?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/jackbox-party-pack-9",
            "pegi": null,
            "score": null,
            "description": "Save your next party! 5 new games in 1 Party Pack: the trivia bluff-off Fibbage 4, the team test Quixort, the joke auction Junktopia, the silly guessfest Nonsensory and the reality TV game Roomerang.",
            "genre": [
                "Party"
            ],
            "features": [
                "Co-op",
                "Multiplayer"
            ],
           "developer": [
                "Jackbox Games, Inc."
            ],
            "publisher": [
                "Jackbox Games, Inc."
            ],
            "release_date": [
                "10/20/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "The Jackbox Party Pack 9",
        "price": 23.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/239ed3368b8c4218bac2e15dccb3f0e6/EGS_TheValiant_KITEGames_S2_1200x1600-11229e4dffe1fae4fcfab1f59d075d51?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/the-valiant",
            "pegi": "PEGI 16",
            "score": null,
            "description": "Embark on a journey of brotherhood and redemption in The Valiant, a squad-based RTS set in 13th Century Europe and the Middle East. Command and level-up your medieval knights as you fight through an epic SP campaign, then take your skills online in both cooperative and competitive MP modes.",
            "genre": [
                "RPG",
                "Strategy"
            ],
            "features": [
                "Co-op",
                "Multiplayer",
                "Single Player"
            ],
           "developer": [
                "KITE Games"
            ],
            "publisher": [
                "THQ Nordic"
            ],
            "release_date": [
                "10/19/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "The Valiant",
        "price": 3.74
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/8b2d6cf2b45b41f1abe91bc5b7c1e8f9/EGS_UNCHARTEDLegacyofThievesCollection_NaughtyDogLLC_S2_1200x1600-6d81cdaf0ca5c5e1cf9f9f32a92f4b14?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/uncharted-legacy-of-thieves-collection",
            "pegi": "PEGI 16",
            "score": "4.8",
            "description": "Are You Ready To Seek Your Fortune?  UNCHARTED: Legacy of Thieves Collection includes the two remastered, critically-acclaimed, globe-trotting single player adventures from UNCHARTED 4: A Thief\u2019s End and UNCHARTED: The Lost Legacy  ",
            "genre": [
                "Action",
                "Adventure"
            ],
            "features": [
                "Cloud Saves",
                "Single Player"
            ],
           "developer": [
                "Naughty Dog LLC, Iron Galaxy Studios"
            ],
            "publisher": [
                "PlayStation PC LLC"
            ],
            "release_date": [
                "10/19/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "UNCHARTED\u2122: Legacy of Thieves Collection",
        "price": 49.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/598bbf91c75b4ac9a676d82719acdbb1/EGS_GhostbustersSpiritsUnleashed_IllFonic_S2_1200x1600-5dd4f41b7c5463a7732d4de3f2c45ced?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/ghostbusters-spirits-unleashed",
            "pegi": null,
            "score": "4.5",
            "description": "Hunting or haunting! The choice is yours in the upcoming asymmetrical Ghostbusters game from IllFonic, Ghostbusters: Spirits Unleashed. Play with up to four friends or solo on multiple platforms.",
            "genre": [
                "Horror",
                "Shooter"
            ],
            "features": [
                "Multiplayer",
                "Competitive",
                "Single Player"
            ],
           "developer": [
                "IllFonic"
            ],
            "publisher": [
                "IllFonic"
            ],
            "release_date": [
                "10/18/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Ghostbusters: Spirits Unleashed",
        "price": 23.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/6dbfe35a26c1465cb72df1f5c0773d86/zelter-vmjwv.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/zelter-b3640a",
            "pegi": null,
            "score": null,
            "description": "All the horrors of zombie apocalypse in adorable pixelated form! Craft, explore and rescue people in a city overrun by the zombie horde. Good luck, survivors!",
            "genre": [
                "Survival",
                "Action"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "G1 Playground"
            ],
            "publisher": [
                "SuperGG.com"
            ],
            "release_date": [
                "10/18/22"
            ],
            "initial_release": [
                "10/22/20"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Zelter",
        "price": 15.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/0e9d858ee8a1412fb5292afffe9d512d/download-retrowave-rider-offer-kle1v.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/retrowave-rider-18aaf1",
            "pegi": null,
            "score": null,
            "description": "Retrowave Rider is a 2D precision platformer where you control not only the character but also the level itself. Dive into synthwave worlds filled with retro-inspired visuals and smooth synth sounds, and experience this journey with all of its trials and glories.",
            "genre": [
                "Platformer",
                "Action",
                "Music"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Starchaser Games"
            ],
            "publisher": [
                "Meridian4"
            ],
            "release_date": [
                "10/18/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Retrowave Rider",
        "price": 3.19
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/salesEvent/salesEvent/PlagueTale1_1200x1600-98f9fd41d86634c1f82e4b5cbfc4e83f?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/a-plague-tale-requiem",
            "pegi": null,
            "score": "4.7",
            "description": "Embark on a heartrending journey into a brutal, breathtaking world, and discover the cost of saving those you love in a desperate struggle for survival. Strike from the shadows or unleash hell with a variety of weapons, tools and unearthly powers.",
            "genre": [
                "Action",
                "Adventure"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Asobo Studio"
            ],
            "publisher": [
                "Focus Entertainment"
            ],
            "release_date": [
                "10/18/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "A Plague Tale: Requiem",
        "price": 2.39
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/380b2d8808904e3ebc4381fede541193/download-mars-base-offer-10bq5.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/mars-base-a00ce0",
            "pegi": null,
            "score": null,
            "description": "Welcome to Mars Base, humanity\u2019s foothold on the Red Planet! Join the expedition and make history: turn barren soil into fertile farmland, grow food for colonists\u2019 tables, and unearth the secrets of Mars! Are you ready to science the \u201ccrop\u201d out of everything?",
            "genre": [
                "Simulation",
                "Adventure"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Khuong Le"
            ],
            "publisher": [
                "Freedom Games"
            ],
            "release_date": [
                "10/17/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Mars Base",
        "price": 19.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/2b1f8bb2c5f941898b2a6455c77ea176/download-terror-of-hemasaurus-offer-13uc5.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/terror-of-hemasaurus-a08800",
            "pegi": null,
            "score": null,
            "description": "A retro city smash 'em up with satisfying destruction physics. Play as a Giant Monster unleashing terror upon mankind in this modern arcade experience with the action turned up to eleven.",
            "genre": [
                "Action"
            ],
            "features": [
                "Co-op"
            ],
           "developer": [
                "Loren Lemcke"
            ],
            "publisher": [
                "Digerati"
            ],
            "release_date": [
                "10/17/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Terror of Hemasaurus",
        "price": 9.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/64562ac3f12747e783c6153cfa30d3ad/download-trifox-offer-v26k4.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/trifox-b361b7",
            "pegi": null,
            "score": null,
            "description": "Trifox is a colourful and cartoonish action-adventure featuring a phenomenal fox with a multitude of talents! Choose from a trio of classes \u2013 Warrior, Mage, Engineer \u2013 or mix-and-match abilities to create a tailor-made hero! Inspired by the golden age of 3D platformers.",
            "genre": [
                "Action-Adventure",
                "Indie"
            ],
            "features": [
                "Single Player",
                "Controller Support"
            ],
           "developer": [
                "Glowfish Interactive"
            ],
            "publisher": [
                "Big Sugar"
            ],
            "release_date": [
                "10/14/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Trifox",
        "price": 15.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/efac99763f424706939478d9c2ef4037/download-venice-2089-offer-116h7.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/venice-2089-2bad63",
            "pegi": null,
            "score": null,
            "description": "Explore a future Venice struggling with the effects of rising water slowly destroying the city as a bored teenager, with your hoverboard and your trusty drone.",
            "genre": [
                "Indie",
                "Adventure",
                "Narration"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Safe Place Studio"
            ],
            "publisher": [
                "Safe Place Studio"
            ],
            "release_date": [
                "10/14/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Venice 2089",
        "price": 11.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/135201128d4f428699a891fc501a5097/EGS_Scorn_EbbSoftwaredoo_S4_1200x1600-0c5064a630c7fb9f5e65e36b08e8d88d?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/scorn",
            "pegi": null,
            "score": "4.5",
            "description": "Scorn is an atmospheric first-person horror adventure game set in a nightmarish universe of odd forms and somber tapestry.",
            "genre": [
                "Horror",
                "Puzzle",
                "Adventure"
            ],
            "features": [
                "Single Player",
                "Controller Support"
            ],
           "developer": [
                "Ebb Software"
            ],
            "publisher": [
                "Kepler Interactive"
            ],
            "release_date": [
                "10/14/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Scorn",
        "price": 31.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/ecb86a0b7926450a97b20a8a651d15cd/five-dates-lefa0.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/five-dates-60ef51",
            "pegi": null,
            "score": null,
            "description": "Five Dates is an interactive rom-com about the unpredictable world of digital dating. With five potential female matches, Vinny explores whether compatibility, chemistry and connection is still possible in a world where physical touch is no longer an option.",
            "genre": [
                "Adventure",
                "Indie",
                "Simulation"
            ],
            "features": [
                "Controller Support",
                "Single Player"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": null,
        "price": 9.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SuchArtGeniusArtistSimulator_Voolgi_S2_1200x1600-d51ac0f4a3d20ef478616438e37bb884?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/suchart-genius-artist-simulator",
            "pegi": null,
            "score": "4.7",
            "description": "A unique artist sim game with realistic paint mixing, physics and numerous painting tools. Upgrade and customize your studio, complete tasks, sell and expose art, buy instruments and get famous!",
            "genre": [
                "Simulation",
                "First Person"
            ],
            "features": [
                "Cloud Saves",
                "Single Player"
            ],
           "developer": [
                "Voolgi"
            ],
            "publisher": [
                "HypeTrain Digital"
            ],
            "release_date": [
                "10/13/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "SuchArt: Genius Artist Simulator",
        "price": 18.74
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/c949215b4ef143fd9cf885231cfdeaa3/download-faraday-protocol-offer-yuxyd.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/faraday-protocol-a083a9",
            "pegi": null,
            "score": null,
            "description": "Faraday Protocol is a first person puzzle game that will test your wits and intelligence.",
            "genre": [
                "First Person",
                "Narration",
                "Puzzle"
            ],
            "features": [
                "Single Player",
                "Controller Support"
            ],
           "developer": [
                "Red Koi Box"
            ],
            "publisher": [
                "Deck13 Spotlight"
            ],
            "release_date": [
                "10/13/22"
            ],
            "initial_release": [
                "08/12/21"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Faraday Protocol",
        "price": 19.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/de3677b7bac547128656ac18c5b2f298/EGS_LostEidolons_OceanDriveStudioInc_S2_1200x1600-4091ca2e6e3e7828fe2e58c2ed0e81b4?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/lost-eidolons",
            "pegi": null,
            "score": "4.3",
            "description": "Lost Eidolons is a turn-based tactical RPG with a gripping narrative, set in a waning empire riven by civil war. Take on the role of a charming mercenary captain, Eden, and lead his band of allies through epic encounters on a classic turn-based battlefield.",
            "genre": [
                "RPG",
                "Strategy",
                "Indie"
            ],
            "features": [
                "Cloud Saves",
                "Achievements",
                "Single Player",
                "Controller Support"
            ],
           "developer": [
                "Ocean Drive Studio, Inc."
            ],
            "publisher": [
                "Ocean Drive Studio, Inc."
            ],
            "release_date": [
                "10/13/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Lost Eidolons",
        "price": 5.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/428b51d4cd29482889841fa188b362b4/download-toejam-and-earl-back-in-the-groove-offer-2qpeb.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/toejam-and-earl-back-in-the-groove-cddc16",
            "pegi": null,
            "score": null,
            "description": "ToeJam & Earl: Back in the Groove is a mash-up of the best features from the classic console games with a ton of funky fresh improvements.\n\nRelive the original roguelike game with new 4 player online and local co-op, crazy Earthlings, weird presents and aliens from Funkotron!",
            "genre": [
                "Rogue-Lite",
                "Casual",
                "Indie"
            ],
            "features": [
                "Co-op",
                "Controller Support",
                "Multiplayer"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": null,
        "price": 11.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/f98517036ab5480ebd9c68d7249188b4/darkwood-1dl7j.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/darkwood-fa73bd",
            "pegi": null,
            "score": "4.6",
            "description": "Darkwood - a new perspective on survival horror. Scavenge and explore a rich, ever-changing free-roam world by day, then hunker down in your hideout and pray for the morning light.",
            "genre": [
                "Horror",
                "Survival",
                "Indie"
            ],
            "features": [
                "Challenging Combat",
                "Controller Support",
                "Single Player"
            ],
           "developer": [
                "Acid Wizard Studio"
            ],
            "publisher": [
                "Acid Wizard Studio"
            ],
            "release_date": [
                "10/13/22"
            ],
            "initial_release": [
                "08/17/17"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Darkwood",
        "price": 10.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/8951f2b422ba48d6a4d56c69214de873/the-darkest-tales-19344.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/the-darkest-tales-7d0dab",
            "pegi": null,
            "score": null,
            "description": "When a nightmare creeps into reality, the only ones that can help are those whose magical powers we\u2019ve believed in since childhood. A brave teddy bear heads to the far side of \u201chappily ever after\u201d to rescue his owner, Alicia.",
            "genre": [
                "Action",
                "Platformer",
                "Adventure"
            ],
            "features": [
                "Single Player",
                "Challenging Combat",
                "Controller Support"
            ],
           "developer": [
                "Trinity Team"
            ],
            "publisher": [
                "101XP"
            ],
            "release_date": [
                "10/13/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "The Darkest Tales",
        "price": 15.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/5746db3ba7f6444297c956754e1838af/download-atari-mania-offer-1cbij.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/atari-mania-702c68",
            "pegi": null,
            "score": null,
            "description": "A wild journey through videogame history, Atari Mania is a microgame collection wrapped in a hilarious retro-driven narrative of exploration and surprise.",
            "genre": [
                "Action-Adventure"
            ],
            "features": [
                "Single Player",
                "Controller Support"
            ],
           "developer": [
                "iLLOGIKA Studios"
            ],
            "publisher": [
                "Atari Inc"
            ],
            "release_date": [
                "10/13/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Atari Mania",
        "price": 19.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/25f4eb347acb4ca29276f7493617fee1/download-werewolf-the-apocalypse--heart-of-the-forest-offer-o749q.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/werewolf-the-apocalypse-heart-of-the-forest-2584f2",
            "pegi": null,
            "score": null,
            "description": "Explore the myths and monsters of Europe\u2019s last primeval wilderness. Play as Maia, who arrives at the ancient Bia\u0142owie\u017ca Forest looking to explore her family history. Discover Rage in an adventure game inspired by the experience of the legendary tabletop roleplaying game.",
            "genre": [
                "Horror",
                "Narration",
                "Adventure"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Different Tales"
            ],
            "publisher": [
                "Walkabout Games"
            ],
            "release_date": [
                "10/13/22"
            ],
            "initial_release": [
                "10/13/20"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Werewolf: The Apocalypse \u2014 Heart of the Forest",
        "price": 11.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/65a9273ec61f4bb6b94461eb1ce8ec23/EGS_PCBuildingSimulator2_SpiralHouseLtd_S2_1200x1600-9d894c93110374afb5ff0f666a05c792?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/pc-building-simulator-2",
            "pegi": null,
            "score": "4.6",
            "description": "Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper simulation, an upgraded career mode, and powerful new customization features. Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.",
            "genre": [
                "Casual",
                "Simulation"
            ],
            "features": [
                "Cloud Saves",
                "Achievements",
                "Single Player"
            ],
           "developer": [
                "Spiral House Ltd"
            ],
            "publisher": [
                "Epic Games Publishing"
            ],
            "release_date": [
                "10/12/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "PC Building Simulator 2",
        "price": 22.49
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/95fbc0150c2645e791513bb5bb756747/download-lego-bricktales-offer-cnbl2.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/lego-bricktales-7ccf9b",
            "pegi": null,
            "score": null,
            "description": "In this puzzle-adventure, use an intuitive brick-by-brick building mechanic to solve puzzles and bring your creations to life! Experience a charming story as you explore beautiful LEGO\u00ae dioramas and help the people inhabiting them.",
            "genre": [
                "Adventure",
                "Casual"
            ],
            "features": [
                "Single Player",
                "Controller Support"
            ],
           "developer": [
                "ClockStone"
            ],
            "publisher": [
                "Thunderful Publishing"
            ],
            "release_date": [
                "10/12/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "LEGO\u00ae Bricktales",
        "price": 3.59
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/e085895b3fbb46f280d6fbd5af6778d5/download-a-heros-rest-offer-1o7mp.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/a-heros-rest-67f117",
            "pegi": null,
            "score": null,
            "description": "Build shops, craft items with hundreds of customization options, and manage your resources wisely to lead your Heroes to success. Immerse yourself as proprietor of a medieval fantasy town in a world abounding with Heroes and Monsters.",
            "genre": [
                "City Builder",
                "Simulation",
                "Strategy"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Vanargand Games"
            ],
            "publisher": [
                "Vanargand Games"
            ],
            "release_date": [
                "10/12/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "A Hero's Rest",
        "price": 16.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/7c264e76228641f2b62fa8adf85841d6/download-asterigos-offer-1s3ig.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/asterigos-424313",
            "pegi": null,
            "score": "4.4",
            "description": "Embark on a journey full of danger in this action RPG, inspired by Greek and Roman mythologies. Explore the breathtaking city of Aphes and forge your way through legions of unique foes and mythical bosses to discover the truth behind the city\u2019s curse.",
            "genre": [
                "Action",
                "Adventure",
                "RPG"
            ],
            "features": [
                "Single Player",
                "Controller Support"
            ],
           "developer": [
                "Acme Gamestudio"
            ],
            "publisher": [
                "tinyBuild"
            ],
            "release_date": [
                "10/11/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Asterigos: Curse of the Stars",
        "price": 34.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/3c3669f30b2a437e85d9b5a9885ecfa8/download-source-of-madness-offer-1q10q.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/source-of-madness-287857",
            "pegi": null,
            "score": null,
            "description": "Source of Madness is a side-scrolling dark action roguelite set in a twisted Lovecraftian inspired world powered by procedural generation and AI machine learning. Take on the role of a new Acolyte as they embark on a nightmarish odyssey.",
            "genre": [
                "Action"
            ],
            "features": [
                "Single Player",
                "Competitive",
                "Controller Support"
            ],
           "developer": [
                "Carry Castle"
            ],
            "publisher": [
                "Thunderful Publishing"
            ],
            "release_date": [
                "10/11/22"
            ],
            "initial_release": [
                "05/11/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Source of Madness",
        "price": 13.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/46bb84ce838b4dc083ae0b1f3a6992e0/download-firegirl-hack-n-splash-rescue-dx-offer-19rmz.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/firegirl-29bf39",
            "pegi": null,
            "score": null,
            "description": "Take on the role of a young rescue officer starting her career. Armed with a trusty axe and high-pressure fire hose that also acts like a jetpack, Firegirl responds to emergency calls across the city. Can Firegirl save all the trapped civilians caught in each blaze?",
            "genre": [
                "Action"
            ],
            "features": [
                "Single Player",
                "Controller Support"
            ],
           "developer": [
                "Dejima"
            ],
            "publisher": [
                "Thunderful Publishing"
            ],
            "release_date": [
                "10/11/22"
            ],
            "initial_release": [
                "12/14/21"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Firegirl: Hack 'n Splash Rescue DX",
        "price": 8.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/1547a59289bc4971be7da784626e7ab4/download-ultragoodness-offer-dx0cs.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/ultragoodness-a391d4",
            "pegi": null,
            "score": null,
            "description": "Tear your enemies to pieces in this top-down action-roguelike shooter. Leave oceans of blood and mountains of corpses in new dynamic and colorful action designed in pixel art style. All in the name of Goodness, of course!",
            "genre": [
                "Action",
                "Rogue-Lite",
                "Shooter"
            ],
            "features": [
                "Single Player",
                "Controller Support",
                "Challenging Combat"
            ],
           "developer": [
                "Rasul Mono"
            ],
            "publisher": [
                "Meridian4"
            ],
            "release_date": [
                "10/11/22"
            ],
            "initial_release": [
                "06/02/17"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "UltraGoodness",
        "price": 0.79
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/cc825838e9684ff18d3bcc540d942c52/download-ultragoodness-2-offer-52p3z.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/ultragoodness-2-b9f493",
            "pegi": null,
            "score": null,
            "description": "The struggle between Good and Evil continues in this bloody action, top-down action-roguelike shooter where time moves only when you move or shoot. Tear Satan's forces to pieces, leave oceans of their blood and mountains of demon's corpses in the name of Goodness!",
            "genre": [
                "Action",
                "Rogue-Lite",
                "Shooter"
            ],
            "features": [
                "Controller Support",
                "Single Player",
                "Challenging Combat"
            ],
           "developer": [
                "Rasul Mono"
            ],
            "publisher": [
                "Meridian4"
            ],
            "release_date": [
                "10/11/22"
            ],
            "initial_release": [
                "09/02/19"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "UltraGoodness 2",
        "price": 0.79
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/aec31192b8a6463c9bd43dcb6ece5c8f/download-achilles-legends-untold-offer-kiu24.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/achilles-legends-untold-bb77ad",
            "pegi": null,
            "score": null,
            "description": "End the conflict between Hades and Ares in this Souls-like action RPG. Battle gods, defeat mythological creatures, and gather resources alone or in co-op in Achilles: Legends Untold.",
            "genre": [
                "Action-Adventure",
                "RPG",
                "Indie"
            ],
            "features": [
                "Single Player",
                "Co-op",
                "Controller Support",
                "Challenging Combat"
            ],
           "developer": [
                "Dark Point Games S.A."
            ],
            "publisher": [
                "Dark Point Games S.A."
            ],
            "release_date": [
                "10/10/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Achilles: Legends Untold",
        "price": 14.24
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/d356928fc14745c9811cb04b1a2caff5/EGS_SuperPower3_GolemLabs_S2_1200x1600-eb572bce5c4c76cbf67c0173dc169976?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/superpower-3",
            "pegi": null,
            "score": null,
            "description": "SuperPower 3 is a modern geopolitical sim in a planet Earth setup. Rule the world or challenge your knowledge about demography, economics, military strategy, as well as political issues across the globe. ",
            "genre": [
                "Simulation",
                "Strategy"
            ],
            "features": [
                "Co-op",
                "Multiplayer",
                "Single Player"
            ],
           "developer": [
                "GolemLabs"
            ],
            "publisher": [
                "THQ Nordic"
            ],
            "release_date": [
                "10/07/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "SuperPower 3",
        "price": 29.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/c314efd052d048908cbd57ce7bf9e28a/download-slain-offer-1xiyd.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/slain-aea303",
            "pegi": null,
            "score": "4.3",
            "description": "Slain: Back from Hell. A heavy metal inspired arcade combat with puzzle elements and gore galore. Stunning visuals and true old school gameplay accompanied by the most metal soundtrack you've ever heard.",
            "genre": [
                "Platformer"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Steel Mantis"
            ],
            "publisher": [
                "Digerati"
            ],
            "release_date": [
                "10/06/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Slain: Back From Hell",
        "price": 9.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/c8738a4d1ead40368eab9688b3c7d737/EGS_SkyrimSpecialEdition_BethesdaGameStudios_S2_1200x1600-ae5d13f6510e81460fe80aa1ca19cf4c?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/skyrim",
            "pegi": "PEGI 18",
            "score": "4.8",
            "description": "Winner of more than 200 Game of the Year Awards, The Elder Scrolls V: Skyrim Special Edition includes the full base game and all its add-on expansions, plus modern enhancements like remastered art and visual effects, volumetric god rays and more.",
            "genre": [
                "RPG",
                "Open World",
                "Adventure"
            ],
            "features": [
                "Cloud Saves",
                "Single Player"
            ],
           "developer": [
                "Bethesda Game Studios"
            ],
            "publisher": [
                "Bethesda Softworks"
            ],
            "release_date": [
                "10/06/22"
            ],
            "initial_release": [
                "10/28/16"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "The Elder Scrolls V: Skyrim Special Edition",
        "price": 4.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/64b71b96b867444f9a400aa8a3532003/download-bibots-offer-1quzx.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/bibots-aad4d0",
            "pegi": null,
            "score": null,
            "description": "Bibots is a top-down shooter rogue lite set in a futuristic world. Play as Tayar, an explorer in control of a nervy robot and clear rooms filled with monsters, powers and secrets to unveil. Die, try and repeat until you face your world\u2019s final threat.",
            "genre": [
                "Rogue-Lite",
                "Indie",
                "Action"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Square Squid"
            ],
            "publisher": [
                "PID Games"
            ],
            "release_date": [
                "10/05/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Bibots",
        "price": 12.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/09cd905507fb4564ab2fa1b3a0954a7f/download-broken-pieces-offer-1acg8.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/broken-pieces-b1c349",
            "pegi": null,
            "score": null,
            "description": "Broken Pieces is a psychological thriller taking place in a french coastal village somehow outside the flow of time. Solve the mysteries by putting the pieces of the story back together by figuring out the enigma behind this mystical place.",
            "genre": [
                "Action-Adventure",
                "Indie",
                "RPG"
            ],
            "features": [
                "Single Player",
                "Controller Support"
            ],
           "developer": [
                "Elseware Experience, Benoit Dereau and Mael Vignau"
            ],
            "publisher": [
                "Freedom Games"
            ],
            "release_date": [
                "10/04/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Broken Pieces",
        "price": 24.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/e3e1dbeede5a471c9932edb2f7b99f51/EGS_Outlast2_RedBarrels_S2_1200x1600-b84f788e04780de2edf02ac003246e4b?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/outlast-2",
            "pegi": null,
            "score": "4.7",
            "description": "Sullivan Knoth and his followers are preparing for the tribulations of the end of times at Temple Gate, a town, deep in the wilderness and hidden from civilization.",
            "genre": [
                "Horror",
                "Survival",
                "First Person"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Red Barrels"
            ],
            "publisher": [
                "Red Barrels"
            ],
            "release_date": [
                "10/04/22"
            ],
            "initial_release": [
                "04/25/17"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Outlast 2",
        "price": 23.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/offer/78f42129096d4233bccc527733debfbd/EGS_Outlast_RedBarrels_S2_1200x1600-b02ebdfb4bcd3b1d608ab5b87257b3c4?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/outlast",
            "pegi": null,
            "score": "4.7",
            "description": "Hell is an experiment you can't survive in Outlast, a first-person survival horror game by Red Barrels. As investigative journalist Miles Upshur, explore Mount Massive Asylum and try to survive long enough to discover its terrible secret... if you dare.",
            "genre": [
                "Horror",
                "First Person"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Red Barrels"
            ],
            "publisher": [
                "Red Barrels"
            ],
            "release_date": [
                "10/04/22"
            ],
            "initial_release": [
                "09/04/13"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Outlast",
        "price": 6.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/6433c3748ba34968acb2db60a12c30a8/download-the-complex-offer-1o4vh.png?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/the-complex-0ca5bb",
            "pegi": null,
            "score": null,
            "description": "After a major bio-weapon attack on London, two scientists find themselves in a locked-down laboratory with time, and air, running out. The Complex is an interactive sci-fi thriller movie where your decisions lead to one of eight suspenseful endings.",
            "genre": [
                "Adventure"
            ],
            "features": [
                "Controller Support",
                "Single Player"
            ],
           "developer": [
                "Wales Interactive, Good Gate Media"
            ],
            "publisher": [
                "Wales Interactive"
            ],
            "release_date": [
                "10/04/22"
            ],
            "initial_release": [
                "03/31/20"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "The Complex",
        "price": 9.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/56f490d3ae4546fdbc3046e6197ad451/download-monster-outbreak-offer-13uta.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/monster-outbreak-2e8c08",
            "pegi": null,
            "score": null,
            "description": "The King's dimensional orb has malfunctioned, bringing hordes of monsters into the Kingdom. Defend your safeground against the monsters by gathering resources, building defenses, upgrading your arsenal, and surviving long enough to find the source of monsters and destroy it.",
            "genre": [
                "Action-Adventure",
                "RPG",
                "Strategy"
            ],
            "features": [
                "Co-op",
                "Competitive",
                "Single Player"
            ],
           "developer": [
                "GameMunchers"
            ],
            "publisher": [
                "Freedom Games"
            ],
            "release_date": [
                "10/03/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Monster Outbreak",
        "price": 14.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/3d32732efa1840208f6488d243407eff/download-jitsu-squad-offer-17btg.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/jitsu-squad-af3f2f",
            "pegi": null,
            "score": null,
            "description": "Jitsu Squad is a Marvel vs Capcom inspired 4 player co-op TAG TEAM beat \u2018em up with epic character transformations and fast paced combat.",
            "genre": [
                "Action",
                "Fighting",
                "Indie"
            ],
            "features": [
                "Challenging Combat",
                "Co-op",
                "Controller Support",
                "Single Player",
                "Multiplayer"
            ],
           "developer": [
                "Tanuki Creative Studio"
            ],
            "publisher": [
                "Tanuki Creative Studio"
            ],
            "release_date": [
                "10/01/22"
            ],
            "initial_release": [
                "04/29/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Jitsu Squad",
        "price": 19.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/spt-assets/5590ae6a3ed045af83cc6c527efb0d22/download-undetected-offer-1v8nt.jpg?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/undetected-834ba5",
            "pegi": null,
            "score": null,
            "description": "Stealth your way through the shadows and uncover a corporate conspiracy. Become a cyber-augmented agent in this gameplay-focused stealth game that brings classic sneaking to the modern era.",
            "genre": [
                "Action",
                "Stealth"
            ],
            "features": [
                "Single Player"
            ],
           "developer": [
                "Antonio Freyre"
            ],
            "publisher": [
                "Digerati"
            ],
            "release_date": [
                "09/30/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "UNDETECTED",
        "price": 11.99
    },
    {
        "details": {
            "image_url": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DarkLight_MirariCoptyltd_S4_1200x1600-6fa5d35ab63d8ce3af855aa5525a638e?h=854&amp;resize=1&amp;w=640",
            "product_link": "https://store.epicgames.com/en-US/p/dark-light",
            "pegi": null,
            "score": "4.3",
            "description": "A Sci-fi 2D action-platformer, metroidvania, souls-like game. Explore the apocalypse cyberpunk world full of supernatural beings, some of them are only visible in the light source of your drones. Kill, gain, upgrade, get stronger in the dark world! ",
            "genre": [
                "Action",
                "Adventure",
                "Platformer"
            ],
            "features": [
                "Cloud Saves",
                "Single Player",
                "Controller Support"
            ],
           "developer": [
                "Mirari&Co.pty,ltd."
            ],
            "publisher": [
                "Mirari & Co."
            ],
            "release_date": [
                "09/30/22"
            ],
            "platform": [
                "PS4",
                "XBOX"
            ]
        },
        "title": "Dark Light",
        "price": 13.99
    }
]);