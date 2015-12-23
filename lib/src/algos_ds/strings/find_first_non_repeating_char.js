//We use a hash to store the chars in a string. The value will be a boolean
//indicating if the char is repeated or not
function findNonRepeatedChar(str) {

  var strHash = {},
    len = str.length - 1,
    ret = null,
    i = 0;

  while (len-- >= 0) {
    if (strHash.hasOwnProperty(str.charAt(len))) {
      strHash[str.charAt(len)] = true;
    } else {
      strHash[str.charAt(len)] = false;
    }
  } //while

  console.log(strHash);
  len = str.length;

  //To get the first non-repeated char make sure to loop over the original string
  //and use the chars from it to read the keys from hash
  while (i++ < len) {
    var key = str.charAt(i);
    if (strHash.hasOwnProperty(key) && strHash[key] === false) {
      ret = key;
      break;
    }
  }
  return ret;
}


console.log(findNonRepeatedChar('amit rai'));
