function playGame() {
	location.href='game';
}

totalGuesses = 0
incorrectGuesses = 0

function letterPicked() {
	totalGuesses += 1
	console.log(totalGuesses)

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

	var zero = document.getElementById("zero").innerText;
	var one = document.getElementById("one").innerText;
	var two = document.getElementById("two").innerText;
	var three = document.getElementById("three").innerText;
	var four = document.getElementById("four").innerText;
	var five = document.getElementById("five").innerText;
	var six = document.getElementById("six").innerText;
	var seven = document.getElementById("seven").innerText;
	var eight = document.getElementById("eight").innerText;
	var nine = document.getElementById("nine").innerText;
	var ten = document.getElementById("ten").innerText;
	var eleven = document.getElementById("eleven").innerText;

	var zeroo = document.getElementById("zero");
	var onee = document.getElementById("one");
	var twoo = document.getElementById("two");
	var threee = document.getElementById("three");
	var fourr = document.getElementById("four");
	var fivee = document.getElementById("five");
	var sixx = document.getElementById("six");
	var sevenn = document.getElementById("seven");
	var eightt = document.getElementById("eight");
	var ninee = document.getElementById("nine");
	var tenn = document.getElementById("ten");
	var elevenn = document.getElementById("eleven");

	if (input == "A" || input == "a") {
		A.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "B" || input == "b") {
		B.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "C" || input == "c") {
		C.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "D" || input == "d") {
		D.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "E" || input == "e") {
		E.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "F" || input == "f") {
		F.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "G" || input == "g") {
		G.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "H" || input == "h") {
		H.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "I" || input == "i") {
		I.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "J" || input == "j") {
		J.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "K" || input == "k") {
		K.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "L" || input == "l") {
		L.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "M" || input == "m") {
		M.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "N" || input == "n") {
		N.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "O" || input == "o") {
		O.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "P" || input == "p") {
		P.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "Q" || input == "q") {
		Q.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "R" || input == "r") {
		R.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "S" || input == "s") {
		S.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "T" || input == "t") {
		T.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "U" || input == "u") {
		U.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "V" || input == "v") {
		V.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "W" || input == "w") {
		W.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "X" || input == "x") {
		X.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "Y" || input == "y") {
		Y.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} else if (input == "Z" || input == "z") {
		Z.style.color = "rgb(33, 156, 239)";
		document.forms['form'].reset()
	} 

	if (randomWord.includes(input.toLowerCase()) || randomWord.includes(input.toUpperCase())) {
		if (input == "") {
			totalGuesses -= 1
		} else {
			console.log("success")

			if (input.toUpperCase() == zero) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						zeroo.style.color = "rgb(33, 156, 239)";
						zeroo.style.textDecoration = "underline black";
					}
				}
			} else if (input.toUpperCase() == one) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						onee.style.color = "rgb(33, 156, 239)";
						onee.style.textDecoration = "underline black";
					}
				}
			} else if (input.toUpperCase() == two) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						twoo.style.color = "rgb(33, 156, 239)";
						twoo.style.textDecoration = "underline black";
					}
				}
			} else if (input.toUpperCase() == three) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						threee.style.color = "rgb(33, 156, 239)";
						threee.style.textDecoration = "underline black";
					}
				}
			} else if (input.toUpperCase() == four) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						fourr.style.color = "rgb(33, 156, 239)";
						fourr.style.textDecoration = "underline black";
					}
				}
			} else if (input.toUpperCase() == five) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						fivee.style.color = "rgb(33, 156, 239)";
						fivee.style.textDecoration = "underline black";
					}
				}
			} else if (input.toUpperCase() == six) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						sixx.style.color = "rgb(33, 156, 239)";
						sixx.style.textDecoration = "underline black";
					}
				}
			} else if (input.toUpperCase() == seven) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						sevenn.style.color = "rgb(33, 156, 239)";
						sevenn.style.textDecoration = "underline black";
					}
				}
			} else if (input.toUpperCase() == eight) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						eightt.style.color = "rgb(33, 156, 239)";
						eightt.style.textDecoration = "underline black";
					}
				}
			} else if (input.toUpperCase() == nine) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						ninee.style.color = "rgb(33, 156, 239)";
						ninee.style.textDecoration = "underline black";
					}
				}
			} else if (input.toUpperCase() == ten) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						tenn.style.color = "rgb(33, 156, 239)";
						tenn.style.textDecoration = "underline black";
					}
				}
			} else if (input.toUpperCase() == eleven) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						elevenn.style.color = "rgb(33, 156, 239)";
						elevenn.style.textDecoration = "underline black";
					}
				}
			}
		}
	} else {
		console.log("fail")

		part = hangman[incorrectGuesses];
		part.style.color = "black";

		incorrectGuesses += 1
		console.log(incorrectGuesses);
	}
}