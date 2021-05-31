// scope as data passer
app.controller('MainController', ['$scope', function($scope){
    // list attribute added to the scope; value of the list set (array of to dos)
    $scope.todo = {
        list: ["Clean my room", "Go to the store", "Crack the code"]
    }

    $scope.books = {
        list: []
    }

    $scope.addItem = function(itemList, item){
        itemList.push(item)
    }
}])