//Complexity : O(n)
function findSubsequence(ss, str) {

  var ssIdx = 0,
      strIdx = 0,
      found = true;

    if(str.length < ss.length ) {
      console.log('false');
      return false;
    }

    while( strIdx < str.length && ssIdx < ss.length ) {
       if( ss.charAt(ssIdx) === str.charAt(strIdx) ) {
         ssIdx++;
       }
      strIdx++;
    }

  console.log(ssIdx === ss.length);

  return ssIdx === ss.length;
}

findSubsequence('abcd','abd');
findSubsequence('abc','awwwbeeedxxxc');
