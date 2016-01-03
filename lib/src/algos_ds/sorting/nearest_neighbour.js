/**
 * Say you have an array containing information regarding n people. Each person is
described using a string (their name) and a number (their position along a number
line). Each person has three friends, which are the three people whose number is
nearest their own. Describe an algorithm to identify each person's three friends.
 */

/**
 * Good answer: Sort the array in ascending order of the people's number. For each
person, check the three people immediately before and after them. Their three
friends will be among these six people. This algorithm takes O(n log n) time, since
sorting the people takes that much time.
 */

function nearestNeighbor(items) {

  //first sort by number
  items.sort(function(a, b) {
    return a.num - b.num;
  });

  return items;
}


function test() {

  var items = [
    {name:'a', num: 1},
    {name:'b', num: 99},
    {name: 'c', num: 23,},
    {name:'doz', num: 12},
    {name:'qwe', num:2}
  ]

  nearestNeighbor(items);

  console.log(items);

}

test();
