<?php
    define('ngPath',url('/src'));
    define('ngCtrl',url('/src/controllers'));
?>
<!DOCTYPE html>
<html lang="en" ng-app="myApp">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="./node_modules/ui-bootstrap4/dist/ui-bootstrap-csp.css">
        <link rel="stylesheet" href="./assets/style.css">
    </head>
    <body ng-controller="homeCtrl" ng-cloak> 
        
        <div ui-view="header"></div>
        
        <div ui-view="main"></div>
        
        <div ui-view="footer"></div>

        <script src="./node_modules/angular/angular.min.js"></script>
        <script src="./node_modules/angular-animate/angular-animate.min.js"></script>
        <script src="./node_modules/angular-touch/angular-touch.min.js"></script>
        <script src="./node_modules/ui-bootstrap4/dist/ui-bootstrap-tpls.js"></script>
        <script src="./node_modules/@uirouter/angularjs/release/angular-ui-router.min.js"></script>
        <script src="./assets/oclozyloadrequire.js"></script>
        <script src="./node_modules/oclazyload/dist/ocLazyLoad.min.js"></script>
        <script src="<?= ngPath ?>/app.js"></script>
        <script src="<?= ngPath ?>/route.js"></script>
        <script src="<?= ngCtrl ?>/homeCtrl.js"></script>
        <script src="./src/services/dashboardServ.js"></script>
        <script src="<?= ngCtrl ?>/dashboardCtrl.js"></script>
        
    </body>
</html>