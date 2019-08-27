app.controller('homeCtrl',['$scope',function($scope){
    // $scope.alerts = [
    //     { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    //     { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    //   ];
        $scope.alerts = [];
        $scope.showAlert =function(type,msg){
            $scope.closeAlert();
            let alert = {'type' : type, 'msg' : msg };
            $scope.alerts.push(alert);
        }
        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
        $scope.userLogin = function(formData,ev){
            let username = formData.uname;
            let password = formData.pass;
            if(username === "admin" && password === 'admin123'){
                $scope.showAlert('success','Logged In ! Redirecting to dashboard.');
            }else{
                $scope.showAlert('danger','Email/Username or Password is/are not correct.');
            }
        };
}]);