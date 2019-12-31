// ===== Variables Globales ====== //

var player1 = new Player('human', 'Red Player' , 'red')
var player2 = new Player('human', 'Yellow Player', 'yellow');
var game = new Game(player1, 0, 0, 0, createBoard());
var cells = document.getElementsByClassName('cell');
var grid = document.getElementById('grid');
var players = [player1, player2];

// =================================== // 

function startGame(){
   
    this.game.createGrid(game.board);
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function (event) {
            var position = Number(event.target.id);
            game.updateBoard(position);
            game.currentPlayer.placeChip();
            var win = checkWin();
            if (win) {
                console.log(game.currentPlayer.color + ' WINS!!')
                
            } else {
                game.currentPlayer.storeMove();
                game.swapPlayers();
            }
        })
    }

}

// ================== Ejecucion ==============//

startGame();


// ==== Funciones  Creadoras de objeos ==== //

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
        var move = this.currentMove;
        this.movesMade.push(move);
        return this;
    };

    this.placeChip = function(){
        var rowClass = 'row '+game.currentPlayer.currentMove.row;
        var cell = document.getElementsByClassName(rowClass)
        var takenCell = cell[game.currentPlayer.currentMove.col];
        takenCell.classList.add(game.currentPlayer.color)
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
        var actualRow = 5
        for (var row = 5; row > 0; row--) {
            if (this.board[row][colPos] === undefined) {
                
                this.board[row][colPos] = this.currentPlayer.color;
                
                var coord = [row, colPos];
                
                this.currentPlayer.currentMove.getPos(coord);

                return this;
            }
        }
    };

    this.swapPlayers = function () {
        var b = players[0];
        players[0] = players[1];
        players[1] = b;

        this.currentPlayer = players[0];
    };

    this.createGrid = function() {
        for (var row = 0; row < this.board.length; row++) {
            for (var col = 0; col < this.board[row].length; col++) {
                var colDiv = document.createElement('div');
                colDiv.classList.add('cell', 'row', row)
                colDiv.id = col;
                grid.appendChild(colDiv);
            }
        }
    }
}

/*
 ===============================================
||                                            ||  
||   FUNCTIONES PARA VERIFICAR                ||
||           VICTORIA                         ||
||                                            ||
 ===============================================
*/
function checkHorizontalWin() {
    var row = game.currentPlayer.currentMove.row;
    for (var col = 0; col <= 6; col++) {
        if (game.board[row][col] && game.board[row][col] === game.board[row][col + 1]) {
            game.countHoriz++

            if (game.countHoriz === 3) {
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
        if (game.board[row][col] && game.board[row][col] === game.board[row - 1][col]) {row
            game.countVert++;
            if (game.countVert === 3) {
                return true
            }
        }
    }
    game.resetCount('v');
    return false;
}

function checkRightDiagnonalWin() {

    var row = game.currentPlayer.currentMove.row;
    var col = game.currentPlayer.currentMove.col;
        
    for (var i = 1; i <= 5; i++) {

        for (var j = 0; j <= 6; j++) {

            if (game.board[i-1][j-1] && game.board[i][j] === game.board[row - 1][col + 1]) {
                game.countDiag++;                
                if (game.countDiag === 3) {
                    return true;
                }
            }
            
        }
    }

    game.resetCount('d');
    return false;
}

//// ======= DALE QE FALTA ESTO NOMAS Y YA ESTASSSS!!! ==== ///

function checkLeftDiagonalWin(){
    return false
}


function checkWin() {
    var horizontalWin = checkHorizontalWin();
    var verticalWin = checkVerticalWin();
    var rightDiagnonalWin = checkRightDiagnonalWin()
    var leftDiagnonalWin = checkLeftDiagonalWin();
    if (horizontalWin || verticalWin || rightDiagnonalWin || leftDiagnonalWin ) {
        // console.log(horizontalWin, verticalWin, checkRightDiagnonalWin)
        return true
    } else {
        return false
    }

}























// function removeWelcome(){
//     var welcomeScreen = document.getElementById('welcome-screen');
//     welcomeScreen.style.visibility = 'hidden';
//     welcomeScreen.style.opacity = 0;

// }




// function getCoordinates(position) {
//     var index;
//     for (var y = 0; y < 6; y++) {
//         for (var x = 0; x < 7; x++) {
//             if (game.board[y][x] === position) {
//                 index = [y, x]
//             }
//         }
//     }
//     return index;
// }
