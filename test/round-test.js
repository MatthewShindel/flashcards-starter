const assert = require('chai').assert;

const { createRound, takeTurn, calculatePercentCorrect, endRound} = require('../src/round');
const { createDeck } = require('../src/deck');
const { prototypeData } = require('../src/data');

describe('round', function () {
	let testCards;
	let testRound;
	let testDeck;
	let correctGuess;
	let incorrectGuess;
	beforeEach(function () {
		testCards = prototypeData.slice	(0,3);
		testDeck = createDeck(testCards);
		testRound = createRound(testDeck);
		correctGuess = 'object';
		incorrectGuess = 'thing';

	});
	it('createRound should be a function', function () {
		assert.isFunction(createRound)
	});
	it('should check if createRound has needed key/value pairs', function () {
		assert.equal(testRound.deck , testDeck)
		assert.equal(testRound.currentCard , testDeck[0])
		assert.equal(testRound.turns , 0)
		assert.deepEqual(testRound.incorrectGuesses , [])
	});
	it('takeTurn should be a function', function () {
		assert.isFunction(takeTurn)
	});
	it('should check if takeTurns adjust round information if we make correct guess', function () {
		assert.equal(takeTurn(correctGuess, testRound) , 'correct!')
		assert.equal(testRound.deck , testDeck )
		assert.equal(testRound.currentCard , testDeck[1])
		assert.equal(testRound.turns , 1)
		assert.deepEqual(testRound.incorrectGuesses , [])
	});

	it('should check if takeTurns adjust round information if we make correct guess multiple times', function () {
		assert.equal(takeTurn(correctGuess, testRound) , 'correct!')
		correctGuess = 'array'
		takeTurn(correctGuess, testRound);
		correctGuess = 'mutator method'
		takeTurn(correctGuess, testRound);
		assert.equal(testRound.deck , testDeck )
		assert.equal(testRound.currentCard , testDeck[3])
		assert.equal(testRound.turns , 3)
		assert.deepEqual(testRound.incorrectGuesses , [])
	});

	it('should check if takeTurns adjust round information if we make incorrect guess', function () {
		assert.equal(takeTurn(incorrectGuess, testRound) , 'incorrect!')
		assert.equal(testRound.deck , testDeck )
		assert.equal(testRound.currentCard , testDeck[1])
		assert.equal(testRound.turns , 1)
		assert.deepEqual(testRound.incorrectGuesses , [1])
	});

	it('should check if takeTurns adjust round information if we make incorrect guess multiple times', function () {
		assert.equal(takeTurn(incorrectGuess, testRound) , 'incorrect!')
		takeTurn(incorrectGuess, testRound);
		assert.equal(testRound.deck , testDeck )
		assert.equal(testRound.currentCard , testDeck[2])
		assert.equal(testRound.turns , 2)
		assert.deepEqual(testRound.incorrectGuesses , [1,2])
	});

	it('should calculate the percentage of how many cards you answered correctly' , function () {
		assert.equal(takeTurn(correctGuess, testRound) , 'correct!')
		assert.equal(testRound.deck , testDeck )//-1
		assert.equal(testRound.currentCard , testDeck[1])
		assert.equal(testRound.turns , 1)
		assert.deepEqual(testRound.incorrectGuesses , [])
		assert.equal(calculatePercentCorrect(testRound), 100)
	});

	it('should calculate the percentage of how many cards you answered correctly', function () {
		assert.equal(takeTurn(incorrectGuess, testRound) , 'incorrect!')
		takeTurn(incorrectGuess, testRound);
		assert.equal(testRound.deck , testDeck )
		assert.equal(testRound.currentCard , testDeck[2])
		assert.equal(testRound.turns , 2)
		assert.deepEqual(testRound.incorrectGuesses , [1,2])
		assert.equal(calculatePercentCorrect(testRound), 0)
	});

	it('should return an endRound message which is accurate to your correct guesses', function () {
		assert.equal(takeTurn(correctGuess, testRound) , 'correct!')
		takeTurn(incorrectGuess, testRound);
		assert.equal(calculatePercentCorrect(testRound), 50)
		assert.equal(endRound(testRound), `** Round over! ** You answered 50% of the questions correctly!`)
	});
	
});