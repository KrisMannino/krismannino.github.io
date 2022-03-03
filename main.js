function darkFunction() {
  var element = document.body;
  element.classList.toggle("dark");
}
var img = document.getElementById("headShot");
img.addEventListener("click", function(){
  if(img.src != "images\Kris Mannino - Headshot.jpg"){
    img.src = "images\Kris Mannino - Headshot.jpg";}
  else{
    img.src = "images\luna and me0.jpg";}});
