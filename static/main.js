function playGame() {
	location.href='game';
}

guesses = 0
incorrectGuesses = 0

function letterPicked() {
	guesses += 1
	console.log(guesses)
	console.log(incorrectGuesses)

    var input = document.getElementById("userInput").value;

	var A = document.getElementById("A");
	var B = document.getElementById("B");
	var C = document.getElementById("C");
	var D = document.getElementById("D");
	var E = document.getElementById("E");
	var F = document.getElementById("F");
	var G = document.getElementById("G");
	var H = document.getElementById("H");
	var I = document.getElementById("I");
	var J = document.getElementById("J");
	var K = document.getElementById("K");
	var L = document.getElementById("L");
	var M = document.getElementById("M");
	var N = document.getElementById("N");
	var O = document.getElementById("O");
	var P = document.getElementById("P");
	var Q = document.getElementById("Q");
	var R = document.getElementById("R");
	var S = document.getElementById("S");
	var T = document.getElementById("T");
	var U = document.getElementById("U");
	var V = document.getElementById("V");
	var W = document.getElementById("W");
	var X = document.getElementById("X");
	var Y = document.getElementById("Y");
	var Z = document.getElementById("Z");
 	
	var string = document.getElementById("string");
	var head = document.getElementById("head");
	var body = document.getElementById("body");
	var leftArm = document.getElementById("leftArm");
	var rightArm = document.getElementById("rightArm");
	var leftLeg = document.getElementById("leftLeg");
	var rightLeg = document.getElementById("rightLeg");
	var leftEye = document.getElementById("leftEye");
	var rightEye = document.getElementById("rightEye");
	var frown = document.getElementById("frown");
	var hangman = [string, head, body, leftArm, rightArm, leftLeg, rightLeg, leftEye, rightEye, frown];

	if (input == "A" || input == "a") {
		A.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "B" || input == "b") {
		B.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "C" || input == "c") {
		C.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "D" || input == "d") {
		D.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "E" || input == "e") {
		E.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "F" || input == "f") {
		F.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "G" || input == "g") {
		G.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "H" || input == "h") {
		H.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "I" || input == "i") {
		I.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "J" || input == "j") {
		J.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "K" || input == "k") {
		K.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "L" || input == "l") {
		L.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "M" || input == "m") {
		M.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "N" || input == "n") {
		N.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "O" || input == "o") {
		O.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "P" || input == "p") {
		P.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "Q" || input == "q") {
		Q.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "R" || input == "r") {
		R.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "S" || input == "s") {
		S.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "T" || input == "t") {
		T.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "U" || input == "u") {
		U.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "V" || input == "v") {
		V.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "W" || input == "w") {
		W.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "X" || input == "x") {
		X.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "Y" || input == "y") {
		Y.style.color = "orange";
		document.forms['form'].reset()
	} else if (input == "Z" || input == "z") {
		Z.style.color = "orange";
		document.forms['form'].reset()
	} 

	if (randomWord.includes(input.toLowerCase()) || randomWord.includes(input.toUpperCase())) {
		console.log("success")
		console.log(input)
			
		hangman.shift()
		console.log(hangman)
	} else {
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		console.log("fail")
		console.log(input)

		hangman[0].style.color = "black";
		hangman.shift() 
		console.log(hangman)
 	}
}

// - incorrect guess count needs to stop after 10