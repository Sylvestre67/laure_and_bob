var lnrServices = angular.module('lnr.services', []);

lnrServices.factory('messageProcessor',['$q','$timeout',function($q,$timeout){
	var service = {};

	// Mock a server response. The typical response time here is 500ms.
	// In a real case scenario, this would be replace by a connection to a web socket.
	// On receiving message, the $scope.user.message_thread would then be updated with the new message.

	service.updateMessageThread = function(message){
		var serverResponse = $q.defer();

		$timeout(function () {
        	serverResponse.resolve(message)
   		}, 500);

		return serverResponse;
	};

	return service;

}]);
