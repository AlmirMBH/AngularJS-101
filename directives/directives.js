let app = angular.module("app", []);

app.controller("emp", ['$scope', 'empService', function($scope, empService){
    
        empService.getActivity(function(result){            
            $scope.activity = result;
            $scope.isgreaterThan2k = parseInt($scope.key) > 2000;
        });
    
}]);

app.service("empService", ['$http', '$log', function($http, $log){
    
    this.getActivity = function(myCallback){   
        $http({
            url: 'https://api.publicapis.org/entries', //?key=' + key -cannot be used
            method: 'GET'            
        })
        .then(function(resp){                 
                myCallback(resp.data);
            },function(resp){
                $log.error("ERROR occured");  
                //debugger;              
            });
    };
}]);