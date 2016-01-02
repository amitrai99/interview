/**
 * very simple algorithm in which we "insert" a value in it's correct place in a sorted array
 * @param  {Array} arr array of numbers
 * @return {Array} sorted array
 */
function insertionSort(arr) {
  var j = 0;
  //use two loops
  for(var i=0,len=arr.length; i<len; i++) {
    j = i+1;
    while(j>0) {
      if( arr[j] < arr[j-1]) {
        temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
      j--;
    }
  }
  return arr;
}

function test() {
  var data = [4,3,1,22,11,112,1,2,1],
      len = data.length;
  var res = insertionSort(data);
  console.log(res.length === len);
  console.log(res.toString());
}

test();
