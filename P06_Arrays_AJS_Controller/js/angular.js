/**
 * Created by Arnau on 09/01/17.
 */
var numeros = new Array(5);

    numeros[0]=0;
    numeros[1]=1;
    numeros[2]=2;
    numeros[3]=3;
    numeros[4]=4;
    numeros[5]=5;

angular.module('myApp',[]).controller('angular',['$scope',function($scope){

        //ex1,2
        $scope.numeros = numeros;

        //ex3
        $scope.addNumFinal = function () {
            $scope.numeros.push($scope.numFinal);
        };

        //ex4
        $scope.addNumInicial = function () {
            $scope.numeros.shift($scope.numInicial);
        };

        //ex5
        $scope.numRemove = function () {
            $scope.numeros.pop();
        };

        //ex6
        $scope.numFirstRemove = function () {
            $scope.numeros.shift();
        };

        //ex7
        $scope.calcular = function () {
            var total='';

            for (var key in  numeros) {

                total += numeros[key] + $scope.simCalcular + numeros[key];

            }
            $scope.result = eval(total);

        };

        //ex8
        $scope.delPos = function () {
            if ($scope.inputDelPos > numeros.length || $scope.inputDelPos < 0){
                alert("You can't do that");
            }else{
                delete numeros[$scope.inputDelPos];
            }
        };

        //ex9
        $scope.delNum = function () {
            for (var key in numeros.reverse()){

                if ($scope.inputDelNum == numeros[key]){
                    delete numeros[key];
                }

            }
        }

}]);
