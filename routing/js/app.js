let app = angular.module("Blog", ["ngRoute"]);

app.config(function($routeProvider){

    $routeProvider
    
    .when("/", {
        templateUrl: "views/home.html"
    })

    .when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutController"
    })

    .when("/posts", {
        templateUrl: "views/posts.html"
    })

    .when("/posts/:id", {
        templateUrl: "views/post.html",
        controller: "SinglePostController"
    })

    .when("/contact", {
        templateUrl: "views/contact.html"
    })

    .otherwise({ redirectTo: "/"})
});