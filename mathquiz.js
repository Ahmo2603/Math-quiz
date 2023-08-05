function app() {
    let firstValue = document.querySelector(".val1");
    let secondValue = document.querySelector(".val2");
    let answerInput = document.querySelector("input");
    let answerButton = document.querySelector("button");
    let outputDivision = document.querySelector(".output");
    let game = {};
    let scoreDivision = document.createElement("div");
    let score = 0;
    let historyDivision = document.createElement("div");
    document.body.appendChild(scoreDivision);
    document.body.appendChild(historyDivision);

    function checker() {
        if(answerInput.value != game["result"]) {
            outputDivision.textContent = "The answer is incorrect!";
            outputDivision.style = "color: red;";
            score -= 1;
            scoreDivision.textContent = score;
            historyDivision.innerHTML += "<br /> " + game["firstnumber"] + " + " + game["secondnumber"] + " = " + game["result"] + " (Your answer: " + answerInput.value + ")" ;
            answerInput.value = "";
            init(); 
        } else {
            outputDivision.textContent = "The answer is correct!";
            outputDivision.style = "color: green;";
            score += 1;
            scoreDivision.textContent = score;
            historyDivision.innerHTML += "<br /> " + game["firstnumber"] + " + " + game["secondnumber"] + " = " + game["result"] + " (Your answer: " + answerInput.value + ")";
            answerInput.value = "";
            init();
        }
    }

    function generateNumber(min, max) {
        return (Math.round(Math.random() * min)) + (Math.round(Math.random() * max));
    }

    function loadQuestion() {
        let firstNumber = generateNumber(Math.round(Math.random() * 10), Math.round(Math.random() * 990));
        let secondNumber = generateNumber(Math.round(Math.random() * 10), Math.round(Math.random() * 990));
        let result = firstNumber + secondNumber;
        game["firstnumber"] = firstNumber;
        game["secondnumber"] = secondNumber;
        game["result"] = result;
    }

    function init() {
        loadQuestion();
        firstValue.textContent = game["firstnumber"];
        secondValue.textContent = game["secondnumber"];
        answerButton.addEventListener("click", checker);
    }

    init();
}

document.addEventListener("DOMContentLoaded", app);