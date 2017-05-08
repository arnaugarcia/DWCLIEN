app.service("serv", ['$resource', function ($resource) {
        this.consultaAjaxUser = function () {
            return $resource('serv.php/user/:id', null, {
                'get': {method: 'GET'},
                'save': {method: 'POST'},
                'query': {method: 'GET', isArray: true},
                'remove': {method: 'DELETE'},
                'delete': {method: 'DELETE'},
                'update': {method: 'PUT'}
            });
        };
        
        this.consultaAjaxPuzzle = function () {
            return $resource('imgserv.php/puzzle/', null, {
                'get': {method: 'GET'},
                'save': {method: 'POST'},
                'query': {method: 'GET', isArray: true},
                'remove': {method: 'DELETE'},
                'delete': {method: 'DELETE'},
                'update': {method: 'PUT'}
            });
        };


    }]);