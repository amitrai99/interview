/**
* Depth-first search (DFS)
* There are three types of depth-first traversal: pre-order, in-order, and post-order.
*/
function preOrder( node ) {
  if( !node ) {
    return;
  }
  console.log( node.data );
  preOrder( node.left );
  preOrder( node.right );
}

function inOrder( node ){
  if( !node ) { return; }
  inOrder( node.left );
  console.log( node.data );
  inOrder( node.right );
}

function postOrder( node ) {
  if( !node ) {return;}
  postOrder( node.left );
  postOrder( node.right );
  console.log( node.data );
}

function Test() {

  var tree = {
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


  postOrder( tree );
}

Test();
