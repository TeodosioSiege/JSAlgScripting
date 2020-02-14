function steamrollArray(arr) {
  // I'm a steamroller, baby
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == undefined || typeof arr[i] == "string") {
      newArr.push(arr[i]);
    } else {
      newArr = newArr.concat(steamrollArray(arr[i]));
    }
  }
  return newArr;
}

steamrollArray([[["a"]], [["b"]]]);
