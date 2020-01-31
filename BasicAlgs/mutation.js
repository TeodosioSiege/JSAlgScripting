function mutation(arr) {
  let newArr = arr.map(element => {
     return element.toLowerCase().split("");
  });
  for(let i = 0; i < newArr[1].length;i++){
    if (newArr[0].indexOf(newArr[1][i]) == -1) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "Hello"]));
