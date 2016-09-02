/**
 * Given an array of strings and a delimiter convert the strings into an object
 * Note: the first string will be the same for all Strings. IN this case `foo`
 * For example, 
 * var path = [
  'foo/bar/nar/plo/'
  'foo/bar/bpp/hyu'
  ];
  
  {
    foo : {
      bar: {
        nar: {
          plo: {},
        },
        bpp: {
          hyu: {}
        }
      }
    }
  }
 * 
 */
var path = [
  'foo/bar/nar/plo/kuy.png',
  'foo/bar/bpp/hyu.jpg'
];

//NOTE: makeArrayToObjIterative and makeArrayToObjReduce are exactly same they just call
//different methods to convert to object

/**
 * takes an array of strings delimited but some character and converts that into an object
 * @param  {Array} arr array of string
 * @return {Object} array of strings converted to an Object
 */
function makeArrayToObjIterative(arr) {
  if(!arr) {
    return;
  }
  var tempObj = {};
  var finalObj = tempObj;

  for( var i = 0, len = arr.length; i < len; i++ ) {
    makeObjIterative( arr[i], tempObj );
    tempObj = finalObj;
  }

  console.log( tempObj );
  return finalObj;
}

/**
 * iterative method to convert a string to object
 * @param  {String} str string to convert
 * @return {Object} object representation of the string
 */
function makeObjIterative(str, out) {

  var arr = str.split('/');
  var tempObj = out;
  var retObj = tempObj;
  for( var i = 0; i < arr.length; i++ ) {
    tempObj[ arr[i] ] = tempObj[ arr[i] ] || {};
    tempObj = tempObj[ arr[i] ];
  }

  return retObj;

}

console.log( makeArrayToObjIterative( path ) );

/**
 * takes an array of strings delimited but some character and converts that into an object
 * @param  {Array} arr array of string
 * @return {Object} array of strings converted to an Object
 */
function makeArrayToObjReduce(arr) {
  if(!arr) {
    return;
  }
  var tempObj = {};
  var finalObj = tempObj;

  for( var i = 0, len = arr.length; i < len; i++ ) {
    makeObjReduce( arr[i], tempObj );
    tempObj = finalObj;
  }

  console.log( tempObj );
}

/**
 * array reduce method to convert a string to object
 * @param  {String} str string to convert
 * @return {Object} object representation of the string
 */
function makeObjReduce(str, out) {

  var arr = str.split('/');
  var tempObj = out;
  var retObj = tempObj;

   arr.reduce( function( prev, curr ) {
	  return prev[ curr ] = prev[ curr ] || {};
  }, tempObj );

  return retObj;

}

console.log( makeArrayToObjReduce( path ) );
