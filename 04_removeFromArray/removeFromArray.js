const removeFromArray = function(arr, num) {
  let arrRemove = [...arguments];
  arrRemove.shift();
  let result = [];


  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);

    for (let j = 0; j < arrRemove.length; j++) {
      if (arr[i] === arrRemove[j]) {
        result.pop();
        break;
      }
    }
  }

  return result;
};
// Do not edit below this line
module.exports = removeFromArray;
