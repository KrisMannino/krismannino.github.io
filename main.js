function darkFunction() {
  var element = document.body;
  element.classList.toggle("dark");
}



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
/**img.addEventListener("click", function(){
  
  if(img.src = "images/Kris Mannino - Headshot.jpg"){
    alert("hello");
    img.src = "images/luna and me0.jpg";}
  else{
    img.src = "images/Kris Mannino - Headshot.jpg";}});*/
    function replace() {
      document.getElementById("resume-jpg").style.display="none";
      document.getElementById("resume-text").style.display="block";
      }
    function replaceAgain() {
       document.getElementById("resume-jpg").style.display="block";
       document.getElementById("resume-text").style.display="none";
       }