
var commentsApp = angular.module('commentsApp', ['ngFileUpload']);
commentsApp.controller("commentsController", function ($scope, Upload, $timeout, $http, $compile) {

    $scope.comment = {
        name: "tima",
        email: "tim@gmail.com",
        url: "my-work.ua",
        text: "my test work !!!",
		date: "",
        parentCommentId: 0,
        nesting: 0,
        files: 3
    };
    $scope.warning = "";

    // Upload files
    $scope.uploadFiles = function (files) {

        var width, height, options;



        if (files.length > 0)
            Upload.imageDimensions(files[0]).then(function(dimensions){
                dimensions.width = 320;
                dimensions.height = 240;
                width = dimensions.width;
                height = dimensions.height;
            });
        Upload.resize(files[0], options).then(function(resizedFile){

        });

        $scope.comment.files = files;

        // console.log(files);
        // console.log(files[0]);

        if (files.length > 0 && (files[0].type === "image/jpeg" || files[0].type === "image/png" || files[0].type === "image/gif")) {
            $timeout(function () {
                if (width > 320 || height > 240)
                    $scope.warning = "image must be no more than 320х240 pixels";
                else uploadFunc();
            }, 500);
        }
        function uploadFunc () {
            $scope.warning = "";
            Upload.upload({
                url: '/api/upload',
                // data: data,
                file: files
            }).then(function (response) {
                $timeout(function () {
                    // $scope.result = response.data;
                    console.log(response);
                    // console.log(response.data);
                });
            }, function (response) {
                if (response.status > 0) {
                    $scope.errorMsg = response.status + ': ' + response.data;
                }
            }, function (evt) {
                $scope.progress =
                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }
    };

    $scope.saveComment = function (comment, commentsForm) {

        if(commentsForm.$valid) {
            console.log($scope.comment);
			$scope.comment.date = new Date();
            $http.post("/", comment).then(function success (response) {
                console.log(response.data);
            });
        }
    };
    $scope.dataFromMySQL = [];

    $scope.childCommentsFromMySQL = [];

    $scope.dataForView = [];

    $scope.childComment = function (commentId, nesting) {
        var parentComment = angular.element(document.querySelector('.c' + commentId));
        var commentForm = angular.element(document.querySelector("div[comment-form]"));
        // var commentForm2 = commentForm.clone();
        parentComment.after(commentForm);
        $scope.comment.parentCommentId = commentId;
        $scope.comment.nesting = nesting + 1;
    };

    $scope.pages = {
        amount: 0,
        currentPage: 1,
        pages: [],

        // Pages counter
        counter: function () {
            $scope.pages.amount = Math.ceil($scope.dataFromMySQL.length / 25);
            for (var i = 0; i < $scope.pages.amount; i++) {
                $scope.pages.pages.push(i+1);
            }
        },

        // Page creating
        pageCreator: function () {
            var i, j, parentComment, childComment,
                row, rowInside, compileFn;
            var start = $scope.pages.currentPage * 25 - 25;
            var end = $scope.pages.currentPage * 25;
            $scope.dataForView = [];

            // Preparing data for main comments
            for (i = start; i<end; i++) {
                if ($scope.dataFromMySQL[i] === undefined) break;
                $scope.dataForView.push($scope.dataFromMySQL[i]);
            }

            // Rendering of child comments
            $timeout(function () {
                for (i = 1; i<$scope.childCommentsFromMySQL.length; i++) {
                    for (j = 0; j<$scope.childCommentsFromMySQL[i].length; j++) {

                        // Search parent comment
                        parentComment = angular.element(document.querySelector('.c' + $scope.childCommentsFromMySQL[i][j].parent_comment_id));

                        // Creating a child comment
                        childComment = angular.element('<tbody>').addClass('c' + $scope.childCommentsFromMySQL[i][j].id + ' nesting' + $scope.childCommentsFromMySQL[i][j].nesting);
                        row = angular.element('<tr>');
                        rowInside = angular.element('<td>').text($scope.childCommentsFromMySQL[i][j].name);
                        row.append(rowInside);
                        rowInside = angular.element('<td>').text($scope.childCommentsFromMySQL[i][j].date);
                        row.append(rowInside);
                        childComment.append(row);
                        row = angular.element('<tr>');
                        rowInside = angular.element('<td>').text($scope.childCommentsFromMySQL[i][j].text);
                        row.append(rowInside);
                        childComment.append(row);
                        row = angular.element('<tr>').text($scope.childCommentsFromMySQL[i][j].email);
                        childComment.append(row);
                        row = angular.element('<tr>');
                        rowInside = angular.element('<td>').append(angular.element('<a>').attr('href', '')
                            .attr('ng-click',`childComment(childCommentsFromMySQL[${i}][${j}].id, childCommentsFromMySQL[${i}][${j}].nesting)`).text('Comment'));
                        row.append(rowInside);
                        childComment.append(row);
                        compileFn = $compile(childComment);
                        compileFn($scope);
                        parentComment.after(childComment);
                    }
                }
            }, 1000);
        }
    };

    // Sorting
    $scope.sortBy = {
        method: "date",
        direction: "ascending",
        sort: function () {
            var temp, i, j;

            // Sorting by date (ascending)
            if ($scope.sortBy.method === "date" && $scope.sortBy.direction === "ascending") {
                for (i = 0; i < $scope.dataFromMySQL.length; i++) {
                    for (j = 0; j < $scope.dataFromMySQL.length - 1; j++) {
                        if (Date.parse($scope.dataFromMySQL[j].dateISO) - Date.parse($scope.dataFromMySQL[j + 1].dateISO) < 0) {
                            temp = $scope.dataFromMySQL[j];
                            $scope.dataFromMySQL[j] = $scope.dataFromMySQL[j + 1];
                            $scope.dataFromMySQL[j + 1] = temp;
                        }
                    }
                }
                $scope.pages.pageCreator();
            }

            // Sorting by date (descending)
            if ($scope.sortBy.method === "date" && $scope.sortBy.direction === "descending") {
                for (i = 0; i < $scope.dataFromMySQL.length; i++) {
                    for (j = 0; j < $scope.dataFromMySQL.length - 1; j++) {
                        if (Date.parse($scope.dataFromMySQL[j].dateISO) - Date.parse($scope.dataFromMySQL[j + 1].dateISO) > 0) {
                            temp = $scope.dataFromMySQL[j];
                            $scope.dataFromMySQL[j] = $scope.dataFromMySQL[j + 1];
                            $scope.dataFromMySQL[j + 1] = temp;
                        }
                    }
                }
                $scope.pages.pageCreator();
            }

            // Sorting by name (ascending)
            if ($scope.sortBy.method === "name" && $scope.sortBy.direction === "ascending") {
                for (i = 0; i < $scope.dataFromMySQL.length; i++) {
                    for (j = 0; j < $scope.dataFromMySQL.length - 1; j++) {
                        if ($scope.dataFromMySQL[j].name > $scope.dataFromMySQL[j + 1].name) {
                            temp = $scope.dataFromMySQL[j];
                            $scope.dataFromMySQL[j] = $scope.dataFromMySQL[j + 1];
                            $scope.dataFromMySQL[j + 1] = temp;
                        }
                    }
                }
                $scope.pages.pageCreator();
            }

            // Sorting by name (descending)
            if ($scope.sortBy.method === "name" && $scope.sortBy.direction === "descending") {
                for (i = 0; i < $scope.dataFromMySQL.length; i++) {
                    for (j = 0; j < $scope.dataFromMySQL.length - 1; j++) {
                        if ($scope.dataFromMySQL[j].name < $scope.dataFromMySQL[j + 1].name) {
                            temp = $scope.dataFromMySQL[j];
                            $scope.dataFromMySQL[j] = $scope.dataFromMySQL[j + 1];
                            $scope.dataFromMySQL[j + 1] = temp;
                        }
                    }
                }
                $scope.pages.pageCreator();
            }

            // Sorting by email (ascending)
            if ($scope.sortBy.method === "email" && $scope.sortBy.direction === "ascending") {
                for (i = 0; i < $scope.dataFromMySQL.length; i++) {
                    for (j = 0; j < $scope.dataFromMySQL.length - 1; j++) {
                        if ($scope.dataFromMySQL[j].email > $scope.dataFromMySQL[j + 1].email) {
                            temp = $scope.dataFromMySQL[j];
                            $scope.dataFromMySQL[j] = $scope.dataFromMySQL[j + 1];
                            $scope.dataFromMySQL[j + 1] = temp;
                        }
                    }
                }
                $scope.pages.pageCreator();
            }

            // Sorting by email (descending)
            if ($scope.sortBy.method === "email" && $scope.sortBy.direction === "descending") {
                for (i = 0; i < $scope.dataFromMySQL.length; i++) {
                    for (j = 0; j < $scope.dataFromMySQL.length - 1; j++) {
                        if ($scope.dataFromMySQL[j].email < $scope.dataFromMySQL[j + 1].email) {
                            temp = $scope.dataFromMySQL[j];
                            $scope.dataFromMySQL[j] = $scope.dataFromMySQL[j + 1];
                            $scope.dataFromMySQL[j + 1] = temp;
                        }
                    }
                }
                $scope.pages.pageCreator();
            }
        }
    };

    // Getting data from Database
    var getDataFromMySQL = function () {
        $http.get("/comments").then(function success (response) {
			var date, nesting;
            var options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                timezone: 'UTC',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            };
			for (var i = 0; i<response.data.length; i++) {
			    date = Date.parse(response.data[i].date);
			    date = new Date(date);
                date = date.toLocaleString("ru", options);
                response.data[i].dateISO = response.data[i].date;
                response.data[i].date = date;
                if (response.data[i].parent_comment_id === 0) $scope.dataFromMySQL.push(response.data[i]);
                if (response.data[i].parent_comment_id !== 0) {
                    nesting = response.data[i].nesting;
                    if ($scope.childCommentsFromMySQL[nesting] === undefined) $scope.childCommentsFromMySQL[nesting] = [];
                    $scope.childCommentsFromMySQL[nesting].push(response.data[i]);
                }
            }

            $scope.sortBy.sort();
            $scope.pages.counter();
            console.log($scope.dataFromMySQL);
            console.log($scope.childCommentsFromMySQL);
		});
	};
    getDataFromMySQL();
});
