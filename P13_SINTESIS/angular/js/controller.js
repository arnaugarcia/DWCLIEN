var app = angular.module("myApp", ['ngResource', 'ngOrderObjectBy']);

app.controller("myCtrl", ["$scope", "serv", function ($scope, serv) {
    $scope.user = {};
    $scope.users = [];
    $scope.user.puntos = 0;
    $scope.orderCriteria = 'puntos';
    $scope.orderSort = true;
    $scope.image = "";
    $scope.pista = "";
    $scope.pregunta = "";
    $scope.dispAns = false;
    var evScore = true;

    $scope.loadUsers = function () {
        $scope.users = serv.consultaUser().query({});

        console.log($scope.users);
    };

    $scope.editPlayer = function (nombre, edad, puntos) {
        $scope.user.nombre = nombre;
        $scope.user.edad = edad;
        $scope.user.puntos = puntos;
    };

    $scope.delPlayer = function (nombre) {
        serv.consultaUser().delete({id: nombre}).$promise.then(
            function () {
                loadAll();
            },
            function (response) {
                loadAll();
                $scope.messError = "Error: " + response.status + " " + response.statusText;
            });

    };

    function loadAll() {

        $scope.users = serv.consultaUser().query();

        console.log($scope.users);
    }

    loadAll();

    $scope.insertUser = function () {

        serv.consultaUser().update($scope.user).$promise.then(
            function (response) {
                loadAll();
                console.log(response);

            },
            function (response) {
                loadAll();
                $scope.messError = "Error: " + response.status + " " + response.statusText;

            });
    };

    $scope.setCriteria = function (criteria) {
        $scope.orderSort = $scope.orderSort !== true;
        $scope.orderCriteria = criteria;
    };

    $scope.loadImage = function () {
        $scope.image = serv.consultaPuzzle().get({inicio: 'si'});
        $scope.dispAns = false;
        $scope.pista = "";
        document.getElementById('respuesta1').className = 'btn btn-info btn-block';
        document.getElementById('respuesta2').className = 'btn btn-info btn-block';
        evScore = true;
    };

    $scope.loadClue = function () {
        $scope.pista = serv.consultaPuzzle().get({pista: 'si'});
    };

    $scope.loadAns = function () {
        $scope.pregunta = serv.consultaPuzzle().get({respuestas: 'si'});
        $scope.dispAns = true;
        $scope.image = "";

    };

    $scope.evaluateAns = function (ans) {
        if (evScore) {

            if (ans) {
                $scope.user.puntos++;
                $scope.insertUser();
            }
            document.getElementById('respuesta1').className = 'btn btn-success btn-block';
            document.getElementById('respuesta2').className = 'btn btn-danger btn-block';
            evScore = false;
        }
    };

}]);


