var app = angular.module('myApp', []);
app.controller('nomControlador', ['$scope', 'miFactory',
    function ($scope, miFactory) {
        $scope.intent = 0;
        $scope.start = function () {
            $scope.intent = 0;
            miFactory.startService().then(
                    function (response) {
                        var text = response.data.palabra;
                        console.log(text.length);
                        $scope.textArr = new Array(text.length);

                    },
                    function (response) {
                    }
            );
        };
        $scope.checkLetra = function () {
            miFactory.checkLetra($scope.letra).then(
                    function (response) {
                        var posiciones = response.data.posicion;
                        var letra = response.data.letra;
                        console.log(posiciones);
                        posiciones.forEach(function (item, index) {
                            $scope.textArr[item] = letra;
                        });
                        if (posiciones.length === 0) {
                            $scope.intent++;
                        }
                        $scope.letra = '';
                    }, function (response) {
            }
            );
        };
    }]);


