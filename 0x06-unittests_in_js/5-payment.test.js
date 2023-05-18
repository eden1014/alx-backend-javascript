const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");

const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function() {
    let Spy;

    beforeEach(function() {
        Spy = sinon.spy(console, 'log');

    });
    afterEach(function() {
        Spy.restore();

    });
    
    it("check that Utils.calculateNumber was called once", function() {
        
    
        sendPaymentRequestToApi(100, 20);
        expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
        
        });
    it("check that Utils.calculateNumber was called once", function() {
       
    
        sendPaymentRequestToApi(10, 10);
        expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
        
        });
});