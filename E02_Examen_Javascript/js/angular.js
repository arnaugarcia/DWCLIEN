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
        $scope.numeros = numeros;
}]);
