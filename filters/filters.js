let app = angular.module("app", []);

app.controller("emp", ['$scope', 'empService', '$filter', function($scope, empService, $filter){
    
        empService.getActivity(function(result){            
            $scope.activity = result;
            console.log(result)
            //$scope.instance = $filter('uppercase')(result.entries[0].API); // must be an item of info            
            $scope.isgreaterThan2k = parseInt($scope.key) > 2000;
        });
    
}]);

app.service("empService", ['$http', '$log', '$filter', function($http, $log, $filter){
    
    this.getActivity = function(myCallback){   
        $http({
            url: 'https://api.publicapis.org/entries', //?key=' + key -cannot be used
            method: 'GET'            
        })
        .then(function(resp){                 
              //  resp.data.entries[0].API = $filter('uppercase')(resp.data.entries[0].API);                
                myCallback(resp.data);
            },function(resp){
                $log.error("ERROR occured");  
                //debugger;              
            });
    };
}]);