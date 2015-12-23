//Approach 1: Sort both strings and compare
//Complexity: O(nlog(n)) . Complexity is of the sorting algo used. Rest is trivial.
function checkAnagram1(str1, str2) {

  if (!str1 || !str2 || str1.length !== str2.length) {
    return false;
  }

  var arr1 = str1.toLowerCase().split(''),
    arr2 = str2.toLowerCase().split('');
  //sort the strings
  arr1.sort();
  arr2.sort();
  //if strings are equal then it is an anagram
  if (arr1.join('') === arr2.join('')) {
    return true;
  }

  return false;

}

console.log(checkAnagram1('abc', 'bbc1'));

console.log('=====');

//Approach 2: Use hashmap
//Complexity: O(n). In theory O(n).
function checkAnagram2(str1, str2) {
  if (!str1 || !str2 || str1.length !== str2.length) {
    return false;
  }
  var isAnagram = true;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  var h1 = {},
    h2 = {};

  for (var i = 0, len = str1.length; i < len; i++) {
    h1[str1.charAt(i)] = h1[str1.charAt(i)] ? h1[str1.charAt(i)] + 1 : 1;
    h2[str2.charAt(i)] = h2[str2.charAt(i)] ? h2[str2.charAt(i)] + 1 : 1;
  }

  if (Object.keys(h1).length !== Object.keys(h2).length) {
    isAnagram = false;
  }

  for (var key in h1) {
    if (h1[key] !== h2[key]) {
      isAnagram = false;
    }
  }

  return isAnagram;

}

console.log(checkAnagram2('3214', '1234'));
