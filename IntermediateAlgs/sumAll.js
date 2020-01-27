function sumAll(arr) {
  let newArr = arr.sort(function(a,b){return a - b});
  let sum = 0;
  for(let i = newArr[0]; i <= newArr[newArr.length - 1];
   i++){
    sum += i;
  }
  return sum;
}

//console.log(sumAll([4, 1]));
const sumAllv2 = arr => {
  let sum = 0;
  for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
    sum += i;
  }
  return sum;
}

sumAllv2([4,1]);

