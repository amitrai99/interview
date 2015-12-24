function replaceSpace(str) {

  var arr = str.split(''),
      i = str.length;

  while( --i ) {
    if(arr[i] === ' ') {
      arr[i] = '%20';
    }
  }

  console.log(arr.join());

}

replaceSpace('a aa  aaa ');
