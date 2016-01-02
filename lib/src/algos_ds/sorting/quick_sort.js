function quickSort(arr, lo, hi) {

  if( arr.length ) {
    var pIdx = partition( arr, lo, hi );

    if( lo < pIdx - 1) {
      //We must sort only upto pivot index - 1 because pivot is already in it's correct place
      quickSort(arr, lo, pIdx-1 );
    }
    if( pIdx < hi ) {
      //We must sort only from pivot index + 1 because pivot is already in it's correct place
      quickSort(arr, pIdx+1, hi );
    }

  }
  return arr;
}

function partition(arr, lo, hi) {

  //choose a pivot, in this case the lowest element
  var pivot = arr[ Math.floor( (lo + hi) / 2 ) ],
      temp,
      j = hi,
      i = lo;

  //sort elements relative to pivot
  //Keep two pointers one keeps incrementing each time
  //second will increment only when a swap is made and is at the last know element greater than pivot
  while( i<=j ) {

    while( arr[i] < pivot ) {
      i++;
    }

    while( arr[j] > pivot ) {
      j--;
    }

    if( i<= j) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }

  }//end while
  console.log(arr);
  return i;

}


function test() {
  var data = [11,31,44,55];
  console.log( data );
  quickSort(data,0,data.length-1);
  console.log(data);
}

test();
