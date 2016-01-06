/**
 * Count the number of nodes in binary tree
 */

/**
 * Use any traversal method and count the nodes.
 */

function countNodesPreOrder( node ) {

  if(!node) {
    return 0;
  }

  return 1 + countNodesPreOrder(node.left) + countNodesPreOrder(node.right);

}

function test() {
  var tree2 = { data: 12, left : null, right: null };

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

  console.log( countNodesPreOrder( tree1,0 ) );
}

test();
