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

const findLongestWordLengthv2 = str => {
  return str
  .split(" ")
  .reduce((x,y)=>{ return Math.max(x, y.length)},0);  
}


console.log(findLongestWordLengthv2("The quick brown fox jumped over the lazy dog"));
