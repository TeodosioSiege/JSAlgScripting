function sumAll(arr) {
  let newArr = arr.sort(function(a,b){return a - b});
  let sum = newArr[0];
  for(let i = newArr[0] + 1; i < newArr[newArr.length - 1] + 1;
   i++){
      sum += i;
  }
  return sum;
}

console.log(sumAll([4, 1]));
