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

var guesses = []
var incorrectGuesses = 0

function pickA() {
	if (guesses.includes("A")) {
		console.log("repeat")
	} else {
		guesses += "A"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses) 

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickB() {
	if (guesses.includes("B")) {
		console.log("repeat")
	} else {
		guesses += "B"

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

			win(word)
		} else {
			addPart()

			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}	
}

function pickC() {
	if (guesses.includes("C")) {
		console.log("repeat")
	} else {
		guesses += "C"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickD() {
	if (guesses.includes("D")) {
		console.log("repeat")
	} else {
		guesses += "D"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickE() {
	if (guesses.includes("E")) {
		console.log("repeat")
	} else {
		guesses += "E"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}	
	}
}

function pickF() {
	if (guesses.includes("F")) {
		console.log("repeat")
	} else {
		guesses += "F"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickG() {
	if (guesses.includes("G")) {
		console.log("repeat")
	} else {
		guesses += "G"

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
	
			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickH() {
	if (guesses.includes("H")) {
		console.log("repeat")
	} else {
		guesses += "H"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickI() {
	if (guesses.includes("I")) {
		console.log("repeat")
	} else {
		guesses += "I"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickJ() {
	if (guesses.includes("J")) {
		console.log("repeat")
	} else {
		guesses += "J"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickK() {
	if (guesses.includes("K")) {
		console.log("repeat")
	} else {
		guesses += "K"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickL() {
	if (guesses.includes("L")) {
		console.log("repeat")
	} else {
		guesses += "L"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickM() {
	if (guesses.includes("M")) {
		console.log("repeat")
	} else {
		guesses += "M"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickN() {
	if (guesses.includes("N")) {
		console.log("repeat")
	} else {
		guesses += "N"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickO() {
	if (guesses.includes("O")) {
		console.log("repeat")
	} else {
		guesses += "O"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickP() {
	if (guesses.includes("P")) {
		console.log("repeat")
	} else {
		guesses += "P"

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

			win(word)
		} else {		
			addPart()

			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickQ() {
	if (guesses.includes("Q")) {
		console.log("repeat")
	} else {
		guesses += "Q"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickR() {
	if (guesses.includes("R")) {
		console.log("repeat")
	} else {
		guesses += "R"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickS() {
	if (guesses.includes("S")) {
		console.log("repeat")
	} else {
		guesses += "S"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		} 
	}
}

function pickT() {
	if (guesses.includes("T")) {
		console.log("repeat")
	} else {
		guesses += "T"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickU() {
	if (guesses.includes("U")) {
		console.log("repeat")
	} else {
		guesses += "U"

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
		
			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickV() {
	if (guesses.includes("V")) {
		console.log("repeat")
	} else {
		guesses += "V"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickW() {
	if (guesses.includes("W")) {
		console.log("repeat")
	} else {
		guesses += "W"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickX() {
	if (guesses.includes("X")) {
		console.log("repeat")
	} else {
		guesses += "X"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickY() {
	if (guesses.includes("Y")) {
		console.log("repeat")
	} else {
		guesses += "Y"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
		}
	}
}

function pickZ() {
	if (guesses.includes("Z")) {
		console.log("repeat")
	} else {
		guesses += "Z"

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

			win(word)
		} else {
			addPart()
		
			incorrectGuesses += 1
			console.log(incorrectGuesses)

			if (incorrectGuesses == 7) {
				lose()
			}
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

var count = 0

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
		count += 1
		var correct = val[i]
		index[correct].style.color = "rgb(33, 156, 239)";
	}

	win(count)
}

function lose() {
	var loseModal = document.getElementById("lose-modal");
	loseModal.style.display = "block";
}

function win() {	
	var winModal = document.getElementById("win-modal");
	if (count == word.length) {
		winModal.style.display = "block";
	}
}

function playAgain() {
	location.href='game';
}

function home() {
	location.href='/'
}