const buttonAddScorePlayerOne = document.querySelector("#addScorePlayerOne");
const buttonAddScorePlayerTwo = document.querySelector("#addScorePlayerTwo");
const buttonReset = document.querySelector("#reset")

const showScorePlayerOne = document.querySelector("#scorePlayerOne");
const showScorePlayerTwo = document.querySelector("#scorePlayerTwo");

const highScoreSelector = document.querySelector("#highScore");

let highScore = parseInt(highScoreSelector.value);

showScorePlayerOne.innerText = 0;
showScorePlayerTwo.innerText = 0;

const controlObject = {"addScorePlayerOne": {score: 0, show: showScorePlayerOne, another: showScorePlayerTwo}, "addScorePlayerTwo": {score: 0, show: showScorePlayerTwo, another: showScorePlayerOne} }

function addScore() {

    let control = controlObject[this.id]
    control.score += 1
    control.show.innerText = control.score;

    if (control.score === highScore) {
        buttonAddScorePlayerOne.disabled = true;
        buttonAddScorePlayerTwo.disabled = true;

        control.show.classList.add("win");
        control.another.classList.add("lose");
    }

}

function resetTrun() {
    controlObject.addScorePlayerOne.score = 0;
    controlObject.addScorePlayerTwo.score = 0;

    showScorePlayerOne.innerText = 0;
    showScorePlayerTwo.innerText = 0;
    
    let win = document.querySelector(".win");
    if (win) {
        document.querySelector(".lose").classList.remove("lose");
        win.classList.remove("win");
    }

    buttonAddScorePlayerOne.disabled = false;
    buttonAddScorePlayerTwo.disabled = false;


}

buttonAddScorePlayerOne.addEventListener("click", addScore);
buttonAddScorePlayerTwo.addEventListener("click", addScore);
buttonReset.addEventListener("click", resetTrun);

highScoreSelector.addEventListener("input", function() {
    highScore = parseInt(this.value);
    resetTrun();
});