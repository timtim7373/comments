commentsApp.directive("commentForm", function () {
    return {
        link: function (scope, element, attrs) {
            scope.data = scope[attrs["commentForm"]];
        },
        restrict: "A",
        templateUrl: "../templates/commentForm.html",
        transclude: true
    }
});
