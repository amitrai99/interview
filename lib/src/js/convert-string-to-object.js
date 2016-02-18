/**
 * Given a string and a delimiter convert the string into an object
 * For example, foo/bar/nar/maaaa/nup.jpg --> foo.bar.nar.maaa.nup.jpg
 * @type {String}
 */
var path = 'foo/bar/nar/maaaa/nup.jpg';

function makeObjIterative(str) {

  var arr = str.split('/');
  var tempObj = {};
  var retObj = tempObj;
  for( var i = 0; i < arr.length; i++ ) {
    tempObj[ arr[i] ] = tempObj[ arr[i] ] || {};
    tempObj = tempObj[ arr[i] ];
  }

  return retObj;

}

console.log( makeObjIterative( path ) );

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
