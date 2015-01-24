

var colorChange = document.getElementByClass("cell");

for(var i = 0; i < colorChange.length; i++) {
 colorChange[i].addEventListener("click", changeColor);
}

function changeColor() {
    event.target.style.backgroundColor = "red";
}
