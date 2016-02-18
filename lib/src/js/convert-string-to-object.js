/**
 * Given a string and a delimiter convert the string into an object
 * For example, foo/bar/nar/maaaa/nup.jpg --> foo.bar.nar.maaa.nup.jpg
 */
var path = 'foo/bar/nar/maaaa/nup.jpg';

/**
 * iterative method to convert a string to object
 * @param  {String} str string to convert
 * @return {Object} object representation of the string
 */
function makeObjIterative(str) {

  var arr = str.split('/');
  var tempObj = {};
  var retObj = tempObj;
  for( var i = 0; i < arr.length; i++ ) {
    tempObj[ arr[i] ] = {};
    tempObj = tempObj[ arr[i] ];
  }

  return retObj;

}

console.log( makeObjIterative( path ) );

/**
 * array reduce method to convert a string to object
 * @param  {String} str string to convert
 * @return {Object} object representation of the string
 */
function makeObjReduce(str) {

  var arr = str.split('/');
  var tempObj = {};
  var retObj = tempObj;

   arr.reduce( function( prev, curr ) {
	  return prev[ curr ] = {};
  }, tempObj );

  return retObj;

}

console.log( makeObjReduce( path ) );
