var tree = {
  data: 22,
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

/**
 * lowest common ancestor in a BST given two values
 * @param  {Object} root root node of tree
 * @param  {Number} val1
 * @param  {Number} val2
 * @return {Object} node that is Lowest Common Ancestor
 */
function findLowestCommonAncestor( root, val1, val2 ) {
  if(!root) {
    return null;
  }

  var node = root;

  while(node) {

    var data = node.data;

    if( val1 < data && val2 < data ) {
      //both values are in the left subtree
      node = node.left;
    } else if( val1 > data && val2 > data ) {
      //both values are in the right sub tree
      node = node.right;
    } else {
      break;
    }

  }

  return node;
}

function Test() {
  console.log( findLowestCommonAncestor( tree, 23, 33 ).data === 30 );
}

Test();
