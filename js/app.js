angular.module('devFriends', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider){
		$stateProvider

			.state ('home', {
				url: '/',
				templateUrl: '../views/home.html',
				controller: 'mainCtrl',
			
			})

			.state ('landing', {
				url: '/landing',
				templateUrl: '../views/landing.html',
				controller: 'landingCtrl',
				
			})

			.state ('findFriends', {
				url: '/findFriends',
				templateUrl: '../views/findFriends.html',
			
			})

			.state ('friendProfile', {
				url: '/friendProfile',
				templateUrl: '../views/friendProfile.html',
				
			})

			.state ('viewFriends', {
				url: '/viewFriends',
				templateUrl: '../views/viewFriends.html',
				
			})

			.state ('updateProfile', {
				url: '/updateProfile',
				templateUrl: '../views/updateProfile.html'
				
			})

			$urlRouterProvider	
				.otherwise('/')



});


