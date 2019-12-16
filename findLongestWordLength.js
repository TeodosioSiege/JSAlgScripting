function findLongestWordLength(str) {
  let arr = str.split(" ");
  let longestStr = 0;
  for (let i = 0; i < arr.length; i++){
    if(arr[i].length > longestStr){
      longestStr = arr[i].length;
    }
  }
  return longestStr;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));