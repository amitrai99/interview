/**
* Depth-first search (DFS)
* There are three types of depth-first traversal: pre-order, in-order, and post-order.
*/

function preOrder( head ) {
  console.log('Preorder');
  if( !head ) {
    return;
  }

  var stack = [],
      node;
  stack.push(head);

  while(stack.length) {
    node = stack.pop();
    console.log(node.data);
    if(node.right) {
      stack.push(node.right);
    }
    if( node.left ) {
      stack.push(node.left);
    }
  }//end while

} //end preOrder

function inOrder( head ) {
  console.log('Inorder');
  if( !head ) { return; }
  var stack = [],
      node = head;

  while( stack.length !==0 || node !== null ) {

    if(node) {
      stack.push(node);
      node = node.left;
    } else {
        node = stack.pop();
        console.log(node.data);
        node = node.right;
    }

  }//end while
} //end inOrder

/**
 * Iterative Postorder Traversal | Using Two Stacks
  1. Push root to first stack.
  2. Loop while first stack is not empty
    2.1 Pop a node from first stack and push it to second stack
    2.2 Push left and right children of the popped node to first stack
  3. Print contents of second stack
 */


function postOrder( head ) {
  console.log('Post order');
  if( !head ) {return;}
  var node = head,
      s1 = [],//stack 1
      s2 = [];//stack 2

  s1.push(node);

  while( s1.length ) {
    //pop from s1
    node = s1.pop();
    //push to s2
    s2.push(node);
    //move the left and right nodes to s1
    if(node.left) {
      s1.push( node.left );
    }
    if(node.right) {
      s1.push(node.right);
    }
  }

  //now all the items are in post order in s2
  //just print them
  while(s2.length) {
    data = s2.pop().data;
    console.log(data);
  }

}

function Test() {

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

  preOrder( tree );
  inOrder( tree );
  postOrder( tree );

}

Test();
