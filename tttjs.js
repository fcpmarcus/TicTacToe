var player1 = "X"

//Game logic----------------------------------------------------------------------//
function startGame(){
	document.winner = null;						// Makes sure there is no winner before the game starts
	setMessage(player1 + " gets to start!");
};

function setMessage(msg){
	document.getElementById('gameMessage').innerHTML = msg;
}; // Creates messages for winner or who's turn it is displayed on html


function getBox (number) {
	return document.getElementById("cell"+number).innerHTML;

};

//Determine whose turn it is.
function switchTurn(){
	if (checkForWinner (player1)){
		setMessage (player1 + " wins!!");
		document.winner = player1;
	} 	else if (player1 == "X") {
			player1 = "O";
			setMessage(player1 + "'s turn to pick!");
		}else {
			player1 = "X"
			setMessage(player1 + "'s turn to pick!");
			}

};

//Winning combinations
function checkForWinner(move) {
	var result = false;
	if (checkRow(1, 2, 3, move) || checkRow(4, 5, 6, move) ||
		checkRow(7, 8, 9, move) || checkRow(1, 4, 7, move) ||
		checkRow(2, 5, 8, move) || checkRow(3, 6, 9, move) ||
		checkRow(1, 5, 9, move) || checkRow(3, 5, 7, move)) {

		result = true;
	};
	return result;
};


function playerMove(cell) {
	if (document.winner != null) {
		setMessage(document.winner + " has already won the game!");
	}	else if (cell.innerHTML == ""){
		cell.innerHTML = player1;
		switchTurn();
	} 	else {
			setMessage("Position already taken.");
			}

};

function checkRow (a, b, c, move) {
	var result = false;
	if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
		result = true;
	};
	return result;
};
