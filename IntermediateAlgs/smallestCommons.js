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
  const gcfFinder = (num1, num2) => {
    let factors1 = primeFactors(num1);
    let factors2 = primeFactors(num2);
    let bigger;
    let smaller;
    let gcf = 1;
    if(factors1.length >= factors2.length){
      bigger = factors1;
      smaller = factors2;
    } else {
      bigger = factors2;
      smaller = factors1;
    } 
    for(let i = 0; i < smaller.length; i++){
      if(bigger.includes(smaller[i])){
      gcf *= smaller[i];
      let terminator = bigger.indexOf(smaller[i]);
      let start = bigger.slice(0,terminator);
      let end = bigger.slice(terminator + 1);
      bigger = start.concat(end);
    }
    }
    
    return gcf
  }
  gcfFinder(6,12);


  let lcm = newArr[newArr.length - 1];
  let factors1;
  let factors2;
  for(let i = newArr.length - 2; i >= 0; i--){
   let prev = lcm;
  let gcf = gcfFinder(lcm,newArr[i]);
   lcm *= (newArr[i])/ gcf;
  console.log(`${lcm} = (${newArr[i]} * ${prev}) / ${gcf}`);
  }
  
  return lcm;
}


smallestCommons([2, 10]);
