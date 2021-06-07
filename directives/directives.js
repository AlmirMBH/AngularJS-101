let app = angular.module("app", []);

app.controller("emp", ['$scope', 'empService', function($scope, empService){
    
    $scope.doSearch = function(){
        empService.getActivity($scope.key, function(result){            
            $scope.activity = result;
            $scope.isgreaterThan2k = parseInt(key) > 2000;
        });
    };
}]);

app.service("empService", ['$http', '$log', function($http, $log){
    this.getActivity = function(key, myCallback){        
        $http({
            url: 'https://www.boredapi.com/api/activity/?key=' + key,
            method: 'GET'            
        })
        .then(function(resp){  
                $log.log("Fetched data: ", resp.data)      
                myCallback(resp.data);
            },function(resp){
                //$log.error("ERROR occured");
                $log.log(resp);
            });
    }; return this;
}]);