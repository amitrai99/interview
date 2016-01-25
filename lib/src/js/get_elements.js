function getElementsDemo() {
  document.getElementById('some-id');
  document.getElementsByClassName('.some-class');
  document.getElementsByTagName('p');
  document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "p");
  document.getElementsByName('firstname');
  document.querySelector('.my-class');
  document.querySelectorAll('.my-class');
}

getElementsDemo();
