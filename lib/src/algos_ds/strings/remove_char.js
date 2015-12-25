//Removes a given char from string
function remChar(str, chr) {

  if(!str) {
    return '';
  }

  var i = 0,
      len = str.length - 1,
      arr = str.split('');

  while(len >= 0) {
    if( arr[len] === chr ) {
       arr[len] = '';
    }
    len--;
  }

  console.log(arr.join(''));
  return arr.join('');
}

remChar('abcd', 'a');
