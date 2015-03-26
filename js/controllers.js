'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

    .controller('MenuCtrl', ['$scope', '$location', function($scope, $location) {

        $scope.isActive = function(viewLocation) {
            return viewLocation == $location.path();
        };

	$scope.isCollapsed = true;
    }])

    .controller('PresenceCtrl', ['$scope', function($scope) {}])


    .controller('CommentCtrl', ['$scope', '$http', function($scope, $http) {

        $http.get("/api/comment")
            .success(function(response){
                $scope.comments = response;
            });

        $scope.postComment = function(){

            $http.post("/api/comment", {user_name: $scope.user_name, content: $scope.content});
        };
    }])
    .controller('GalleryCtrl', ['$scope', 'Lightbox', function($scope, Lightbox) {

	$scope.images = [];

	var i = 0;
	
	for (i = 0; i < 129; i++) {

	    var number;
	    
	    if (i < 10)
		number = '00' + i;
	    else if (i < 100)
		number = '0' + i;
	    else
		number = '' + i;
	    
	    var title = 'Foto ' + number;
	    var url = 'img/converted/photo-' + number + '.png';
	    $scope.images.push({
		'url': url,
		'caption': title
	    });
	}
			
	$scope.openLightboxModal = function (index) {
	    Lightbox.openModal($scope.images, index);
	};

    }]);

