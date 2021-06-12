let app = angular.module("app", []);

// controllers are not suppsed to have business logic, move it to the factory/services
app.controller("emp", ["$scope", "calcFactory", function($scope, calcFactory){
    $scope.key = 2526437;    

    $scope.doSum = function(){        
        calcFactory.getSum($scope.key, function(result){
                $scope.sum = result;
        });
    };
}]);

app.factory('calcFactory', ['$http', '$log', function($http, $log){
    $log.log("Instantiating factory");
    let oCalcService = {};

    oCalcService.getSum = function(key, myFunction){
        $http({
            url: 'https://www.boredapi.com/api/activity',
            method: 'GET'
        }).then(function(resp){ // api data are stored in data that is pre-defined
            $log.log("Fetched data: ", resp.data)
            myFunction(resp.data) 
        }, 
            function(resp){ 
                $log.log("ERROR", resp)
            }
        );
    };    
    return oCalcService;
}]);