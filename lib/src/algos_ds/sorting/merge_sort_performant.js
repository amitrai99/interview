/**
 * more performant merge sort
 * @param  {Array} data
 * @param  {Number} li left index
 * @param  {Number} ri right index
 * @return {Array} Array with sorted numbers
 */
function mergeSort(data, li, ri) {

//console.log(li, ri);
  if( li < ri ) {
    var mid = Math.floor( (li + ri) / 2 );
  //  console.log( data.slice( li, mid ) );
  //  console.log( data.slice( mid + 1, ri ) );
    mergeSort( data, li, mid );
    mergeSort( data, mid+1, ri );

    //now merge
    merge(data, li, mid+1, ri);
  }
}

function merge(data, li, mid, ri) {

  var i = li, j = mid, temp = [];
  //swap
  while( i < mid && j <= ri ) {
    if( data[i] <= data[j] ) {
      temp.push(data[i]);
      i++;
    } else {
      temp.push(data[j]);
      j++;
    }
  }

  //deal with leftovers
  while(i<mid) {
    temp.push(data[i]);
    i++;
  }

  while(j<=ri) {
    temp.push(data[j]);
    j++;
  }

  //now write these back to main array

  i = li;
  j = 0;
  console.log(temp);
  while(i<=ri) {
    data[i] = temp[j];
    i++;
    j++;
  }

}

function test() {
  var data = [8,6,11,9,11,9,876,1123,11,2];
  var len = data.length;
  console.log(data);
  mergeSort(data, 0, data.length - 1);
  console.log(data.length === len ? 'pass':'fail');
  console.log(data);
}

test();
