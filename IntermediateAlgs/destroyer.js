function destroyer(arr,...args) {
  // Remove all the values
  let argArr = [...args];
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(!argArr.includes(arr[i])){
      newArr.push(arr[i]);
    }
  }
  
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
