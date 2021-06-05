let app = angular.module("app", []);

// controllers are not suppsed to have business logic, move it to the factory/services
app.controller("emp", ["$scope", "calcFactory", function($scope, calcFactory){
    $scope.a = 10;
    $scope.b = 20;

    $scope.doSum = function(){
        // sync loading        
        // $scope.sum = calcFactory.getSum($scope.a, $scope.b);
        
        // async loading: we need to use getSum with the 3rd parameter (callback function)
        calcFactory.getSum($scope.a, $scope.b, function(result){ // result is a+b from callback below
                $scope.sum = result;
        });
    };
}]);

app.factory('calcFactory', ['$http', '$log', function($http, $log){
    $log.log("Instantiating factory");
    let oCalcService = {};

    //sync
    //oCalcService.getSum = function(a, b){
    //    return parseInt(a) + parseInt(b);
    //};

    // async
    oCalcService.getSum = function(a, b, myCallback){        
        myCallback(parseInt(a) + parseInt(b));
    }
    return oCalcService;
}]);