describe('controllers', function(){

	var $q,
		$controller,
        $scope,
		$serviceForMessages,
		$serviceForSession,
		$httpBackend,
		mockMessageServiceResponse = {'name':'Slate_TESTING_1'};

    beforeEach(module('lnr'));

	//Mocking request to render view template
	beforeEach(inject(function(_$httpBackend_){
		$httpBackend = _$httpBackend_;
	}));


	beforeEach(inject(function(_$q_,_$rootScope_,messageProcessor,sessionProvider,_$controller_) {
		$scope = _$rootScope_.$new();
		$controller = _$controller_;
		$serviceForSession = sessionProvider;
		$serviceForMessages = messageProcessor;

		spyOn($serviceForMessages).and.callThrough();

		$controller('lnrChat', {
			'$scope': $scope,
			'messageProcessor' : messageProcessor,
			'sessionProvider' : $serviceForSession
		});

		$scope.$apply();

	}));

	afterEach(function() {
    	$httpBackend.verifyNoOutstandingExpectation();
    	$httpBackend.verifyNoOutstandingRequest();
   	});

	describe('lnrChat', function() {

		//TODO TESTS NEED TO BE REWRITTEN ACCORDING TO NEW ORGANIZATION OF SERVICES

		/*
		it('should have 2 users ready to chat', function () {
			expect($scope.session.users.length).toEqual(2);
			expect($scope.userTyping).toEqual({});
		});

		it('should register when a user is typing', function(){
			$scope.userIsTyping(0,true);
			expect($scope.session.users[0]).toBe($scope.userTyping);
		});

		it('should save the Send a message to the service when submitNewMessage is invocated',function(){

			$scope.session.users[0].new_message.message = 'TESTING_MESSAGING_SERVICES';
			$scope.submitNewMessage($scope.users[0]);

			//expect($serviceForMessages.updateMessageThread).toHaveBeenCalled();
		})*/

	});
});

