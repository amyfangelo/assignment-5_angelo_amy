var clickIncrement = document.getElementById('clickmebutton');
var click = 0;

clickIncrement.addEventListener('click', function(clickIncrement) {
  var addParagraph = document.createElement('p');
  addParagraph.innerHTML = 'This is click number' + ' ' + ++click;
  document.getElementsByClassName("returntext")[0].appendChild(addParagraph);
});
