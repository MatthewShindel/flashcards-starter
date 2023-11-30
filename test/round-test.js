const assert = require('chai').assert;

const { createRound, takeTurn } = require('../src/round');
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
		// console.log(testRound);
		assert.equal(testRound.deck , testDeck)
		assert.equal(testRound.currentCard , testDeck[0])
		assert.equal(testRound.turns , 0)
		assert.deepEqual(testRound.inCorrectGuesses , [])
	});
	it('takeTurn should be a function', function () {
		assert.isFunction(takeTurn)
	});
	it('should check if takeTurns adjust round information if we make correct guess', function () {
		assert.equal(takeTurn(correctGuess, testRound) , 'correct!')
		assert.equal(testRound.deck , testDeck )//-1
		assert.equal(testRound.currentCard , testDeck[1])
		assert.equal(testRound.turns , 1)
		assert.deepEqual(testRound.inCorrectGuesses , [])
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
		assert.deepEqual(testRound.inCorrectGuesses , [])
	});

	it('should check if takeTurns adjust round information if we make incorrect guess', function () {
		assert.equal(takeTurn(incorrectGuess, testRound) , 'incorrect!')
		assert.equal(testRound.deck , testDeck )
		assert.equal(testRound.currentCard , testDeck[1])
		assert.equal(testRound.turns , 1)
		assert.deepEqual(testRound.inCorrectGuesses , [1])
	});

	it('should check if takeTurns adjust round information if we make incorrect guess multiple times', function () {
		assert.equal(takeTurn(incorrectGuess, testRound) , 'incorrect!')
		takeTurn(incorrectGuess, testRound);
		takeTurn(incorrectGuess, testRound);
		assert.equal(testRound.deck , testDeck )
		assert.equal(testRound.currentCard , testDeck[3])
		assert.equal(testRound.turns , 3)
		assert.deepEqual(testRound.inCorrectGuesses , [1,2,3])
	});

});