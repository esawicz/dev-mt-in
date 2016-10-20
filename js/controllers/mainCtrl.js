angular.module('devFriends').controller('mainCtrl', function($scope, mainSrv, $state){
	console.log("this is $scope.newUser", $scope.newUser)

function getFriendData() {
	mainSrv.getFriendData().then(function(response){
		//console.log(11111, response)
		$scope.data= response
	})
}

getFriendData(); 

$scope.saveChanges= function(name, tag, image, bio) {
	var obj = {
		name: name,
		tagline: tag,
		image: image, 
		profileUrl: bio
	}

	mainSrv.postData(obj).then(function(response) {
		
		$state.go('landing');

	});


}

});