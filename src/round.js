function createRound(deck) {
	return {
		deck : deck,
		turns: 0,
		currentCard : deck[0],
		incorrectGuesses: []
	}
}

function takeTurn(guess,round) {
	let answer = round.currentCard.correctAnswer;
	// console.log(`correct answer: ${answer}`);
	if (guess === answer){
		//update turn and move to next card
		// console.log('horray!');
		// console.log(round.currentCard);
		round.turns += 1;
		// console.log(round.turns);
		round.currentCard = round.deck[round.turns];
		// console.log(round.currentCard);
		// console.log(round.incorrectGuesses);
		return 'correct!'
	}else{//if guess is wrong, add to incorrect guess{
		round.incorrectGuesses.push(round.currentCard.id);
		round.turns += 1;
		round.currentCard = round.deck[round.turns];
		return 'incorrect!'
	}	
}

function calculatePercentCorrect(round) {
	if (round.incorrectGuesses.length === 0) {
		return 100;
	}else{
		return 100 - (Math.round((round.incorrectGuesses.length / round.turns) * 100));
	}
}

function endRound(round) {
	let message = `** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`
	console.log(message)
	return message
}

module.exports = {
	createRound,
	takeTurn,
	calculatePercentCorrect,
	endRound
}