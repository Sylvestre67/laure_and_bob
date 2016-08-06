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
				'message':{
					'message':'',
					'status':'draft',
					'sender':'Laura',
					'date':''
				},
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
				'message':{
					'message':'',
					'status':'draft',
					'sender':'Bob',
					'date':''
				},
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
			user.message.status = 'pending';
			user.message.date = new Date();

			//Post new Message to Server (server magic is mocked using a simple Angular service returning a promise).
			//Upon resolving, the new Message delivered is saved to the User message thread.
			var serverResponse = new messageProcessor.updateMessageThread(user.message);
			serverResponse.promise.then(function(delivered_message){
				angular.forEach($scope.users,function(user){

					console.log(delivered_message);

					updateUserThread(delivered_message,user);
					user.message = {
						'message':'',
						'status':'draft',
						'sender':user.name,
						'date':''
					}
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
			return user.message_thread.push(new_message);
		};
	}]
);
