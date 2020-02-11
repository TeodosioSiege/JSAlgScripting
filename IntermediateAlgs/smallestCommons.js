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
    for(let i = 0; i < arr1.length; i++){if(mutablearr2.includes(arr1[i])){
      returnVal *= arr1[i];
      let itemRemove = mutablearr2.indexOf(arr1[0]);
      let start = mutablearr2.slice(0,itemRemove);
      let end = mutablearr2.slice(itemRemove + 1);
      mutablearr2 = start.concat(end);
    }}
     return returnVal;
  }
}


smallestCommons([2, 10]);
