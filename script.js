//Padaryti movie review site, (PANAŠUS Į IMDB, ROTTENTOMATOES), REIKIA APIE 100 Filmų

let secretWord = [];
let count = 0;
let pagelist = 0;
let currentValue = 0;
let movieReviews = [
    {
        name: ["Five Nights at Freddy's"],
        desc: ["A troubled security guard begins working at Freddy Fazbear's Pizza. During his five nights on the job, he realizes that something is wrong with the pizzeria and pretty soon finds the truth about its animatronics."],
        criticReviews: [
            {score: 6, name: "Joshua R.", text: "9/10 for looks - 3/10 for screenplay"},
            {score: 5, name: "May L.", text: "Massive script issues"},
        ],
        fanReviews: [
            {score: 10, name: "PurpleGuy16", text: "I LOVED it"},
            {score: 9, name: "kyliemm", text: "The sex scene was awesome"},
            {score: 6, name: "tankboy-46851", text: "Probably the better videogame adaptations"}
        ]
    },
    {
        name: ["Jacob's Ladder"],
        desc: ["Mourning his dead son, a haunted Vietnam War veteran attempts to uncover his past while suffering from a severe case of dissociation. To do so, he must decipher reality and life from his own dreams, delusions, and perceptions of death."],
        criticReviews: [
            {score: 8, name: "Jacob S.", text: "More than a movie"},
            {score: 7, name: "James S.", text: "An underrated horror that needs to be discovered"}
        ],
        fanReviews: [
            {score: 10, name: "私は良い映画が大好きです", text: "One of the best movies ever made"},
            {score: 8, name: "SilentHill2Fan", text: "Where was the ladder, still great movie"},
            {score: 7, name: "BananaSandvich", text: "Good movie, don't really understand it though"}
        ]
    },
    {
        name: ["Superbad"],
        desc: ["Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry."],
        criticReviews: [
            {score: 9, name: "Stephen S.", text: "Comedy Special"},
            {score: 8, name: "Mike M.", text: "Hilarious Jonah Hill and the nerdy Michael Cera"},
            {score: 7, name: "Richard P.", text: "Supergood"}
        ],
        fanReviews: [
            {score: 9, name: "McLovin", text: "McLovin is literally me!"},
            {score: 6, name: "MGE Brother", text: "The fact that they didn't kiss at the end was sad, still good movie"}
        ]
    },
    {
        name: ["We're the Millers"],
        desc: ["A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico."],
        criticReviews: [
            {score: 8, name: "Leigh P.", text: "Will probably be regarded as a 'so dumb but so funny' comedy."},
            {score: 7, name: "Richard P.", text: "Good for lazy evening on the sofa"},
        ],
        fanReviews: [
            {score: 8, name: "blizzend", text: "Good movie"},
            {score: 5, name: "Ihaveurges", text: "Not a bad movie"}
        ]
    },
    {
        name: ["No Country for Old Men"],
        desc: ["Violence and mayhem ensue after a hunter stumbles upon the aftermath of a drug deal gone wrong and over two million dollars in cash near the Rio Grande."],
        criticReviews: [
            {score: 10, name: "Simmon K.", text: "A Look into an Abyss"},
            {score: 9, name: "Wendy I.", text: "One of my favorite films of all time"},
        ],
        fanReviews: [
            {score: 8, name: "AntwonfromGhettoSmosh", text: "Antoni chiguri"},
            {score: 6, name: "quarter", text: "Call it"}
        ]
    },
    {
        name: ["Postal"],
        desc: ["In the ironically named city of Paradise, a loser teams up with his cult-leading uncle to steal a peculiar bounty of riches from their local amusement park. The recently arrived Taliban have a similar focus, but a far more sinister intent."],
        criticReviews: [
            {score: 5, name: "Kam W.", text: "An Uwe Boll movie that is actually good"},
            {score: 4, name: "Joshua R.", text: "Satire, the Uwe Boll way"}
        ],
        fanReviews: [
            {score: 10, name: "Uwe Boll", text: "Masterpiece."},
            {score: 7, name: "Who", text: "J. K. Simmons was crazy."}
        ]
    },
    {
        name: ["Fred: The Movie"],
        desc: ["Lovestruck, awkward teen Fred Figglehorn makes desperate attempts to make Judy fall in love with him - while also dodging the mischievous Kevin."],
        criticReviews: [
            {score: 1, name: "Anthony Q.", text: "Hey it's FRED and it is total garbage."},
            {score: 1, name: "Robbie C.", text: "Just a waste of time"}
        ],
        fanReviews: [
            {score: 3, name: "Fred", text: "I don't even know"},
            {score: 2, name: "MarkiplierReaal", text: "What was the thought process"}
        ]
    },
    {
        name: ["Smosh: The Movie"],
        desc: ["An embarrassing video of Anthony surfaces online right before his fifth high school reunion. The Smosh dudes then take a portal into YouTube and race to change the video and re-write history before it blows Anthony's chances of reconnecting with his teen crush Anna."],
        criticReviews: [
            {score: 3, name: "Sandie A. C.", text: "Less than Meh"},
            {score: 2, name: "Bryce D.", text: "Just, why?"}
        ],
        fanReviews: [
            {score: 5, name: "Ian from Ghetto Smosh", text: "It has markiplier"},
            {score: 2, name: "Bitcoin", text: "Youtuber acting"}
        ]
    },
    {
        name: ["Abraham Lincoln vs. Zombies"],
        desc: ["While the Civil War rages on, President Abraham Lincoln must undertake an even more daunting task - destroying the Confederate Undead."],
        criticReviews: [
            {score: 3, name: "John K. F.", text: "So bad I loved it..."},
            {score: 3, name: "Abraham L.", text: "Better than I expected..."},
        ],
        fanReviews: [
            {score: 6, name: "FatMama", text: "Cool cinematography"},
            {score: 5, name: "FortniteGuy995", text: "Not complete garbage..."}
        ]
    },
    {
        name: ["TMZ Presents: The Downfall of Diddy"],
        desc: ["A series of lawsuits and allegations have legendary rap mogul P. Diddy on the ropes. TMZ has the troubling inside story from people who were there."],
        criticReviews: [
            {score: 3, name: "Justin T.", text: "He fell off, essentially.."},
            {score: 2, name: "Travis S.", text: "It was a pretty meh documentary"},
        ],
        fanReviews: [
            {score: 8, name: "Guy1", text: "I am trying to cook some meat and they recommending me the meat master"},
            {score: 7, name: "Guy2", text: "Why they recommending me Diddy?"},
            {score: 4, name: "Hawk2", text: "Uh, did he do it?"}
        ]
    },
    {
        name: ["Sex Pot"],
        desc: ["Two potheads find a stash of weed that makes women very horny."],
        criticReviews: [
            {score: 4, name: "Kevin C.", text: "Depends on what you expect..."},
            {score: 2, name: "Kevin B.", text: "The title says it all"},
        ],
        fanReviews: [
            {score: 10, name: "DefNtSTNR", text: "ABSOLUTE MASTERPIECE!"},
            {score: 7, name: "WindowsPolice", text: "Too much pot."}
        ]
    },
    {
        name: ["The Blair Witch Project"],
        desc: ["Three film students vanish after traveling into a Maryland forest to film a documentary on the local Blair Witch legend, leaving only their footage behind."],
        criticReviews: [
            {score: 7, name: "Anthony S.", text: "Very Atmospheric Horror"},
            {score: 7, name: "Xan B.", text: "Much better than its reputation"}
        ],
        fanReviews: [
            {score: 10, name: "Alternate", text: "A film that turned me into a nervous wreck"},
            {score: 6, name: "WalterFile", text: "Birth of a sub-genre"}
        ]
    },
    {
        name: ["Paul"],
        desc: ["Two English comic book geeks traveling across the U.S. encounter an alien outside Area 51."],
        criticReviews: [
            {score: 10, name: "Jimmy M.", text: "Perfect Gen X Movie"},
            {score: 7, name: "Saul G.", text: "Sure it's not a comedic masterpiece, but its a lot of fun"}
        ],
        fanReviews: [
            {score: 9, name: "MarginLeftAuto", text: "RUN to the theatres to see this one!"},
            {score: 7, name: "MarginRightAuto", text: "A Funny Entertainment for the Whole Family"}
        ]
    },
    {
        name: ["Borat"],
        desc: ["Kazakh TV talking head Borat is dispatched to the United States to report on the greatest country in the world."],
        criticReviews: [
            {score: 8, name: "Richard C.", text: "Dissecting Life In a Hilarious Way"},
            {score: 7, name: "Micheal C.", text: "An Appalling Masterpiece"}
        ],
        fanReviews: [
            {score: 10, name: "RatBat", text: "One of the best films I have ever seen"},
            {score: 9, name: "LoLing", text: "Borat: A laugh out loud movie"}
        ]
    },
    {
        name: ["A Minecraft Movie"],
        desc: ["Four misfits are suddenly pulled through a mysterious portal into a bizarre cubic wonderland that thrives on imagination. To get back home they'll have to master this world while embarking on a quest with an unexpected expert crafter."],
        criticReviews: [
            {score: 8, name: "Gabriela M.", text: "Entertaining, but that's it"},
            {score: 4, name: "Brian G.", text: "I had hoped that it would be good"}
        ],
        fanReviews: [
            {score: 7, name: "PigstepDisc", text: "It's Fun"},
            {score: 6, name: "MagicMan", text: "Neither Crafty nor Bedrock Bottom."}
        ]
    },
    {
        name: ["Slender Man"],
        desc: ["In a small town in Massachusetts, a group of friends, fascinated by the internet lore of the Slender Man, attempt to prove that he doesn't actually exist - until one of them mysteriously goes missing."],
        criticReviews: [
            {score: 1, name: "Mark I. P.", text: "The girls are so poorly defined that they're practically interchangeable"},
            {score: 0, name: "Jack S. E.", text: "If you thought the bogeyman was slender, wait till you see the film."}
        ],
        fanReviews: [
            {score: 4, name: "ILOVESLENDERGUY", text: "Its just... Not Good."},
            {score: 1, name: "HONESTREVIEWER889", text: "Bad."}
        ]
    },
    {
        name: ["El Camino: A Breaking Bad Movie"],
        desc: ["Fugitive Jesse Pinkman runs from his captors, the law, and his past."],
        criticReviews: [
            {score: 9, name: "Angie H.", text: "Good filmmaking"},
            {score: 8, name: "Eric D.", text: "People are expecting too much"}
        ],
        fanReviews: [
            {score: 8, name: "BreakingPenjamin", text: "Good movie."},
            {score: 6, name: "TodHatrrr", text: "Todd got fat."}
        ]
    },
    {
        name: ["Full Metal Jacket"],
        desc: ["A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue."],
        criticReviews: [
            {score: 10, name: "Jay S.", text: "Kubrick is genius."},
            {score: 8, name: "Peter R.", text: "The movies finally got Parris Island right"}
        ],
        fanReviews: [
            {score: 9, name: "DrillSarg", text: "Old, but gold!"},
            {score: 7, name: "PrivateGomerPyle", text: "......"}
        ]
    },
    {
        name: ["Silent Hill"],
        desc: ["Rose Da Silva takes her adopted daughter, Sharon, to the town of Silent Hill in an attempt to cure her of her ailment. After a violent car crash, Sharon disappears and Rose begins a horrific journey to get her back."],
        criticReviews: [
            {score: 7, name: "Chris S.", text: "Creepy AF but..."},
            {score: 6, name: "Brian T.", text: "A great horror epic!"}
        ],
        fanReviews: [
            {score: 9, name: "phayke", text: "Finally, a good, accurate game/film crossover."},
            {score: 6, name: "JohnSilentHill", text: "It's Silent Hill, but it isn't Silent Hill"}
        ]
    },
    {
        name: ["The Dictator"],
        desc: ["The heroic story of a dictator who risked his life to ensure that democracy would never come to the country he so lovingly oppressed."],
        criticReviews: [
            {score: 7, name: "Brian. E.", text: "Unexpectedly Good"},
            {score: 6, name: "John H.", text: "I'm at a loss as to how to describe this movie."}
        ],
        fanReviews: [
            {score: 10, name: "Joshua911", text: "Very halal movie I will give it 9/11"},
            {score: 9, name: "HenryFazbear", text: "Excellent"}
        ]
    },
    {
        name: ["GJS23 Presents: The Downfall of KITM"],
        desc: ["From good life, to alien invasion, can earth gain back their scholarship."],
        criticReviews: [
            {score: 10, name: "Seksonas P.", text: "Ar dėl to negauna stipendijos."},
            {score: 8, name: "Jokubas D.", text: "Vieta kur vedėjas nukirto visiems stipendijas buvo labai kieta."}
        ],
        fanReviews: [
            {score: 6, name: "MisterOty", text: "Im trying to code and they recommending me the code masters."},
            {score: 3, name: "KITMShallFall", text: "KITM hasn't fallen, yet.."}
        ]
    },
    {
        name: ["Šilinkskas: the escape from drones"],
        desc: ["Can one man survive the new order of kush drones."],
        criticReviews: [
            {score: 6, name: "Justas Š.", text: "The part where the drone flew over him was quick, I don't like that."},
            {score: 2, name: "Justas Jr.", text: "Nemoka sukt kasekų!"}
        ],
        fanReviews: [
            {score: 10, name: "yea", text: "This is the definition of thrilling movies."},
            {score: 9, name: "MrRotting", text: "The part where he lost his dope was epic!"}
        ]
    },
    {
        name: ["Šilinkskas 2: The Return from The Dark Side"],
        desc: ["After a long fight, can he defeat the new order of kush robots."],
        criticReviews: [
            {score: 10, name: "Steven A.", text: "One of the best ways to finish a series, I have no words."},
            {score: 8, name: "Stephen K.", text: "Its great, just the fact so many died is sad :("},
            {score: 7, name: "Mark F.", text: "Good sequel, but not perfect."}
        ],
        fanReviews: [
            {score: 10, name: "Master Shifu", text: "He earned his inner peace"},
            {score: 10, name: "KingBach", text: "He got his spoonfull of kush, I am so happy"},
            {score: 9, name: "APimpNamedSlickBack", text: "Not as great as the first one, but still amazing"}
        ]
    },
    {
        name: ["Red Bonaparte"],
        desc: ["From troubled early life, to the horrors of war, can one man turn the tide in Soviet-Afghan war"],
        criticReviews: [
            {score: 10, name: "Gerald M.", text: "The best war movie ever made."},
            {score: 9, name: "Joseph S.", text: "The Enderwind section was absolute cinema!"}
        ],
        fanReviews: [
            {score: 10, name: "Marshall Zhukov", text: "ABSOLUTE HERO!!! 11/10"},
            {score: 5, name: "Vasily Urgestumn", text: "He ruined Afghanistan!"}
        ]
    },
    {
        name: ["Šhirikas"],
        desc: ["Can elfs live with their holiday cheer, or will it be broken by evil forces."],
        criticReviews: [
            {score: 10, name: "Robertas J. S.", text: "The magnum opus of GJS career!"},
            {score: 7, name: "Kajus P.", text: "Why tf am I a 'Guest actor?'"}
        ],
        fanReviews: [
            {score: 9, name: "Nmb1", text: "I lost one point"},
            {score: 7, name: "ScardyCat995", text: "Šhirikas is scary :("}
        ]
    }
];

const moviesText = document.querySelector('.listofmoviestext');
const supportText = document.querySelector('.support-text');
const watchText = document.querySelector('.watchrightnow');
const logoText = document.querySelector('.logo');

const leftButton = document.querySelector('.leftbutton');
const rightButton = document.querySelector('.rightbutton');
const movielist = document.querySelector('.movies-page');

const secretThing = document.querySelector('.secret');
const secretText = document.querySelector('.secret-text');
const secretSFX = document.querySelector('.secretAudio')
const secretSFXVoice = document.querySelector('.secretAudioVoice')

const movieCompactList = document.querySelector('.moviesgrid');
const allmovielist = document.querySelector('.allmoviesgrid');

// GRID CODE

const addMovieList = (target, movieRatings) => {
    for(let e = 0; e <= (movieRatings.length - 1); e++){
        let criticScore = 0;
        let fanScore = 0;
        for(let i = 0; i < movieRatings[e].criticReviews.length; i++){
            criticScore += movieRatings[e].criticReviews[i].score
        }
        for(let i = 0; i < movieRatings[e].fanReviews.length; i++){
            fanScore += movieRatings[e].fanReviews[i].score
        }
        let criticScoreFinal = Math.round((criticScore / movieRatings[e].criticReviews.length) * 10) + "%";
        let fanScoreFinal = Math.round((fanScore / movieRatings[e].fanReviews.length) * 10) + "%";
        let movieName = movieRatings[e].name
        target.innerHTML += `
            <a class="movie-select" href="movies/${e + 1}.html">
                <div class="movie-preview">
                    <div class="movie-image" style="--order: ${e + 1}"></div>
                    <div class="movie-name">${movieName}</div>
                    <div class="scoreBox">
                        <div class="scores">
                            <div class="critic score-icon"></div>
                            <p class="critic-score">${criticScoreFinal}</p>
                        </div>
                        <div class="scores">
                            <div class="fan score-icon"></div>
                            <p class="fan-score">${fanScoreFinal}</p>
                        </div>
                    </div>
                </div>
            </a>`;
    }
    let divCount = 0;
    for(let i = 0; i < movieRatings.length; i++){
        let e = i % 5
        if(e == 0){
            divCount += 5
        }
    }
    document.documentElement.style.setProperty('--div-count', divCount);
}

addMovieList(movieCompactList, movieReviews);
addMovieList(allmovielist, movieReviews);

const changePage = (target, movieRatings) => {
    let movieTotal = 0;
    for(let i = 0; i < movieRatings.length; i++){
        let e = i % 5
        if(e == 0){
            movieTotal += 100
        }
    }
    target.style.marginLeft = `${currentValue}%`; 
    if(pagelist >= movieTotal / 100){
        pagelist = 0
        currentValue = 0;
        target.style.marginLeft = `${currentValue}%`; 
    }else if(pagelist === -1){
        pagelist = movieTotal / 100 - 1
        currentValue = (movieTotal - 100) * -1;
        target.style.marginLeft = `${currentValue}%`; 
    }
}

const leftButtonfunc = () => {
    currentValue += 100;
    pagelist--;
    changePage(movieCompactList, movieReviews);
}

const rightButtonfunc = () => {
    currentValue -= 100;
    pagelist++;
    changePage(movieCompactList, movieReviews);
}

const moveToGlowText = (target, glowingClass, time) =>{
    target.scrollIntoView({behavior: "smooth"})
    glowingClass.classList.add('glowing');
    setTimeout(() => {
            glowingClass.classList.remove('glowing');
    }, time);
}

const logoTextFunc = (target, glowingClass, array) =>{
    glowingClass.classList.add('glowing');
    for(let i = 0; i < array.length; i++){
        setTimeout(() => {
            target.textContent = `${array[i]}`;
            console.log(array[i]);
        }, i * 1000); 
    };
    setTimeout(() => {
        glowingClass.classList.remove('glowing');
        target.textContent = `IRM`;
    }, array.length * 1000); 
}

const generateRandomCode = (array) => {
    let random = Math.floor(Math.random() * 10) + 1
    if(random => 10){random--}
    for(let i = 0; i <= random; i++){
        let randomTwo = Math.floor(Math.random() * 10) + 1
        if(randomTwo => 10){randomTwo--}
        array.push(randomTwo)
    }
    console.log(secretWord)
}

const SFXSelect = (min, max, target) => {
    let random = Math.floor(Math.random() * (max - min) ) + min;
    target.innerHTML = `
        <source src="audio/Bierce_Secret_0${random}.ogg" type="audio/ogg">
    `;
}

const secretFunc = (word, secret, event, text, sound, soundVoice, time) => {
    if(event.key == word[count] && count == word.length - 1){
        SFXSelect(1, 4, secretSFXVoice);
        text.classList.add('glowing');
        secret.classList.add('secret-unlock');
        soundVoice.load();
        soundVoice.play();
        sound.play();
        setTimeout(() => {
            window.location.href = "secret.html";
            secret.classList.remove('secret-unlock');
            text.classList.remove('glowing');
        }, time);
        count = 0
    }else if(event.key == word[count] && count <= word.length - 1){
        SFXSelect(1, 4, secretSFXVoice);
        count++
    }else if(event.key !== word[count]){
        count = 0
        console.log("You failed the secret!")
    }
}

// EVENT LISTENERS TO CLICKING

// NAVBAR BUTTONS

generateRandomCode(secretWord);

document.querySelector('.logo').addEventListener('click', function (e) {
    e.preventDefault()
    logoTextFunc(logoText, logoText, secretWord, 1000);
});

document.querySelector('.watchrightnowtext').addEventListener('click', function (e) {
    e.preventDefault()
    moveToGlowText(watchText, watchText, 3000);
});

document.querySelector('.listofmovies').addEventListener('click', function (e) {
    e.preventDefault()
    moveToGlowText(moviesText, moviesText, 3000);
});

document.querySelector('.supportbutton').addEventListener('click', function (e) {
    e.preventDefault()
    moveToGlowText(supportText, supportText, 3000);
});

// BUTTONS THAT MOVE THE GRID

document.querySelector('.leftbutton').addEventListener('click', function () {
    leftButtonfunc();
});

document.querySelector('.rightbutton').addEventListener('click', function () {
    rightButtonfunc();
});

document.addEventListener('keydown', (buttonPress) => {
    // console.log(`Key "${buttonPress.key}" pressed with code "${buttonPress.code}".`);
    secretFunc(secretWord, secretThing, buttonPress, secretText, secretSFX, secretSFXVoice,  1000)
});