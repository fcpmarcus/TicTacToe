var player1 = "X";

//Game logic----------------------------------------------------------------------//

// Makes sure there is no winner before the game starts
function startGame(){
	document.winner = null;						
	setMessage(player1 + " gets to start!");
};
// Creates messages for who's turn it is or whoever won.
// Displayed in html
function setMessage(msg){
	document.getElementById('gameMessage').innerHTML = msg;
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

//This determines if the move has already resulted in the person winning
//or if a cell has already been occupied.
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

//Winning combinations

//Determines which cell number is clicked so that it can be used for the
//checkRow function
function getBox (number) {
	return document.getElementById("cell"+number).innerHTML;

};

//Check to see if the moves have resulted in 3 in a row.
function checkRow (a, b, c, move) {
	var result = false;
	if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
		result = true;
	};
	return result;
};

//Determines if the row is one of the winning combinations
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


