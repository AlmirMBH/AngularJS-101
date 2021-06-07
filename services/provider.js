let app = angular.module("app", []);

app.controller("emp", ["$scope", "calcService", function($scope, calcService){
    $scope.a = 10;
    $scope.b = 20;

    $scope.doSum = function(){
        // $scope.sum = calcService.getSum($scope.a, $scope.b);   // SYNC LOADING

        calcService.getSum($scope.a, $scope.b, function(result){     // ASYNC LOADING
             $scope.sum = result;
         });
    };
}]);
                            // CONSTRUCTOR FUNCTION CALLED BY ANGULAR AND PROVIDED IN THE CONFIG
app.provider('calcService', function(){ // line executed at the initial stage, don't inject e.g. $log here
    
    let baseUrl = '';
    this.configUrl = function(url){
        baseUrl = url;
    };


    this.$get = ['$log', '$http', function($log, $http){    // $get is executed automatically by angularjs
        $log.log("Provider instantiated first");
        let oCalcService = {};
        
        // oCalcService.getSum = function(a, b){    // SYNC LOADING
        //     $log.log(a + " + " + b + " = " + (parseInt(a)+parseInt(b)))
        //     return parseInt(a) + parseInt(b);
        // };

        // oCalcService.getSum = function(a, b, myCallback){   // ASYNC LOADING
        //     let result = parseInt(a) + parseInt(b);
        //     myCallback(result);
        // }

        oCalcService.getSum = function(a, b, myFunction){       // REST

            $http({
                //url: 'https://www.boredapi.com/api/activity', // hard-coded and can't be reused
                url: baseUrl,
                method: 'GET'
            }).then(function(resp){ // api data are stored in data that is pre-defined
                //$log.log("Fetched data: ", resp.data)
                myFunction(resp.data); 
            },function(resp){ 
                    $log.error("ERROR");
                    $log.log(resp);
                });
        }; 
        return oCalcService;
    }];
});

app.config(['calcServiceProvider', function(calcServiceProvider){   // EXECUTED AT THE INITIAL STAGE
    calcServiceProvider.configUrl("https://www.boredapi.com/api/activity"); // BEFORE $GET
    //calcServiceProvider.configUrl("https://www.boredapi.com/api/activity/?key=6098037"); // specific activity
}]);