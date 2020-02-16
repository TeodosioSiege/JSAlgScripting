function addTogether(...args) {
  let arr = [...args];

  if (arr.filter(a => typeof a == "number").length == 2) {
    return arr.reduce((a, b) => a + b);
  } else if (
    arr.filter(a => typeof a == "number").length == 1 &&
    arr.length == 1
  ) {
    return function(num) {
      if (typeof num == "number") {
        return arr[0] + num;
      }
    };
  }
  return undefined;
}

console.log(addTogether(2)([3]));
