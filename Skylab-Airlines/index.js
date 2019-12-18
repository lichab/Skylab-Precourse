var flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

var searchOptions = 'Indique si que desea ver:\n a)Vuelos con precio mas alto al ingresado.\n b) Vuelos con precio mas bajo al ingresado.\n c)Vuelos con precio igual al ingresado'


function skylabAirlines() {

    var getUser = function () {
        var user = prompt('Bienvenid@ a Skylab Airlines. Por favor, indique su nombre de usuario:');
        while (!user) { user = prompt('Por favor introduzca un usuario valido:') };
        window.alert('Bienvenid@ ' + user + '. A continuacion puede ver los vuelos disponibles.');
        return user;
    }

    // Presentar vuelos de forma amigable.
    var parsedFlights = function (flightsArr) {
        var readableFlights = []
        for (var i = 0; i < flightsArr.length; i++) {
            var scale = flightsArr[i].scale ? 'Realiza una escala' : 'Vuelo directo';
            var completeFlight = 'Origen: ' + flightsArr[i].from + ' - Destino: ' + flightsArr[i].to + ' - Coste: ' + flightsArr[i].cost + '€. ' + scale + ' - Numero de vuelo: ' + flightsArr[i].id;
            readableFlights.push(completeFlight);
        }
        return readableFlights;
    }

    var avarage = function () {
        var sum = 0;
        var avarage;
        for (var i = 0; i < flights.length; i++) {
            sum += flights[i].cost;
        }
        avarage = sum / flights.length;
        return parseFloat(avarage.toFixed(2)); //Para representar los centimos.
    }

    var scales = function () {
        var numberOfFlights = 0;
        for (var i = 0; i < flights.length; i++) {
            if (flights[i].scale === true) numberOfFlights++;
        }
        return numberOfFlights;
    }

    var lastFlights = function () {
        var lastFligthsList = [];
        for (var i = flights.length - 1; i > flights.length - 6; i--) {
            var destination = flights[i].to;
            lastFligthsList.unshift(destination);
        }
        return lastFligthsList;
    }

    var output = function () {
        console.log(
            'Hola ' + getUser() + '! Los siguientes son todos los vuelos disponibles: \n' + parsedFlights(flights).join('\n') + '\n \nEl coste promedio de los vuelos es ' + avarage() + '€.\n' + '\nEn total ' + scales() + ' vuelos realizan escalas.\n \nLos destinos de los ultimos vuelos del dia son los siguientes: \n' + lastFlights().join('.\n')
        );
    }
    output();



    function proCapabilities() {
        var userType = prompt('¿Eres ADMIN o USER?');
        userType = String(userType).toLocaleLowerCase();

        //esta funcion la uso despues de crear o eliminar vuelos, porque sin esta el id puede llegar a repetirse si lo hacemos simplemente por length.
        var flightId = function (flight) {
            var index = flights.length - 1;
            var lastId = flights[index].id;
            newId = lastId + 1;
            return newId;
        }

        var priceInput = function () {
            do {
                var input = Number(
                    prompt('Por favor ingrese el precio del vuelo.(Solo se aceptan números)'))
            } while (isNaN(input));

            return input;
        }

        function nextStep(typeOfUser) {
            if (confirm('Desea continuar con la gestion de vuelos como ' + typeOfUser + '.')) {
                if (typeOfUser === 'USER') {
                    userActions();
                } else {
                    adminActions()
                }
            } else {
                return proCapabilities();
            }
        }

        var createFlight = function () {
            if (flights.length < 15) {
                var id = flightId();
                var destination = prompt('Indique el destino del vuelo.');
                var origin = prompt('Indique el origen del vuelo.');
                var price = priceInput();
                var scale = prompt('¿Realiza el vuelo alguna escala? Si/No').toLowerCase();
                var flight = {
                    id: id,
                    to: destination,
                    from: origin,
                    cost: price,
                    scale: scale.includes('si')
                };

                flights.push(flight);
                window.alert('Se creo el vuelo correctamente.')

            } else {
                alert('Ha alcanzado el límite de 15 vuelos.');
            }
        };

        var deleteFlight = function () {
            var id = Number(prompt('Ingrese el ID del vuelo a eliminar.'));
            flights.forEach(function (flight, i) {
                if (flight.id === id) {
                    flights.splice(i, 1);
                    window.alert('Se elimino el vuelo correctamente.')
                }
            });
        };

        var adminActions = function () {
            var action = prompt('¿Desea CREAR o ELIMINAR vuelos?');
            action = String(action).toLowerCase();
            if (action === 'crear') {
                createFlight();
                console.log(parsedFlights(flights).join('\n'));
            } else if (action === 'eliminar') {
                deleteFlight();
                console.log(parsedFlights(flights).join('\n'));
            } else {
                alert('Esa no es una accion valida');
                return proCapabilities();
            }

            nextStep('ADMIN');
        };

        var userActions = function () {
            alert('A continuacion podra buscar vuelos a partir de su precio.')
            var price = priceInput();
            var searchParams = prompt(searchOptions);
            searchParams = String(searchParams).toLocaleLowerCase();

            function search(flight) {
                if (searchParams === 'c') {
                    return flight.cost === price;
                } else if (searchParams === 'b') {
                    return flight.cost <= price;
                } else if (searchParams === 'a') {
                    return flight.cost >= price;
                } else {
                    // alert('Esa no es una opcion valida.');
                    return false;
                }
            }

            var searchResults = flights.filter(search);

            function buyFlight(flightsArr) {

                if (flightsArr.length > 0) {
                    var confirmation = 'Estos son los vuelos disponibles. Quieres comprar alguno? (Si/No): \n' + parsedFlights(flightsArr).join('\n');

                    var flight = prompt(confirmation);

                    if (flight === 'si') {
                        var id = Number(prompt('Indique el ID del vuelvo que desea comprar'));
                        flightsArr.forEach(function (flight) {
                            if (id === flight.id) {
                                alert('Vuelo de ' + flight.from + ' a ' + flight.to + ' comprado. Gracias por su compra, vuelva pronto.');
                            }
                        });

                    }
                }
                return proCapabilities();
            }

            buyFlight(searchResults);

        };

        if (userType === 'admin') {
            adminActions();
            return;
        } else if (userType === 'user') {
            userActions();
            return;
        } else if (userType === 'null') {
            alert('Gracias, vuelva pronto.')
            return;
        } else {
            alert('Ese no es un tipo de usuario válido.');
            return proCapabilities();
        }
    }
    proCapabilities();

}
skylabAirlines();


