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
                }
            }
        })
        .state('app.suscritas', {
            url: 'suscritas',
            views: {
                'content@': {
                templateUrl: 'app/suscrito/suscrito.html',
                controller: 'SuscritoController'
                }
            }
        })
        .state('app.doscap', { url: 'doscap',
            views: {
                'content@': {
                    templateUrl: 'app/layouts/header/header.html',
                    controller: 'HeaderController'
                }
            }
        });
    $urlRouterProvider.otherwise('/');
});


