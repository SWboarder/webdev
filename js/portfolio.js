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

var heart = document.getElementById("heart");

if(width<768){
	heart.style.width = width + "px";
	heart.style.height = width + "px";
}
else{
	heart.style.width = width*0.4 + "px";
	heart.style.height = width*0.4 + "px";
}

var one = document.getElementById("outer-heart-one");
var two = document.getElementById("outer-heart-two");
var three = document.getElementById("outer-heart-three");
var four = document.getElementById("outer-heart-four");
var five = document.getElementById("outer-heart-five");
var six = document.getElementById("outer-heart-six");
var seven = document.getElementById("outer-heart-seven");
var eight = document.getElementById("outer-heart-eight");
var nine = document.getElementById("outer-heart-nine");

//two.onmouseover = fullOpacityTwo;
//two.onmouseleave = lowOpacityTwo;

three.onmouseover = fullOpacityThree;
three.onmouseleave = lowOpacityThree;

four.onmouseover = fullOpacityFour;
four.onmouseleave = lowOpacityFour;

//five.onmouseover = fullOpacityFive;
//five.onmouseleave = lowOpacityFive;

//six.onmouseover = fullOpacitySix;
//six.onmouseleave = lowOpacitySix;

//seven.onmouseover = fullOpacitySeven;
//seven.onmouseleave = lowOpacitySeven;

// eight.onmouseover = fullOpacityEight;
// eight.onmouseleave = lowOpacityEight;

nine.onmouseover = fullOpacityNine;
nine.onmouseleave = lowOpacityNine;

window.onresize = newSize;

}

function newSize(){
	var width = window.innerWidth;
	var height = window.innerHeight;

	var background = document.getElementById("fixedbackground");

	background.style.width = width + "px";
	background.style.height = height + "px";

	var heart = document.getElementById("heart");

	if(width<768){
		heart.style.width = width + "px";
		heart.style.height = width + "px";
	}
	else{
		heart.style.width = width*0.4 + "px";
		heart.style.height = width*0.4 + "px";
	}
}

function fullOpacityTwo(){
	var innerTwo = document.getElementById("text-two");
	innerTwo.style.backgroundColor = "rgba(65,20,125,0)";
	innerTwo.style.color = "rgba(255,255,255,0)";
}

function lowOpacityTwo(){
	var innerTwo = document.getElementById("text-two");
	innerTwo.style.backgroundColor = "rgba(65,20,125,0.8)";
	innerTwo.style.color = "rgba(255,255,255,1)";
}

function fullOpacityThree(){
	var innerThree = document.getElementById("text-three");
	innerThree.style.backgroundColor = "rgba(40,5,90,0)";
	innerThree.style.color = "rgba(255,255,255,0)";
}

function lowOpacityThree(){
	var innerThree = document.getElementById("text-three");
	innerThree.style.backgroundColor = "rgba(40,5,90,0.8)";
	innerThree.style.color = "rgba(255,255,255,1)";
}

function fullOpacityFour(){
	var innerFour = document.getElementById("text-four");
	innerFour.style.backgroundColor = "rgba(40,5,90,0)";
	innerFour.style.color = "rgba(255,255,255,0)";
}

function lowOpacityFour(){
	var innerFour = document.getElementById("text-four");
	innerFour.style.backgroundColor = "rgba(40,5,90,0.8)";
	innerFour.style.color = "rgba(255,255,255,1)";
}
function fullOpacityFive(){
	var innerFive = document.getElementById("text-five");
	innerFive.style.backgroundColor = "rgba(85,35,150,0)";
	innerFive.style.color = "rgba(255,255,255,0)";
}

function lowOpacityFive(){
	var innerFive = document.getElementById("text-five");
	innerFive.style.backgroundColor = "rgba(85,35,150,0.8)";
	innerFive.style.color = "rgba(255,255,255,1)";
}

function fullOpacitySix(){
	var innerSix = document.getElementById("text-six");
	innerSix.style.backgroundColor = "rgba(45,10,105,0)";
	innerSix.style.color = "rgba(255,255,255,0)";
}

function lowOpacitySix(){
	var innerSix = document.getElementById("text-six");
	innerSix.style.backgroundColor = "rgba(45,10,105,0.8)";
	innerSix.style.color = "rgba(255,255,255,1)";
}

function fullOpacitySeven(){
	var innerSeven = document.getElementById("text-seven");
	innerSeven.style.backgroundColor = "rgba(45,10,105,0)";
	innerSeven.style.color = "rgba(255,255,255,0)";
}

function lowOpacitySeven(){
	var innerSeven = document.getElementById("text-seven");
	innerSeven.style.backgroundColor = "rgba(45,10,105,0.8)";
	innerSeven.style.color = "rgba(255,255,255,1)";
}

function fullOpacityEight(){
	var innerEight = document.getElementById("text-eight");
	innerEight.style.backgroundColor = "rgba(65,20,125,0)";
	innerEight.style.color = "rgba(255,255,255,0)";
}

function lowOpacityEight(){
	var innerEight = document.getElementById("text-eight");
	innerEight.style.backgroundColor = "rgba(65,20,125,0.8)";
	innerEight.style.color = "rgba(255,255,255,1)";
}

function fullOpacityNine(){
	var innerNine = document.getElementById("text-nine");
	innerNine.style.backgroundColor = "rgba(40,5,90,0)";
	innerNine.style.color = "rgba(255,255,255,0)";
}

function lowOpacityNine(){
	var innerNine = document.getElementById("text-nine");
	innerNine.style.backgroundColor = "rgba(40,5,90,0.8)";
	innerNine.style.color = "rgba(255,255,255,1)";
}
