var buttonNext = document.querySelector("#photos .next");
var buttonPrev = document.querySelector("#photos .prev");

var i=0;
 
function next(){
 
img[i].style.display="none";
i=i+1; 
if( i >= img.length){
   i=0;}
img[i].style.display="block";
}

function prev(){
 
img[i].style.display="none";
i=i-1; 
if( i <0){
   i=img.length-1;}
img[i].style.display="block";
}


var img=document.querySelectorAll("img");  
buttonNext.addEventListener("click",next);
buttonPrev.addEventListener("click",prev); 