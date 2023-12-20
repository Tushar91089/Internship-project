// You can replace this with more complex puzzle logic
const correctAnswer = "secret";

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerHTML = "Congratulations! You've escaped!";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerHTML = "Incorrect answer. Try again!";
        document.getElementById("result").style.color = "red";
    }
}
