/**
 * selection sort
 * Complexity : O(n^2)
 * Space: In Place O(1);
 * @param  {Array} data data to be sorted
 * @return {Array} Sorted array
 */
function selectionSort(items) {

  var len = items.length,
      i=0,
      j=0,
      min,
      temp,
      minIdx;

  while(i<len) {
    min = items[i];
    j=i;
    minIdx = i;
    while(j<len) {
      if( items[j] < min ) {
        min = items[j];
        minIdx = j;
      }
      j++;
    }

    temp = items[i];
    items[i] = min;
    items[minIdx] = temp;
    i++;
  }

  return items;

}

function test() {
  var data = [12,11,1,2,3,4];
  var data = selectionSort(data);
  console.log(data);
}


test();
