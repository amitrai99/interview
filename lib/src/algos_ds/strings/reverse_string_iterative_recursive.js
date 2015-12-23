/*
Iterative string reversal.
*/
function revStrItr(str) {
  if(!str) {return '';}
  var strArr = str.split('');

  for(var i=0, j=strArr.length; i <= j; i++,--j) {
    temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
  }

  return strArr.join('');

}

console.log( revStrItr('abcd') );

console.log('====----====');
/*
Recursive string reversal.
It is possible by only using an array
*/
function revStrRec(str, si, ei) {

  //base case
  if(si >= ei) {
    return;
  }

  var temp = str[si];
  str[si] = str[ei];
  str[ei] = temp;
  revStrRec(str, ++si, --ei);

  return str.join('');
}

console.log(revStrRec( ['d','u','l','l'], 0, 3 ) );
