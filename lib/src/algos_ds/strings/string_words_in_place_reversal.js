function revArray2(arr, sti, edi) {
  var temp;

  if(!arr) {
    return [];
  }
  if(!edi) {
    edi = arr.length;
  }

  //Make sure to have a separate counter variable to count down from behind
  //you cannot use the value of "i" because it might not always start from 0
  //here we use "j" as independent counter for reversing
  for(var i = sti, len = edi, j = 1; i < len; i++, j++ ) {

    console.log( 'swap ' + i + ' : ' + (len-j) );

    if(i >= len - j ) {
      break;
    }

    temp = arr[i];
    console.log( arr[len - j] + ' ' + temp );
    arr[i] = arr[len - j];
    arr[len - j] = temp;
  }

  return arr;
}

function revString(str) {
  if(!str) {
    return '';
  }

  var temp,
      arrStr = str.split(''),
      sti = 0;

  //reverse the entire string
  arrStr = revArray2(arrStr, 0, arrStr.length);

  //reverse each word
  for(var i=0, len=arrStr.length; i<len; i++) {
    if( arrStr[i] === ' ') {
      revArray2(arrStr,sti,i);
      sti = i+1;
    }
    if( i===len-1) {
      revArray2(arrStr,sti);
    }
  }

  console.log(arrStr.join(''));

}

revString('ab fghi');
