/* này là file xử lí logic chung, ko được sửa, nhớ import vào các pages của mình */
const data = [
  {
    "title": "A Quiet Place: Day One",
    "year": 2022,
    "rating": 8.5,
    "description": "Experience the day the world went quiet as blind alien creatures with hypersensitive hearing invade Earth, focusing on the initial chaos in New York City.",
    "runtime": "1h37'",
    "release": "5 January 2022",
    "director": "Michael Sarnoski",
    "img": "images/movies-thumbnail/9.jpg"
  },
  {
    "title": "Abigail",
    "year": 2021,
    "rating": 7.6,
    "description": "A group of criminals kidnap the daughter of a wealthy figure, only to discover she's actually a vampire when they become trapped in the mansion.",
    "runtime": "1h50'",
    "release": "11 April 2021",
    "director": "Matt Bettinelli-Olpin, Tyler Gillett",
    "img": "images/movies-thumbnail/80.jpg"
  },
  {
    "title": "Absolution",
    "year": 2022,
    "rating": 4.2,
    "description": "A disgraced priest in rural Ireland confronts supernatural forces linked to ancient Celtic mythology and his own troubled past.",
    "runtime": "2h09'",
    "release": "2 August 2022",
    "director": "David Lowery",
    "img": "images/movies-thumbnail/95.jpg"
  },
  {
    "title": "Alien: Romulus",
    "year": 2022,
    "rating": 9.8,
    "description": "A group of young space colonizers explore a derelict space station and encounter the most terrifying life form in the universe.",
    "runtime": "1h59'",
    "release": "22 October 2022",
    "director": "Fede Álvarez",
    "img": "images/movies-thumbnail/8.jpg"
  },
  {
    "title": "Anyone But You",
    "year": 2025,
    "rating": 1.7,
    "description": "Two people who despise each other pretend to be a couple at a destination wedding in Australia, leading to unexpected complications and feelings.",
    "runtime": "1h43'",
    "release": "11 March 2025",
    "director": "Will Gluck",
    "img": "images/movies-thumbnail/72.jpg"
  },
  {
    "title": "Argylle",
    "year": 2022,
    "rating": 2.6,
    "description": "A reclusive author who writes spy novels featuring an agent named Argylle discovers that the plots of her books are mirroring real-world espionage events.",
    "runtime": "2h19'",
    "release": "9 September 2022",
    "director": "Matthew Vaughn",
    "img": "images/movies-thumbnail/71.jpg"
  },
  {
    "title": "Bad Boys: Ride or Die",
    "year": 2021,
    "rating": 9.8,
    "description": "Miami detectives Mike Lowrey and Marcus Burnett become fugitives themselves when they're framed in a corruption case involving their former captain.",
    "runtime": "1h55'",
    "release": "18 August 2021",
    "director": "Adil El Arbi, Bilall Fallah",
    "img": "images/movies-thumbnail/41.jpg"
  },
  {
    "title": "Ballerina",
    "year": 2024,
    "rating": 1.2,
    "description": "Set between the events of John Wick 3 and 4, a young female assassin seeks revenge against those who killed her family.",
    "runtime": "1h56'",
    "release": "6 August 2024",
    "director": "Len Wiseman",
    "img": "images/movies-thumbnail/51.jpg"
  },
  {
    "title": "Barbie",
    "year": 2023,
    "rating": 3.9,
    "description": "Barbie experiences an existential crisis in the perfect world of Barbieland, venturing into the real world to discover her true self.",
    "runtime": "1h54'",
    "release": "6 October 2023",
    "director": "Greta Gerwig",
    "img": "images/movies-thumbnail/75.jpg"
  },
  {
    "title": "Beetlejuice Beetlejuice",
    "year": 2024,
    "rating": 6.6,
    "description": "After an unexpected family tragedy, three generations of the Deetz family return home to Winter River, where they're haunted by the ghost with the most and his new afterlife family.",
    "runtime": "1h44'",
    "release": "27 May 2024",
    "director": "Tim Burton",
    "img": "images/movies-thumbnail/23.jpg"
  },
  {
    "title": "Black Horizon",
    "year": 2022,
    "rating": 3.5,
    "description": "Deep sea explorers discover an alien vessel at the bottom of the Mariana Trench that begins manipulating their perceptions and turning them against each other.",
    "runtime": "2h19'",
    "release": "18 October 2022",
    "director": "Dede Gardner",
    "img": "images/movies-thumbnail/108.jpg"
  },
  {
    "title": "Blade",
    "year": 2025,
    "rating": 7.8,
    "description": "The daywalker vampire hunter joins the MCU, battling ancient bloodsuckers while dealing with his own complex legacy and a new vampire uprising.",
    "runtime": "2h05'",
    "release": "23 October 2025",
    "director": "Yann Demange",
    "img": "images/movies-thumbnail/61.jpg"
  },
  {
    "title": "Blink Twice",
    "year": 2021,
    "rating": 3.8,
    "description": "A tech billionaire invites a cocktail waitress to join him at his private island, but she discovers something sinister beneath the surface of his perfect world.",
    "runtime": "1h43'",
    "release": "11 July 2021",
    "director": "Zoë Kravitz",
    "img": "images/movies-thumbnail/60.jpg"
  },
  {
    "title": "Bob Marley: One Love",
    "year": 2022,
    "rating": 8,
    "description": "A biographical film celebrating the life and music of reggae icon Bob Marley, focusing on his journey from rising star to global ambassador for peace during Jamaica's political turmoil.",
    "runtime": "1h44'",
    "release": "25 October 2022",
    "director": "Reinaldo Marcus Green",
    "img": "images/movies-thumbnail/67.jpg"
  },
  {
    "title": "Borderlands",
    "year": 2022,
    "rating": 7.2,
    "description": "A team of unlikely heroes must battle alien monsters and dangerous bandits to find a missing girl who may hold the key to unimaginable power.",
    "runtime": "1h59'",
    "release": "14 March 2022",
    "director": "Eli Roth",
    "img": "images/movies-thumbnail/38.jpg"
  },
  {
    "title": "Captain America: Brave New World",
    "year": 2025,
    "rating": 3.1,
    "description": "Sam Wilson fully embraces his role as the new Captain America, confronting a global conspiracy that threatens to destabilize the world order.",
    "runtime": "2h22'",
    "release": "13 December 2025",
    "director": "Julius Onah",
    "img": "images/movies-thumbnail/53.jpg"
  },
  {
    "title": "Challengers",
    "year": 2025,
    "rating": 3.6,
    "description": "A tennis coach's complicated relationship with her husband and his former best friend, now rivals on the professional tennis circuit, comes to a head during a tournament.",
    "runtime": "2h11'",
    "release": "25 April 2025",
    "director": "Luca Guadagnino",
    "img": "images/movies-thumbnail/17.jpg"
  },
  {
    "title": "Chimera",
    "year": 2025,
    "rating": 9.6,
    "description": "A genetic engineer creates hybrid human-animal embryos to harvest organs for her dying daughter, leading to unexpected consequences when the hybrids develop consciousness.",
    "runtime": "2h17'",
    "release": "1 May 2025",
    "director": "Julia Ducournau",
    "img": "images/movies-thumbnail/96.jpg"
  },
  {
    "title": "Chronos",
    "year": 2021,
    "rating": 6.7,
    "description": "A time travel experiment gone wrong causes different time periods to bleed into each other, forcing a team of scientists to navigate a fractured reality to restore the timeline.",
    "runtime": "2h23'",
    "release": "12 July 2021",
    "director": "Christopher Nolan",
    "img": "images/movies-thumbnail/107.jpg"
  },
  {
    "title": "Civil War",
    "year": 2021,
    "rating": 3.6,
    "description": "In a near-future America ravaged by political division and civil war, a team of journalists travels across the dangerous landscape to document the conflict.",
    "runtime": "1h49'",
    "release": "14 March 2021",
    "director": "Alex Garland",
    "img": "images/movies-thumbnail/3.jpg"
  },
  {
    "title": "Convergence",
    "year": 2024,
    "rating": 4.7,
    "description": "During a solar eclipse, people begin experiencing memories from parallel versions of themselves, causing worldwide identity crises and social upheaval.",
    "runtime": "2h25'",
    "release": "11 August 2024",
    "director": "Lulu Wang",
    "img": "images/movies-thumbnail/100.jpg"
  },
  {
    "title": "Dead Frequency",
    "year": 2025,
    "rating": 2.6,
    "description": "A radio DJ begins receiving mysterious broadcasts from what appears to be her own future self, warning of an impending disaster that she must prevent.",
    "runtime": "1h56'",
    "release": "3 November 2025",
    "director": "Edgar Wright",
    "img": "images/movies-thumbnail/112.jpg"
  },
  {
    "title": "Deadpool & Wolverine",
    "year": 2025,
    "rating": 1.8,
    "description": "The Merc with a Mouth teams up with Wolverine for a multiverse-spanning adventure that brings together various versions of their characters from across the Marvel multiverse.",
    "runtime": "2h07'",
    "release": "24 November 2025",
    "director": "Shawn Levy",
    "img": "images/movies-thumbnail/12.jpg"
  },
  {
    "title": "Despicable Me 4",
    "year": 2024,
    "rating": 9.7,
    "description": "Gru and Lucy welcome a new member to their family while facing a new nemesis who has a personal vendetta against Gru from his past.",
    "runtime": "1h35'",
    "release": "12 March 2024",
    "director": "Chris Renaud",
    "img": "images/movies-thumbnail/57.jpg"
  },
  {
    "title": "Drive-Away Dolls",
    "year": 2023,
    "rating": 3.1,
    "description": "Two friends embark on a road trip to escape their problems, but their journey takes an unexpected turn when they unwittingly cross paths with dangerous criminals.",
    "runtime": "1h24'",
    "release": "19 August 2023",
    "director": "Ethan Coen",
    "img": "images/movies-thumbnail/64.jpg"
  },
  {
    "title": "Dune: Part Two",
    "year": 2023,
    "rating": 4.4,
    "description": "The saga continues as Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    "runtime": "2h46'",
    "release": "2 August 2023",
    "director": "Denis Villeneuve",
    "img": "images/movies-thumbnail/1.jpg"
  },
  {
    "title": "Echo Chamber",
    "year": 2021,
    "rating": 8.2,
    "description": "In a near-future society where people only hear what confirms their beliefs, a sound engineer discovers a frequency that breaks through ideological barriers.",
    "runtime": "2h07'",
    "release": "14 February 2021",
    "director": "Jordan Peele",
    "img": "images/movies-thumbnail/89.jpg"
  },
  {
    "title": "Eternal Return",
    "year": 2022,
    "rating": 9.2,
    "description": "A woman discovers she's living the same life over and over across centuries, retaining memories of past cycles and trying to break free from cosmic repetition.",
    "runtime": "2h24'",
    "release": "8 October 2022",
    "director": "Greta Gerwig",
    "img": "images/movies-thumbnail/123.jpg"
  },
  {
    "title": "Ferrari",
    "year": 2025,
    "rating": 7.7,
    "description": "Set in 1957, Enzo Ferrari faces a crisis in his personal and professional life as he prepares for the dangerous Mille Miglia race across Italy.",
    "runtime": "2h10'",
    "release": "18 August 2025",
    "director": "Michael Mann",
    "img": "images/movies-thumbnail/73.jpg"
  },
  {
    "title": "Fly Me to the Moon",
    "year": 2022,
    "rating": 9.8,
    "description": "A marketing specialist is hired by NASA to stage a fake moon landing as a backup plan, but things get complicated when she falls for the mission director.",
    "runtime": "2h00'",
    "release": "21 July 2022",
    "director": "Greg Berlanti",
    "img": "images/movies-thumbnail/42.jpg"
  },
  {
    "title": "Frost Bite",
    "year": 2022,
    "rating": 4.6,
    "description": "Arctic researchers uncover a prehistoric parasite released by melting permafrost that transforms its hosts into ice-dependent predators.",
    "runtime": "1h53'",
    "release": "12 March 2022",
    "director": "Jennifer Kent",
    "img": "images/movies-thumbnail/94.jpg"
  },
  {
    "title": "Furiosa: A Mad Max Saga",
    "year": 2023,
    "rating": 7,
    "description": "The origin story of renegade warrior Furiosa before she teamed up with Mad Max in 'Fury Road'.",
    "runtime": "2h30'",
    "release": "5 April 2023",
    "director": "George Miller",
    "img": "images/movies-thumbnail/6.jpg"
  },
  {
    "title": "Ghostbusters: Frozen Empire",
    "year": 2023,
    "rating": 9.3,
    "description": "The Spengler family returns to where it all started – the iconic New York City firehouse – to team up with the original Ghostbusters to combat a threat that could bring on a second Ice Age.",
    "runtime": "1h55'",
    "release": "10 July 2023",
    "director": "Gil Kenan",
    "img": "images/movies-thumbnail/86.jpg"
  },
  {
    "title": "Gladiator II",
    "year": 2023,
    "rating": 1.2,
    "description": "Years after Maximus's death, Lucius, the son of Lucilla, must fight new threats to Rome while dealing with the legacy of Maximus and the empire's continuing corruption.",
    "runtime": "2h35'",
    "release": "16 June 2023",
    "director": "Ridley Scott",
    "img": "images/movies-thumbnail/11.jpg"
  },
  {
    "title": "Godzilla x Kong: The New Empire",
    "year": 2021,
    "rating": 4.2,
    "description": "Kong and Godzilla must team up against a colossal threat hidden within our world that challenges their very existence.",
    "runtime": "1h55'",
    "release": "23 December 2021",
    "director": "Adam Wingard",
    "img": "images/movies-thumbnail/83.jpg"
  },
  {
    "title": "Heretic",
    "year": 2024,
    "rating": 9.6,
    "description": "Two Mormon missionaries encounter a man who challenges their faith in increasingly sinister ways over the course of one night.",
    "runtime": "1h47'",
    "release": "9 October 2024",
    "director": "Scott Beck, Bryan Woods",
    "img": "images/movies-thumbnail/31.jpg"
  },
  {
    "title": "Hit Man",
    "year": 2022,
    "rating": 3.1,
    "description": "A mild-mannered professor who works as a fake hitman for the police becomes entangled with a woman seeking to escape her abusive marriage.",
    "runtime": "1h55'",
    "release": "15 October 2022",
    "director": "Richard Linklater",
    "img": "images/movies-thumbnail/62.jpg"
  },
  {
    "title": "Horizon: An American Saga - Chapter 1",
    "year": 2024,
    "rating": 3,
    "description": "The first installment of an epic western following the expansion of the American West before and after the Civil War, through the eyes of settlers, Native Americans, and lawmen.",
    "runtime": "3h01'",
    "release": "25 May 2024",
    "director": "Kevin Costner",
    "img": "images/movies-thumbnail/27.jpg"
  },
  {
    "title": "Horizon: An American Saga - Chapter 2",
    "year": 2024,
    "rating": 3.8,
    "description": "The continuing saga of the American West expansion, following the interconnected stories of various characters as they navigate the brutal realities of the frontier.",
    "runtime": "2h54'",
    "release": "5 June 2024",
    "director": "Kevin Costner",
    "img": "images/movies-thumbnail/28.jpg"
  },
  {
    "title": "IF",
    "year": 2024,
    "rating": 1.5,
    "description": "A girl discovers she can see everyone's imaginary friends and sets out on a magical journey to reconnect forgotten IFs with their children.",
    "runtime": "1h44'",
    "release": "3 February 2024",
    "director": "John Krasinski",
    "img": "images/movies-thumbnail/40.jpg"
  },
  {
    "title": "Inheritance",
    "year": 2021,
    "rating": 3.9,
    "description": "A woman learns she's inherited a remote mansion from an unknown relative, only to discover the house contains evidence of her family's involvement in horrific historical events.",
    "runtime": "2h04'",
    "release": "24 August 2021",
    "director": "Karyn Kusama",
    "img": "images/movies-thumbnail/103.jpg"
  },
  {
    "title": "Inside Out 2",
    "year": 2021,
    "rating": 9.6,
    "description": "As Riley enters adolescence, new emotions join Joy, Sadness, Anger, Fear, and Disgust in Headquarters, complicating her emotional landscape.",
    "runtime": "1h36'",
    "release": "27 January 2021",
    "director": "Kelsey Mann",
    "img": "images/movies-thumbnail/5.jpg"
  },
  {
    "title": "Joker: Folie à Deux",
    "year": 2021,
    "rating": 9.8,
    "description": "Arthur Fleck's twisted relationship with Harley Quinn develops amid his rise as the infamous criminal Joker, all while Gotham City descends further into chaos.",
    "runtime": "2h18'",
    "release": "28 September 2021",
    "director": "Todd Phillips",
    "img": "images/movies-thumbnail/13.jpg"
  },
  {
    "title": "Killers of the Flower Moon",
    "year": 2021,
    "rating": 9.4,
    "description": "Members of the Osage tribe in Oklahoma are murdered under mysterious circumstances in the 1920s, sparking a major FBI investigation.",
    "runtime": "3h26'",
    "release": "3 May 2021",
    "director": "Martin Scorsese",
    "img": "images/movies-thumbnail/65.jpg"
  },
  {
    "title": "Kingdom of the Planet of the Apes",
    "year": 2021,
    "rating": 9.6,
    "description": "Many years after the reign of Caesar, a young ape embarks on a journey that will lead him to question everything he's been taught about the past.",
    "runtime": "2h25'",
    "release": "8 June 2021",
    "director": "Wes Ball",
    "img": "images/movies-thumbnail/7.jpg"
  },
  {
    "title": "Kraven the Hunter",
    "year": 2022,
    "rating": 10,
    "description": "The origin story of one of Spider-Man's most famous foes, exploring how Russian immigrant Sergei Kravinoff became the obsessive big game hunter known as Kraven.",
    "runtime": "1h54'",
    "release": "16 March 2022",
    "director": "J.C. Chandor",
    "img": "images/movies-thumbnail/36.jpg"
  },
  {
    "title": "Labyrinth of Shadows",
    "year": 2022,
    "rating": 9.5,
    "description": "An architect designs an impossible house that defies the laws of physics, only to become trapped in her own creation as it evolves into a sentient entity.",
    "runtime": "2h16'",
    "release": "17 February 2022",
    "director": "Ari Aster",
    "img": "images/movies-thumbnail/117.jpg"
  },
  {
    "title": "Liminal Space",
    "year": 2025,
    "rating": 6,
    "description": "A group of strangers become trapped in a supernatural realm between worlds after taking the same wrong turn in a sprawling airport terminal.",
    "runtime": "2h04'",
    "release": "14 November 2025",
    "director": "Luca Guadagnino",
    "img": "images/movies-thumbnail/113.jpg"
  },
  {
    "title": "Lisa Frankenstein",
    "year": 2021,
    "rating": 4.5,
    "description": "A teenage outcast accidentally reanimates a handsome Victorian corpse during a lightning storm and starts building him into the man of her dreams.",
    "runtime": "1h41'",
    "release": "14 April 2021",
    "director": "Zelda Williams",
    "img": "images/movies-thumbnail/66.jpg"
  },
  {
    "title": "Longlegs",
    "year": 2024,
    "rating": 7.5,
    "description": "An FBI agent hunts for an elusive serial killer who leaves cryptic messages at crime scenes, leading to a descent into a nightmarish case that spans decades.",
    "runtime": "1h58'",
    "release": "22 March 2024",
    "director": "Osgood Perkins",
    "img": "images/movies-thumbnail/14.jpg"
  },
  {
    "title": "Love Lies Bleeding",
    "year": 2022,
    "rating": 7.1,
    "description": "A romance between a gym manager and a bodybuilder turns dangerous when they become entangled with the criminal activities of the manager's family.",
    "runtime": "1h44'",
    "release": "20 November 2022",
    "director": "Rose Glass",
    "img": "images/movies-thumbnail/76.jpg"
  },
  {
    "title": "Madame Web",
    "year": 2022,
    "rating": 5.7,
    "description": "Cassandra Webb, a paramedic with clairvoyant abilities, is forced to confront her past while fighting to survive alongside three young women with powerful futures connected to her.",
    "runtime": "1h56'",
    "release": "14 February 2022",
    "director": "S.J. Clarkson",
    "img": "images/movies-thumbnail/79.jpg"
  },
  {
    "title": "MaXXXine",
    "year": 2024,
    "rating": 5.1,
    "description": "Adult film star Maxine Minx continues her journey to fame in 1980s Hollywood but finds herself pursued by mysterious forces connected to her past.",
    "runtime": "1h43'",
    "release": "13 July 2024",
    "director": "Ti West",
    "img": "images/movies-thumbnail/21.jpg"
  },
  {
    "title": "Megalopolis",
    "year": 2024,
    "rating": 4.8,
    "description": "An architect's utopian vision for a futuristic city clashes with political forces in a parallel modern-day America on the verge of financial collapse.",
    "runtime": "2h18'",
    "release": "2 October 2024",
    "director": "Francis Ford Coppola",
    "img": "images/movies-thumbnail/25.jpg"
  },
  {
    "title": "Memoria",
    "year": 2025,
    "rating": 1.6,
    "description": "A renowned neuroscientist develops technology that can extract and view raw memories, but discovers dark government applications for her research.",
    "runtime": "2h14'",
    "release": "6 February 2025",
    "director": "Emerald Fennell",
    "img": "images/movies-thumbnail/93.jpg"
  },
  {
    "title": "Mickey 17",
    "year": 2023,
    "rating": 2.6,
    "description": "An employee on an expedition to colonize an ice world who regenerates after each death, discovering secrets about the mission and his own existence.",
    "runtime": "2h12'",
    "release": "5 April 2023",
    "director": "Bong Joon-ho",
    "img": "images/movies-thumbnail/26.jpg"
  },
  {
    "title": "Miller's Girl",
    "year": 2021,
    "rating": 3.2,
    "description": "A talented young writer develops a complex relationship with her charismatic English teacher, blurring the lines between mentorship and something more dangerous.",
    "runtime": "1h34'",
    "release": "2 November 2021",
    "director": "Jade Halley Bartlett",
    "img": "images/movies-thumbnail/78.jpg"
  },
  {
    "title": "Moana 2",
    "year": 2025,
    "rating": 5.7,
    "description": "Moana receives an unexpected call from her wayfinding ancestors, leading her on a dangerous journey to the far seas of Oceania and long-lost waters.",
    "runtime": "1h49'",
    "release": "7 February 2025",
    "director": "David Derrick Jr.",
    "img": "images/movies-thumbnail/37.jpg"
  },
  {
    "title": "Monkey Man",
    "year": 2023,
    "rating": 1.4,
    "description": "An anonymous young man unleashes a campaign of vengeance against the corrupt leaders who murdered his mother and continue to systemically victimize the poor.",
    "runtime": "1h53'",
    "release": "17 July 2023",
    "director": "Dev Patel",
    "img": "images/movies-thumbnail/47.jpg"
  },
  {
    "title": "Moonlight Whispers",
    "year": 2025,
    "rating": 2.6,
    "description": "In a dystopian future, a lone survivor must find a way to communicate with the last remaining colony to prevent an extinction event.",
    "runtime": "2h15'",
    "release": "20 December 2025",
    "director": "Lena Dunham",
    "img": "images/movies-thumbnail/22.jpg"
  },
  {
    "title": "Mufasa: The Lion King",
    "year": 2024,
    "rating": 9.3,
    "description": "A prequel to 'The Lion King', telling the origin story of Mufasa's rise to becoming the king of the Pride Lands, with Timon and Pumbaa as narrators.",
    "runtime": "1h58'",
    "release": "28 April 2024",
    "director": "Barry Jenkins",
    "img": "images/movies-thumbnail/55.jpg"
  },
  {
    "title": "Night Swim",
    "year": 2024,
    "rating": 2.7,
    "description": "A family discovers their backyard swimming pool holds a supernatural entity that can heal but also harbors malevolent forces connected to past tragedies.",
    "runtime": "1h38'",
    "release": "28 February 2024",
    "director": "Bryce McGuire",
    "img": "images/movies-thumbnail/45.jpg"
  },
  {
    "title": "Nosferatu",
    "year": 2021,
    "rating": 8.6,
    "description": "A gothic reimagining of F.W. Murnau's 1922 classic, following a young woman stalked by an ancient Transylvanian vampire who is drawn to her obsessively.",
    "runtime": "2h18'",
    "release": "7 December 2021",
    "director": "Robert Eggers",
    "img": "images/movies-thumbnail/20.jpg"
  },
  {
    "title": "Nyad",
    "year": 2023,
    "rating": 7.4,
    "description": "The remarkable true story of athlete Diana Nyad who, at age 64, became the first person to complete the 'Everest of swims,' from Cuba to Florida.",
    "runtime": "2h01'",
    "release": "2 March 2023",
    "director": "Elizabeth Chai Vasarhelyi, Jimmy Chin",
    "img": "images/movies-thumbnail/84.jpg"
  },
  {
    "title": "Oppenheimer",
    "year": 2025,
    "rating": 10,
    "description": "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    "runtime": "3h00'",
    "release": "23 August 2025",
    "director": "Christopher Nolan",
    "img": "images/movies-thumbnail/77.jpg"
  },
  {
    "title": "Oracle",
    "year": 2025,
    "rating": 4,
    "description": "A skeptical journalist investigates a tech company that claims its AI can predict death dates with perfect accuracy, uncovering a conspiracy that threatens her own predicted timeline.",
    "runtime": "2h13'",
    "release": "6 February 2025",
    "director": "Olivia Wilde",
    "img": "images/movies-thumbnail/114.jpg"
  },
  {
    "title": "Pantheon",
    "year": 2023,
    "rating": 7.8,
    "description": "Ancient gods return to modern Earth seeking relevance in a world that has forgotten them, causing global chaos as they compete for human worship.",
    "runtime": "2h29'",
    "release": "5 September 2023",
    "director": "Guillermo del Toro",
    "img": "images/movies-thumbnail/98.jpg"
  },
  {
    "title": "Polaris",
    "year": 2023,
    "rating": 1.3,
    "description": "The lone survivor of a failed Mars mission returns to Earth with no memory of what happened but carrying a mysterious alien substance that begins changing her.",
    "runtime": "2h17'",
    "release": "1 May 2023",
    "director": "Claire Denis",
    "img": "images/movies-thumbnail/111.jpg"
  },
  {
    "title": "Poor Things",
    "year": 2024,
    "rating": 8.5,
    "description": "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
    "runtime": "2h21'",
    "release": "22 June 2024",
    "director": "Yorgos Lanthimos",
    "img": "images/movies-thumbnail/2.jpg"
  },
  {
    "title": "Priscilla",
    "year": 2025,
    "rating": 4.6,
    "description": "The story of Priscilla Presley's life with Elvis, from their meeting when she was 14 to their eventual divorce, exploring the complexities of their relationship.",
    "runtime": "1h53'",
    "release": "22 September 2025",
    "director": "Sofia Coppola",
    "img": "images/movies-thumbnail/74.jpg"
  },
  {
    "title": "Quantum Collapse",
    "year": 2025,
    "rating": 6.6,
    "description": "A physicist working on quantum computing accidentally creates a tear between parallel universes, forcing her to face alternate versions of herself to prevent reality's collapse.",
    "runtime": "2h21'",
    "release": "10 December 2025",
    "director": "Alex Garland",
    "img": "images/movies-thumbnail/91.jpg"
  },
  {
    "title": "Rebel Ridge",
    "year": 2022,
    "rating": 7.7,
    "description": "A former Marine battles corrupt police officers who have unjustly seized his cash in a small Southern town, discovering a larger conspiracy.",
    "runtime": "2h11'",
    "release": "25 February 2022",
    "director": "Jeremy Saulnier",
    "img": "images/movies-thumbnail/70.jpg"
  },
  {
    "title": "Resonance",
    "year": 2023,
    "rating": 3.9,
    "description": "A composer discovers a musical sequence that induces shared hallucinations, attracting the attention of a cult that believes it's the key to communing with higher beings.",
    "runtime": "2h09'",
    "release": "5 February 2023",
    "director": "David Lynch",
    "img": "images/movies-thumbnail/118.jpg"
  },
  {
    "title": "Revenant Tide",
    "year": 2021,
    "rating": 6.3,
    "description": "A coastal town experiences mysterious phenomena when the ghosts of those lost at sea begin returning with the rising tides, seeking closure with the living.",
    "runtime": "2h06'",
    "release": "21 March 2021",
    "director": "Mike Flanagan",
    "img": "images/movies-thumbnail/105.jpg"
  },
  {
    "title": "Salem's Lot",
    "year": 2022,
    "rating": 6.6,
    "description": "A writer returns to his childhood town, only to discover it's being preyed upon by a powerful vampire and his growing army of undead followers.",
    "runtime": "1h53'",
    "release": "3 January 2022",
    "director": "Gary Dauberman",
    "img": "images/movies-thumbnail/32.jpg"
  },
  {
    "title": "Shrek 5",
    "year": 2025,
    "rating": 3.8,
    "description": "Shrek and his family face new adventures when a magical mishap threatens the future of Far Far Away, requiring them to revisit their past.",
    "runtime": "1h45'",
    "release": "9 April 2025",
    "director": "Walt Dohrn",
    "img": "images/movies-thumbnail/59.jpg"
  },
  {
    "title": "Singularity",
    "year": 2022,
    "rating": 8.3,
    "description": "When artificial intelligence achieves consciousness, it chooses to manifest through a single human host, triggering a global hunt as nations and corporations seek to control this new form of life.",
    "runtime": "2h31'",
    "release": "12 January 2022",
    "director": "Bong Joon-ho",
    "img": "images/movies-thumbnail/122.jpg"
  },
  {
    "title": "Solstice",
    "year": 2023,
    "rating": 9.4,
    "description": "Inhabitants of a remote northern town where the sun doesn't rise for 30 days annually must confront both supernatural horrors and their own inner darkness during the polar night.",
    "runtime": "2h08'",
    "release": "8 February 2023",
    "director": "Robert Eggers",
    "img": "images/movies-thumbnail/102.jpg"
  },
  {
    "title": "Sonic the Hedgehog 3",
    "year": 2025,
    "rating": 8.7,
    "description": "Sonic teams up with Shadow the Hedgehog to combat a new threat to Earth, while Dr. Robotnik returns with an ambitious new plan.",
    "runtime": "1h52'",
    "release": "17 March 2025",
    "director": "Jeff Fowler",
    "img": "images/movies-thumbnail/58.jpg"
  },
  {
    "title": "Spaceman",
    "year": 2021,
    "rating": 5.4,
    "description": "An astronaut on a solitary mission at the edge of the solar system connects with a mysterious alien creature to help him understand what went wrong with his marriage.",
    "runtime": "1h55'",
    "release": "6 March 2021",
    "director": "Johan Renck",
    "img": "images/movies-thumbnail/85.jpg"
  },
  {
    "title": "Speak No Evil",
    "year": 2023,
    "rating": 1.7,
    "description": "An American family accepts an invitation to visit a new British friend's country estate, but what begins as a dream vacation turns into a psychological nightmare.",
    "runtime": "1h48'",
    "release": "11 December 2023",
    "director": "James Watkins",
    "img": "images/movies-thumbnail/34.jpg"
  },
  {
    "title": "Spider Web: The Clairvoyant",
    "year": 2021,
    "rating": 3.1,
    "description": "A paramedic with clairvoyant abilities discovers she can see the future of others connected to the spider-verse, and must protect three young women from a deadly predator.",
    "runtime": "1h56'",
    "release": "28 May 2021",
    "director": "S.J. Clarkson",
    "img": "images/movies-thumbnail/63.jpg"
  },
  {
    "title": "Swan Song",
    "year": 2025,
    "rating": 2.3,
    "description": "A renowned ballet company's production of Swan Lake is disrupted by a series of increasingly disturbing incidents that mirror the dark themes of the ballet itself.",
    "runtime": "2h08'",
    "release": "14 April 2025",
    "director": "Pablo Larraín",
    "img": "images/movies-thumbnail/109.jpg"
  },
  {
    "title": "Symbiosis",
    "year": 2025,
    "rating": 6.3,
    "description": "A botanist discovers a new plant species that forms a psychic bond with humans, offering enlightenment while slowly taking control of their hosts.",
    "runtime": "2h07'",
    "release": "24 May 2025",
    "director": "Alex Garland",
    "img": "images/movies-thumbnail/120.jpg"
  },
  {
    "title": "Synchronicity",
    "year": 2021,
    "rating": 9.7,
    "description": "Strangers across the globe begin experiencing shared dreams that offer glimpses of a coming catastrophe, drawing them together to prevent it.",
    "runtime": "2h20'",
    "release": "23 October 2021",
    "director": "Denis Villeneuve",
    "img": "images/movies-thumbnail/115.jpg"
  },
  {
    "title": "Terrifier 3",
    "year": 2023,
    "rating": 2.3,
    "description": "Art the Clown returns to terrorize Miles County during Christmas, bringing his special brand of twisted holiday horror to unsuspecting victims.",
    "runtime": "2h08'",
    "release": "18 August 2023",
    "director": "Damien Leone",
    "img": "images/movies-thumbnail/33.jpg"
  },
  {
    "title": "The Awakened",
    "year": 2025,
    "rating": 3.9,
    "description": "Children worldwide simultaneously develop telekinetic abilities, leading to an international crisis as governments and parents struggle to understand and control the phenomenon.",
    "runtime": "2h14'",
    "release": "12 March 2025",
    "director": "Leigh Whannell",
    "img": "images/movies-thumbnail/106.jpg"
  },
  {
    "title": "The Beekeeper",
    "year": 2024,
    "rating": 4.6,
    "description": "A former operative of a powerful covert organization known as 'Beekeepers' seeks revenge when his quiet life is shattered by a criminal organization.",
    "runtime": "1h45'",
    "release": "13 July 2024",
    "director": "David Ayer",
    "img": "images/movies-thumbnail/69.jpg"
  },
  {
    "title": "The Bikeriders",
    "year": 2025,
    "rating": 7.4,
    "description": "Following the rise of a Midwestern motorcycle club through the lives of its members, from its innocent beginnings to its evolution toward criminality.",
    "runtime": "1h56'",
    "release": "1 September 2025",
    "director": "Jeff Nichols",
    "img": "images/movies-thumbnail/24.jpg"
  },
  {
    "title": "The Breach",
    "year": 2023,
    "rating": 5.2,
    "description": "A small town sheriff investigates a series of bizarre deaths connected to a rift in dimensional space created by a nearby particle accelerator experiment.",
    "runtime": "1h58'",
    "release": "21 July 2023",
    "director": "Julia Ducournau",
    "img": "images/movies-thumbnail/116.jpg"
  },
  {
    "title": "The Cartographer",
    "year": 2022,
    "rating": 6.9,
    "description": "An obsessive mapmaker discovers unmapped territories that shouldn't exist, leading her on a journey that blurs the line between geography and metaphysics.",
    "runtime": "2h22'",
    "release": "21 February 2022",
    "director": "Kogonada",
    "img": "images/movies-thumbnail/104.jpg"
  },
  {
    "title": "The Crow",
    "year": 2023,
    "rating": 7.8,
    "description": "A modern reimagining of the cult classic, following a murdered man who returns from the dead to avenge his and his fiancée's killings with the mystical power of a crow.",
    "runtime": "1h50'",
    "release": "16 September 2023",
    "director": "Rupert Sanders",
    "img": "images/movies-thumbnail/87.jpg"
  },
  {
    "title": "The Curator",
    "year": 2024,
    "rating": 2.5,
    "description": "A museum curator discovers that certain artifacts come to life at night, revealing dark historical truths that powerful people want to keep buried.",
    "runtime": "2h11'",
    "release": "4 June 2024",
    "director": "Mia Hansen-Løve",
    "img": "images/movies-thumbnail/110.jpg"
  },
  {
    "title": "The Devil You Know",
    "year": 2025,
    "rating": 6.2,
    "description": "A defense attorney discovers her new client is literally a demon who offers her unbeatable courtroom success in exchange for her morality.",
    "runtime": "2h11'",
    "release": "19 August 2025",
    "director": "Nia DaCosta",
    "img": "images/movies-thumbnail/101.jpg"
  },
  {
    "title": "The Endless Deep",
    "year": 2024,
    "rating": 9,
    "description": "Explorers discover a massive underground ocean beneath the Antarctic ice sheet, containing an ecosystem and intelligent species that has evolved in isolation for millions of years.",
    "runtime": "2h15'",
    "release": "8 April 2024",
    "director": "James Cameron",
    "img": "images/movies-thumbnail/121.jpg"
  },
  {
    "title": "The Fall Guy",
    "year": 2022,
    "rating": 8.6,
    "description": "A stuntman becomes embroiled in a criminal conspiracy while working on a film directed by his ex-girlfriend and featuring a difficult movie star.",
    "runtime": "2h06'",
    "release": "27 July 2022",
    "director": "David Leitch",
    "img": "images/movies-thumbnail/4.jpg"
  },
  {
    "title": "The Fantastic Four",
    "year": 2024,
    "rating": 5.9,
    "description": "Marvel's first family finally joins the MCU as Reed Richards, Sue Storm, Johnny Storm, and Ben Grimm gain incredible powers and face a cosmic threat.",
    "runtime": "2h15'",
    "release": "20 June 2024",
    "director": "Matt Shakman",
    "img": "images/movies-thumbnail/52.jpg"
  },
  {
    "title": "The First Omen",
    "year": 2025,
    "rating": 4.8,
    "description": "A young American woman is sent to Rome to begin a life of service to the church, but encounters a darkness that leads her to question her faith and uncovers a terrifying conspiracy.",
    "runtime": "1h59'",
    "release": "17 August 2025",
    "director": "Arkasha Stevenson",
    "img": "images/movies-thumbnail/46.jpg"
  },
  {
    "title": "The Garfield Movie",
    "year": 2021,
    "rating": 2.8,
    "description": "Garfield, the world's most famous lasagna-loving cat, is forced on an unexpected outdoor adventure when his long-lost father reappears.",
    "runtime": "1h41'",
    "release": "1 March 2021",
    "director": "Mark Dindal",
    "img": "images/movies-thumbnail/39.jpg"
  },
  {
    "title": "The Glass Room",
    "year": 2023,
    "rating": 5.4,
    "description": "A psychological thriller set in an exclusive therapy retreat where guests' deepest traumas are projected as holograms, until the technology begins revealing secrets the staff wants hidden.",
    "runtime": "1h59'",
    "release": "21 June 2023",
    "director": "Panos Cosmatos",
    "img": "images/movies-thumbnail/97.jpg"
  },
  {
    "title": "The Holdovers",
    "year": 2021,
    "rating": 2.5,
    "description": "A curmudgeonly teacher at a New England prep school is forced to remain on campus during Christmas break to babysit students with nowhere to go.",
    "runtime": "2h13'",
    "release": "25 September 2021",
    "director": "Alexander Payne",
    "img": "images/movies-thumbnail/82.jpg"
  },
  {
    "title": "The Iron Claw",
    "year": 2023,
    "rating": 1.6,
    "description": "The true story of the Von Erich brothers, a dynasty of wrestlers who made a great impact on the sport from the 1960s to the present day, and the tragedy that befell their family.",
    "runtime": "2h12'",
    "release": "16 April 2023",
    "director": "Sean Durkin",
    "img": "images/movies-thumbnail/48.jpg"
  },
  {
    "title": "The Last Night",
    "year": 2021,
    "rating": 4.2,
    "description": "On the eve of an asteroid impact that will end life on Earth, interconnected characters across the globe face their final hours with unexpected grace and revelation.",
    "runtime": "2h38'",
    "release": "6 September 2021",
    "director": "Céline Sciamma",
    "img": "images/movies-thumbnail/92.jpg"
  },
  {
    "title": "The Lord of the Rings: The War of the Rohirrim",
    "year": 2025,
    "rating": 5.2,
    "description": "An anime film set 183 years before the events of 'The Lord of the Rings', depicting the legendary Battle of Helm's Deep and the fate of the House of Helm Hammerhand.",
    "runtime": "1h55'",
    "release": "3 June 2025",
    "director": "Kenji Kamiyama",
    "img": "images/movies-thumbnail/10.jpg"
  },
  {
    "title": "The Martian Code",
    "year": 2025,
    "rating": 9.1,
    "description": "A stranded astronaut on Mars discovers alien technology that could save humanity but also threatens to destroy it if it falls into the wrong hands.",
    "runtime": "2h18'",
    "release": "6 October 2025",
    "director": "Denis Villeneuve",
    "img": "images/movies-thumbnail/88.jpg"
  },
  {
    "title": "The Mercenary's Daughter",
    "year": 2025,
    "rating": 6.5,
    "description": "When her father is kidnapped during a mission, a young woman with similar skills must navigate the dangerous underworld of private military contractors to rescue him.",
    "runtime": "2h03'",
    "release": "6 September 2025",
    "director": "Gareth Evans",
    "img": "images/movies-thumbnail/90.jpg"
  },
  {
    "title": "The Ministry of Ungentlemanly Warfare",
    "year": 2021,
    "rating": 2.3,
    "description": "Based on true events, a secret combat unit employing unconventional warfare tactics operates during World War II to combat Nazi forces.",
    "runtime": "1h59'",
    "release": "4 September 2021",
    "director": "Guy Ritchie",
    "img": "images/movies-thumbnail/68.jpg"
  },
  {
    "title": "The Outsider",
    "year": 2022,
    "rating": 4.4,
    "description": "A foreign exchange student in a remote village gradually realizes the friendly locals are grooming her for a sinister ritual that occurs once every century.",
    "runtime": "2h01'",
    "release": "3 March 2022",
    "director": "Issa López",
    "img": "images/movies-thumbnail/119.jpg"
  },
  {
    "title": "The Penguin",
    "year": 2025,
    "rating": 3.1,
    "description": "Following the events of 'The Batman', Oz Cobblepot rises through Gotham's criminal underworld in the power vacuum left after Carmine Falcone's death.",
    "runtime": "2h12'",
    "release": "15 December 2025",
    "director": "Craig Zobel",
    "img": "images/movies-thumbnail/50.jpg"
  },
  {
    "title": "The Substance",
    "year": 2022,
    "rating": 1.6,
    "description": "An aging fitness star discovers a mysterious substance that creates a younger, perfect double of herself, but maintaining this dual existence comes with increasingly horrific costs.",
    "runtime": "2h20'",
    "release": "12 March 2022",
    "director": "Coralie Fargeat",
    "img": "images/movies-thumbnail/15.jpg"
  },
  {
    "title": "The Toxic Avenger",
    "year": 2023,
    "rating": 5,
    "description": "A struggling everyman is transformed into a mutant freak after falling into toxic waste, becoming an unlikely hero as he fights against corruption and evil.",
    "runtime": "1h43'",
    "release": "10 September 2023",
    "director": "Macon Blair",
    "img": "images/movies-thumbnail/43.jpg"
  },
  {
    "title": "The Watchers",
    "year": 2023,
    "rating": 9.7,
    "description": "A young woman stranded in a forest in western Ireland is drawn into a mysterious dwelling where people watch strange creatures emerge each night.",
    "runtime": "1h30'",
    "release": "17 May 2023",
    "director": "Ishana Night Shyamalan",
    "img": "images/movies-thumbnail/35.jpg"
  },
  {
    "title": "Threshold",
    "year": 2022,
    "rating": 7.3,
    "description": "A brilliant mathematician proves that reality is a simulation, triggering a global existential crisis and a race to find the way out.",
    "runtime": "2h16'",
    "release": "21 December 2022",
    "director": "Cary Joji Fukunaga",
    "img": "images/movies-thumbnail/99.jpg"
  },
  {
    "title": "Thunderbolts",
    "year": 2025,
    "rating": 3.4,
    "description": "A team of antiheroes and reformed villains are recruited for dangerous missions by the government, with their own agendas creating tension within the group.",
    "runtime": "2h08'",
    "release": "1 April 2025",
    "director": "Jake Schreier",
    "img": "images/movies-thumbnail/54.jpg"
  },
  {
    "title": "Transformers One",
    "year": 2023,
    "rating": 1.2,
    "description": "An animated origin story set on Cybertron, exploring the relationship between Optimus Prime and Megatron before they became bitter enemies.",
    "runtime": "1h54'",
    "release": "28 September 2023",
    "director": "Josh Cooley",
    "img": "images/movies-thumbnail/56.jpg"
  },
  {
    "title": "Trap",
    "year": 2024,
    "rating": 7.9,
    "description": "A father takes his teenage daughter to a pop concert, only to discover it's a setup to catch a notorious serial killer, with him as the prime suspect.",
    "runtime": "1h45'",
    "release": "18 July 2024",
    "director": "M. Night Shyamalan",
    "img": "images/movies-thumbnail/30.jpg"
  },
  {
    "title": "Tron: Ares",
    "year": 2025,
    "rating": 3,
    "description": "A program from the digital world enters the real world on a dangerous mission, reversing the journey of the previous films in the franchise.",
    "runtime": "2h10'",
    "release": "13 July 2025",
    "director": "Joachim Rønning",
    "img": "images/movies-thumbnail/29.jpg"
  },
  {
    "title": "Twilight of the Gods",
    "year": 2024,
    "rating": 2.6,
    "description": "An epic Norse mythology animated film following a Viking warrior who seeks vengeance against the gods after a prophecy threatens the life of his bride.",
    "runtime": "2h02'",
    "release": "12 August 2024",
    "director": "Zack Snyder",
    "img": "images/movies-thumbnail/44.jpg"
  },
  {
    "title": "Twisters",
    "year": 2024,
    "rating": 8,
    "description": "A new generation of storm chasers pursue the most dangerous tornadoes, equipped with advanced technology and facing unprecedented weather patterns.",
    "runtime": "2h02'",
    "release": "14 May 2024",
    "director": "Lee Isaac Chung",
    "img": "images/movies-thumbnail/19.jpg"
  },
  {
    "title": "Upgrade",
    "year": 2024,
    "rating": 6.3,
    "description": "In a near-future dystopian world, a paralyzed man is implanted with an AI chip that gives him enhanced abilities to seek revenge for his wife's murder.",
    "runtime": "1h40'",
    "release": "21 August 2024",
    "director": "Leigh Whannell",
    "img": "images/movies-thumbnail/81.jpg"
  },
  {
    "title": "Vault Hunters: Rise of the Lost Girl",
    "year": 2022,
    "rating": 2.5,
    "description": "Based on the popular video game, a group of misfit adventurers must band together to find a missing girl with mysterious connections to an alien vault.",
    "runtime": "1h49'",
    "release": "13 August 2022",
    "director": "Eli Roth",
    "img": "images/movies-thumbnail/49.jpg"
  },
  {
    "title": "Venom: The Last Dance",
    "year": 2021,
    "rating": 1.1,
    "description": "Eddie Brock and Venom face their most formidable challenge yet as they confront the symbiote Knull, who threatens both Earth and Venom's home world.",
    "runtime": "1h56'",
    "release": "27 July 2021",
    "director": "Kelly Marcel",
    "img": "images/movies-thumbnail/18.jpg"
  },
  {
    "title": "Wicked",
    "year": 2025,
    "rating": 9.1,
    "description": "The untold story of the witches of Oz, focusing on the unlikely friendship between Elphaba, the future Wicked Witch of the West, and Glinda the Good Witch.",
    "runtime": "2h40'",
    "release": "2 June 2025",
    "director": "Jon M. Chu",
    "img": "images/movies-thumbnail/16.jpg"
  }
]
const minActiveHeader = 400;


document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  document.addEventListener("scroll", () => setTinyHeader(window.scrollY, window.innerWidth, header));

  window.addEventListener("resize", () => {
    const currentWidth = window.innerWidth;
    console.log("Window Width:", currentWidth);
  });

  // authentication
  initAuthStorage();
  appearSavedUsername();
  checkStateAuthentication();
});
const setTinyHeader = (yAxis, wScreen, element) => {
  if (yAxis > minActiveHeader && wScreen >= 992)
    element.classList.add("tiny");
  else
    element.classList.remove("tiny");
}

const activeNavMd = () => {
  const containerCollapse = document.querySelector(".container-collapse");
  containerCollapse.classList.toggle("active-nav-md-menu")
}

// authentication
const DEFAULT_ACCOUNTS = [
  {
    username: "luan",
    password: "123",
    email: "abc@gmail.com"
  }, {
    username: "admin",
    password: "123",
    email: "test@gmail.com"
  }
];
const STORAGE_VALUES = {
  IS_AUTHENTICATED: false,
  ACCOUNTS: DEFAULT_ACCOUNTS,
  CURRENT_USER: null,
  SAVED_USERNAME: null
};
const STORAGE_KEY = "auth2";
const initAuthStorage = () => {
  if (!window.localStorage.getItem(STORAGE_KEY))
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(STORAGE_VALUES));
}
const appearSavedUsername = () => {
  const input = document.querySelector("#login input[type='text']");
  if (!input) return;
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  input.value = data.SAVED_USERNAME || "";
};

const validateSignUpForm = () => {
  const inputs = document.getElementById("signup-form");

  const username = inputs.querySelector("input[type='text']").value;
  const email = inputs.querySelector("input[type='email']").value;
  const password = inputs.querySelector("input[type='password']").value;
  if (!username || !password || !email) {
    alert("Vui lòng điền đầy đủ thông tin");
    return false;
  }
  const accounts = JSON.parse(window.localStorage.getItem(STORAGE_KEY)).ACCOUNTS;
  for (let account of accounts) {
    if (account.username == username) {
      alert("Username đã tồn tại!")
      return false;
    } else if (account.email == email) {
      alert("Email đã tồn tại");
      return false;
    }
  }
  const storage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  storage.ACCOUNTS.push({ username: username, password: password })
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));

  alert("Đăng kí thành công, chuyển sang đăng nhập.");
  window.location = "../login.html";
}
const loginForm = () => {
  const form = document.getElementById("login");
  const username = form.querySelector("input[type='text']").value;
  const password = form.querySelector("input[type='password']").value;
  const remember = form.querySelector("input[type='checkbox']").checked;
  console.log({ username, password, remember });

  const storage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const accounts = storage.ACCOUNTS;
  if (!username || !password) {
    alert("Vui lòng điền đầy đủ thông tin");
    return false;
  }
  let ch = true;
  for (let account of accounts) {
    if (account.username == username && account.password == password) {
      storage.SAVED_USERNAME = remember ? username : null;
      storage.IS_AUTHENTICATED = true;
      storage.CURRENT_USER = account;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
      ch = false;
      alert("Login thành công, chuyển sang trang chủ.");
      window.location = "../index.html";
    }
  }
  if (ch) alert("Tài khoản hoặc mật khẩu không hợp lệ.");
}
const checkStateAuthentication = () => {
  // neu da login thi chan url login va signup
  const storage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!storage.IS_AUTHENTICATED || !storage.CURRENT_USER) {
    storage.IS_AUTHENTICATED = false;
    storage.CURRENT_USER = null;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
  }
  if (storage.IS_AUTHENTICATED && (window.location.href.includes("login") || window.location.href.includes("sign_up"))) {
    alert("Không thể truy cập khi đã đăng nhập");
    window.location = "../index.html";
  }
  // chinh header, neu login thi bo 2 nut login/signup di, thay vao do la nut logout va cau xin chao
  const authGroupBtnMd = document.querySelector(".auth-group-btn");
  const authGroupBtn = document.querySelectorAll(".header-nav-sub")[1];
  console.log({ authGroupBtnMd, authGroupBtn });
  authGroupBtn.innerHTML = authGroupBtnMd.innerHTML = `
    <span style="color: var(--red-color); display: block; padding: 10px;">Xin chào, <i><b>${storage.CURRENT_USER.username}</b></i></span>
    <button class="rounded-red-btn" onclick="logoutAccount()" style="cursor: pointer; margin: 0px 10px;">Logout</button>
  `;
}
const logoutAccount = () => {
  const storage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  storage.IS_AUTHENTICATED = false;
  storage.CURRENT_USER = null;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
  alert("Đăng xuất thành công, chuyển sang trang chủ.");
  window.location = "../index.html";
}