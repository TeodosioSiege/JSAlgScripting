function uniteUnique(...args) {
  let newArr = args[0];
  for(let i = 1; i < args.length; i++){
    
    for(let j = 0; j < args[i].length; j++){
      if(!newArr.includes(args[i][j])){
        newArr.push(args[i][j]);
      }
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
