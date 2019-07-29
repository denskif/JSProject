beforeEach(function(){
	browser.url('/Contact-Us/contactus.html');
})

describe('Test contact us form Webdriveruniversity', function(){
	beforeEach(function(){
		console.log('Inside the describe block!');
	})

	it('Should be able to submit a successful submission via contact us form', function(done){
		browser.setValue('[name="first_name"]', 'Joe');
		browser.setValue('[name="last_name"]', 'Bush');
		browser.setValue('[name="email"]', 'joe_bush@gmail.com');
		browser.setValue('[name="message"]', 'What we do?');
		browser.click('[type="submit"]');
	});
	it('Should not be able to submit a successful submission via contact us form as all fieleds are required', function(done){
		browser.setValue('[name="first_name"]', 'Joe');
		browser.setValue('[name="last_name"]', 'Bush');
		browser.setValue('[name="email"]', 'joe_bush@gmail.com');
		browser.click('[type="submit"]');
	});

	it('Should not be able to submit a successful submission via contact us form as all fieleds are required', function(done){
		browser.setValue('[name="first_name"]', 'Joe');
		browser.setValue('[name="last_name"]', 'Bush');
		browser.setValue('[name="message"]', 'What we do?');
		browser.click('[type="submit"]');
	});
	it('Should not be able to submit a successful submission via contact us form as all fieleds are required', function(done){
		browser.setValue('[name="first_name"]', 'Joe');
		browser.setValue('[name="email"]', 'joe_bush@gmail.com');
		browser.setValue('[name="message"]', 'What we do?');
		browser.click('[type="submit"]');
	});

})