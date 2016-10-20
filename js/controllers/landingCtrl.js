angular.module('devFriends').controller('landingCtrl', function($scope, mainSrv){

	$scope.newUser = mainSrv.newUser.data
	console.log('xxxxx', $scope.newUser)


	});

