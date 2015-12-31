/**
 * Mergesort using additional array space
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
function mergeSort(data) {

  //base case, only one element in array
  if(data.length === 1 ) {
    return data;
  }

  var mid = Math.floor(data.length / 2),
      left = data.slice(0, mid),
      right = data.slice(mid);

  //first break down left sub array into smaller chunks till length 1
  left = mergeSort( left );
  //then break down the right side of array till length 1
  right = mergeSort( right );

  //now merge the two lists
  data = merge(left, right);

  return data;
}

//merge the two sorted arrays
function merge(left, right) {

  var merged = [],
      i=0,
      j=0;
  //merge the sorted lists into one sorted list
  while(i < left.length && j < right.length ) {
    if( left[i] <= right[j] ) {
      merged.push(left[i]);
      i++;
    } else if(right[i] < left[i] ) {
      merged.push(right[j]);
      j++;
    }
  }

  //push the leftovers to the merged array
  while(i<left.length) {
    merged.push(left[i]);
    i++;
  }

  while(j<right.length) {
    merged.push(right[j]);
    j++;
  }

  return merged;

}

function test() {

  var data = [2,2,2,2];
  console.log(data);

  data = mergeSort(data);

  console.log(data);

}

test();
