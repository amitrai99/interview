//Using ascii value
function isDigitAscii(str) {
  var i= str.length - 1;
  var isDigitOnly = true;
  while(i>=0) {
    if(str.charAt(i) < '0' || str.charAt(i) > '9' ) {
      isDigitOnly = false;
    }
    i--;
  }
  return isDigitOnly;
}

console.log(isDigitAscii('123'));
console.log(isDigitAscii('abc'));

//Using regex
function isDigitRegex(str) {
  var regex = /\D/; //\D represents all non-digit chars
  return !regex.test(str); //return true if char does not match non-char
}

console.log(isDigitRegex('1234'));
console.log(isDigitRegex('abcd'));

//Using HashMap
function isDigitMap(str) {
  var map = {'0':'1', '1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9'};
  var isDigitOnly = true;
  var i= str.length - 1;
  while(i>=0) {
    if(! map[str.charAt(i)] ) {
      isDigitOnly = false;
    }
    i--;
  }
  return isDigitOnly;
}

console.log(isDigitMap('1234'));
console.log(isDigitMap('aaa'));
