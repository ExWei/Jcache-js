var should = require("should");
var jcache = require("../lib/jcache.js");
describe("Basic functions", function () {
    describe("Add", function () {
        it("Should return true", function () {
            jcache.add("one", "oneValue").should.be.true;
            jcache.add(2, 5).should.be.true;
        });
    });
    describe("Get", function () {
        it("Should return oneValue", function () {
            jcache.get("one").should.be.equal("oneValue");
            jcache.get(2).should.be.equal(5);
        });
    });
    describe("Remove", function () {
        it("Should remove value with id one", function () {
            jcache.remove("one").should.equal(true);
            jcache.remove(2).should.equal(true);
        });
        it("Should throw error when trying to get removed value", function () {
            (function(){ jcache.get("one"); }).should.throw(/not exists/);
        })
    });
    describe("Exists", function () {
        it("Should return true", function() {
            jcache.add("one", "oneValue");
            jcache.add(2, 5);
            jcache.exists("one").should.be.true;
            jcache.exists(2).should.be.true;
        });
        it("Should return false", function() {
            jcache.exists("someString").should.be.false;
            jcache.exists(3).should.be.false;
        });
    });
    describe("Clear", function () {
        it("Should clear cache", function() {
            jcache.clear().should.be.true;
        });
        it("Values should be not exists", function() {
            jcache.exists("one").should.be.false;
            jcache.exists(2).should.be.false;
        });
    });
});
