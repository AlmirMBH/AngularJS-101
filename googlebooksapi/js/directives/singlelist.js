// when called, the argument will be bound to the parameter (mylist), which will
// then be set as an attribute in scope

app.directive("singlelist", function(){ 
    return {
        restrict: "E",
        scope: { mylist: "=" }, // mylist = model used in singlelist.html
        templateUrl: "js/directives/singlelist.html"
    }
});

//NOTE: restrict is for defining the directive type, and it can be:
// A (Attribute), C (Class), E (Element), and M (coMment)
// singlelist, because of restrict:"E" is used, becomes html tag in index.html