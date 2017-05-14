app.service("serv", ['$resource', function ($resource) {

    this.consultaUser = function () {
        return $resource('serv.php/user/:id', null, {
            'get': {method: 'GET'},
            'save': {method: 'POST'},
            'query': {method: 'GET', isArray: true},
            'remove': {method: 'DELETE'},
            'delete': {method: 'DELETE'},
            'update': {method: 'PUT'}
        });
    };

    this.consultaPuzzle = function () {
        return $resource('serv.php/puzzle/', null, {
            'get': {method: 'GET'},
            'save': {method: 'POST'},
            'query': {method: 'GET', isArray: true},
            'remove': {method: 'DELETE'},
            'delete': {method: 'DELETE'},
            'update': {method: 'PUT'}
        });
    };
}]);