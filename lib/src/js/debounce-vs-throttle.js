// Throttle vs debounce
// https://jsfiddle.net/m2ctvxh7/2/
// Debounce makes a tail call ONLY if there is no call before the end of a time period. The call is delayed till we stop receiving new events.
// Throttle allows intermittent calls at regular interval and also allows first call without delay.

function debounce(fn, delay) {
	let timeoutId;

  return function(...args) {
	  console.log(timeoutId);
  	if(timeoutId) {
    	clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => { fn.apply(this, args); }, delay);
  }
}

function throttle(fn, delay) {
	let wait = false;
  return function(...args) {  	
    if(!wait) {
    	console.log('wait', wait);
    	fn.apply(this, ...args);
      wait = true;
      setTimeout(() => { wait = false; }, delay); 
    }
  }
}


const txt = document.getElementById('clickMe');
function handleText() {
	console.log(this.value);
}

txt.addEventListener('keyup', debounce(handleText, 1000));

function handleClickBtn() {
	console.log('btn');
}
const btn = document.getElementById('btn');
btn.addEventListener('click', throttle(handleClickBtn, 1000));
