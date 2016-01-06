/**
 * Height of a binary tree
 * Simple recursion
*/

function findHeight(node) {
  if(!node) {
    return 0;
  }

  return 1 + Math.max( findHeight( node.left ) , findHeight( node.right ) );
}

function test( node ) {
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

  var tree2 = { data: 12, left : null, right: null };

  console.log( findHeight(tree1) );

}

test();
