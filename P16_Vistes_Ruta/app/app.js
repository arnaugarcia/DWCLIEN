/**
 * Created by arnau on 21/5/17.
 */
var app = angular.module('myApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'app/layouts/header/header.html',
                    controller: 'HeaderController'
                },
                'content': {
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeController'
                },
                'footer': {
                    templateUrl: 'app/layouts/footer/footer.html',
                    controller: 'FooterController'
                }
            }
        })
        .state('app.suscritas', {
            url: 'suscritas',
            views: {
                'content@': {
                templateUrl: 'app/views/suscrito/suscrito.html',
                controller: 'SuscritoController'
                }
            }
        })
        .state('app.buscar', {
            url: 'buscar',
            views: {
                'content@': {
                    templateUrl: 'app/views/buscar/buscar.html',
                    controller: 'BuscarController'
                }
            }
        })
        .state('app.lista', {
        url: 'lista/Lista de la compra',
        views: {
            'content@': {
                templateUrl: 'app/views/lista/lista.html',
                controller: 'ListaController'
            }
        }
        })
        .state('app.datos', {
            url: 'misDatos',
            views: {
                'content@': {
                    templateUrl: 'app/views/datos/datos.html',
                    controller: 'DatosController'
                }
            }
        });
    $urlRouterProvider.otherwise('/');
});


