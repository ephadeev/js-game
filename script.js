"use strict"

const score = document.getElementsByClassName('score')[0];
const game = document.getElementsByClassName('game')[0];
const start = document.getElementsByClassName('start')[0];
const gameArea = document.getElementsByClassName('gameArea')[0];
const player = document.createElement('div');

player.classList.add('player');

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false,
    w: false,
    s: false,
    d: false,
    a: false
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
    start.style.display = 'none';
    
    // create stars
    for (let i = 0; i < 20; i++) {
        const stars = document.createElement('div');
        stars.classList.add('star');
        stars.style.top = 0;
        stars.y = 0;
    }

    // create enemies
    for (let i = 0; i < 3; i++) {
        const enemy = document.createElement('div');
        enemy.classList.add('enemy');
        enemy.x = Math.floor(Math.random() * 400);
        enemy.y = Math.floor(Math.random() * 400);
        enemy.style.left = `${enemy.x}px`;
        enemy.style.top = `${enemy.y}px`;
        gameArea.appendChild(enemy);
    }

    setting.start = true;
    gameArea.appendChild(player);
    player.x = player.offsetLeft;
    player.y = player.offsetTop;
    console.log(player.getBoundingClientRect());
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
        
        if ((keys.ArrowLeft || keys.a) && player.x > 0) {
            player.x -= setting.speed;
        }

        if ((keys.ArrowRight || keys.d) && player.x < (gameArea.offsetWidth - player.offsetWidth)) {
            player.x += setting.speed;
        }

        if ((keys.ArrowUp || keys.w) && player.y > 0) {
            player.y -= setting.speed;
        }

        if ((keys.ArrowDown || keys.s) && player.y < (gameArea.offsetHeight - player.offsetHeight)) {
            player.y += setting.speed;
        }

        player.style.left = `${player.x}px`;
        player.style.top = `${player.y}px`;
        requestAnimationFrame(playGame);
    }
}

const startRun = event => {
    event.preventDefault();
    keys[event.key] = true;
}

const stopRun = event => {
    event.preventDefault();
    keys[event.key] = false;
}

document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);


start.addEventListener('click', startGame);