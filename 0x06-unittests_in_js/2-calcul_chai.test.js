const expect = require("chai").expect;
const calculateNumber = require('./2-calcul_chai');
const {it, describe} = require('mocha');

describe("calculateNumber()", function(){
    it(`check if work in different type`, function(){
        expect(calculateNumber("SUM", 1, 2)).to.equal(3);
    });
    it(`check if work in different type`, function(){
        expect(calculateNumber("SUBTRACT", 2.4, 3.2)).to.equal(-1);
        
    });
    it(`check if work in different type`, function(){
        expect(calculateNumber("SUBTRACT", 4.8, 2.4)).to.equal(3);
        
    });
    it(`check if work in different type`, function(){
        expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
         
    });
    it(`check if work in different type`, function(){
        expect(calculateNumber("DIVIDE", 4, 0)).to.equal('error');
        
    });
    
    
    
});