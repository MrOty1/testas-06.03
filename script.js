//Padaryti movie review site, (PANAŠUS Į IMDB, ROTTENTOMATOES), REIKIA APIE 100 Filmų

let pagelist = 0;
let currentValue = 0;
let movieReviews = [
    {
        name: ["Five Night's at Freddy's"],
        criticReviews: [
            {score: 10, text: ""},
            {score: 10, text: ""},
        ],
        fanReviews: [
            {score: 10, text: "I LOVED it"},
            {score: 9, text: "The sex scene was awesome"},
            {score: 6, text: "Probably the better videogame adaptations"}
        ]
    },
    {
        name: ["Jacob's ladder"],
        criticReviews: [
            {score: 10, text: ""}
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
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 9, text: "McLovin is literally me!"},
            {score: 7, text: "The fact that they didn't kiss at the end was sad, still good movie"}
        ]
    },
    {
        name: ["We're The Millers"],
        criticReviews: [
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 8, text: "Good movie"},
            {score: 5, text: "Not a bad movie"}
        ]
    },
    {
        name: ["No Country For Old Men"],
        criticReviews: [
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 8, text: "Antoni chiguri"},
            {score: 6, text: "Call it"}
        ]
    },
    {
        name: ["The Postal Movie"],
        criticReviews: [
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 10, text: "Masterpiece."},
            {score: 7, text: "J. K. Simmons was crazy."}
        ]
    },
    {
        name: ["The Fred Movie"],
        criticReviews: [
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 4, text: "I don't even know"},
            {score: 2, text: "What was the thought process"}
        ]
    },
    {
        name: ["The Smosh Movie"],
        criticReviews: [
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 8, text: "It has markiplier"},
            {score: 2, text: "Youtuber acting"}
        ]
    },
    {
        name: ["Abraham Lincoln vs. Zombies"],
        criticReviews: [
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 6, text: "Cool cinematography"},
            {score: 4, text: "Not complete garbage..."}
        ]
    },
    {
        name: ["The Downfall of Diddy"],
        criticReviews: [
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 8, text: "I am trying to cook some meat and they recommending me the meat master"},
            {score: 6, text: "Why they recommending me Diddy?"},
            {score: 4, text: "Did he do it?"}
        ]
    },
    {
        name: ["Sex Pot"],
        criticReviews: [
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 10, text: "ABSOLUTE MASTERPIECE!"},
            {score: 7, text: "Too much pot."}
        ]
    },
    {
        name: ["The Blair Witch Project"],
        criticReviews: [
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 10, text: ""}
        ]
    },
    {
        name: ["Paul"],
        criticReviews: [
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 10, text: ""}
        ]
    },
    {
        name: ["Borat"],
        criticReviews: [
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 10, text: ""}
        ]
    },
    {
        name: ["Movie"],
        criticReviews: [
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 10, text: ""}
        ]
    },
    {
        name: ["Movie"],
        criticReviews: [
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 10, text: ""}
        ]
    },
    {
        name: ["Movie"],
        criticReviews: [
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 10, text: ""}
        ]
    },
    {
        name: ["Movie"],
        criticReviews: [
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 10, text: ""}
        ]
    },
    {
        name: ["Movie"],
        criticReviews: [
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 10, text: ""}
        ]
    },
    {
        name: ["Movie"],
        criticReviews: [
            {score: 10, text: ""}
        ],
        fanReviews: [
            {score: 10, text: ""}
        ]
    }
];

const moviesText = document.querySelector('.listofmoviestext');
const supportText = document.querySelector('.support-text');
const watchText = document.querySelector('.watchrightnow');
const logoText = document.querySelector('.logo');

const leftButton = document.querySelector('.leftbutton');
const rightButton = document.querySelector('.rightbutton');
const movieCompactList = document.querySelector('.moviesgrid');
const movielist = document.querySelector('.movies-page');
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
            <a href="movies/${e + 1}.html"">
                <div class="movie-preview">
                <div class="movie-image" style="--order: ${e + 1}"></div>
                    <p>${movieName}</p>
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

addMovieList(movieCompactList, movieReviews);
addMovieList(allmovielist, movieReviews);


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

const logoTextFunc = (target, glowingClass, time) =>{
    target.textContent = 'I-Review-Movies';
    glowingClass.classList.add('glowing');
    setTimeout(() => {
            glowingClass.classList.remove('glowing');
            target.textContent = 'IRM';
    }, time);
}

// EVENT LISTENERS TO CLICKING

// NAVBAR BUTTONS

document.querySelector('.logo').addEventListener('click', function (e) {
    e.preventDefault()
    logoTextFunc(logoText, logoText, 2000);
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