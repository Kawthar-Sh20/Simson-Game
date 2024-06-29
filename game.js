
const buttonColors = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

document.addEventListener('keypress', () => {
    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`;
        nextSequence();
        started = true;
    }
});

function nextSequence() {
    userClickedPattern = [];
    level++;
    document.querySelector("#level-title").textContent = `Level ${level}`;

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    
    flashButton(randomChosenColor);

    playSound(randomChosenColor);
}
