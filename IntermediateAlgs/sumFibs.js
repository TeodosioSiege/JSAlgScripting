function sumFibs(num) {
  let arr = [1,1];
  while(arr[arr.length - 2] + arr[arr.length - 1] <= num){
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }
    let oddArr = arr.filter(item => item %2 != 0);
    return num == 1 ? 1 : oddArr.reduce((acc,curr) => acc + curr);
}
console.log(sumFibs(75025));
