//This will give only the first highest freq char
function findHighestFrequencyChar(str) {

  if(!str) {
    return false;
  }

  var map = {},
      len = str.length -1,
      chr='',
      max = 0,
      maxChar='';

  while(len-- >= 0) {
    chr = str.charAt(len);
    map[chr] = map[chr] ? map[chr] + 1 : 1;
  }

  for(var key in map) {
    if( map[key] > max ) {
      max = map[key];
      maxChar = key;
    }
  }

  console.log(maxChar + ' : ' + max);
  return maxChar;
}

findHighestFrequencyChar('aabcd');

//This will give all chars with same highest freq
function findAllHighestFrequencyChar(str) {

  if(!str) {
    return false;
  }

  var map = {},
      len = str.length -1,
      chr='',
      max = 0,
      maxChar='',
      maxCharMap = {};

  while(len-- >= 0) {
    chr = str.charAt(len);
    map[chr] = map[chr] ? map[chr] + 1 : 1;
  }

  //first find max frequency
  for(var key in map) {
    if( map[key] > max ) {
      max = map[key];
    }
  }

  //now output all chars with 'max' frequency
  for(key in map) {
    if( map[key] === max ) {
      maxCharMap[key] = max;
    }
  }

  console.log(maxCharMap);
  return maxCharMap;
}

findAllHighestFrequencyChar('aabbccdefghi');
