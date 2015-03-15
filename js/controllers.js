'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

    .controller('MenuCtrl', ['$scope', '$location', function($scope, $location) {

        $scope.isActive = function(viewLocation) {
            return viewLocation == $location.path();
        };
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

	$scope.images = [
	    {
		'url': 'http://files.parsetfss.com/5c8badd9-8b76-48cc-9a50-4f9589dd7c4f/tfss-3d9dba36-c9d1-4727-9c54-18dc521f0760-01%20de%20Fevereiro.jpg',
		'caption': 'Foto 1'
	    },
	    {
		'url': 'http://files.parsetfss.com/5c8badd9-8b76-48cc-9a50-4f9589dd7c4f/tfss-eb632053-ae23-43ff-bfa0-07df7ec31e9f-01%20de%20Maio.jpg',
		'caption': 'Foto 2'

	    },
	    {
		'url': 'http://files.parsetfss.com/5c8badd9-8b76-48cc-9a50-4f9589dd7c4f/tfss-8c9462c5-c923-4c4f-a910-c155721b3f47-03%20de%20Setembro.jpg',
		'caption': 'Foto 3'
	    },
	    {
		'url': 'http://files.parsetfss.com/5c8badd9-8b76-48cc-9a50-4f9589dd7c4f/tfss-3bc5fcc3-3841-4834-8033-9c373e29620c-09%20de%20Fevereiro.jpg',
		'caption': 'Foto 4'
	    },
	    {
		'url': 'http://files.parsetfss.com/5c8badd9-8b76-48cc-9a50-4f9589dd7c4f/tfss-acc1a4cf-1407-41e0-bf0e-83472c903477-22%20de%20Marco.jpg',
		'caption': 'Foto 5'
	    },
	    {
		'url': 'http://files.parsetfss.com/5c8badd9-8b76-48cc-9a50-4f9589dd7c4f/tfss-226bc2fe-8c51-45fb-9b75-7f308bb5ce4d-23%20de%20Marco.jpg',
		'caption': 'Foto 6'
	    },
	    {
		'url': 'http://files.parsetfss.com/5c8badd9-8b76-48cc-9a50-4f9589dd7c4f/tfss-ac437614-365f-4834-a8dc-a9b15c92bb31-Aniversario%20Maritza%202012.jpg',
		'caption': 'Foto 7'
	    },
	    {
		'url': 'http://files.parsetfss.com/5c8badd9-8b76-48cc-9a50-4f9589dd7c4f/tfss-8c9462c5-c923-4c4f-a910-c155721b3f47-03%20de%20Setembro.jpg',
		'caption': 'Foto 8'
	    },
	    {
		'url': 'http://files.parsetfss.com/5c8badd9-8b76-48cc-9a50-4f9589dd7c4f/tfss-8c9462c5-c923-4c4f-a910-c155721b3f47-03%20de%20Setembro.jpg',
		'caption': 'Foto 9'
	    },
	    	    {
		'url': 'http://files.parsetfss.com/5c8badd9-8b76-48cc-9a50-4f9589dd7c4f/tfss-8c9462c5-c923-4c4f-a910-c155721b3f47-03%20de%20Setembro.jpg',
		'caption': 'Foto 8'
	    },
	    {
		'url': 'http://files.parsetfss.com/5c8badd9-8b76-48cc-9a50-4f9589dd7c4f/tfss-8c9462c5-c923-4c4f-a910-c155721b3f47-03%20de%20Setembro.jpg',
		'caption': 'Foto 9'
	    },
	    	    {
		'url': 'http://files.parsetfss.com/5c8badd9-8b76-48cc-9a50-4f9589dd7c4f/tfss-8c9462c5-c923-4c4f-a910-c155721b3f47-03%20de%20Setembro.jpg',
		'caption': 'Foto 8'
	    },
	    {
		'url': 'http://files.parsetfss.com/5c8badd9-8b76-48cc-9a50-4f9589dd7c4f/tfss-8c9462c5-c923-4c4f-a910-c155721b3f47-03%20de%20Setembro.jpg',
		'caption': 'Foto 9'
	    },
	    	    {
		'url': 'http://files.parsetfss.com/5c8badd9-8b76-48cc-9a50-4f9589dd7c4f/tfss-8c9462c5-c923-4c4f-a910-c155721b3f47-03%20de%20Setembro.jpg',
		'caption': 'Foto 8'
	    },
	    {
		'url': 'http://files.parsetfss.com/5c8badd9-8b76-48cc-9a50-4f9589dd7c4f/tfss-8c9462c5-c923-4c4f-a910-c155721b3f47-03%20de%20Setembro.jpg',
		'caption': 'Foto 9'
	    }
	    
	];

	$scope.openLightboxModal = function (index) {
	    Lightbox.openModal($scope.images, index);
	};

    }]);

