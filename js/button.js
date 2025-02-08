// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var antwortliebernicht = document.getElementById("antwortliebernicht");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

antwortliebernicht.onclick = function() {
  modal.style.display = "none";
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*-----------------------*/

// Get the modal 2
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

var antwortDoch = document.getElementById("antwortDoch");

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

antwortDoch.onclick = function() {
  modal2.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

/*---------------------------------------------*/
// Get the modal 3
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

var antwortliebernicht2 = document.getElementById("antwortliebernicht2");

// When the user clicks the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "block";
  modal.style.display = "none";

}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

antwortliebernicht2.onclick = function() {
  modal.style.display = "none";
  modal3.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


// /*--------schwarz machen/bei antwort nein-----*/

// var heart = document.querySelector('.heart');
// var letter = document.querySelector('.letter');
// var envelop = document.querySelector('.envelope');
// var klickenText = document.querySelector('.klickenText');
// var modal = document.getElementById('myModal');
// var button1 = document.querySelector('.button1');
// var button2 = document.querySelector('.button2');
// var antwort = document.querySelector('.antwort');
// var modalContent2 = document.querySelector('.modal-content2');
// var antwortNein = document.querySelector('.antwortNein');
// var antwortJa = document.querySelector('.antwortJa');




// document.getElementById('blackoutButton').addEventListener('click', function() {
//   heart.style.display = 'none'; // Versteckt das Heart-Element
//   modal.style.display = "none"; // Versteckt das Modal
//   letter.style.display = "none";
//   envelop.style.display = "none";
//   klickenText.style.display = "none";
//   button1.style.display = "none";
//   button2.style.display = "none";
//   modalContent2.style.display = "none";
//   antwortNein.style.display = "block";
//   document.body.style.backgroundColor = 'black';
// });

// /*--------schwarz machen/bei antwort Ja-----*/


// document.getElementById('yesoutButton').addEventListener('click', function() {
//   heart.style.display = 'none'; // Versteckt das Heart-Element
//   modal.style.display = "none"; // Versteckt das Modal
//   letter.style.display = "none";
//   envelop.style.display = "none";
//   klickenText.style.display = "none";
//   button1.style.display = "none";
//   button2.style.display = "none";
//   modalContent2.style.display = "none";
//   antwortJa.style.display = "block";
//   modal3.style.display = "none";
  
            
// });


// window.onload = function() {
//   var currentState = localStorage.getItem('pageState');
//   if (currentState === 'rejected') {
//       applyRejectedState();
//   } else if (currentState === 'accepted') {
//       applyAcceptedState();
//   }
// };

// function applyRejectedState() {
//   heart.style.display = 'none';
//   letter.style.display = "none";
//   envelop.style.display = "none";
//   klickenText.style.display = "none";
//   button1.style.display = "none";
//   button2.style.display = "none";
//   modalContent2.style.display = "none";
//   antwortNein.style.display = "block";
//   document.body.style.backgroundColor = 'black';
// }

// function applyAcceptedState() {
//   heart.style.display = 'none';
//   letter.style.display = "none";
//   envelop.style.display = "none";
//   klickenText.style.display = "none";
//   button1.style.display = "none";
//   button2.style.display = "none";
//   modalContent2.style.display = "none";
//   antwortJa.style.display = "block";
// }

// document.getElementById('blackoutButton').addEventListener('click', function() {
//   applyRejectedState();
//   localStorage.setItem('pageState', 'rejected');
// });

// document.getElementById('yesoutButton').addEventListener('click', function() {
//   applyAcceptedState();
//   modal3.style.display = "none";
//   localStorage.setItem('pageState', 'accepted');
// });
