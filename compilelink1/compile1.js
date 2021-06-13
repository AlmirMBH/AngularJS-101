let app = angular.module("app", []);

app.controller("msg", ["$scope", function($scope){

}]);


app.directive("message", function(){

    return {
        compile: function(tElement, tAttributes){
            console.log(tAttributes.text + " in compile");

            return {
                pre: function(scope, iElement, iAttributes){
                    console.log(iAttributes.text + " in pre");
                },
                post: function(scope, iElement, iAttributes){
                    console.log(iAttributes.text + " in post");
                },
            };
        },

        controller: function($scope, $element, $attrs){
            console.log($attrs.text + " in controller")
        }
    }
});