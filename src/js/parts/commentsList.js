commentsApp.directive("commentsList", function () {
    return {
        link: function (scope, element, attrs) {
            scope.data = scope[attrs["commentsList"]];
        },
        restrict: "A",
        templateUrl: "../templates/commentsList.html",
        transclude: true
    }
});
