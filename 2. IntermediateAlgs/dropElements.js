function dropElements(arr, func) {
  // Drop them elements.
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr = arr.slice(arr.indexOf(arr[i]));
      break;
    }
  }
  return newArr;
}

dropElements([1, 2, 3], function(n) {
  return n < 3;
});
