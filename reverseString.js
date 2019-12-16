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

const reverseStringv3 = str => {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i-- ) {
    reversedString += str[i];
  }
  return reversedString;
}

const reverseStringv4 = str => {
  if (str.length == 1) {
    return str;
  } else {
    let reversedString = str[str.length - 1] + reverseStringv4(str.slice(0,str.length - 1));
    return reversedString;
  }
}

const reverseStringv5 = (str, reversedString = "") => {
    if (str.length == 0) {
      return reversedString;
    } else {
      return reverseStringv5(str.slice(0,str.length - 1),reversedString += str[str.length - 1]);
    }
}
console.log(reverseStringv5('hi'));
console.log(reverseStringv5('hello'));
console.log(reverseStringv5('Howdy'));
console.log(reverseStringv5('Greetings from Earth'));