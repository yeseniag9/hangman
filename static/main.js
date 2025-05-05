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

function showLose() {
	let showLose = document.getElementById("lose-popup");
	showLose.style.display ='block';
}

function hideLose() {
	let hideLose = document.getElementById("hide-popup");
	hideLose.style.display ='none';
}