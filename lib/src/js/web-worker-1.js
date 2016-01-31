/*
* This is a web worker
* Inside a web worker script the scope is `this` or `self` which refers to the worker thread
* There is no access to the global `window` or `DOM` elements
* Attach events using addEventListener this is the preffered way
*/
this.addEventListener('message', function(e) {
  var data = e.data;

  if(e.data.constructor === Array) {
    //return data back to the main thread
    self.postMessage( e.data.join(' ') );
  } else if( e.data && e.data.method === 'startTicker' ) {
    startTicker(5000);
  } else {
    throw new Error('Wrong arguments passed in');
  }

});

function startTicker(interval) {
  var timeDiff = interval || 1000;
  setInterval(this.stockTick, timeDiff);
}

function stockTick() {
  this.postMessage( { "ticker" : parseInt( Math.random()*100 ) } );
}
