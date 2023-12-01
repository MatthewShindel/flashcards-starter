const assert = require('chai').assert;

const { createRound, takeTurn, calculatePercentCorrect, endRound} = require('../src/round');
const { printMessage, printQuestion, start} = require('../src/game');
const { createDeck , countCards } = require('../src/deck');
const { prototypeData } = require('../src/data');

describe('game', function () {
	let testCards;
	let testRound;
	let testDeck;
	let correctGuess;
	beforeEach(function () {
		testCards = prototypeData.slice	(0,prototypeData.length);
		testDeck = createDeck(testCards);
		testRound = createRound(testDeck);
		correctGuess = 'object';
	});

	it('start should be a function', function () {
		assert.isFunction(start)
	});
	it('testDeck contains testCards', function () {
		assert.equal(testCards, testCards);
	});
	it('testRound contains testDeck', function () {
		assert.equal(testRound.deck , testDeck);
	});
	it('testRound can take turns', function () {
		assert.equal(takeTurn(correctGuess, testRound) , 'correct!')
	});
});