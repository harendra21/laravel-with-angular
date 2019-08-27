var app = angular.module('myApp',['ui.router','ngAnimate','ngTouch','ui.bootstrap','oc.lazyLoad']);

app.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        //debug: true
    });
}]);

app.constant('BASE_URL', 'http://localhost:8000');