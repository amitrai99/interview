//This uses a standard stack implementation to check for mismatch.
//0. loop over the input string
//1. put the open paren in a stack
//2. when you find a closing paren pop from stack and check if the open one matches the closed one

function parenCheck1( str ) {

  if(!str) {
  	return 'balanced';
  }
  var balanced = true;
  var arr = [];
  var open, close = null;

  var charMapOpen = {
  	"{" : 1,
    "(": 1,
    "[": 1
  };

  var charMapClose = {
  	"}" : "{",
    ")": "(",
    "]": "["
  };

  //extract only parenthesis chars and push them to array
  for( var i = 0; i < str.length; i++ ) {
    var char = str.charAt(i);
  	if( charMapOpen[ char ] ) {
    	arr.push( char );
    }
    if( charMapClose[ char ] ) {
    	if( arr.pop() !== charMapClose[ char ] ) {
      	//non matching parentheses found
        balanced = false;
        break;
      }
    }
  }

  return balanced;

}

document.getElementById('output1').textContent = parenCheck1('([a()])}') ;

//This uses a  array implementation to check for mismatch.
//0. loop over the input string
//1. put both the open and close paren in the array
//2. loop over the array and match the ith element with length - ith element.

function parenCheck2( str ) {

  if(!str) {
  	return 'balanced';
  }
  var balanced = true;
  var arr = [];
  var open, close = null;

  var charMap = {
  	"{" : "}",
    "}" : "{",
    "(": ")",
    ")": "(",
    "[": "]",
    "]": "["
  };

  //extract only parenthesis chars and push them to array
  for( var i = 0; i < str.length; i++ ) {
  	if( charMap[ str.charAt(i) ] ) {
    	arr.push( str.charAt(i) );
    }
  }
	//loop over the array and compare the elements between ith and length - i
	for( var i = 0; i < arr.length/2; i++ ) {
     open = arr[i];
     close = arr[ arr.length - (i + 1) ];

     if( charMap[ open ] !== close ) {
     	balanced = false;
      break;
     }
  }

  return balanced;

}

document.getElementById('output2').textContent = parenCheck2('([a])') ;
