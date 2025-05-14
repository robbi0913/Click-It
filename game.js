const gameArea = document.getElementById('game-area');
const target = document.getElementById('target');
const timerSpan = document.getElementById('timer');
const scoreSpan = document.getElementById('score');
const startBtn = document.getElementById('start-btn');

let score = 0;
let timeLeft = 30;
let timerId = null;

let gameActive = false;

function randomPosition() {
    const maxX = gameArea.clientWidth - target.offsetWidth;
    const maxY = gameArea.clientHeight - target.offsetHeight;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    target.style.left = x + 'px';
    target.style.top = y + 'px';
}
function startGame() {
    score = 0;
    timeLeft = 30;
    scoreSpan.textContent = score;
    timerSpan.textContent = timeLeft;
    gameActive = true;
    target.style.display = 'block';
    randomPosition();
    startBtn.disabled = true;
    startBtn.style.opacity = 0.5;
    timerId = setInterval(() => {
        timeLeft--;
        timerSpan.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}
function endGame() {
    clearInterval(timerId);
    gameActive = false;
    target.style.display = 'none';
    startBtn.disabled = false;
    startBtn.style.opacity = 1;
    setTimeout(() => {
        alert('Time\'s up! Your score: ' + score);
    }, 100);
}
target.addEventListener('click', () => {
    if (!gameActive) return;
    score++;
    scoreSpan.textContent = score;
    randomPosition();
});

startBtn.addEventListener('click', startGame);