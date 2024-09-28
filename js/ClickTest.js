var num = "0";
var score = 0;
var gameStarted = 0;
var timeStarted = 0;

document.querySelector("#countdown").style.transition="opacity .5s";

function randomTarget() {
    num = Math.floor(Math.random() * 100) + 1;
    document.querySelector(".btn" + num).classList.add("target");
}

function timer() {
    timeStarted = Date.now();
    setInterval(() => {
        if (gameStarted === 1) {
            if (((Date.now() - timeStarted) / 1000) < 60) {
                document.querySelector("#timer").innerHTML = "Time Left: " + Math.floor(60 - ((Date.now() - timeStarted) / 1000));
            } else {
                gameStarted = 0;
                document.querySelector(".target").classList.remove("target");
                document.querySelector("#score-changer").style.opacity = "0";
                document.querySelector("#timer").innerHTML = "Time's Up!";
                document.querySelector("#timer").style.color = "rgb(255, 0, 0)";
                document.querySelector("#start-button").innerHTML = "Play Again";
                document.querySelector("#start-button").style.opacity = "1";
            }
        }
    }, 100);
}

function changeScoreText() {
    if (score < 0) {
        document.querySelector(".score").innerHTML = score;
    } else if (score < 10) {
        document.querySelector(".score").innerHTML = "00" + score;
    } else if (score < 100) {
        document.querySelector(".score").innerHTML = "0" + score;
    } else {
        document.querySelector(".score").innerHTML = score;
    }
}

function correct() {
    if (gameStarted === 1) {
        score++;
        changeScoreText();
        document.querySelector(".target").classList.remove("target");
        document.querySelector("#score-changer").style.color = "rgb(0, 255, 0)";
        document.querySelector("#score-changer").innerHTML = "+1";
        document.querySelector("#score-changer").style.opacity = "1";
        randomTarget();
    }
}

function incorrect() {
    if (gameStarted === 1) {
        score--;
        changeScoreText();
        document.querySelector("#score-changer").style.color = "rgb(255, 0, 0)";
        document.querySelector("#score-changer").innerHTML = "-1";
        document.querySelector("#score-changer").style.opacity = "1";
    }
}

for (var i = 0; i < document.querySelectorAll(".game-button").length; i++) {
    document.querySelectorAll(".game-button")[i].addEventListener("click", function() {
        if (this === document.querySelector(".target")) {
            correct();
        } else {
            incorrect();
        }
    });
}

document.querySelector("#start-button").addEventListener("click", () => {
    document.querySelector("#start-button").innerHTML = "";
    document.querySelector("#start-button").style.opacity = "0";
    score = 0;
    document.querySelector(".score").innerHTML = "000";
    document.querySelector("#timer").innerHTML = "Time Left: 60";
    document.querySelector("#timer").style.color = "whiteSmoke";
    document.querySelector("#countdown").innerHTML = "3";
    document.querySelector("#countdown").style.opacity = "1";
    setTimeout(() => document.querySelector("#countdown").innerHTML = "2", 1000);
    setTimeout(() => document.querySelector("#countdown").innerHTML = "1", 2000);
    setTimeout(() => document.querySelector("#countdown").innerHTML = "GO!", 3000);
    setTimeout(() => gameStarted = 1, 3000);
    setTimeout(() => timer(), 3000);
    setTimeout(() => randomTarget(), 3000);
    setTimeout(() => document.querySelector("#countdown").style.opacity = "0", 4000);
});
