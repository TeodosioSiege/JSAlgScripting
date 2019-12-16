function factorialize(num) {
 if(num == 0) {
   return 1;
 } 
  for(let i = num - 1; i > 0; i--){
    num *= i;
  }
return num;
}


// console.log(factorialize(5));
// console.log(factorialize(10));
// console.log(factorialize(20));
// console.log(factorialize(0));



const factorializev2 = num => {
  if (num== 0) {
    return 1;
  } else {
    return num * factorializev2(num - 1);
  }
}

const factorializev3 = (num, factorial = 1) => {
    if (num == 0){
      return factorial;
    }else {
      return factorializev3(num - 1, factorial * num);
    }
}

// const factorializev4 = (num, factorial = 1) => {
//   return new Array(num)
//   .fill(undefined);
// }

console.log(factorializev4(5));