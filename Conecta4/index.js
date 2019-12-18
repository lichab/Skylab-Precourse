var cells = document.getElementsByClassName('cell');
var player1 = new Player('human', 'Lisandro', 'B')
var game = new Game(player1, 0, createBoard());


for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function (event) {
        makeMove();
        var position = Number(event.target.id);
        var coordinates = getCoordinates(position);
        var move = new Move(coordinates[0], coordinates[1])
        game.currentPlayer.currentMove = move;
        game.updateBoard();

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
    var cellNumber = 1
    for (var i = 0; i < 6; i++) {
        board[i] = new Array(7);
        for (var j = 0; j < 7; j++) {
            board[i][j] = cellNumber;
            cellNumber++
        }
    }
    return board;
}




function Player(type, name, color, currentMove, movesMade) {
    this.type = type;
    this.name = name;
    this.color = color;
    this.currentMove = currentMove;
    this.movesMade = movesMade;

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

function Game(currentPlayer, count, board) {
    this.currentPlayer = currentPlayer;
    this.count = count;
    this.board = board;

    this.resetCount = function () {
        this.count = 0;
        this;
    };
    this.updateBoard = function () {
        var row = this.currentPlayer.currentMove.row;
        var col = this.currentPlayer.currentMove.col;
        this.board[row][col] = this.currentPlayer.color;
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

function makeMove(player) {
    // if (player[0] === 1) {
    //     event.target.classList.add('ficha', 'roja')
    // } else {
    event.target.classList.add('ficha', 'azul')
    // }
    // var currentPlayer = player[0];
    // var nextPlayer = player[1];
    // player[0] = nextPlayer
    // player[1] = currentPlayer;



    // return player;
}

function checkHorizontalWin() {
    var row = game.currentPlayer.currentMove.row;
    for (var col = 0; col <= 6; col++) {
        console.log(game.count)
        if (game.board[row][col] === game.board[row][col + 1]) {
            game.count++

            if (game.count === 3) {
                return true;
            }
        } else {
            game.resetCount();
        }
    }

    return false;
}

function checkVerticalWin() {
    game.resetCount();
    var col = game.currentPlayer.currentMove.col;
    for (var row = 1; row <= 5; row++) {
        if (game.board[row][col] === game.board[row - 1][col]) {
            game.count++;
            if (game.count === 3) {
                return true
            }
        }
    }
    return false;
}

function checkDiagonalWin() {
    game.resetCount();
    for(var row = 1; row <= 5; row++){
        for(var col = 0; col <= 6; col++){
            if(game.board[row][col] === game.board[row-1][col-1]){
                game.count++;
                if(game.count === 3){
                    return true;
                }
            }
        }
    }
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