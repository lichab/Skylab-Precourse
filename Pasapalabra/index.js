var QUESTIONS = [{
        letter: "a",
        status: 0,
        answer: ["abducir", "aplastar", "actualizar"],
        question: ["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", "CON LA A. Acción de forzar algo a ser plano.", "CON LA A. Mejorar. Cambiar cosas viejas por nuevas."]
    },
    {
        letter: "b",
        status: 0,
        answer: ["bingo", "burro", "bocata"],
        question: ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", "CON LA B. Dícese del tonto o lento. Caballo wannabe", "CON LA B. Comida de bar de tapas en España"]
    },
    {
        letter: "c",
        answer: ["churumbel", "clandestino", "computadora"],
        status: 0,
        question: ["CON LA C. Niño, crío, bebé", "CON LA C. Se mueve fuera de las reglas. Ilegal.", "CON LA C. En España es ordernador, en Argentina..."]
    },
    {
        letter: "d",
        answer: ["diarrea", "dados", "dictador"],
        status: 0,
        question: ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", "CON LA D. Pueden hacerte ganar dinero, pero dependerás de la suerta.", "CON LA D. Personaje interpretado por Sacha Baron Cohen"]
    },
    {
        letter: "e",
        answer: ["ectoplasma", "entrada", "espectativas"],
        status: 0,
        question: ["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", "CON LA E. A veces caminamos a través de esta, y otras veces se come", "CON LA E. No siempre se cumplen, pueden generar decepción cuando este es el caso."]
    },
    {
        letter: "f",
        answer: ["facil", "funcion", "forma"],
        status: 0,
        question: ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", "CON LA F. Estan para facilitarte la vida, pero a veces te la complican", "CON LA F. Una ameba no la tiene"]
    },
    {
        letter: "g",
        answer: ["galaxia", "gryffindor", "grapa"],
        status: 0,
        question: ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", "CON LA G. Casa de valientes y honestos. Con o sin varita", "CON LA G. En italia la beben con el café."]
    },
    {
        letter: "h",
        answer: ["harakiri", "horoscopo", "hospital"],
        status: 0,
        question: ["CON LA H. Suicidio ritual japonés por desentrañamiento", "CON LA H. Algunos creen que muestra tu personalidad.", "CON LA H. Entras enfermo, y sales curado."]
    },
    {
        letter: "i",
        answer: ["iglesia", "indio", "impuestos"],
        status: 0,
        question: ["CON LA I. Templo cristiano", "CON LA I. De la india, o por lo menos eso creían", "CON LA I. Nadie quiere pagarlos"]
    },
    {
        letter: "j",
        answer: ["jabali", "joder", "jeque"],
        status: 0,
        question: ["CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba", "CON LA J. Expresión clásica española", "CON LA J. Líder religioso o político en Medio Oriente."]
    },
    {
        letter: "k",
        answer: ["kamikaze", "kraken", "kilo"],
        status: 0,
        question: ["CON LA K. Persona que se juega la vida realizando una acción temeraria", "CON LA K. Criatura de la mitología nórdica.", "CON LA K. Alpha, Bravo, Charlie, K..."]
    },
    {
        letter: "l",
        answer: ["licantropo", "lego", "limbo"],
        status: 0,
        question: ["CON LA L. Hombre lobo", "CON LA L. Jueguete que alimenta la creatividad.", "CON LA L. Entre el mundo de los vivos y el de los muertos"]
    },
    {
        letter: "m",
        answer: ["misantropo", "maqueta", "mezclar"],
        status: 0,
        question: ["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", "CON LA M. Montaje funcional a escala de un objeto, artefacto o edificio.", "CON LA M. Acción. Antes eran 2, ahora es 1."]
    },
    {
        letter: "n",
        answer: ["necedad", "neutro", "nube"],
        status: 0,
        question: ["CON LA N. Demostración de poca inteligencia", "CON LA N. Algo dificil de definir. No es ni positivo ni negativo.", "CON L N. Esta en el cielo. Goku la usaba para volar."]
    },
    {
        letter: "ñ",
        answer: ["señal", "año", "moño"],
        status: 0,
        question: ["CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.", "CONTIENE LA Ñ. Tiempo que emplea la Tierra en dar una vuelta alrededor del Sol.", "CONTIENE LA Ñ. Accesorio de gala."]
    },
    {
        letter: "o",
        answer: ["orco", "oriundo", "ola"],
        status: 0,
        question: ["CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", "CON LA O. Procediente de un lugar.", "CON LA O. Onda de agua."]
    },
    {
        letter: "p",
        answer: ["protoss", "peron", "paisano"],
        status: 0,
        question: ["CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft", "CON LA P. Líder político argentino", "CON LA P. Persona nacida en el mismo lugar que otra"]
    },
    {
        letter: "q",
        answer: ["queso", "quemado", "quizas"],
        status: 0,
        question: ["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", "CON LA Q. Carbonizado", "CON LA Q. Indica una posibilidad."]
    },
    {
        letter: "r",
        answer: ["raton", "ramen", "raditz"],
        status: 0,
        question: ["CON LA R. Roedor", "CON LA R. Comida favorita de naruto.", "CON LA R. Hermano mayor de Goku."]
    },
    {
        letter: "s",
        answer: ["stackoverflow", "sermon", "suplantar"],
        status: 0,
        question: ["CON LA S. Comunidad salvadora de todo desarrollador informático", "CON LA S. Palabras del cura. A veces, asociado con aburrimiento.", "CON LA S. Cambiar uno por el otro."]
    },
    {
        letter: "t",
        answer: ["terminator", "typescript", "tentacion"],
        status: 0,
        question: ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984", "CON LA T. Superset de Javascript.", "CON LA T. Adán cayó en ella."]
    },
    {
        letter: "u",
        answer: ["unamuno", "udemy", "usain"],
        status: 0,
        question: ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914", "CON LA U. Plataforma de aprendizaje en línea.", "CON LA U. El hombre mas rápido del mundo."]
    },
    {
        letter: "v",
        answer: ["vikingos", "vestigio", "volcom"],
        status: 0,
        question: ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", "CON LA V. Resto del pasado.", "CON LA V. Ropa."]
    },
    {
        letter: "w",
        answer: ["sandwich", "wendigo", "wikipedia"],
        status: 0,
        question: ["CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso", "CONTIENE LA W. Criatura mitológica ficticia", "CONTIENE LA W. Información. ¿Confiable? A veces."]
    },
    {
        letter: "x",
        answer: ["botox", "extra", "exacto"],
        status: 0,
        question: ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética", "CONTIENE LA X. Esta de mas.", "CONTIENE LA X. Como nos referimos a algo que es eso y nada mas que eso"]
    },
    {
        letter: "y",
        answer: ["peyote", "yerba", "onomatopeya"],
        status: 0,
        question: ["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos", "CONTIENE LA Y. Mate, Argentina.", "CONTIENE LA Y. Recreación del sonido de algo."]
    },
    {
        letter: "z",
        answer: ["zen", "zalando", "zombieland"],
        status: 0,
        question: ["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional", "CON LA Z. E-commerce.", "CON LA Z. Película americana, actua Mark Zuckerberg XD."]
    },
]
var END = false;


var RANKING = getRanking(localStorage.getItem("RANKING"));


// =============== HELPER FUNCTIONS ================ //

function answered(question) {
    return question.status !== 0;
}

function correctAnswers(question) {
    return question.status === 1;
}

function addPoints(acc, currentVal) {
    return acc + currentVal;

}

function comparePoints(playerA, playerB) {
    return playerB.points - playerA.points;
}

function getRanking(ranking) {
    if (ranking) {
        var rankingArr = JSON.parse(ranking)
        return rankingArr;
    } else {
        ranking = [{
                name: 'Jon Doe',
                points: 2
            },
            {
                name: 'Jane Doe',
                points: 1
            }
        ]
        return ranking;
    }
}
// ================ MAIN FUNCTIONS =================== //

function askQuestion(question, index) {
    if (END === true) {
        return question
    };
    var temp = Math.floor(Math.random() * 3)
    if (question.status === 0) {
        console.log(question.question[temp]);
        var word = prompt('Palabra>>');
        console.log(word);
        switch (word) {
            case question.answer[temp]:
                console.log('Correcto!')
                question.status = 1
                break;
            case 'pasapalabra':
                console.log('Proxima pregunta.')
                break;
            case 'end':
                END = true;

                break;
            case null:
                if (confirm('Deaseas salir?')) {
                    END = true;
                } else {
                    askQuestion(question, index)
                    break;
                }
                break;
            case '':
                console.log('Esa no es una respues valida.');
                askQuestion(question, index);
                break;
            default:
                console.log('Wrong!')
                question.status = -1
                break;
        }
    }
    return question;
}

function pasapalabra(originalQuestions) {
    var questionsCopy = originalQuestions.map(function (question) {
        return Object.assign({}, question);
    })
    do {
        var questionsAsked = questionsCopy.map(askQuestion);
        var points = questionsAsked.map(correctAnswers).reduce(addPoints)
        if (END === true) {
            return points;
        }

    } while (END === false && !questionsAsked.every(answered));

    var wrongAnswers = questionsCopy.length - points;
    alert('Respuestas correctas: ' + points + ' \n ' +
        'Respuestas incorrectas: ' + wrongAnswers)
    return points;
}


function newGame(questions) {
    var userName = prompt('Bienvenido al Pasapalabra. Por favor ingrese su nombre: ');
    alert('Hola ' + userName + ', este pasapalabra no acepta acentos ni mayúsculas. Las palabras pueden ser en español o en inglés si refieren a alguna película o algo cultural. Si ingresas "END", finalizará el juego. Cuando hagas uso de "pasapalabra", se te volverá a preguntar esa letra en la próxima ronda, pero puede ser una pregunta y palabra diferente. Cuando ingresas por accidente una respuesta vacía, se te volverá a preguntar la misma letra pero también es posible que cambie la palabra. Por cada respuesta correcta recibirás 1 punto. Muchas suerte!!');
    var game = pasapalabra(questions);
    if (END === false) {
        var user = {
            name: userName,
            points: game
        };
        RANKING.push(user);
        RANKING.sort(comparePoints);
        localStorage.setItem("RANKING", JSON.stringify(RANKING))
        console.log('Ranking de jugadores de mayor a menor putaje: ');
        console.table(RANKING);
    } else {
        console.log('Has sumado: ' + game + ' puntos')
        console.log('Hasta la proxima');
        END = false;
    }

    return;
}

newGame(QUESTIONS);