function factorialize(num) {
 if(num == 0) {
   return 1;
 } 
  for(let i = num - 1; i > 0; i--){
    num *= i;
  }
return num;
}


console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));



const factorializev2 = num => {
  if (num==0) {
    return 1;
  }
}