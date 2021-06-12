let app = angular.module("app", []);

app.controller("emp", ['$scope', 'empService', '$filter', function($scope, empService, $filter){
    
        $scope.search = '';

        console.log($scope.search);
        $scope.doSearch = function(){
            empService.getActivity($scope.search, function(result){            
                $scope.activity = result;
                //console.log("Result", result)
                
            });
        }    
}]);

app.service("empService", ['$http', '$log', '$filter', function($http, $log, $filter){
    
    this.getActivity = function(search, myCallback){
        console.log("Search: ", search)   
        $http({
            //url: 'https://api.publicapis.org/entries',
            url: 'https://www.boredapi.com/api/activity/?key=' + search,
            method: 'GET'            
        })
        .then(function(resp){                 
            //console.log(resp.data)
              
             myCallback(resp.data);
            },function(resp){
                $log.error("ERROR occured");                  
            });
    };
}]);

app.directive("empDetails", function(){
    return{
        templateUrl: 'emp-details.html'
    }
});