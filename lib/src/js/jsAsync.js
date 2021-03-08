// How can we execute a lot of code in forEach so that it does not hurt performance?
// Answer is to use async based approach using setTimout, callback or promise.
// We can call any async function in forEach, problem is that there is no way to control the order of execution or track the requests.

// Here are three examples of async functions in forEach loop. All have the same issue of no sequence control.
// See: https://jsfiddle.net/nur4xodj/3/

// Start point
const arr = [1, 2, 3];

// using just closure
function printMessage(i) {
  setTimeout(() => { console.log(i) }, 1000);
}

arr.forEach((i) => {
  console.log('printMessageClosure before');
  printMessage(i);
  console.log('printMessageClosure after');
});

// With callBacks
function printMessageCallback(i, cb) {
  setTimeout(() => { cb(i) }, 3000);
}

function printMessageCb(i) { console.log(i) }

arr.forEach(function(i) {
  console.log('printMessageCallback before');
  printMessageCallback(i, printMessageCb);
  console.log('printMessageCallback after');
});

// With promises
function printMessagePromise(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(i); console.log(i); }, 5000
    );
  });
}

arr.forEach(async (i) => {
  console.log('printMessagePromise before');
  await printMessagePromise(i); // prints i
  console.log('printMessagePromise after');
});

// We can call any async function in forEach, problem is that there is no way to control the order of execution or track the requests.
// There are two ways to solve this:

