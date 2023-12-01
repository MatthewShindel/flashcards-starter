const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const { createCard } = require('../src/card');
const { createDeck , countCards} = require('../src/deck');
const { prototypeData } = require('../src/data');
const { createRound, takeTurn, calculatePercentCorrect, endRound} = require('../src/round');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
	let cards = prototypeData.slice(0, prototypeData.length);
	let deck = createDeck(cards);
	let round = createRound(deck);
	printMessage(deck);
	printQuestion(round);
}

module.exports = { printMessage, printQuestion, start};


