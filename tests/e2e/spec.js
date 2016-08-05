describe('ossReporting', function() {

	it('should have a home page', function() {
		//Access the home page
		browser.driver.get('http://127.0.0.1:5000/');
		//The Home Page is displaying with the welcome title.
		expect(browser.driver.getTitle()).toEqual('Laura and Rob');
	});

	it('should be possible to enter text in a text area and see the message display on the discussion panel', function(){
		// Find Laura's text area and say Hello to Bob.
    	element(by.model('user.message')).sendKeys('Hello_bob');

		// Submit salutations
		element(by.id('submit')).click();

		//Lookup for message
		var messages = element.all(by.repeater('message in user.message_thread'));

		//Both Messages displays in each discussion panel
		expect(messages.count()).toEqual(2);

		//Messages contains the submitted keys
		expect(messages.get(1).getText()).toContain('Hello_bob');

	});

});