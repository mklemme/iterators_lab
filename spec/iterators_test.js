// Test framework
var expect = require('chai').expect;

// Test module variables
var Iterators = require('../iterators.js');

// global variables
var myarr;

// helper functions
var helperAdd = function (a){
  return (a + 1) ;
};
var helperIsEven = function (a){
  if( a % 2 === 0){
    return true;
  } else {
    return false; }
};

describe('Iterators', function () {
  describe('Max function', function () {
    beforeEach(function () {
      myArr = [66,22,67,34];
    });
    it('should return the maximum in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  });
  describe('Min function', function () {
    beforeEach(function () {
      myArr = [66,22,67,34];
    });
    it('should return the minimum in an array', function () {
      expect(Iterators.min(myArr)).to.equal(22);
    });
    it('should return Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.min(myArr)).to.equal(Infinity);
    });
  });
  describe('forEach function', function(){
    beforeEach(function () {
      myArr = [66,22,67,34];
    });
    it("should return myArr + 1 ", function(){
      expect(Iterators.forEach(myArr, helperAdd)).to.eql([67,23,68,35]);
    }
    );
  });
  describe('Map Function', function(){
    beforeEach(function () {
      myArr = [66,22,67,34];
    });
    it("should return myArr + 1 ", function(){
      expect(Iterators.map(myArr, helperAdd)).to.eql([67,23,68,35]);
    }
    );
  });
  describe('Filter Function', function(){
    beforeEach(function () {
      myArr = [66,22,67,34];
      });
    it("should return only if the elements are even", function(){
      expect(Iterators.filter(myArr, helperIsEven)).to.eql([66,22,34]);
    }
    );
  });
  describe('Reduce Function', function(){
    var inital;
    beforeEach(function () {
      myArr = [1,2,3,4];
      initial= 10;
      it("should start from ten then reduce array, resulting in 20", function(){
        expect(Iterators.reduce(initial, myArr)).to.equal(20);
      }
      );
    });
  });
});