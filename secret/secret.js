const ambienceSFX = document.querySelector('.ambienceSound');
const secret = document.querySelector('.secret');
document.querySelector('.secretsite').addEventListener('mouseover', function () {
    ambienceSFX.play();
    secret.style.opacity = `100%`; 
    secret.classList.add('secretAnim');
});