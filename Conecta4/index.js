// ===== GOLBAL VARIABLES====== //

var gameStyles = document.getElementsByClassName('gameStyles');
var cells = document.getElementsByClassName('cell');
var grid = document.getElementById('grid');
var playButton = document.getElementById('playButton');
var result = document.getElementById('result');
var restartButton = document.getElementById('restart');
var quitButton = document.getElementById('quit');
var players = [];
var game;

// ===============  START, FLOW AND FINISHING FUNCTIONS ==================== // 

function winner(player) {

    var resultChildren = result.children;
    var champion = 'Victoria del jugador ' + player.color;
    var numberOfMoves = player.movesMade.length + 1;
    resultChildren[0].innerHTML = champion;
    resultChildren[1].innerHTML = 'Movimientos: ' + numberOfMoves;
    resultChildren[2].addEventListener('click', function () {
        result.style.display = 'none';
    });

    result.style.display = 'block';
    toggleCellClicksHandler(true);

}

function restart() {
    game.eraseGrid();
    return startGame();
}

function quit() {
    var welcomeScreen = document.getElementById('welcome-screen');
    grid.style.visibility = 'hidden';
    welcomeScreen.style.visibility = 'visible';
    welcomeScreen.style.opacity = 1;
    game.eraseGrid();
}

function gameStyleSelection() {
    for (var i = 0; i < gameStyles.length; i++) {
        if (gameStyles[i].checked) {
            removeWelcome();
            return gameStyles[i].value;
        }
    }
}

function removeWelcome() {
    var welcomeScreen = document.getElementById('welcome-screen');
    welcomeScreen.style.visibility = 'hidden';
    welcomeScreen.style.opacity = 0;

}

function lastMoveChecks(position) {
    game.updateBoard(position);
    game.currentPlayer.placeChip();
    var win = checkWin();
    if (win) {
        return winner(game.currentPlayer);

    } else {
        game.currentPlayer.storeMove();
        game.swapPlayers();
    }

}


function startGame() {
    var currentGameStyle = gameStyleSelection();

    if (currentGameStyle === 'human') {
        var player1 = new Player('human', 'Red Player', 'red')
        var player2 = new Player('human', 'Yellow Player', 'yellow');
    } else {
        var player1 = new Player('human', 'Red Player', 'red')
        var player2 = new Player('pc', 'Yellow Player', 'yellow');
    }

    players = [player1, player2];
    game = new Game(player1, 0, 0, 0, createBoard());
    game.createGrid(game.board);
    grid.style.visibility = 'visible';

    toggleCellClicksHandler(false);

}

// ========== BUTTONS EXECUTION AND EVENT LISTENERS HANDLING============//

playButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restart);
quitButton.addEventListener('click', quit);


function toggleCellClicksHandler(isOn) {
    if (!isOn) {
        for (var i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', handleCellClicks)
        }
    } else if (isOn) {
        for (var i = 0; i < cells.length; i++) {
            cells[i].removeEventListener('click', handleCellClicks)
        }
    } else {
        console.log('isOn is of unknown type. Needs to be a boolean');
    }
}

function handleCellClicks(event) {
    var position = Number(event.target.id);
    lastMoveChecks(position);
    if (game.currentPlayer.type === 'pc') {
        var colPos = game.currentPlayer.chooseMove();
        lastMoveChecks(colPos);
    }
}

// =========== CREATOR FUNCTIONS ========== //

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

    this.placeChip = function () {
        var rowClass = 'row ' + game.currentPlayer.currentMove.row;
        var cell = document.getElementsByClassName(rowClass)
        var takenCell = cell[game.currentPlayer.currentMove.col];
        takenCell.classList.add(game.currentPlayer.color);
        return this;
    };

    this.chooseMove = function () {
        var colPos = Math.floor((Math.random() * 6) + 0);
        return colPos;
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
            this.countHoriz = 0;
        };
        if (direction === 'v') {
            this.countVert = 0;
        };
        if (direction === 'd') {
            this.countDiag = 0;
        };

        return this;
    };
    this.updateBoard = function (colPos) {
        for (var row = 5; row >= 0; row--) {
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
        return this;
    };

    this.createGrid = function () {
        for (var row = 0; row < this.board.length; row++) {
            for (var col = 0; col < this.board[row].length; col++) {
                var colDiv = document.createElement('div');
                colDiv.classList.add('cell', 'row', row)
                colDiv.id = col;
                grid.appendChild(colDiv);
            }
        }
        return this;
    };

    this.eraseGrid = function () {
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        return this;
    }
}

/*
 ===============================================
||                                            ||  
||   VICTORY CHECK  FUNCTIONS                 ||
||                                            ||
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
        if (game.board[row][col] && game.board[row][col] === game.board[row - 1][col]) {
            row
            game.countVert++;
            if (game.countVert === 3) {
                return true
            }
        }
    }
    game.resetCount('v');
    return false;
}

function topRightToBottomLeftDiagonal(stepDown, stepUp) {
    var row = game.currentPlayer.currentMove.row;
    var col = game.currentPlayer.currentMove.col;

    if (game.board[row + stepDown] && game.board[row + stepDown][col - stepDown]) {
        if (game.board[row + stepDown][col - stepDown] === game.currentPlayer.color) {
            stepDown++;
            game.countDiag++;
            topRightToBottomLeftDiagonal(stepDown, stepUp)
        }
    }

    if (game.board[row - stepUp] && game.board[row - stepUp][col + stepUp]) {
        if (game.board[row - stepUp][col + stepUp] === game.currentPlayer.color) {
            stepUp++;
            game.countDiag++;
            topRightToBottomLeftDiagonal(stepDown, stepUp);
        }
    }

    if (game.countDiag >= 3) {
        return true;
    } else {
        game.resetCount('d');
    }

}


function topLeftToBottomRighDiagonal(stepDown, stepUp) {
    var row = game.currentPlayer.currentMove.row;
    var col = game.currentPlayer.currentMove.col;

    if (game.board[row + stepDown] && game.board[row + stepDown][col + stepDown]) {
        if (game.board[row + stepDown][col + stepDown] === game.currentPlayer.color) {
            stepDown++;
            game.countDiag++;
            topLeftToBottomRighDiagonal(stepDown, stepUp);
        }
    }

    if (game.board[row - stepUp] && game.board[row - stepUp][col - stepUp]) {
        if (game.board[row - stepUp][col - stepUp] === game.currentPlayer.color) {
            stepUp++;
            game.countDiag++;
            topLeftToBottomRighDiagonal(stepDown, stepUp);
        }

    }

    if (game.countDiag >= 3) {
        return true;
    } else {
        game.resetCount('d');

    }
}


function checkWin() {
    var horizontalWin = checkHorizontalWin();
    var verticalWin = checkVerticalWin();
    var topLeftToBottomRight = topLeftToBottomRighDiagonal(1, 1);
    var topRightToBottomLeft = topRightToBottomLeftDiagonal(1, 1);
    if (horizontalWin || verticalWin || topLeftToBottomRight || topRightToBottomLeft) {
        return true;
    } else {
        return false;
    }
}