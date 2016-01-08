/**
 * generic cyrrying function
 * @param  {Function} fn takes function argument
 * @return {Function} returns a function
 */
function curry(fn) {
  //start from 1 because first arg is function fn
  var oldArgs = Array.prototype.slice.call( arguments, 1);

  return function() {
    var newArgs = Array.prototype.slice.call( arguments );
    var allArgs = oldArgs.concat(newArgs);
    return fn.apply(null, allArgs);
  };

}

function test() {
  function add(x,y,z,d,e) {
    return x + y + z + d + e;
  }

  var func2  = curry( add, 1,2,3,4,5 );
  console.log( func2(4) );
}

test();
