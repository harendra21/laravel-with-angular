app.service('dashboardServ', function($http,BASE_URL) {
  
  /*
  ** To get simple duppy user data
  */
  this.getData = function () {
      return $http({
        method: 'GET',
        url: 'https://randomuser.me/api/'
      }) .then(function(resp) {
        return resp.data;
      });
        
    }
});