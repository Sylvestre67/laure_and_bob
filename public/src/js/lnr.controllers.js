var lnrControllers = angular.module('lnr.controllers', [])

lnrControllers.controller('lnrChat',['$scope','sessionProvider','messageProcessor',function lnrChat($scope,sessionProvider,messageProcessor){

		$scope.title = "Laura and Rob";
		$scope.userTyping = {};
		//$scope.new_message = new messageProcessor('','');

		var sessionStarted = new sessionProvider.initiateConnection();
		sessionStarted.promise.then(
			function(response){
				$scope.session = response;

				angular.forEach($scope.session.users,function(user){
					user.new_message = new messageProcessor('',user.name);
				})

			}
		);

		$scope.submitNewMessage = function(user){

			user.new_message.status = 'pending';

			user.new_message.processMessage(user.new_message).promise.then(function(message){

				message.status = 'Delivered';
				$scope.session.messageThread.push(message);

				user.new_message = new messageProcessor('','');
			});

		};

		//Handle the alert when a user is typing.
		$scope.userIsTyping = function(index,typing){
			(typing)
				? $scope.userTyping = $scope.session.users[index]
				: $scope.userTyping = {};
		};

	}]
);
