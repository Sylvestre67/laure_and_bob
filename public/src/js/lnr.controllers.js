var lnrControllers = angular.module('lnr.controllers', [])

lnrControllers.controller('lnrChat',['$scope','messageProcessor',function lnrChat($scope,messageProcessor){

		$scope.title = "Laura and Rob";
		$scope.userTyping = {};

		//Initialize our connected Users
		$scope.users = [
			{
				'name':'Laura',
				'position':'Marketing Manager',
				'location':'Sydney, Australia',
				'message':'',
				'message_thread':[],
				'session_information':{
					started: new Date(),
					connected_to: {
						'name':'Bob',
						'position':'CEO',
						'location':'Strasbourg, France'
				 	}
				}
			},
			{
				'name':'Bob',
				'position':'CEO',
				'location':'Strasbourg, France',
				'message':'',
				'message_thread':[],
				'session_information':{
					started: new Date(),
					connected_to: {
						'name':'Laura',
						'position':'Marketing Manager',
						'location':'Sydney, Australia',
				 	}
				}
			}
		];

		$scope.submitNewMessage = function(user){
			//Create new message
			var newMessage = {
				'date': new Date(),
				'message': user.message,
				'sender': user
			};

			//Post new Message to Server (server magic is mocked using a simple Angular service returinng a promise)
			var serverResponse = new messageProcessor.updateMessageThread(newMessage);
			serverResponse.promise.then(function(data){
				angular.forEach($scope.users,function(user){
					updateUserThread(data,user);
					user.message = '';
				})
			},function(error){
				console.log('error');
			})
		};

		//Handle the alert when a user is typing.
		$scope.userIsTyping = function(index,typing){
			(typing)
				? $scope.userTyping = $scope.users[index]
				: $scope.userTyping = {};
		};


		//Controllers utils
		function updateUserThread(new_message,user){
			return user.message_thread.push({message:new_message.message,date:new_message.date,sender:new_message.sender.name});
		};
	}]
);
