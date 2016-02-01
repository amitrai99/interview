//This is the main thread script

//Check for shared web worker
if( window.SharedWorker ) {

  //create an instance of SharedWorker
  var worker = new SharedWorker('web-worker-shared.js');

  //attach the onmessage event to the port of shared worker
  //e : Event object with data in e.data
  worker.port.addEventListener('message', function(e) {
    console.log('Received message from SharedWorker', e.data);
    document.getElementById('msg').textContent = e.data;
  });

  worker.port.addEventListener('error', function(e) {
    alert('error');
    console.log(e);
  });

  //start the worker using port
  worker.port.start();

  //post a message to the worker
  worker.port.postMessage(['message from ', 'main thread']);

  //attach the src property to iframe to open another window from where you can call this shared worker
  document.getElementById('new-window').addEventListener('click', function(e) {
    e.preventDefault();
    window.open('web-worker-popup.html',"", "width=400, height=400");
  });

  document.getElementById('btn-send-msg').addEventListener('click', function(e) {
    e.preventDefault();
    worker.port.postMessage(['message from ', 'main thread']);
  });

} else {
  console.log('Sorry SharedWorker not supported in your browser');
}
