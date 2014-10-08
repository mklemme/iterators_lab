var iterators = {

    max: function (numList) {
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] > max) {
          max = numList[i];
        }
      }
      return max;
    },

    min: function (numList) {
      var min = Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] < min) {
          min = numList[i];
        }
      }
      return min;
    },

    forEach: function (numList, callback){
      var arr = [];
      for (var i = 0; i < numList.length; i++) {
          arr.push(callback(numList[i]));
        }

      return arr;
    },

    map: function (numList, callback){

      var arr = [];

      for (var i = 0; i < numList.length; i++) {
          arr.push(callback(numList[i]));
        }

      return arr;
    },

    filter: function (numList, callback){

      var arr = [] || arr;

      for (var i = 0; i < numList.length; i++) {
          if (callback(numList[i]) == true){
             arr.push(numList[i]);
           }
        }

      return arr;
    },

    reduce: function (initial, numList){

      var arr = 0;

      for (var i = 0; i < numList.length; i++) {
            arr = arr + numList[i];
        }

      arr = arr + initial;
      return arr;
    },


};

module.exports = iterators;