var ourService = angular.module('devFriends').service('mainSrv', function($http){

	this.getFriendData = function() {
		return $http({
			method: 'GET',
			url: 'http://connections.devmounta.in/api/profiles?name=1000',
		}).then(function(response){
			return response;
		}, function(error){
			alert("Error");
		})
	}

	this.postData = function(user) {

		var ourService = this;
		return $http({
			method: 'POST',
			url: 'http://connections.devmounta.in/api/profiles',
			data: user
		})
		.then(function(response){
			ourService.newUser = response;
			return response;
		}, function(error){
			alert("Error");
		})

	}

	console.log("this is this", this)
		this.saveNewUser = function(user) {
	console.log("this is this 2", this)
		this.newUser = user;
	}


})