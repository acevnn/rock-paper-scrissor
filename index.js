const gameArray = ['Rock', 'Paper', 'Scissor'];

const getComputerChoice = () => {
	let randomValue = Math.floor(Math.random() * gameArray.length);
	return gameArray[randomValue];
}

let playerChoice = prompt("Choose Rock, Paper, or Scissor").toLowerCase();
console.log('Players choice:', playerChoice);

let computerChoice = getComputerChoice().toLowerCase();
console.log('The AI chose:', computerChoice);

const play = (playerSelection, computerSelection) => {

	const winningCombinations = {
		paper: 'paper',
		rock: 'rock',
		scissor: 'scissor',
	};
	let result = '';

	if (playerSelection === computerSelection) {
		result = "Both the human and AI chose " + playerSelection + ", so it is a draw";
	} else if (winningCombinations[playerSelection] === computerSelection) {
		result = 'Human won! \n - ' + playerSelection + ' beats ' + computerSelection;
	} else {
		result = 'AI won! \n - ' + computerSelection + ' beats ' + playerSelection;
	}

	return result;
}

//TODO come back later and re-work the code to play a couple of rounds instead just one

console.log(play(playerChoice, computerChoice));