document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    // also can use (let= i = 0; i < buttons.length; i++) in the for loop below
    for (let button of buttons){
      button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "submit") {
            alert("You clicked Submit!");
        } else {
            let gameType = this.getAttribute("data-type");
            alert(`You clicked ${gameType}`);
        }
      })  
    }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}