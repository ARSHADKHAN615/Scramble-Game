const inputValue = document.querySelector(".myInput");
const myBtn1 = document.querySelector(".myBtn1");
const myBtn2 = document.querySelector(".myBtn2");
const myBtn3 = document.querySelector(".myBtn3");
const btn4 = document.querySelector(".btn4");
const myScore = document.querySelector(".score");
const guessTitle = document.querySelector(".guess-title");
const guessAnswer = document.querySelector(".guess-answer");
const guessTitle2 = document.querySelector(".guess-title2");
const firstStage = document.querySelector(".first-stage");
const secondStage = document.querySelector(".second-stage");
const thirdStage = document.querySelector(".third-stage");

audio = new Audio('fail-buzzer-01.mp3');
audio2 = new Audio('victory.mp3');

let word = ["C++", "JAVA", "JAVASCRIPT", "PHP", "RUBY", "HTML", "CSS", "ANGULAR", "REACT", "NODE", "ANDROID"];
let newWord = "";
let randWord = "";



let randomName = () => {
    let randomNumber = Math.floor(Math.random() * word.length);
    let arrayValue = word[randomNumber];
    return arrayValue;
    // console.log(arrayValue);
}



let scramBal = (array) => {
    for (i = array.length - 1; i > 0; i--) {
        let temp = array[i];
        let j = Math.floor(Math.random() * (i + 1));
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}





myBtn1.addEventListener("click", function() {
    this.style.visibility = "hidden";
    secondStage.style.visibility = "visible";
    guessTitle.style.visibility = "visible";
    newWord = randomName();
    randWord = scramBal(newWord.split("")).join("");
    guessTitle.innerHTML = `Guess this Name : ${randWord}`;


});

score = 0;
myBtn2.addEventListener("click", function() {
    let tempWord = inputValue.value;
    if (tempWord === newWord) {
        secondStage.style.visibility = "hidden";
        thirdStage.style.visibility = "visible";
        guessTitle2.style.visibility = "hidden";
        inputValue.value = "";
        score += 10;
        myScore.innerHTML = `SCORE IS : ${score}`
        audio2.play();
    } else {
        guessTitle2.style.visibility = "visible";
        audio.play();
    }

});





myBtn3.addEventListener("click", function() {
    thirdStage.style.visibility = "hidden";
    secondStage.style.visibility = "visible";
    newWord = randomName();

    randWord = scramBal(newWord.split("")).join("");
    guessTitle.innerHTML = `Guess this Name : ${randWord}`;
});