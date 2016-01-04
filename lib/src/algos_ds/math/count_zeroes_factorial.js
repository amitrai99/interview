/**
 * Without using a calculator, how many zeros are at the end of "100!"? (that's
100*99*98*...*3*2*1)
Answer: What you don't want to do is start multiplying it all out! The trick is
remembering that the number of zeros at the end of a number is equal to the
number of times "10" (or "2*5") appears when you factor the number. Therefore
think about the prime factorization of 100! and how many 2s and 5s there are.
There are a bunch more 2s than 5s, so the number of 5s is also the number of 10s in
the factorization. There is one 5 for every factor of 5 in our factorial multiplication
(1*2*...*5*...*10*...*15*...) and an extra 5 for 25, 50, 75, and 100. Therefore we have
20+4 = 24 zeros at the end of 100!.
 * @param  {Number} num number
 * @return {Number} number of zeroes
 */
function findZeroes(num) {

  var i = 5,
      numZero = 0;

  while(i <= num) {
    var temp = i;
    while( temp % 5 === 0 ) {
      numZero++;
      temp =  temp/5;
    }
    i++;
  }

  console.log(numZero);
  return numZero;
}

function test() {
  findZeroes(100);
}
