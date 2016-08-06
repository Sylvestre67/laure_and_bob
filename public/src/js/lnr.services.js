var lnrServices = angular.module('lnr.services', []);

lnrServices.factory('messageProcessor',['$q','$timeout',function($q,$timeout){
	var service = {};

	// Mock a server response. The typical response time here is 500ms.
	// In a real case scenario, this would be replace by a connection to a web socket.
	// On receiving message delivery confirmation, the message.status is then set up to 'delivered'
	// and then returned to the controller to update the thread.

	service.updateMessageThread = function(message){
		var serverResponse = $q.defer();

		$timeout(function () {
			message.status = 'delivered';
        	serverResponse.resolve(message)
   		}, Math.random()*1000);

		return serverResponse;
	};

	return service;

}]);
