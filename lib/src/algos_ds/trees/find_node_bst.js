function findElementBst( node , v ) {

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
  console.log( 'Is 99 in tree : ? ', findElementBst(tree1, 99) );
  console.log( 'Is 25 in tree : ? ', findElementBst(tree1, 25) );
}

test();
