function playGame() {
	location.href='game';
}

function showUnderscores() {
	var zeroo = document.getElementById("zero").innerText;
	var onee = document.getElementById("one").innerText;
	var twoo = document.getElementById("two").innerText;
	var threee = document.getElementById("three").innerText;
	var fourr = document.getElementById("four").innerText;
	var fivee = document.getElementById("five").innerText;
	var sixx = document.getElementById("six").innerText;
	var sevenn = document.getElementById("seven").innerText;
	var eightt = document.getElementById("eight").innerText;
	var ninee = document.getElementById("nine").innerText;
	var tenn = document.getElementById("ten").innerText;
	var elevenn = document.getElementById("eleven").innerText;

	var zero = document.getElementById("zero");
	var one = document.getElementById("one");
	var two = document.getElementById("two");
	var three = document.getElementById("three");
	var four = document.getElementById("four");
	var five = document.getElementById("five");
	var six = document.getElementById("six");
	var seven = document.getElementById("seven");
	var eight = document.getElementById("eight");
	var nine = document.getElementById("nine");
	var ten = document.getElementById("ten");
	var eleven = document.getElementById("eleven");

	if (zeroo != "") {
		zero.style.borderBottom = "5px solid black";
	} else {
		zero.remove();
	}

	if (onee != "") {
		one.style.borderBottom = "5px solid black";
	} else {
		one.remove();
	}

	if (twoo != "") {
		two.style.borderBottom = "5px solid black";
	} else {
		two.remove();
	}

	if (threee != "") {
		three.style.borderBottom = "5px solid black";
	} else {
		three.remove();
	}

	if (fourr != "") {
		four.style.borderBottom = "5px solid black";
	} else {
		four.remove();
	}

	if (fivee != "") {
		five.style.borderBottom = "5px solid black";
	} else {
		five.remove();
	}

	if (sixx != "") {
		six.style.borderBottom = "5px solid black";
	} else {
		six.remove();
	}

	if (sevenn != "") {
		seven.style.borderBottom = "5px solid black";
	} else {
		seven.remove();
	}

	if (eightt != "") {
		eight.style.borderBottom = "5px solid black";
	} else {
		eight.remove();
	}

	if (ninee != "") {
		nine.style.borderBottom = "5px solid black";
	} else {
		nine.remove();
	}

	if (tenn != "") {
		ten.style.borderBottom = "5px solid black";
	} else {
		ten.remove();
	}

	if (elevenn != "") {
		eleven.style.borderBottom = "5px solid black";
	} else {
		eleven.remove();
	}
}

incorrectGuesses = 0

function pickA() {
	var A = document.getElementById("A");
	A.style.color = "red";

	if (word.includes("A")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickB() {
	var B = document.getElementById("B");
	B.style.color = "red";

	if (word.includes("B")) {
		console.log("success");
	} else {
		addPart()

		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickC() {
	var C = document.getElementById("C");
	C.style.color = "red";

	if (word.includes("C")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickD() {
	var D = document.getElementById("D");
	D.style.color = "red";

	if (word.includes("D")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickE() {
	var E = document.getElementById("E");
	E.style.color = "red";

	if (word.includes("E")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickF() {
	var F = document.getElementById("F");
	F.style.color = "red";

	if (word.includes("F")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickG() {
	var G = document.getElementById("G");
	G.style.color = "red";

	if (word.includes("G")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickH() {
	var H = document.getElementById("H");
	H.style.color = "red";

	if (word.includes("H")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickI() {
	var I = document.getElementById("I");
	I.style.color = "red";

	if (word.includes("I")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickJ() {
	var J = document.getElementById("J");
	J.style.color = "red";

	if (word.includes("J")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickK() {
	var K = document.getElementById("K");
	K.style.color = "red";

	if (word.includes("K")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickL() {
	var L = document.getElementById("L");
	L.style.color = "red";

	if (word.includes("L")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickM() {
	var M = document.getElementById("M");
	M.style.color = "red";

	if (word.includes("M")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickN() {
	var N = document.getElementById("N");
	N.style.color = "red";

	if (word.includes("N")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickO() {
	var O = document.getElementById("O");
	O.style.color = "red";

	if (word.includes("O")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickP() {
	var P = document.getElementById("P");
	P.style.color = "red";

	if (word.includes("P")) {
		console.log("success");
	} else {		
		addPart()

		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickQ() {
	var Q = document.getElementById("Q");
	Q.style.color = "red";

	if (word.includes("Q")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickR() {
	var R = document.getElementById("R");
	R.style.color = "red";

	if (word.includes("R")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickS() {
	var S = document.getElementById("S");
	S.style.color = "red";

	if (word.includes("S")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickT() {
	var T = document.getElementById("T");
	T.style.color = "red";

	if (word.includes("T")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickU() {
	var U = document.getElementById("U");
	U.style.color = "red";

	if (word.includes("U")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickV() {
	var V = document.getElementById("V");
	V.style.color = "red";

	if (word.includes("V")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickW() {
	var W = document.getElementById("W");
	W.style.color = "red";

	if (word.includes("W")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickX() {
	var X = document.getElementById("X");
	X.style.color = "red";

	if (word.includes("X")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickY() {
	var Y = document.getElementById("Y");
	Y.style.color = "red";

	if (word.includes("Y")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function pickZ() {
	var Z = document.getElementById("Z");
	Z.style.color = "red";

	if (word.includes("Z")) {
		console.log("success");
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)
	}
}

function addPart() {
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

	part = hangman[incorrectGuesses];
	part.style.color = "black";
}

function correctPick() {
	var zero = document.getElementById("zero");
	var one = document.getElementById("one");
	var two = document.getElementById("two");
	var three = document.getElementById("three");
	var four = document.getElementById("four");
	var five = document.getElementById("five");
	var six = document.getElementById("six");
	var seven = document.getElementById("seven");
	var eight = document.getElementById("eight");
	var nine = document.getElementById("nine");
	var ten = document.getElementById("ten");
	var eleven = document.getElementById("eleven");
	var index = [zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven]

	index
} 





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

	if (randomWord.includes(input.toLowerCase()) || randomWord.includes(input.toUpperCase())) {
		if (input == "") {
			totalGuesses -= 1
		} else {
			console.log("success")

			if (input.toUpperCase() == zero) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						zeroo.style.color = "rgb(33, 156, 239)";
						zeroo.style.borderBottom = "5px solid black";
					}
				}
			} else if (input.toUpperCase() == one) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						onee.style.color = "rgb(33, 156, 239)";
						onee.style.borderBottom = "5px solid black";
					}
				}
			} else if (input.toUpperCase() == two) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						twoo.style.color = "rgb(33, 156, 239)";
						twoo.style.borderBottom = "5px solid black";
					}
				}
			} else if (input.toUpperCase() == three) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						threee.style.color = "rgb(33, 156, 239)";
						threee.style.borderBottom = "5px solid black";
					}
				}
			} else if (input.toUpperCase() == four) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						fourr.style.color = "rgb(33, 156, 239)";
						fourr.style.borderBottom = "5px solid black";
					}
				}
			} else if (input.toUpperCase() == five) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						fivee.style.color = "rgb(33, 156, 239)";
						five.style.borderBottom = "5px solid black";
					}
				}
			} else if (input.toUpperCase() == six) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						sixx.style.color = "rgb(33, 156, 239)";
						sixx.style.borderBottom = "5px solid black";
					}
				}
			} else if (input.toUpperCase() == seven) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						sevenn.style.color = "rgb(33, 156, 239)";
						sevenn.style.borderBottom = "5px solid black";
					}
				}
			} else if (input.toUpperCase() == eight) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						eightt.style.color = "rgb(33, 156, 239)";
						eightt.style.borderBottom = "5px solid black";
					}
				}
			} else if (input.toUpperCase() == nine) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						ninee.style.color = "rgb(33, 156, 239)";
						ninee.style.borderBottom = "5px solid black";
					}
				}
			} else if (input.toUpperCase() == ten) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						tenn.style.color = "rgb(33, 156, 239)";
						tenn.style.borderBottom = "5px solid black";
					}
				}
			} else if (input.toUpperCase() == eleven) {
				for (let i = 0; i < randomWord.length; i++) {
  					if (randomWord[i] == input.toUpperCase()) {
						elevenn.style.color = "rgb(33, 156, 239)";
						elevenn.style.borderBottom = "5px solid black";
					}
				}
			}
		}
}