/**
 * Shared Web Worker
 */
var connections = 0; //count the active connections

//Connect event is fired every time a new client connects to this worker
self.addEventListener('connect', function(e) {

  connections++;
  var port = e.ports[0];

  port.addEventListener('message', function(e){
    if( e.data && e.data.constructor === Array ) {
      alert(1);
      port.postMessage( e.data.join(' ') );
    } else {
      throw new Error('illegal arguments exception');
    }
  }, false);

  port.start();

}, false);
