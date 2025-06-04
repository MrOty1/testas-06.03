//Padaryti movie review site, (PANAŠUS Į IMDB, ROTTENTOMATOES), REIKIA APIE 100 Filmų

let pagelist = 0;
let currentValue = 0;

const leftButton = document.querySelector('.leftbutton');
const rightButton = document.querySelector('.rightbutton');
const targetDiv = document.querySelector('.moviesgrid');
const movielist = document.querySelector('.movies-page');
const moviesText = document.querySelector('.listofmoviestext');
const supportText = document.querySelector('.support-text');
const watchText = document.querySelector('.watchrightnow');
const logoText = document.querySelector('.logo');

// GRID CODE

const changePage = () => {
    targetDiv.style.marginLeft = `${currentValue}%`; 
    if(pagelist >= 4){
        pagelist = 0
        currentValue = 0;
        targetDiv.style.marginLeft = `${currentValue}%`; 
    }else if(pagelist === -1){
        pagelist = 3
        currentValue = -300;
        targetDiv.style.marginLeft = `${currentValue}%`; 
    }
}

const leftButtonfunc = () => {
    currentValue += 100;
    pagelist--;
    changePage();
}

const rightButtonfunc = () => {
    currentValue -= 100;
    pagelist++;
    changePage();
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