var app = angular.module("myApp", ['ngResource', 'ngOrderObjectBy']);
app.controller("myCtrl", ["$scope", "serv"
            , function ($scope, serv) {

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
                    $scope.users = serv.consultaAjaxUser().query({});

                    console.log($scope.users);
                };

                $scope.editPlayer = function (nombre, edad, puntos) {
                    $scope.user.nombre = nombre;
                    $scope.user.edad = edad;
                    $scope.user.puntos = puntos;
                };

                $scope.delPlayer = function (nombre) {
                    serv.consultaAjaxUser().delete({id: nombre}).$promise.then(
                            function (response) { //$promis.then() permet executar un codi al rebre la resposta
                                loadAll();
                            },
                            function (response) {
                                loadAll();
                                $scope.messError = "Error: " + response.status + " " + response.statusText;
                            });

                };

                function loadAll() {

                    $scope.users = serv.consultaAjaxUser().query();

                    console.log($scope.users);
                }
                ;
                //Non scoped
                loadAll();

                $scope.insertUser = function () {

                    serv.consultaAjaxUser().update($scope.user).$promise.then(
                            function (response) { //$promis.then() permet executar un codi al rebre la resposta
                                loadAll();
                                console.log(response);

//                                $scope.users = response;
//                                $scope.loadUsers();

                            },
                            function (response) {
                                loadAll();
                                $scope.messError = "Error: " + response.status + " " + response.statusText;

                            });
                };

                $scope.setCriteria = function (criteria) {
                    if ($scope.orderSort === true) {
                        $scope.orderSort = false;
                    } else {
                        $scope.orderSort = true;
                    }
                    $scope.orderCriteria = criteria;

                };

                //***IMAGE****

                $scope.loadImage = function () {
                    $scope.image = serv.consultaAjaxPuzzle().get({inicio: 'si'});
                    $scope.dispAns = false;
                    $scope.pista = "";
                    document.getElementById('goodAns').className = 'btn btn-info btn-block';
                    document.getElementById('badAns').className = 'btn btn-info btn-block';
                    evScore = true;
                };

                $scope.loadClue = function () {
                    $scope.pista = serv.consultaAjaxPuzzle().get({pista: 'si'});
                };

                $scope.loadAns = function () {
                    $scope.pregunta = serv.consultaAjaxPuzzle().get({respuestas: 'si'});
                    $scope.dispAns = true;
                    $scope.image = "";

                };

                $scope.evaluateAns = function (ans) {
                    if (evScore) {

                        if (ans) {
                            $scope.user.puntos++;
                            $scope.insertUser();
                        }
                        document.getElementById('goodAns').className = 'btn btn-success btn-block';
                        document.getElementById('badAns').className = 'btn btn-danger btn-block';
                        evScore = false;
                    } 
                };

            }]);


