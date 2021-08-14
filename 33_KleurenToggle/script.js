const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar');
const body = document.querySelector('body');
const buttonHome = document.querySelector('#home');
const buttonGreen = document.querySelector('#green');
const buttonRed = document.querySelector('#red');
const buttonPurple = document.querySelector('#purple');
const buttonOrange = document.querySelector('#orange');

const toggleNav = () => {
    hamburger.classList.toggle('isactive');
    menu.classList.toggle('active');
}

const toggleBodyHome = () => {
    document.body.style.backgroundColor = '#F1F1F1';
    // body.classList.add('redBackground');
    hamburger.classList.toggle('isactive');
    menu.classList.toggle('active');
    document.getElementById("text").innerHTML = "Welcome at Color Toggle";
};

const toggleBodyGreen = () => {
    document.body.style.backgroundColor = '#5CEE9C';
    // body.classList.add('greenBackground');
    hamburger.classList.toggle('isactive');
    menu.classList.toggle('active');
    document.getElementById("text").innerHTML = "Green";
};

const toggleBodyRed = () => {
    document.body.style.backgroundColor = '#C2171F';
    // body.classList.add('redBackground');
    hamburger.classList.toggle('isactive');
    menu.classList.toggle('active');
    document.getElementById("text").innerHTML = "Red";
};

const toggleBodyPurple = () => {
    document.body.style.backgroundColor = '#854A9E';
    // body.classList.add('redBackground');
    hamburger.classList.toggle('isactive');
    menu.classList.toggle('active');
    document.getElementById("text").innerHTML = "Purple";
};

const toggleBodyOrange = () => {
    document.body.style.backgroundColor = '#FF8F2E';
    // body.classList.add('redBackground');
    hamburger.classList.toggle('isactive');
    menu.classList.toggle('active');
    document.getElementById("text").innerHTML = "Orange";
};

hamburger.addEventListener('click', toggleNav);
buttonHome.addEventListener('click', toggleBodyHome);
buttonGreen.addEventListener('click', toggleBodyGreen);
buttonRed.addEventListener('click', toggleBodyRed);
buttonPurple.addEventListener('click', toggleBodyPurple);
buttonOrange.addEventListener('click', toggleBodyOrange);

