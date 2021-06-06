let app = angular.module("app", []);

app.controller("emp", ["$scope", "calcService", function($scope, calcService){
    $scope.a = 10;
    $scope.b = 20;

    $scope.doSum = function(){
        // $scope.sum = calcService.getSum($scope.a, $scope.b); // sync loading

        calcService.getSum($scope.a, $scope.b, function(result){
            $scope.sum = result;
        });
    };
}]);

app.service('calcService', ['$http', '$log', function($http, $log){
    $log.log("Instantiating service");

    // this.getSum = function(a, b){            // sync loading
    //     return parseInt(a) + parseInt(b);
    // }

    // this.getSum = function(a, b, myCallback){   // async loading
    //     let result = parseInt(a) + parseInt(b);
    //     $log.log(result);
    //     myCallback(result);
    // }

    this.getSum = function(a, b, myFunction){   // rest
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


        
}]);