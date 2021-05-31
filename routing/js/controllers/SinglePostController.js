app.controller("SinglePostController", function($scope, $routeParams){

    let post1 = {
        title: "First post",
        text: "Text of the first post"
    }

    let post2 = {
        title: "Second post",
        text: "Text of the second post"
    }

    switch($routeParams.id){
        case "1":
            $scope.post = post1;
            break;
        case "2":
            $scope.post = post2;
            break;
        default:
            $scope.post = "No post";

    }
});