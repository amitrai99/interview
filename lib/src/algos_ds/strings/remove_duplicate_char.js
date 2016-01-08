function removeDuplicates(str) {
  if (str == null) return; // if the array does not exist..nothing to do return.
  var len = str.length; // get the array length.
  if (len < 2) return; // if its less than 2..can't have duplicates..return.
  var tail = 1; // number of unique char in the array.
  // start at 2nd char and go till the end of the array.
  for (var i = 1; i < len; ++i) {
    var j;
    // for every char in outer loop check if that char is already seen.
    // char in [0,tail) are all unique.
    for (j = 0; j < tail; ++j) {
      if (str[i] == str[j]) break; // break if we find duplicate.
    }
    // if j reachs tail..we did not break, which implies this char at pos i
    // is not a duplicate. So we need to add it our "unique char list"
    // we add it to the end, that is at pos tail.
    if (j == tail) {
      str[tail] = str[i]; // add
      ++tail; // increment tail...[0,tail) is still "unique char list"
    }
  }
  str[tail] = 0; // add a 0 at the end to mark the end of the unique char.
  return str;
}


function test() {
  var strArr = 'amit rai 1234'.split('');
  console.log( removeDuplicates(strArr) );
}

test();
