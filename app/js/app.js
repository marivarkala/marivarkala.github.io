'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'bootstrapLightbox',
    'ui.bootstrap',
    'myApp.controllers'
])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/', {templateUrl: 'partials/home.html'})
            .when('/aboutcouple', {templateUrl: 'partials/aboutcouple.html'})
            .when('/aboutceremony', {templateUrl: 'partials/aboutceremony.html'})
            .when('/comments', {templateUrl: 'partials/comments.html', controller: 'CommentCtrl'})
	    .when('/giftlist', {templateUrl: 'partials/giftlist.html'})
	    .when('/gallery', {templateUrl: 'partials/gallery.html', controller: 'GalleryCtrl'})
	    .when('/presence', {templateUrl: 'partials/presence.html', controller: 'PresenceCtrl'})
            .otherwise({redirectTo: '/'});

    }]);
