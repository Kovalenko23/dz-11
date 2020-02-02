var some = function(arr, callback, thisArg) {
    for (var i = 0; i < arr.length; i =+ 1) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        return true;
      }
    }
    return false;
  };

  var filter = function(arr, callback, thisArg) {
    var result = [];
    for (var i = 0; i < arr.length; i =+ 1) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  };

  