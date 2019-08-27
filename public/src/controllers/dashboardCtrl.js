app.controller('dashboardCtrl',['$rootScope','$scope','dashboardServ',
    function($rootScope,$scope,dashboardServ){
        let ds = dashboardServ;
        
        ds.getData().then(function(data) {
            let user = data.results[0];
            $scope.name = user.name.title+' '+user.name.first+' '+user.name.last;
            $scope.email = user.email;
            $scope.cell = user.cell;
            $scope.phone = user.phone;
            $scope.gender = user.gender;
            $scope.image = user.picture.large;
            $scope.dob = user.dob.date;
            $scope.age = user.dob.age;
            console.log(user);
        });

}]);