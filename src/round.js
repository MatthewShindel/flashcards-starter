function createRound(deck) {
	return {
		deck : deck,
		turns: 0,
		currentCard : deck[0],
		inCorrectGuesses: []
	}
	// const round = {
	// 	deck : deck,
	// 	turns : 0,
	// 	inCorrectGuesses: [],
	// 	currentCard : {}
	// };
	// round.currentCard = round.deck(round.turns)
	// // round.updateTurns = function () {
	// // 	round.turns += 1;
	// // 	round.currentCard = round.deck[round.turns]
	// // }
	// return round;
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
		// console.log(round.inCorrectGuesses);
		return 'correct!'
	}else{//if guess is wrong, add to incorrect guess{
		round.inCorrectGuesses.push(round.currentCard.id);
		round.turns += 1;
		round.currentCard = round.deck[round.turns];
		return 'incorrect!'
	}	
}

module.exports = {
	createRound,
	takeTurn
}