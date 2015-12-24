//remove duplicate characters from String

//Using map
function remDuplicatesMap(str) {

  var map = {},
      arr = str.split('');

  for(var i=0, len=str.length; i<len; i++) {
    if( map.hasOwnProperty([str.charAt(i)]) ) {
       map[str.charAt(i)] = map[str.charAt(i)] + 1;
    } else {
      map[str.charAt(i)] = 1;
    }
  }

  for( i=0, len=str.length; i<len; i++) {
    if( map[ arr[i] ] && map[ arr[i] ] > 1 ) {
      arr[i] = '';
    }
  }

  console.log(arr.join(''));
  return arr.join();

}

remDuplicatesMap('zaaaabbbbccccdddd');

//Using array
function remDuplicatesArr(str) {

  var asciiArr = [],
      arr = str.split(''),
      cc;

  for(var i=0, len=str.length; i<len; i++) {
    cc = str.charCodeAt(i);
    if( asciiArr[cc] ) {
        asciiArr[cc] =  asciiArr[cc] + 1;
    } else {
       asciiArr[cc] = 1;
    }
  }

  for( i=0, len=str.length; i<len; i++) {
    cc = str.charCodeAt(i);
    if(  asciiArr[cc] &&  asciiArr[cc] > 1 ) {
      arr[i] = '';
    }
  }

  console.log(arr.join(''));
  return arr.join();

}

remDuplicatesArr('zaaaabbbbccccdddd');


//With just one single loop. This mehtod preserves the order of char also.
//When we encounter a character for the first time, we store it's index in ascii array
//When we encounter second time we make the previous occurence at stored index "" and also the current index where is occured. Then we set the ascii array position as boolean
function remDupesOneLoop(str) {

  var asciiArr = [],
      arr = str.split(''),
      cc,
      prevEntry;

  for(var i=0, len=str.length; i<len; i++) {
    cc = str.charCodeAt(i);
    if( typeof asciiArr[cc] !== 'undefined' ) {
      //this char has been seen before
      prevEntry = asciiArr[cc];
      if( typeof prevEntry === 'number' ) {
       //get it's last position in string and make it ''
       arr[prevEntry] =  ''; //if you want to keep only instance of char comment this line
       arr[i] = '';
       //from here we simply store a boolean to indicate that this charCode has occured before in string
       asciiArr[cc] = true;
      } else {
        //we found a boolean which means this character is a duplicate
        arr[i] = '';
      }
    } else {
      //if this is the first time with this char store it's index in array
       asciiArr[cc] = i;
    }
  }

  console.log(arr.join(''));
  return arr.join();

}

remDupesOneLoop('z1aaabbbzz');
