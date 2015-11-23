'use strict';

angular.module('MapApp', ['ngSanitize', 'ui.router', 'ui.bootstrap'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/', // landing page
			templateUrl: 'partials/home.html'
		})

	$urlRouterProvider.otherwise('/');

})
