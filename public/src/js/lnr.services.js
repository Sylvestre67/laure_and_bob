var lnrServices = angular.module('lnr.services', []);

lnrServices.factory('sessionProvider',['$q','$timeout',function($q,$timeout){

	var service = {};

	var sessionInformation = function(users) {
        this.startingDate = new Date();
        this.users = users;
		this.messageThread = [];
    };

	service.initiateConnection = function(){
		var sessionPromise = $q.defer();
		var session = new sessionInformation(
			[
				{'name': 'Laura','position': 'Marketing Manager','location': 'Sydney, Australia','connected_to':1},
				{'name': 'Bob','position':'CEO','location':'Strasbourg, France','connected_to':0}
			]
		);

		$timeout(function () {
        	sessionPromise.resolve(session)
   		}, Math.random()*1000);

		return sessionPromise;
	};

	return service;
}]);




lnrServices.factory('messageProcessor',['$q','$timeout',function($q,$timeout){

	var newMessage = function(message,user) {
        this.date = new Date();
        this.sender = user,
		this.message = '';
		this.status = 'draft'
    };

	// Mock a server response. The typical response time here is 500ms.
	// In a real case scenario, this would be replace by a connection to a web socket.
	// On receiving message delivery confirmation, the message.status is then set up to 'delivered'
	// and then returned to the controller to update the thread.

	newMessage.prototype.processMessage = function(message){
		var serverResponse = $q.defer();
		$timeout(function () {
			//.status = 'delivered';
        	serverResponse.resolve(message)
   		}, Math.random()*1000);

		return serverResponse;
	};

	return newMessage;

}]);
;