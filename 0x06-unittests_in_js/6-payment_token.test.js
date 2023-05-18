const expect = require("chai").expect;

const {describe, it} = require("mocha");

const getPaymentTokenFromAPI = require("./6-payment");

describe("getPaymentTokenFromAPI", function() {
    it("Async testing with done callback", function(done) {
	getPaymentTokenFromAPI(true)
	    .then((data) => {
		expect(data).to.have.property('data');
		done();
	    });
    });
});