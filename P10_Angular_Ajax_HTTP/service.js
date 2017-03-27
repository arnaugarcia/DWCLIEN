app.constant("baseURL", "")
    .service('miFactory', ['$http', 'baseURL',
        function ($http, baseURL) {
            this.startService = function(){
              return $http.get(baseURL+"penjat.php?inicio=si");  
            };
            this.checkLetra =function(letra){
                return $http.get(baseURL+"penjat.php?letra="+letra);
            };
    }]);