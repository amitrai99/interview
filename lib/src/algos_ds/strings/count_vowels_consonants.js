//Using map to count vowels and consonants
function countVowelsConsonantsMap(str) {

  var vmap = {'a':'a','e':'e','i':'i','o':'o','u':'u'},
      vc = 0,
      cc = 0,
      curChar;

  str = str.toLowerCase();

  for(var i=0; i< str.length; i++) {
    curChar = str.charAt(i);

    if( vmap[curChar] ) {
      vc++;
    } else {
      if(curChar >= 'a' && curChar <= 'z') {
        cc++;
      }
    }
  }

  console.log('vowels : ' + vc + ' consonants : ' + cc);
}


countVowelsConsonantsMap('aeiou-----');
countVowelsConsonantsMap('   bcdf!!!!');
