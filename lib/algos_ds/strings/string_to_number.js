function strToNum(str) {

  var sum = 0, len = str.length;

  for( var i = 0; i< len; i++ ) {
    sum = sum * 10 + str.charAt(i) * 1;
  }

  return sum;

}

var ss = strToNum('1112222');

console.log(typeof ss);
