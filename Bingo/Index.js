

var PLAYERS_RANKING = JSON.parse(localStorage.getItem("PLAYERS_RANKING") || "[]");
var NEW_PLAYER = prompt('Bienvenido al Bingo! Por favor ingeresa tu nombre.')
while(!NEW_PLAYER){
    NEW_PLAYER = prompt('Por favor introduzca un usuario valido:');
}
var NEXT_TURN = 'Pulsa aceptar para continuar con el siguiente turno.'
var RESTART = 'Pulsa aceptar para iniciar un nuevo Juego o Cancelar para salir.'
var KEEP_PLAYING = true;
window.alert(NEW_PLAYER + ', por cada turno jugado se sumara un punto. Mientras menos puntos tengas, mas arriba estaras en el ranking. Cuando termines el juego ingresa showRanking() para verlo.');



function bingo() {
    /**================= VARIABLES NUEVO JUEGO ======================== **/   
    var gameState = {
        bingo: false,
        turnsCount: 0,
        lines: [false, false, false],
        lineCount: 0
    }
    var ball;
    var numbersDrum = createDrum();
    var bingoCard = createCard();
    var player = {name: NEW_PLAYER, points: 0,};

    /**=========================  EJECUCION  ========================== **/   
    
    newGame();
    nextGame();


    /**=========================  FUNCIONES  ========================== **/   

    function createDrum() { //Creacion del bolillero 
        var drum = []
        for (var i = 1; i < 99; i++) {
            drum.push(i);
        }
        drum = shuffle(drum)
        return drum;
    }
  
    function createCard() {
        //utilizamos el bolillero para crear el carton, 
        var arrayCopy = shuffle(numbersDrum.slice()); 
        var card = [];
        for(var i = 0; i < 3; i++){
            card[i] = [];
            for (var j = 0; j < 5; j++) {
                card[i][j] = {
                    number: arrayCopy.shift(),
                    matched: false
                };
            }
        }    
        return card;
    }
  
    // Utilizo un algoritmo de mezcla, es como girar el bolillero. Esto hace que generar num random en prox version y comprobar que no fue ya utilizado sea mas facil(creo).

    function shuffle(arr) {  
        var i = arr.length;
        var j, temp;
        while (--i > 0) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j]
            arr[j] = temp;
        }
        return arr;
    }
  
    function askTurn(){
        if(confirm(NEXT_TURN) === true){
            newTurn();
        } else {
            KEEP_PLAYING = false;
            return;
        }
    }
  
    function newTurn(){
        gameState.turnsCount++
        ball = numbersDrum.shift()
        console.log('El numero sorteado es: ' + ball );
        for(var i = 0; i < bingoCard.length; i++){
            bingoCard[i].forEach(function(element){
                if(element.number === ball){
                    element.number = 'X';
                    element.matched = true;
                    showBingoCard();
                }
            })
        }    
    }
  
    function isTrue(currentVal){
        return currentVal === true;
    }
    
    function line(currentLine, lineState, index){
        if(currentLine[index] && !lineState[index] && gameState.lineCount<2){
            window.alert('LINE!');
            gameState.lines[index] = true;
            gameState.lineCount++;
        }
    }

    function checkCompletion(){
        //mapeamos el valor de "matched" y comprobamos si todos cumplen la condicion "True"
        var reduced = []
        for(var i = 0; i < bingoCard.length; i++){
            reduced[i] = bingoCard[i].map(function(element){
                return element.matched
            }).every(isTrue);
            
            line(reduced, gameState.lines, i)
        }
        gameState.bingo = reduced.every(isTrue);
        return;
    }
    //Funcion para mostrar los numeros del carton sin la propiedad matched.
    function showBingoCard() {
        for(var i = 0; i < bingoCard.length; i++){
            var lineArr = []
            bingoCard[i].forEach(function (element) {
                lineArr.push(element.number);
            })
            console.log(lineArr);
        }
        console.log('=======================');
    }
  

    function nextGame(){
        if(gameState.bingo){
            window.alert('BINGO!!!')
            window.alert('Lo lograste en '+ gameState.turnsCount + ' turnos!')
            player.points = gameState.turnsCount;
            PLAYERS_RANKING.push(player)
        }

        if(!confirm(RESTART)){
            KEEP_PLAYING = false;
            window.alert('Gracias por jugar, hasta la proxima');
        }
    }
   
    function newGame(){
        showBingoCard()
        var aceptar = prompt('Aceptas esta tarjeta? Si/No');
        switch(aceptar) {
            case null:
                break;
            case 'No':
            case 'no':    
                bingoCard = createCard();
                newGame();
                break;
            case 'Si':
            case 'si':
                while(!gameState.bingo && KEEP_PLAYING){
                    askTurn()
                    checkCompletion();
                }
                break;
            default:
                window.alert('Esa no es una opcion valida.');
                newGame();
                break;
        }   
    }

}

function showRanking(){
    PLAYERS_RANKING.sort(function(firstEl, secondEl){
        return firstEl.points - secondEl.points;
    })
    PLAYERS_RANKING.forEach(function(user, i){
        var index = i + 1
        var player = index+' - ' + user.name + ' - ' + user.points + ' puntos.'
        console.log(player);
    })
}


while(KEEP_PLAYING){
    bingo();
    localStorage.setItem("PLAYERS_RANKING", JSON.stringify(PLAYERS_RANKING))
}      
