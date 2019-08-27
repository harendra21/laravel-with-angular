app.config(['$stateProvider', function($stateProvider){
    
    $stateProvider
    
    .state('home', {
        url: '/',
        views: {
            
            'main@': { 
                templateUrl: './src/views/home.html',
                //controller: 'scotchController'
            }
        }
    })
    .state('dashboard', {
        url: '/dashboard',
        views: {
            'header@': { 
                templateUrl: './src/views/common/header.html' 
            },
            'main@': { 
                templateUrl: './src/views/dashboard.html',
                controller: 'dashboardCtrl'
            },
            'footer@': { 
                templateUrl: './src/views/common/footer.html' 
            }
        }
        
    });    

}]);