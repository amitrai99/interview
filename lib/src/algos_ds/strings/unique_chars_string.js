/**
 * checks if a string has only unique chars without using extra data structure
 * @param  {String} str string to be tested
 * @return {Boolean} true/false
 */
function uniqueCharBitSet(str) {

  if(!str) {
    return false;
  }

  var bitSet = 0,
      i = 0,
      len = str.length,
      cc;

  str =  str.toLowerCase();

  while( i < len ) {
    cc = str.charCodeAt(i) - 'a'.charCodeAt(0);
    //first check if the bit is already set
    if( bitSet & ( 1 << cc ) > 0 ) {
      //char already exists
      return false;
    } else {
      bitSet = bitSet | ( 1 << cc );
    }
    i++;
  }

  return true;
}

/**
 * checks if a string has only unique chars using sorting
 * @param  {String} str string to be tested
 * @return {Boolean} true/false
 */
function uniqueCharSorting(str) {

  if(!str) {
    return false;
  }

  str =  str.toLowerCase().split('');
  //sort array
  str.sort( function(a,b) {
    return a.charCodeAt(0) - b.charCodeAt(0);
  });

  var len = str.length;

  while( --len >= 1 ) {
    if( str[len] === str[len-1] ) {
      return false;
    }

  }

  return true;

}

function test() {
  console.log( uniqueCharBitSet('abcd-+*&^%123456a') );
  console.log( uniqueCharSorting('abcd-+*&^%123456a') );
}

test();
