function BinaryTree(rootNode) {

  if( !rootNode ) {
    return;
  }

  this.rootNode = rootNode;
}

/**
* Inserts a value in a BST.
* We always insert a node in a leaf node so as not to disturb the tree structure, this makes insertion logic simpler
* @param {node} rootNode the root node of the tree
* @param {node} node, the node that needs to be inserted in the tree
* @return the rootNode of the tree.
*/
BinaryTree.prototype.insert = function(rootNode, node) {

  if( !rootNode ) {
    return node;
  }

  if( node.data < rootNode.data ) {
    rootNode.left = this.insert( rootNode.left, node );
  } else if( node.data > rootNode.data ) {
    rootNode.right = this.insert( rootNode.right, node );
  }

  return rootNode;

};

/**
* Simple non-recursive search for a value in BST
* @param {node} rootNode the root node of the tree
* @param {number} value the value to be searched in BST
* @return {boolean} true or false depending on whether we found the value
*/
BinaryTree.prototype.search = function( rootNode, value ) {

  if(!value) {
    return;
  }

  while( rootNode ) {
    if( value < rootNode.data ) {
        rootNode = rootNode.left;
    } else if( value > rootNode.data ) {
      rootNode = rootNode.right;
    } else if( rootNode.data === value ) {
      return rootNode;
    }
  }

  return null;

};


/**
* Delete a node from Binary tree
* There are three cases
* (1) Delete a leaf node
* (2) Delete a node with one child
* (3) Delete a node with both child, using inorder successor
* @param {node} root the root node of the BST
* @param {number} value the value which needs to be deleted
*/
BinaryTree.prototype.delete = function( root, value ) {
  if( !root ) {
    return root;
  }
  //first we need to locate the node
  if( value < root.data ) {
    //search the left sub tree
    root.left = this.delete( root.left, value );
  } else if( value > root.data ) {
    //search right subtree
    root.right = this.delete( root.right, value );
  } else {
    //node found now delete the node
    //(1) first handle the case of leaf node and 1 child node
    if( !root.left || !root.right ) {
      return root.left || root.right;
    } else {
      //handle case where we have both children of a node

      //(1) find the inorder sucessor in the right tree which is basically the smallest node in right subtree
      var temp = node.right;

      while( temp.left ) {
        //keep moving left till you hit leaf node in left subtree, this is the smallest node
        temp = temp.left;
      }
      //(2) set the inorder sucessors data to the current node
      root.data = temp.data;
      //(3) remove the redundant inorder sucessor node
      this.delete( root.right, temp.data );
    }
  }

  return root;
};

/**
* Find the smallest element in tree
* @param {node} root, the root node of the tree
*/
BinaryTree.prototype.findMin = function( root ) {

  if(!root) {
    return;
  }

  while( root.left ) {
    root = root.left;
  }

  return root.data;

};

/**
* Find the smallest element in tree
* @param {node} root, the root node of the tree
*/
BinaryTree.prototype.findMax = function( root ) {

  if(!root) {
    return;
  }

  while( root.right ) {
    root = root.right;
  }

  return root.data;

};

/**
* Test the Binary tree
*/

function test() {

  var root1 = { data: 10, left: null, right: null };
  var btree = new BinaryTree( root );

  btree.insert( root1, { data: 9, left: null, right: null } );
  btree.insert( root1, { data: 90, left: null, right: null } );
  btree.insert( root1, { data: 19, left: null, right: null } );
  btree.insert( root1, { data: 1, left: null, right: null } );


  console.assert( btree.search( root1, 14 ) === null, 'Failed to find item' );
  console.assert( btree.search( root1, 19 ).data === 19, 'Failed to find item' );

  console.assert( btree.search( root1, 1 ).data === 1, 'Failed to find item' );
  //deleting a non-existant node does nothing to the tree
  btree.delete( root1, 133 );
  //now delete an existant value from tree
  btree.delete( root1, 1 );
  console.assert( btree.search( root1, 1 ) === null, 'Failed to delete item' );
  console.assert( btree.findMin( root1 ) === 9,'Min should be 9' );
  console.assert( btree.findMax( root1 ) === 90,'Max should be 90' );

}

test();
