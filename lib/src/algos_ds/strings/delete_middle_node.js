/**
 * Implement an algorithm to delete a node in the middle of a single linked list, given only access to that node
 * @param  {Object} node middle node
 */
function delNodeFromMiddle(node) {

  if (node.next) {
    node.data = node.next.data;
    node.next = node.next.next;
  }

}

function test() {

  var list1 = {
    data: 1,
    next: {
      data: 2,
      next: {
        data: 3,
        next: {
          data: 4,
          next: {
            data: 5,
            next: {
              data: 6,
              next: {
                data: 7,
                next: null
              }
            }
          }
        }
      }
    }
  };

  var i = 4;
  var list2 = list1;
  while (i--) {
    list2 = list2.next;
  }

  delNodeFromMiddle(list2);

  while (list1) {
    console.log(list1.data);
    list1 = list1.next;
  }
}

test();
