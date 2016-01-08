var A = ['C', 'D', 'E', 'F', 'G'];
var B = [ 3 ,  0,   4,   1,   2];

function sort(a,b) {

  var len = a.length;
  var arr = [];

  while(--len>=0) {
    var data = { key : a[len], val : b[len] };
    arr.push( data );
  }

  arr.sort( function( a, b) {
    return a.val - b.val;
  });

  console.log( arr );

}

sort(A,B);
