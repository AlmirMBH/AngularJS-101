
let ourModule = angular.module("app", []);

ourModule.controller("ourController", function($scope){
    $scope.searchBy = "";
    $scope.addLang = "";
    $scope.languages = [
        { name: "C#", prezime: 'GGGG', likes: 10, dislikes: 0 },
        { name: "Java", prezime: 'JJJJ', likes: 0, dislikes: 0 },
        { name: "JavaScript", prezime: 'SSS', likes: 0, dislikes: 0 },
        { name: "PHP", prezime: 'PPPP', likes: 0, dislikes: 0 },
    ];
    $scope.addLike = function(lang){ lang.likes++}
    $scope.addDislike = function(lang){ lang.dislikes++}
    $scope.addLang = function(lname, lsurname){ 
        $scope.languages.push({name: lname, prezime: lsurname, likes: 0, dislikes: 0})
    }

})