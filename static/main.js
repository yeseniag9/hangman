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

var incorrectGuesses = 0

function pickA() {
	var A = document.getElementById("A");
	A.style.color = "red";

	if (word.includes("A")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "A") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses) 

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickB() {
	var B = document.getElementById("B");
	B.style.color = "red";

	if (word.includes("B")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "B") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()

		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickC() {
	var C = document.getElementById("C");
	C.style.color = "red";

	if (word.includes("C")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "C") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickD() {
	var D = document.getElementById("D");
	D.style.color = "red";

	if (word.includes("D")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "D") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickE() {
	var E = document.getElementById("E");
	E.style.color = "red";

	if (word.includes("E")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "E") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickF() {
	var F = document.getElementById("F");
	F.style.color = "red";

	if (word.includes("F")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "F") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickG() {
	var G = document.getElementById("G");
	G.style.color = "red";

	if (word.includes("G")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "G") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickH() {
	var H = document.getElementById("H");
	H.style.color = "red";

	if (word.includes("H")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "H") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickI() {
	var I = document.getElementById("I");
	I.style.color = "red";

	if (word.includes("I")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "I") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickJ() {
	var J = document.getElementById("J");
	J.style.color = "red";

	if (word.includes("J")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "J") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickK() {
	var K = document.getElementById("K");
	K.style.color = "red";

	if (word.includes("K")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "K") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickL() {
	var L = document.getElementById("L");
	L.style.color = "red";

	if (word.includes("L")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "L") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickM() {
	var M = document.getElementById("M");
	M.style.color = "red";

	if (word.includes("M")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "M") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickN() {
	var N = document.getElementById("N");
	N.style.color = "red";

	if (word.includes("N")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "N") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickO() {
	var O = document.getElementById("O");
	O.style.color = "red";

	if (word.includes("O")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "O") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickP() {
	var P = document.getElementById("P");
	P.style.color = "red";

	if (word.includes("P")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "P") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {		
		addPart()

		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickQ() {
	var Q = document.getElementById("Q");
	Q.style.color = "red";

	if (word.includes("Q")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "Q") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickR() {
	var R = document.getElementById("R");
	R.style.color = "red";

	if (word.includes("R")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "R") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickS() {
	var S = document.getElementById("S");
	S.style.color = "red";

	if (word.includes("S")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "S") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickT() {
	var T = document.getElementById("T");
	T.style.color = "red";

	if (word.includes("T")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "T") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickU() {
	var U = document.getElementById("U");
	U.style.color = "red";

	if (word.includes("U")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "U") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickV() {
	var V = document.getElementById("V");
	V.style.color = "red";

	if (word.includes("V")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "V") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickW() {
	var W = document.getElementById("W");
	W.style.color = "red";

	if (word.includes("W")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "W") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickX() {
	var X = document.getElementById("X");
	X.style.color = "red";

	if (word.includes("X")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "X") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickY() {
	var Y = document.getElementById("Y");
	Y.style.color = "red";

	if (word.includes("Y")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "Y") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
	}
}

function pickZ() {
	var Z = document.getElementById("Z");
	Z.style.color = "red";

	if (word.includes("Z")) {
		var position = []
		for (let i = 0; i < word.length; i++) {
			if (word[i] == "Z") {
				position += i
			}
		}

		const seperate = position.split('');
		correctPick(seperate)
	} else {
		addPart()
		
		incorrectGuesses += 1
		console.log(incorrectGuesses)

		if (incorrectGuesses == 7) {
			lose()
		}
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
	var hangman = [string, head, body, leftArm, rightArm, leftLeg, rightLeg];

	var part = hangman[incorrectGuesses];
	part.style.color = "black";
}

function correctPick(val) {
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

	seperate = val
	for (let i = 0; i < val.length; i++) {
		var correct = val[i]
		index[correct].style.color = "rgb(33, 156, 239)";
	} 
}

function lose() {
	var loseModal = document.getElementById("lose-modal");
	loseModal.style.display = "block";
}

function playAgain() {
	location.href='game';
}

function home() {
	location.href='/'
}