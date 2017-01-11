(function(){
    
    function config($stateProvider){ 
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
        });
        
    }
    
    angular
        .module('blocChat', ['firebase', 'ui.router'])
        .config(config);
    
})();