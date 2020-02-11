function smallestCommons(arr) {
  let newArr = [];
  
  for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
    newArr.push(i);
  }
  const primeFactors = (num) => {
    let primeArr = [];
    for(let i = 2; i <= num; i++){
      while(num % i == 0){
      primeArr.push(i);
      num /= i;
    }
    }
    return primeArr;
  }
  const gcf = (arr1, arr2) => {
    let returnVal = 1;
    let mutablearr2 = [...arr2];
    if(mutablearr2.includes(arr1[0])){
      returnVal *= arr1[0];
      console.log(mutablearr2.indexOf(arr1[0]));
    }
    console.log(returnVal);
    console.log(mutablearr2);
  }
  gcf([2,2],[2,2,2]);
}


smallestCommons([2, 10]);
