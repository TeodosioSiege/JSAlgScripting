function reverseString(str) {
  let arr = str.split("");
  let reversedArr = [];
  for(let i = arr.length -1; i > -1; i--) {
    reversedArr.push(arr[i]);
  }
  str = reversedArr.join("");
  return str;
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));
