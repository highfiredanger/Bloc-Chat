var app = angular.module('blocChat', []);

app.filter('greet', function() {
 return function(name) {
    return 'Hello, ' + name + '!';
  };
});