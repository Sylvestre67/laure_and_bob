var lnrServices = angular.module('lnr.services', []);

lnrServices.factory('messageProcessor',['$q','$timeout',function($q,$timeout){
	var service = {};

	// Mock a server response. The typical response time here is 500ms.
	// In a real case scenario, this would be replace or by a HTTP request
	// or a connection to a webSocket for a real-time application.

	service.updateMessageThread = function(message){
		var serverResponse = $q.defer();

		$timeout(function () {
        	serverResponse.resolve(message)
   		}, 500);

		return serverResponse;
	};

	return service;

}]);
