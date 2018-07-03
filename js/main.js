// var clickIncrement = document.getElementById('clickmebutton');
// var click = 0;
//
// clickIncrement.addEventListener('click', function(clickIncrement) {
//   var addParagraph = document.createElement('p');
//   addParagraph.innerHTML = 'This is click number' + ' ' + ++click;
//   document.getElementsByClassName("returntext")[0].appendChild(addParagraph);
// // });
// document.getElementById('myForm').addEventListener("submit", function(process) {
// process.preventDefault();
//
//   var firstName = document.getElementById('firstName').value;
//   console.log('The firstName is:' + firstName);
//
//   var lastName = document.getElementById('lastName').value;
//   console.log('The lastName is:' + lastName);
//
//   var email = document.getElementById('email').value;
//   console.log('The email is:' + email);
//
//   var message = document.getElementById('message').value;
//   console.log('The message is:' + message);
//
// });
//

var color = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

color.onclick = function() {
  var rndCol = 'rgb(' + random(350) + ',' + random(350) + ',' + random(350) + ')';
  document.body.style.backgroundColor = rndCol;
}
//event listens for click and changes background color when Suprise! button is clicked
//via https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

var clickerButton = document.getElementById("clicker");
var buttonClick = function () {
  clickerButton.textContent = "Time to go to Hawaii!"
};
clickerButton.addEventListener("click", buttonClick);

//event listens for a click and then changes text on second button page
//via https://www.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/p/adding-an-event-listener

function onBlur() {
  var x = document.getElementById("email");
  x.value = x.value.toUpperCase();
}
//This event listens for you to enter your email into the form and then if a user leaves the form the content in the form
//becomes all caps via: https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_onblur
