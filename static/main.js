function playGame() {
	location.href='game';
}


function Lose() {
	var popup = document.getElementById("lose");
	popup.classList.toggle("show");
}

function Win() {
	var popup = document.getElementById("win");
	popup.classList.toggle("show");
}