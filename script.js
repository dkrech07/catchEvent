var button = document.querySelector('.button');
var wrapper = document.querySelector('.page-wrapper');

wrapper.addEventListener('click', buttonClickHandler);

function buttonClickHandler(evt) {
  var target = event.target;
  while (target != wrapper) {
    if (target.tagName == 'BUTTON') {
      var className = target.classList.value;
      console.log('CLICK ON ' + className);
      alert('CLICK ON ' + className);
      return;
    }
    target = target.parentNode;
  }
}