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

const getQuantityOfElements = heightOfElement => {
    return document.documentElement.clientHeight / heightOfElement + 1;
}

const startGame = () => {
    for (let i = 0; i < 20; i++) {
        const stars = document.createElement('div');
        stars.classList.add('star');
        stars.style.top = 0;
        stars.y = 0;
    }

    for (let i = 0; i < 20; i++) {
        const enemy = document.createElement('div');
        enemy.classList.add('enemy');
        enemy.y = 100 * i + 1;
        enemy.style.top = `${enemy.y}px`;
        gameArea.appendChild(enemy);
    }

    setting.start = true;
    gameArea.appendChild(car);
    setting.x = car.offsetLeft;
    setting.y = car.offsetTop;
    requestAnimationFrame(playGame);
}

const moveEnemies = () => {
    let enemies = document.getElementsByClassName('enemy');

    for (let i = 0; i < enemies.length; i++) {
        enemies[i].y = Math.random() * 400;
        enemies[i].style.top = `${enemies[i].y}px`;
        enemies[i].style.left = `${Math.floor(Math.random() * gameArea.offsetWidth - enemies[i].offsetWidth)}px`;
    }
};
const moveStars = () => {
    return 5;
};

const playGame = () => {
    console.log('play game');
    if (setting.start) {
        moveEnemies();
        moveStars();



        if (keys.ArrowLeft && setting.x > 0) {
            setting.x -= setting.speed;
        }

        if (keys.ArrowRight && setting.x < (gameArea.offsetWidth - car.offsetWidth)) {
            setting.x += setting.speed;
        }

        if (keys.ArrowUp && setting.y > 0) {
            setting.y -= setting.speed;
        }

        if (keys.ArrowDown && setting.y < (gameArea.offsetHeight - car.offsetHeight)) {
            setting.y += setting.speed;
        }

        car.style.left = `${setting.x}px`;
        car.style.top = `${setting.y}px`;
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