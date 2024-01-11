const computerChoiceElement = document.getElementById('computerChoice');
const playerChoiceElement = document.getElementById('playerChoice');
const resultOutputElement = document.getElementById('resultOutput');
const possibleChoices = document.querySelectorAll('button');

let player, computer, result;

possibleChoices.forEach(choice => {
    choice.addEventListener('click', function(e) {
        player = e.target.id;
        playerChoiceElement.innerHTML = player;
        generateComputerChoice();
        getResult();
    });
});

function generateComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        computer = 'rock';
    } else if (randomNum === 2) {
        computer = 'paper';
    } else {
        computer = 'scissors';
    }

    computerChoiceElement.innerHTML = computer;
}

function getResult() {
    if (computer === player) {
        result = 'It\'s a draw!';
    } else if (
        (computer === 'rock' && player === 'paper') ||
        (computer === 'paper' && player === 'scissors') ||
        (computer === 'scissors' && player === 'rock')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    resultOutputElement.innerHTML = result;
}