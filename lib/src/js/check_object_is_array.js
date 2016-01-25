/**
 * There are 4 ways to check for array in JS
 * Check the JSPerf for performance http://jsperf.com/js-isarray-comparison
 */
function checkObjectArray() {
  var a = [];

  Object.prototype.toString.call(a) === '[object Array]'; //Slowest
  Array.isArray(a); //3rd slowest
  a instanceof Array; //2nd Slowest
  a && a.constructor === Array; //Fastest make sure to check for undefined and null before using constructor property
}

checkObjectArray();
