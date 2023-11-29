const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert

const { evaluateGuess } = require('../src/turn');

describe('turn', function () {
	let correctGuess;
	let incorrectGuess;
	let correctAnswer;
	let finalValue;
	beforeEach(function () {
		correctGuess = 'correct';
		incorrectGuess = 'incorrect';
		correctAnswer = 'correct';
		finalValue = ""
	});
	it('should be a function', function () {
		assert.isFunction(evaluateGuess)
	});

	it('should check if evaluateGuess returns correct for correct answer', function () {
		finalValue = evaluateGuess(correctGuess, correctAnswer);
		assert.equal(finalValue, 'correct!')
	});
	it('should check if evaluateGuess returns incorrect for incorrect answer', function () {
		finalValue = evaluateGuess(incorrectGuess,correctAnswer)
		assert.equal(finalValue, 'incorrect!')
	});
});