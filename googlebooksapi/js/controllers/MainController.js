app.controller('MainController', ['$scope', "$http", function($scope, $http){
    
    $scope.todo = {
        title: "Things to do",
        list: ["Clean my room", "Go to the store", "Crack the code"],
    }

    $scope.books = {
        title: "Books to read",
        list: ["Bosnia", "History of Bosnia"]
    }

    $scope.addItem = function(itemList, item){
        // ISBN : 10 or 13 length and consists of numbers only
        if((item.length == 10 || item.length == 13) && hasOnlyNumbers(item)){            
            $http.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + item).success(function(data){
                itemList.push("Title: " + data.items[0].volumeInfo.title + 
                              ", Subtitle: " + data.items[0].volumeInfo.subtitle + 
                              ", Author(s): " + data.items[0].volumeInfo.authors);
            })
        }else{            
            itemList.push("Invalid ISBN")
        }
    }

    function hasOnlyNumbers(item){
        return /^[0-9]*$/.test(item);
        // / - start or end of regular expression
        // ^ - start at the beginning of regex
        // [0-9] - digits 0 through 9
        // * - repeat 0 or more times
        // $ - end of input
    }
}])