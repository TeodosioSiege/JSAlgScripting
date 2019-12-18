function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  let index = arr.sort((a,b)=>{return a - b})
  .findIndex(element => element >= num);
  return index == -1 ? arr.length : index;
}


console.log(getIndexToIns([], 1));
