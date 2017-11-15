var expect = require("chai").expect;
var prueba = require("../prueba");

describe("Math operation", function () {
   describe("Add operation", function () {
        it("res = 4", function () {
            var res = prueba.add(2,2);

            expect(res).to.equal(4);
        });
    });
    
    describe("Substract operation", function () {
        it("res = 0", function () {
            var res = prueba.substract(2,2);

            expect(res).to.equal(0);
        });
    });
    
    describe("Multiply operation", function () {
        it("res = 4", function () {
            var res = prueba.multiply(2,2);

            expect(res).to.equal(4);
        });
    });
    
     describe("Divide operation", function () {
        it("res = 1", function () {
            var res = prueba.divide(2,2);

            expect(res).to.equal(1);
        });
    });
});
