var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementsByTagName("body")

function setGradient() {
	body[0].style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + " )";

	css.textContent = body[0].style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);