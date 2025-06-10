let pagelist = 0;
let currentValue = 0;
let currentPage = window.location.pathname.split('/').pop().split('.').shift();
let movieReviews = [
    {
        name: ["Five Nights at Freddy's"],
        criticReviews: [
            {score: 6, text: "9/10 for looks - 3/10 for screenplay"},
            {score: 5, text: "Massive script issues"},
        ],
        fanReviews: [
            {score: 10, text: "I LOVED it"},
            {score: 9, text: "The sex scene was awesome"},
            {score: 6, text: "Probably the better videogame adaptations"}
        ]
    },
    {
        name: ["Jacob's Ladder"],
        criticReviews: [
            {score: 8, text: "More than a movie"},
            {score: 7, text: "An underrated horror that needs to be discovered"}
        ],
        fanReviews: [
            {score: 10, text: "One of the best movies ever made"},
            {score: 7, text: "Where was the ladder, still great movie"},
            {score: 8, text: "Good movie, don't really understand it though"}
        ]
    },
    {
        name: ["Superbad"],
        criticReviews: [
            {score: 9, text: "Comedy Special"},
            {score: 8, text: "Hilarious Jonah Hill and the nerdy Michael Cera"},
            {score: 7, text: "Supergood"}
        ],
        fanReviews: [
            {score: 9, text: "McLovin is literally me!"},
            {score: 6, text: "The fact that they didn't kiss at the end was sad, still good movie"}
        ]
    },
    {
        name: ["We're the Millers"],
        criticReviews: [
            {score: 8, text: "Will probably be regarded as a 'so dumb but so funny' comedy."},
            {score: 7, text: "Good for lazy evening on the sofa"},
        ],
        fanReviews: [
            {score: 8, text: "Good movie"},
            {score: 5, text: "Not a bad movie"}
        ]
    },
    {
        name: ["No Country for Old Men"],
        criticReviews: [
            {score: 10, text: "A Look into an Abyss"},
            {score: 9, text: "One of my favorite films of all time"},
        ],
        fanReviews: [
            {score: 8, text: "Antoni chiguri"},
            {score: 6, text: "Call it"}
        ]
    },
    {
        name: ["Postal"],
        criticReviews: [
            {score: 5, text: "An Uwe Boll movie that is actually good"},
            {score: 4, text: "Satire, the Uwe Boll way"}
        ],
        fanReviews: [
            {score: 10, text: "Masterpiece."},
            {score: 7, text: "J. K. Simmons was crazy."}
        ]
    },
    {
        name: ["Fred: The Movie"],
        criticReviews: [
            {score: 1, text: "Hey it's FRED and it is total garbage."},
            {score: 1, text: "Just a waste of time"}
        ],
        fanReviews: [
            {score: 3, text: "I don't even know"},
            {score: 2, text: "What was the thought process"}
        ]
    },
    {
        name: ["Smosh: The Movie"],
        criticReviews: [
            {score: 3, text: "Less than Meh"},
            {score: 2, text: "Just, why?"}
        ],
        fanReviews: [
            {score: 5, text: "It has markiplier"},
            {score: 2, text: "Youtuber acting"}
        ]
    },
    {
        name: ["Abraham Lincoln vs. Zombies"],
        
        criticReviews: [
            {score: 3, text: "So bad I loved it..."},
            {score: 3, text: "Better than I expected..."},
        ],
        fanReviews: [
            {score: 6, text: "Cool cinematography"},
            {score: 5, text: "Not complete garbage..."}
        ]
    },
    {
        name: ["TMZ Presents: The Downfall of Diddy"],
        criticReviews: [
            {score: 7, text: "He fell off, essentially.."},
            {score: 3, text: "It was a pretty meh documentary"},
        ],
        fanReviews: [
            {score: 8, text: "I am trying to cook some meat and they recommending me the meat master"},
            {score: 7, text: "Why they recommending me Diddy?"},
            {score: 4, text: "Did he do it?"}
        ]
    },
    {
        name: ["Sex Pot"],
        criticReviews: [
            {score: 4, text: "Depends on what you expect..."},
            {score: 2, text: "The title says it all"},
        ],
        fanReviews: [
            {score: 10, text: "ABSOLUTE MASTERPIECE!"},
            {score: 7, text: "Too much pot."}
        ]
    },
    {
        name: ["The Blair Witch Project"],
        criticReviews: [
            {score: 7, text: "Very Atmospheric Horror"},
            {score: 7, text: "Much better than its reputation"}
        ],
        fanReviews: [
            {score: 10, text: "A film that turned me into a nervous wreck"},
            {score: 6, text: "Birth of a sub-genre"}
        ]
    },
    {
        name: ["Paul"],
        criticReviews: [
            {score: 10, text: "Perfect Gen X Movie"},
            {score: 7, text: "Sure it's not a comedic masterpiece, but its a lot of fun"}
        ],
        fanReviews: [
            {score: 9, text: "RUN to the theatres to see this one!"},
            {score: 7, text: "A Funny Entertainment for the Whole Family"}
        ]
    },
    {
        name: ["Borat"],
        criticReviews: [
            {score: 8, text: "Dissecting Life In a Hilarious Way"},
            {score: 7, text: "An Appalling Masterpiece"}
        ],
        fanReviews: [
            {score: 10, text: "One of the best films I have ever seen"},
            {score: 9, text: "Borat: A laugh out loud movie"}
        ]
    },
    {
        name: ["A Minecraft Movie"],
        criticReviews: [
            {score: 8, text: "Entertaining, but that's it"},
            {score: 4, text: "I had hoped that it would be good"}
        ],
        fanReviews: [
            {score: 7, text: "It's Fun"},
            {score: 6, text: "Neither Crafty nor Bedrock Bottom."}
        ]
    },
    {
        name: ["Slender Man"],
        criticReviews: [
            {score: 1, text: "The girls are so poorly defined that they're practically interchangeable"},
            {score: 0, text: "If you thought the bogeyman was slender, wait till you see the film."}
        ],
        fanReviews: [
            {score: 4, text: "Its just... Not Good."},
            {score: 1, text: "Bad."}
        ]
    },
    {
        name: ["GJS23 Presents: The Downfall of KITM"],
        criticReviews: [
            {score: 10, text: "Ar dėl to negauna stipendijos."},
            {score: 8, text: "Vieta kur vedėjas nukirto visiems stipendijas buvo labai kieta."}
        ],
        fanReviews: [
            {score: 6, text: "Im trying to code and they recommending me the code masters."},
            {score: 3, text: "KITM hasn't fallen, yet.."}
        ]
    },
    {
        name: ["Šilinkskas: the escape from drones"],
        criticReviews: [
            {score: 6, text: "The part where the drone flew over him was quick, I don't like that."},
            {score: 2, text: "Nemoka sukt kasekų!"}
        ],
        fanReviews: [
            {score: 10, text: "This is the definition of thrilling movies."},
            {score: 9, text: "The part where he lost his dope was epic!"}
        ]
    },
    {
        name: ["Red Bonaparte"],
        criticReviews: [
            {score: 10, text: "The best war movie ever made."},
            {score: 9, text: "The Enderwind section was absolute cinema!"}
        ],
        fanReviews: [
            {score: 10, text: "ABSOLUTE HERO!!! 11/10"},
            {score: 5, text: "He ruined Afghanistan!"}
        ]
    },
    {
        name: ["Šhirikas"],
        criticReviews: [
            {score: 10, text: "The magnum opus of GJS career!"},
            {score: 7, text: "Why tf am I a 'Guest actor?' -Kajus P."}
        ],
        fanReviews: [
            {score: 9, text: "I lost one point"},
            {score: 7, text: "Šhirikas is scary :("}
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
        <p>${movieRatings[pageNumber - 1].criticReviews[i].score} / 10<br>${criticReview}</p>`;
    }
    fanCMT.innerHTML += `<h2>(${fanScoreFinal}) Fan Reviews:</h2>`;
    for(let i = 0; i < movieRatings[pageNumber - 1].fanReviews.length; i++){
        fanReview = movieRatings[pageNumber - 1].fanReviews[i].text
        fanCMT.innerHTML += `
        <p>${movieRatings[pageNumber - 1].fanReviews[i].score} / 10<br>${fanReview}</p>`;
    }
    title.innerHTML += `${movieRatings[pageNumber - 1].name}`;
    titleTop.innerHTML += `${movieRatings[pageNumber - 1].name}`;
    poster.classList.add(`movie-image-${pageNumber}`);
}

addMovieList(movieCompactList, movieReviews);
detectMovie(movieTitle, movieTitleTop, moviePoster, criticComment, fanComment, currentPage, movieReviews);


const changePage = (target) => {
    target.style.marginLeft = `${currentValue}%`; 
    if(pagelist >= 4){
        pagelist = 0
        currentValue = 0;
        target.style.marginLeft = `${currentValue}%`; 
    }else if(pagelist === -1){
        pagelist = 3
        currentValue = -300;
        target.style.marginLeft = `${currentValue}%`; 
    }
}

const leftButtonfunc = () => {
    currentValue += 100;
    pagelist--;
    changePage(movieCompactList);
}

const rightButtonfunc = () => {
    currentValue -= 100;
    pagelist++;
    changePage(movieCompactList);
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