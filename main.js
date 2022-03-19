/**toggle dark mode button */
var darkMode = document.getElementById("dark-mode");
function darkFunction() {
  if(darkMode.innerHTML == "Dark Mode"){
    darkMode.innerHTML = "Light Mode";
  }else{
    darkMode.innerHTML = "Dark Mode"
  }
  var element = document.body;
  element.classList.toggle("dark");
}

/**function to toggle image on home screen */
var imgTracker = 'me';
function changeImg(){
  var img = document.getElementById("headShot");
  if(imgTracker == 'me'){
    img.src = "images/lunaAndI.jpg";
    imgTracker = 'meLuna';
  }
  else{
    img.src = "images/KrisManninoHeadshot.jpg";
    imgTracker = 'me';
  }
}

/**function to toggle text/button on resume page */
function replace() {
  var button = document.getElementById("highlights-button");
  if(button.innerHTML == "Highlights"){
     button.innerHTML = "Full Resume"
     document.getElementById("resume-jpg").style.display="none";
     document.getElementById("resume-text").style.display="block"; 
   }else {
    button.innerHTML = "Highlights"
     document.getElementById("resume-jpg").style.display="block";
     document.getElementById("resume-text").style.display="none";
   }
}
