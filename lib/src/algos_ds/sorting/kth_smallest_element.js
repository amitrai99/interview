/**
 * Find the kth smallest element in an array. This is also known as Order Statistics.
 * Use quickSort partition logic to solve all such similar problems
   (1) Find a pivot
   (2) Partition the array into two halves such that items[0,1....,pidx-1] <= pivot and items[pidx+1,....,n] > pivot
   (3) If k == pIdx then we are done, return the pivot
   (4) If k < pIdx, then partition the lower array and repeat the process till you find kth item as pivot
   (5) If k > pIdx, then partition the upper array and repeat the process till you find the kth item as pivot
 * @param  {Array} items array of numbers
 * @param  {Number} k the index of item to be found
 * @return {Number} the kth item
 */
function findKthSmallest(items, si, ei, k, kthItem) {

  if(items.length < k) {
    throw new Error('Index out of bound');
  }

  if(items.length === 1) {
    return items[0];
  }

  if(si===k) {
    //return items[si];
  }



  if( k <= ei - si + 1) {
    var pIdx = partition( items, si, ei );
    //console.log( items, k === pIdx, pIdx-1, items[pIdx-1] );
    if(k === pIdx) {
      //pivot is the kth smallest element - 1
      //we subtract -1 because arrays have index starting 0 whereas k is natural number >= 1
      return items[pIdx];
    } else if( k < pIdx ) {
      //kth smallest element is in the lower array
      return findKthSmallest(items, si, pIdx-1, k, kthItem);
    } else if ( k > pIdx ) {
      //kth smallest element is in the upper array
      return findKthSmallest(items, pIdx+1, ei, k, kthItem);
    }

  }

}

/**
 * partitions the array into two halves such less and greater than a pivot value
 * @param  {Array} items array
 * @param  {Number} si start index
 * @param  {Number} ei end index
 * @return {Number} pivot index
 */
function partition(items, si, ei) {
  //choose a pivot
  var pivot = items[ Math.floor( (si+ei)/2 ) ];

  //now go from left to right
  for( var i=0, j = ei; i <= j; ) {
    //move to the point where we find the first item larger than pivot
    while( items[i] < pivot ) {
      i++;
    }
    //move to the point where we find the first item less than pivot
    while( items[j] > pivot ) {
      j--;
    }

    //now swap these items unless these are same
    if( i<=j ) {
      temp = items[i];
      items[i] = items[j];
      items[j] = temp;
      i++;
      j--;
    }
  }
  return i;

}


function test() {
  var items = [45,46,47,48],
      k = 2,
      kthItem;

  console.log('find the %d th smallest item in array : ', k, items.toString() );
  kthItem = findKthSmallest(items, 0, items.length - 1, k-1, kthItem);
  console.log(kthItem);
}

test();
