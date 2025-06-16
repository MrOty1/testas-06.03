let pagelist = 0;
let currentValue = 0;
let currentPage = window.location.pathname.split('/').pop().split('.').shift();
let movieReviews = [
    {
        name: ["Five Nights at Freddy's"],
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
        name: ["GJS23 Presents: The Downfall of KITM"],
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
        name: ["Red Bonaparte"],
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

const supportText = document.querySelector('.support-text');
const watchText = document.querySelector('.watchrightnow');

const movieTitle = document.querySelector('.movieTitle')
const movieTitleTop = document.querySelector('.movieTitleTop')
const moviePoster = document.querySelector('.moviePoster')
const criticComment = document.querySelector('.criticScoreComment')
const fanComment = document.querySelector('.fanScoreComment')

const leftButton = document.querySelector('.leftbutton');
const rightButton = document.querySelector('.rightbutton');
const movielist = document.querySelector('.movies-page');

const movieCompactList = document.querySelector('.moviesgrid');

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
            <a class="movie-select" href="${e + 1}.html">
                <div class="movie-preview">
                    <div class="movie-image" style="--order: ${e + 1}"></div>
                        <p class="movie-name">${movieName}</p>
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

const detectMovie = (title, titleTop, poster, criticCMT, fanCMT, pageNumber, movieRatings) => {
    let criticScore = 0;
    let fanScore = 0;
    for(let i = 0; i < movieRatings[pageNumber - 1].criticReviews.length; i++){
        criticScore += movieRatings[pageNumber - 1].criticReviews[i].score
    }
    for(let i = 0; i < movieRatings[pageNumber - 1].fanReviews.length; i++){
        fanScore += movieRatings[pageNumber - 1].fanReviews[i].score
    }
    let criticScoreFinal = Math.round((criticScore / movieRatings[pageNumber - 1].criticReviews.length) * 10) + "%";
    let fanScoreFinal = Math.round((fanScore / movieRatings[pageNumber - 1].fanReviews.length) * 10) + "%";
    let criticReview = "";
    let fanReview = "";
    criticCMT.innerHTML += `<h2>(${criticScoreFinal}) Critic Reviews:</h2>`;
    for(let i = 0; i < movieRatings[pageNumber - 1].criticReviews.length; i++){
        criticReview = movieRatings[pageNumber - 1].criticReviews[i].text
        criticCMT.innerHTML += `
        <p><b class="user-score">${movieRatings[pageNumber - 1].criticReviews[i].score} / 10</b> (${movieRatings[pageNumber - 1].criticReviews[i].name})<br>${criticReview}</p>`;
    }
    fanCMT.innerHTML += `<h2>(${fanScoreFinal}) Fan Reviews:</h2>`;
    for(let i = 0; i < movieRatings[pageNumber - 1].fanReviews.length; i++){
        fanReview = movieRatings[pageNumber - 1].fanReviews[i].text
        fanCMT.innerHTML += `
        <p><b class="user-score">${movieRatings[pageNumber - 1].fanReviews[i].score} / 10</b> (${movieRatings[pageNumber - 1].fanReviews[i].name})<br>${fanReview}</p>`;
    }
    title.innerHTML += `${movieRatings[pageNumber - 1].name}`;
    titleTop.innerHTML += `${movieRatings[pageNumber - 1].name}`;
    poster.classList.add(`movie-image-${pageNumber}`);
}

addMovieList(movieCompactList, movieReviews);
detectMovie(movieTitle, movieTitleTop, moviePoster, criticComment, fanComment, currentPage, movieReviews);


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

// EVENT LISTENERS TO CLICKING

// NAVBAR BUTTONS

document.querySelector('.watchrightnowtext').addEventListener('click', function (e) {
    e.preventDefault()
    moveToGlowText(watchText, watchText, 3000);
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