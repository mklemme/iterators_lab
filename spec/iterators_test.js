var expect = require('chai').expect;
var Iterators = require('../iterators.js');

describe('Iterators', function () {
  describe('Max function', function () {
    var myArr;
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
    var myArr;
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
    var myArr;
    beforeEach(function () {
      myArr = [66,22,67,34];
      Addone = function (a){
        return (a + 1) ;
        };
    });
    it("should return myArr + 1 ", function(){
      expect(Iterators.forEach(myArr, Addone)).to.eql([67,23,68,35]);
    }

  );
});

  describe('#map', function(){

    var myArr;
    beforeEach(function () {
      myArr = [66,22,67,34];
      Addone = function (a){
        return (a + 1) ;
        };
    });
    it("should return myArr + 1 ", function(){
      expect(Iterators.map(myArr, Addone)).to.eql([67,23,68,35]);
    }

 );
});


  describe('#filter', function(){

    var myArr;
    beforeEach(function () {
      myArr = [66,22,67,34];

      DivisbleByTwo = function (a){
        if( a % 2 === 0){
          return true;
        } else {
          return false; }
        };

    });
    it("should return only elements divisible by two", function(){
      expect(Iterators.filter(myArr, DivisbleByTwo)).to.eql([66,22,34]);
    }
 );
});


  describe('#reduce', function(){

    var myArr;
    var inital;
    beforeEach(function () {
      myArr = [1,2,3,4];
      initial= 10;
    });

    it("should reduce array to 20 with initial value of 10", function(){
      expect(Iterators.reduce(initial, myArr)).to.equal(20);
    }

 );
});

});