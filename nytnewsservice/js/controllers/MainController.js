app.controller("MainController", ["$scope", "nyt", function($scope, nyt){

    $scope.list = [];

    nyt.success(function(data){        
        for(i = 0; i < data.results.length; i++){
            let story = {
                section: data.results[i].section,
                title: data.results[i].title,
                abstract: data.results[i].abstract,
                url: data.results[i].url
            }
            $scope.list.push(story);
        }
    })
}]);