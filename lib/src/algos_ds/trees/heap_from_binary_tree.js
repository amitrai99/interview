/**
 * Note we are converting a generic Binary tree to Heap
 * (1) Do inorder traversal of Binary tree and stores the values in array.
 * (2) Sort the values in array
 * (3) Construct a max/min heap from array. Left child is 2n+1 and Right child is 2n+2
 */

function createHeapFromBinaryTree(node) {
  if(!node) {
    return null;
  }

  var arr = inOrderTrav(node, []);

  //Sort array
  arr.sort();
  var minHeap = createMinHeap(arr);
  var maxHeap = createMaxHeap(arr.reverse());

  console.log('---min heap---');
  for(var i = 0;i < minHeap.length; i++) {
    console.log(minHeap[i]);
  }

  console.log('===max heap===');
  for(var i = 0;i < maxHeap.length; i++) {
    console.log(maxHeap[i]);
  }

}

function createMaxHeap(arr) {
  var newArr = arr.slice();
  //Heapify
  for(var i=0, len=newArr.length; i<len; i++) {
    newArr[i].left = newArr[2*i + 1] || null;
    newArr[i].right = newArr[2*i + 2] || null;
  }
  return newArr;
}

function createMinHeap(arr) {
  //Heapify
  //Make sure that the array is sorted ascending for this to work otherwise reverse the array
  var newArr = arr.slice();
  //Heapify
  for(var i=0, len=newArr.length; i<len; i++) {
    newArr[i].left = newArr[2*i + 1] || null;
    newArr[i].right = newArr[2*i + 2] || null;
  }
  return newArr;
}

function inOrderTrav(node, arr) {
  if(!node) {
    return;
  }

  inOrderTrav(node.left, arr);
  arr.push(node.data);
  inOrderTrav(node.right, arr);
  return arr;
}


function test() {
  var tree1 = {
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

  createHeapFromBinaryTree(tree1);
}

test();
