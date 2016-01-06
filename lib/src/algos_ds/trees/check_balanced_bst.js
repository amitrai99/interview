function isBalanced(node) {
  if(!node) {
    return true;
  }

  if( findHeight(node) === -1 ) {
    return false;
  } else {
    return true;
  }
}

function findHeight(node) {
  if(!node) {
    return 0;
  }

  var left = findHeight( node.left );
  var right = findHeight( node.right );

  if( left === -1 || right === -1 ) {
    return -1;
  }

  if ( Math.abs( left - right ) > 1 ) {
    return -1;
  }

  return Math.max(left, right) + 1;
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

  var tree2 = { data: 10, left: {data:9, left: {data:8, left:null, right: null}, right: null} };

  console.log( isBalanced( tree1 ) );
  console.log( isBalanced( tree2 ) );
}

test();
