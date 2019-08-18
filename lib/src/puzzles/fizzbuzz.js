const FIZZ_DIVISOR = 3;
const BUZZ_DIVISOR = 5;
const FIZZ_BUZZ_DIVISOR = FIZZ_DIVISOR * BUZZ_DIVISOR;

/*
* tests for number being a fizz
* @param {number} num - number to be tested for fizz
* @return {boolean} - is number fizz
*/
function isFizz(num) {
	return num % FIZZ_DIVISOR === 0;
}

/*
* tests for number being a buzz
* @param {number} num - number to be tested for buzz
* @return {boolean} - is number buzz
*/
function isBuzz(num) {
	return num % BUZZ_DIVISOR === 0;
}

/*
* tests for number being a fizzbuzz
* @param {number} num - number to be tested for fizbuzz
* @return {boolean} - is number fizbuzz
*/
function isFizzBuzz(num) {
	return (isBuzz(num) && isFizz(num));
}

/**
* prints fizz, buzz or fizzbuzz for numbers meeting the criteria
* @param {number} num - number to be tested for condition
*/
function fizzBuzz() {
  const MIN_INDEX = 1;
  const MAX_INDEX = 100;
  
  for(let num=MIN_INDEX; num<= MAX_INDEX; num++) {
  	switch(true) {
    	case isFizzBuzz(num):
	    	console.log('FizzBuzz');
        break;
      case isFizz(num):
      	console.log('Fizz');
        break;
      case isBuzz(num):
      	console.log('Buzz');
        break;
      default:
      	break;
    }
  }
}

fizzBuzz();
