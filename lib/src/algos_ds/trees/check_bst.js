/**
* Very efficient solution. We traverse only till the point the tree is valid.
* After that we retutn false.
* Works by checking the current nodes value with it's parents value.
* if it is not within the range it is not proper inorder hence not a bst tree.
*/

function isBstMinMax( node, min, max ) {

  if(!node ) {
    return true;
  }

  if( node.data < min || node.data > max ) {
    return false;
  }

  return isBstMinMax(node.left, min, node.data) && isBstMinMax(node.right, node.data, max);
}

/**
* Another brute force way to check for BST.
* Traverse the btree inorder and collect all the nodes in an array.
* Then check if the array is sorted.
* Very inefficient. O(n) traversal, O(2n) memory for auxiliary space.
*/
function isBSTInOrderTrav( head, arr ) {
  if(!head) {
    return true;
  }

  isBSTInOrderTrav(head.left, arr);
  arr.push(head.data);
  isBSTInOrderTrav(head.right, arr);

  var val = false,
      i = 0,
      len = arr.length,
      val = true;

  if(len===1) {
    val = true;
  }

  for(var i=1, len=arr.length; i<len; i++) {
    if(arr[i] < arr[i-1]) {
      val = false;
    }
  }
  return val;
}

function test() {

  //invalid BST
  var tree1 = {
    data: 10,
    left: { data: 21, left: null, right: null },
    right: { data: 40, left: null, right: null }
  };

  //valid BST
  var tree2 = {
    data: 20,
    left: {
      data:15,
      left: { data: 13,right: {data: 14, left: null, right: null}, left: null },
      right: {data: 17,left: { data: 16, left: null, right: null}, right: { data:18, left: null, right: null } }
    },
    right: {
      data: 30,
      left: { data: 25, right: {data: 26, left: null, right: null }, left: { data: 23, left: null, right: null } },
      right: { data: 33, right: null, left: null }
    }
  };


  console.log( isBstMinMax(tree1, Number.MIN_VALUE, Number.MAX_VALUE) );
  console.log( isBstMinMax(tree2, Number.MIN_VALUE, Number.MAX_VALUE) );

  var arr = [];
  console.log(isBSTInOrderTrav(tree1, arr));
  arr = [];
  console.log(isBSTInOrderTrav(tree2, arr));
}

test();
