//Check for web worker support
if( window.Worker ) {

  //creating
  var concatWorker = new Worker('web-worker-1.js');

  //sending message to worker
  concatWorker.postMessage(['Hello', 'world', '!']);

  //receiving message
  concatWorker.addEventListener('message', function(e) {
    console.log('Got response from concatWorker ', e.data);
    if(e.data && e.data.ticker) {
      document.getElementById('ticker').textContent = e.data.ticker;
    }
   });

   //error handling
   concatWorker.addEventListener('error', function(e) {
     console.log('Error in worker %s at col %s and line %s', e.filename, e.colno, e.lineno);
   });

   //stop worker
   function terminateWorker(e) {
     //terminates the worker immediately after which the worker cannot be called again
     console.log('terminating worker');
     concatWorker.terminate();
   }

   //send a bad message to force and error
   function sendBadMessageToWorker(e) {
     concatWorker.postMessage('bad message');
   }

   //send a bad message to force and error
   function sendGoodMessageToWorker(e) {
     concatWorker.postMessage(['This','is','a','good','message']);
   }

   function startWorkerTicker(e) {
     console.log(concatWorker);
     concatWorker.postMessage( {'method': 'startTicker'} );
   }


   document.getElementById('send-good-msg-worker-1').addEventListener('click', sendGoodMessageToWorker);
   document.getElementById('send-bad-msg-worker-1').addEventListener('click', sendBadMessageToWorker);
   document.getElementById('start-worker-ticker-1').addEventListener('click', startWorkerTicker);
   document.getElementById('stop-worker-1').addEventListener('click', terminateWorker);

} else {
  console.log('Sorry no support for web worker in your browser.');
}
