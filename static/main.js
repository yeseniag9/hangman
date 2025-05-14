function playGame() {
	location.href='game';
}

function showWin() {
	let showWin = document.getElementById("win-popup");
	showWin.style.display ='block';
}

function hideWin() {
	let hideWin = document.getElementById("win-popup");
	hideWin.style.display ='none';
}

function othername() {
    var input = document.getElementById("userInput").value;
    alert(input);
}