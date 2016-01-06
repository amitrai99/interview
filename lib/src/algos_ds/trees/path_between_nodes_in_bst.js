/**
 * Find a path from one node in a binary tree to another.
 * NOTE : Not working properly.
 * @param  {Object} node tree node
 * @param  {number} v1 number
 * @param  {number} v2 number
 * @return {Array} nodes representing the path
 */
function findPath(node, v1, v2) {

  if(!node) {
    return [];
  }
  var path1 = [],
      path2 = [];

  //first find the lowest common ancestor
  var lca = lowestCommonAncestorBST(node, v1, v2),
      root = lca;

  traversePath(root.left, v1, v2, path1);
  traversePath(root.right, v1, v2, path2);

  path1.push(root);

  while( path2.length ) {
    path1.push( path2.pop() );
  }

  return path1;
}

function traversePath(root, v1, v2, pathArr) {

  if(!root) {
    return false;
  }

  //we need to descend only till the point where we find our data
  //descending any lower is useless
  if( root.data === v1 || root.data === v2 ) {
    pathArr.push(root);
    return true;
  }

  var inPath = traversePath( root.left, v1, v2, pathArr ) || traversePath( root.right, v1, v2, pathArr );

  if(inPath) {
    pathArr.push(root);
  }

}

function lowestCommonAncestorBST( node, v1, v2 ) {

  if(!node) {
    return null;
  }

  while(node) {
      if(v1 < node.data && v2 < node.data ) {
        //the values are in the left subtree
        node = node.left;
      } else if( v1 > node.data && v2 > node.data ) {
        node = node.right;
      } else {
        break;
      }
  }
  return node;
}


function test() {

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

  //console.log(  );

  findPath(tree, 14, 23).forEach( function(val) {
    console.log(val.data);
  } );

}

test();
