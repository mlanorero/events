window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
let target = document.getElementById("theGreen");
target.addEventListener("click", function() {
	alert("wuju");
});
