//Find duplicates chars using hashmap
//Complexity: O(n)
function findDuplicateMap(str) {
  if(!str) {return;}
  var map = {};
  var len = str.length - 1;
  str = str.toLowerCase();
  //we are using bool to indicate duplicate. If we need actual count fill with number and increment
  while(len >= 0) {
    if( map.hasOwnProperty([str.charAt(len)]) ) {
      map[str.charAt(len)] = true;
    } else {
      map[str.charAt(len)] = false;
    }
    len = len - 1;
  }

  for(var key in map) {
    if(map.hasOwnProperty(key) && map[key]) {
      console.log(key + ' : ' + map[key]);
    }
  }

}

findDuplicateMap('Aamitt');

console.log('===');

//find duplicate chars using array.
//This mehtod is good only for ascii chars or ISO-Latin-1 charset. ASCII is from 0-127, ISO-Latin from 128-255.
//Not good for UTF as it has more than 65,536 chars.
function findDuplicateArr(str) {
  if(!str) {return '';}

  var charArr = [],
      len = str.length,
      cc=0;

      str = str.toLowerCase();

  for(var i=0; i<256; i++) {
    charArr[i] = 0;
  }

  //fill the count
  while(--len >= 0 ) {
    cc = str.charCodeAt(len);
    charArr[cc] = charArr[cc] + 1;
  }

  //print the repeating chars
  len = charArr.length;

  while(--len) {
    if(charArr[len] > 1) {
      console.log( String.fromCharCode(len) + ' : ' + charArr[len]);
    }
  }

}

findDuplicateArr('AAAAaamitt');
