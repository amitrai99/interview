/**
 * inPlace palindrome checking function
 * Complexity: O(n)
 * @param  {String}  str string to check
 * @return {Boolean} true if palindrome else false
 */
function isPalindrome(str) {

  if(str === '') {
    return true;
  } else if(!str) {
    return false;
  }
  var isPd = true;
  var i = 0, j = str.length - 1;

  while( i < j ) {
    if( str.charAt(i) !== str.charAt(j) ) {
      isPd = false;
      break;
   }
   i++;
   j--;

  }

  console.log(isPd);
  return isPd;
}

isPalindrome('ab6ba');
isPalindrome('hello world');
