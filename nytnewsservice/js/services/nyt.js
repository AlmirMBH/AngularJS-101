app.factory("nyt", ["$http", function($http){

    return $http.get("https://api.nytimes.com/svc/topstories/v2/arts.json", 
           {params: {"api-key" : "MJ9LWG07Ut7jDlBtyG5YbfC0vj6knYAu"}})
    
    .success(function(data){
        return data;
    })

    .error(function(err){
        console.log(err)
        return err;
    })
}]);