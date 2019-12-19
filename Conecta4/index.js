var player1 = new Player('human', 'Lisandro', 'B')
var game = new Game(player1, 0, 0, 0, createBoard());

var cells = document.getElementsByClassName('cell');

var grid = document.getElementById('grid');

// function removeWelcome(){
//     var welcomeScreen = document.getElementById('welcome-screen');
//     welcomeScreen.style.visibility = 'hidden';
//     welcomeScreen.style.opacity = 0;

// }

function createGrid(board) {
    for (var row = 0; row < board.length; row++) {
        for (var col = 0; col < board[row].length; col++) {
            var colDiv = document.createElement('div');
            colDiv.className = 'cell';
            colDiv.id = col + 1;
            grid.appendChild(colDiv);
        }
    }
}

createGrid(game.board)

function placeChip() {
    for(var row = 5; row > 0; row++){
        if(game.board[row] === undefined){

        }
    }
};

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function (event) {
        var position = Number(event.target.id);
        game.updateBoard(position);
        placeChip()

        var win = checkWin();
        if (win) {
            console.log('YOU WIN 4 horizotal')
        } else {
            // game.currentPlayer.storeMove();
        }
    })
}

function createBoard() {
    var board = new Array(6);
    for (var i = 0; i < 6; i++) {
        board[i] = new Array(7);
    }
    return board;
}


function Player(type, name, color) {
    this.type = type;
    this.name = name;
    this.color = color;
    this.currentMove = new Move(0, 0);
    this.movesMade = [];

    this.storeMove = function () {
        this.movesMade.push(currentMove);
        return this;
    }
}

function Move(row, col) {
    this.row = row;
    this.col = col;

    this.getPos = function (position) {
        this.row = position[0];
        this.col = position[1];
        return this;
    }
}

function Game(currentPlayer, countVert, countHoriz, countDiag, board) {
    this.currentPlayer = currentPlayer;
    this.countVert = countVert;
    this.countHoriz = countHoriz;
    this.countDiag = countDiag;
    this.board = board;

    this.resetCount = function (direction) {
        if (direction === 'h') {
            this.countHoriz = 0
        };
        if (direction === 'v') {
            this.countVert = 0
        };
        if (direction === 'd') {
            this.countDiag = 0
        };

        return this;
    };
    this.updateBoard = function (colPos) {
        for (var row = 5; row > 0; row--) {
            if (this.board[row][colPos] === undefined) {
                this.board[row][colPos] = this.currentPlayer.color;

                var coord = [row, colPos];
                this.currentPlayer.currentMove.getPos(coord);
                return this;
            }
        }
    }
}

function getCoordinates(position) {
    var index;
    for (var y = 0; y < 6; y++) {
        for (var x = 0; x < 7; x++) {
            if (game.board[y][x] === position) {
                index = [y, x]
            }
        }
    }
    return index;
}


function checkHorizontalWin() {
    var row = game.currentPlayer.currentMove.row;
    for (var col = 0; col <= 6; col++) {
        console.log(game.countHoriz)
        if (game.board[row][col] === game.board[row][col + 1]) {
            game.countHoriz++

            if (game.count === 3) {
                return true;
            }
        } else {
            game.resetCount('h');
        }
    }

    return false;
}

function checkVerticalWin() {

    var col = game.currentPlayer.currentMove.col;
    for (var row = 1; row <= 5; row++) {
        if (game.board[row][col] === game.board[row - 1][col]) {
            game.count++;
            if (game.count === 3) {
                return true
            }
        }
    }
    game.resetCount('v');
    return false;
}

function checkDiagonalWin() {

    for (var row = 1; row <= 5; row++) {
        for (var col = 0; col <= 6; col++) {
            if (game.board[row][col] === game.board[row - 1][col - 1]) {
                game.count++;
                if (game.count === 3) {
                    return true;
                }
            }
        }
    }
    game.resetCount('d');
    return false;
}


function checkWin() {

    var horizontalWin = checkHorizontalWin();
    var verticalWin = checkVerticalWin();
    var diagonalWin = checkDiagonalWin()
    if (horizontalWin || verticalWin || diagonalWin) {
        console.log(horizontalWin, verticalWin, diagonalWin)
        return true
    } else {
        return false
    }

}