function mFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

var preload = document.getElementById("loading");
function myFunction(){
  preload.style.display = "none";
}
AOS.init();



var date = new Date();
var currTime = date.getHours();

var greating = document.getElementById('time');

if(currTime >=1 && currTime<12){
greating.innerHTML = 'Good Morning';
}else if(currTime>12 && currTime <=16 ){
  greating.innerHTML = 'Good Afternoon';
}else if(currTime>16 && currTime<=19){
  greating.innerHTML = 'Good Evening';
}else if(currTime>19 && currTime <24){
  greating.innerHTML = 'Good Night';
}
