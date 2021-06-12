let app = angular.module("app", []);

app.controller("emp", ["$scope", function($scope){
    $scope.message = "This is a message";
}]);


app.directive('infoMessage', function(){
    return {
        //template: "<strong>This is a message</strong>"
        //template: "<strong>{{message}}</strong>"
        
        // instead of the code above, templateUrl uses the id 
        // defined as info-message.html (see directive.html; within script tags)
        templateUrl: "info-message.html" 
    }
});