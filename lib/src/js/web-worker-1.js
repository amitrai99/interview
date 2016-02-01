/*
* This is a Dedicated web worker
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
    startTicker();
  } else {
    throw new Error('Wrong arguments passed in');
  }

});

var tickCount = 0;
var intervalId = 0;
function startTicker(interval) {
  var timeDiff = interval || 1000;
  intervalId = setInterval(this.stockTick, timeDiff);
}

function stockTick() {
  tickCount++;
  if(tickCount < 10) {
    this.postMessage( { "ticker" : parseInt( Math.random()*100 ) } );
  } else {
    console.log('Max tick count reached aborting');
    clearInterval(intervalId);
    tickCount = 0;
  }
}
