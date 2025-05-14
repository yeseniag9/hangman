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

function letterPicked() {
    var input = document.getElementById("userInput").value;
    alert(input);

	var letterA = document.getElementById("A");
	if (input == "A") {
		letterA.style.color = "green";
	} else {
		letterA.style.color = "red";
	}

	console.log(letterA);
	console.log(input);
}