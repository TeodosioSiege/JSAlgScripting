function reverseString(str) {
  let arr = str.split("");
  let reversedArr = [];
  for(let i = arr.length -1; i > -1; i--) {
    reversedArr.push(arr[i]);
  }
  str = reversedArr.join("");
  return str;
}

const reverseStringv2 =  str => {
  
  return str.split("")
            .reverse()
            .join("");
}

console.log(reverseStringv2("hello"));
console.log(reverseStringv2("Howdy"));
console.log(reverseStringv2("Greetings from Earth"));
