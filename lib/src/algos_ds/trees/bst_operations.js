/**
 * we always insert a node in a leaf node so as not to disturb the tree structure
 * this makes the insertion logic very simple
 * @param  {Object} node node
 * @param  {Object} node value to insert
 * @return {boolean} success fail
 */
function insertNode(node, valNode) {
  /* If the node is empty, return a new node */
  if( !node ) {
    return valNode;
  }

  /* Otherwise, recurse down the tree to find a suitable node */
  if( valNode.data < node.data ) {
    node.left = insertNode(node.left, valNode );
  }

  if( valNode.data > node.data ) {
    node.right = insertNode(node.right, valNode );
  }
  /* return the (unchanged) node pointer */
  return node;
}

/**
 * finds the node in a BST
 * @param  {Object} node of tree
 * @param  {Number} v value to find in tree
 * @return {Boolean} true/false depending on search result
 */
function findNodeBst( node , v ) {

  if(!node || !v) {
    return false;
  }

  if( v < node.data ) {
    node = node.left;
    return findElementBst(node, v);
  } else if( v > node.data ) {
    node = node.right;
    return findElementBst(node, v);
  } else {
    return true;
  }

}

/**
 * removes a value from the tree
 * This program is a little tricky, we need to consider 3 scenarios
 * (1) Node with no children
 * (2) Node with one child
 * (3) Node with two children
 */
function removeNode(node, val) {
  if(!node) {
    return null;
  }
  var temp;
  if( val < node.data ) {
    node.left = removeNode( node.left, val );
  } else if( val > node.data ) {
    node.right = removeNode( node.right, val );
  } else {
    //leaf node or node with 1 child only
    if( !node.left || !node.right ) {
      return node.right || node.left;
    } else {
      // node with two children: Get the inorder successor (smallest element in the right subtree)
      temp = minValueNode(node.right);
      // Copy the inorder successor's content to this node
      node.data = temp.data;
      // Delete the inorder successor
      node.right = removeNode(node.right, temp.data);
    }
  }

  return node;
}

/**
 * finds the minimum valued node in a BST
 * @return {Node} Node
 */
function minValueNode(node) {
  if(!node) {return node};

  while( node.left ) {
    node = node.left;
  }

  return node;
}

/**
 * finds the max valued node in a BST
 * @return {Node} Node
 */
function maxValueNode(node) {
  if(!node) {return node};

  while( node.right ) {
    node = node.right;
  }

  return node;
}

function test() {
  var tree = {
    data: 22,
    left: {
      data:15,
      left: { data: 13, left: null, right: { data: 14, left: null, right: null } },
      right: { data: 17,left: { data: 16, left: null, right: null}, right: { data:18, left: null, right: null } }
    },
    right: {
      data: 30,
      left: { data: 25, right: {data: 26, left: null, right: null }, left: { data: 23, left: null, right: null } },
      right: { data: 33, right: null, left: null }
    }
  };
  console.log( tree );
  console.log('-------------');
  removeNode(tree, 30);
  console.log( tree );
}

test();
