const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
    it("check that Utils.calculateNumber was called once", function() {
	const Stub = sinon.stub(Utils, "calculateNumber").returns(10);
	const Spy = sinon.spy(console, "log");

	sendPaymentRequestToApi(100, 20);

	assert(Stub.calledWith('SUM', 100, 20));
	assert(Spy.calledWith("The total is: 10"));
   
	Stub.restore();
    });
});