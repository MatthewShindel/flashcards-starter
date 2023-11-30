const assert = require('chai').assert;

const { createDeck , countCards } = require('../src/deck');
const { prototypeData } = require('../src/data');

describe('deck', function () {
	let testCards;
	let testDeck;
	beforeEach(function () {
		testCards = prototypeData.slice	(0,3);
		testDeck = createDeck(testCards);
	});
	it('createDeck should be a function', function () {
		assert.isFunction(createDeck)
	});
	it('should check if createDeck returns a deck with cards', function () {
		assert.equal(testDeck , testCards)
	});
	it('should check if countCards is a function', function () {
		assert.isFunction(countCards);
	});
	it('should check if countCards returns length of deck', function () {
		assert.equal(countCards(testDeck), 3);
	});
});