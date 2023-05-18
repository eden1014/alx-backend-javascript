const assert = require('assert');
const calculateNumber = require('./1-calcul');
const {it, describe} = require('mocha');

describe("calculateNumber()", function(){
    it(`check if work in different type`, function(){
        const res = calculateNumber('SUM',1,2);
        assert.strictEqual(res, 3);
    });
    it(`check if work in different type`, function(){
        const res = calculateNumber('SUBTRACT',2.4,3.2);
        assert.strictEqual(res, -1);
    });
    it(`check if work in different type`, function(){
        const res = calculateNumber('SUBTRACT',4.8,2.4);
        assert.strictEqual(res, 3);
    });
    it(`check if work in different type`, function(){
        const res = calculateNumber('SUBTRACT',4,2);
        assert.strictEqual(res, 2);
    });
    it(`check if work in different type`, function(){
        const res = calculateNumber('DIVIDE',4,2);
        assert.strictEqual(res, 2);
    });
    
    it(`check if work in different type`, function(){
        const res = calculateNumber('DIVIDE',4,0);
        assert.strictEqual(res, 'error');
    });
    
    
});