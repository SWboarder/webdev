//EVENT LISTENER TO INITIATE BEHAVIOURS
window.addEventListener("load", addHandlers, false);

//ADD HANDLER FUNCTION SO MULTIPLE ACTIONS CAN BE CALLED WHEN PAGE LOADS
function addHandlers(){

var loader = document.getElementById("loader");
loader.style.display = "none";

var width = window.innerWidth;
var height = window.innerHeight;

var background = document.getElementById("fixedbackground");

background.style.width = width + "px";
background.style.height = height + "px";

window.onresize = newSize;
}

function newSize(){
	var width = window.innerWidth;
	var height = window.innerHeight;

	var background = document.getElementById("fixedbackground");

	background.style.width = width + "px";
	background.style.height = height + "px";
}