// Image switcher code



var myImage = document.querySelector('img');



myImage.onclick = function() {

	var mySrc = myImage.getAttribute('src');

	if(mySrc === 'images/firefox-icon.jpg') {

      myImage.setAttribute ('src','images/firefox2.jpg');

	} else {

	  myImage.setAttribute ('src','images/firefox-icon.jpg');

	}

}



// Personalized welcome message code



var myButton = document.querySelector('button');

var myHeading = document.querySelector('h1');



myButton.onclick=function setUserName() {

  var myName = prompt('Please enter your name.');



  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  localStorage.setItem('name', myName);
}



if(!localStorage.getItem('name')) {

  setUserName();

} else {

  var storedName = localStorage.getItem('name');

  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;

}







