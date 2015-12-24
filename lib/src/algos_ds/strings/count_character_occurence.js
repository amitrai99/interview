//Complexity O(n)
function countChar(str, char) {
  var cc = 0;

  for(var i=0,len=str.length; i<len; i++) {
    if(str.charAt(i) === char) {
      cc++;
    }
  }

  console.log('char count = ' + cc);
}

countChar('aavvvv', 'a');
