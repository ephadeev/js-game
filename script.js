"use strict"

const score = document.getElementsByClassName('score')[0];
const game = document.getElementsByClassName('game')[0];
const start = document.getElementsByClassName('start')[0];
const gameArea = document.getElementsByClassName('gameArea')[0];
const car = document.createElement('div');

car.classList.add('car');

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
}

const setting = {
    start: false,
    score: 0,
    speed: 3
}

const startGame = () => {
    setting.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
}

const playGame = () => {
    console.log('play game');
    if (setting.start) {
        requestAnimationFrame(playGame);
    }
}

const startRun = e => {
    e.preventDefault();
    keys[e.key] = true;
    console.log(e.key);
}

const stopRun = e => {
    e.preventDefault();
    keys[e.key] = false;
    console.log(e.key);
}

document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);


start.addEventListener('click', startGame)