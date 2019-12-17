function repeatStringNumTimes(str, num) {
  // repeat after me
  let repeatedString = "";
  for (let i = num; i > 0; i--) {
    repeatedString += str;
  }
  return repeatedString;
}

console.log(repeatStringNumTimes("abc", 3));


const repeatStringNumTimesv2 = (str, num) => {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimesv2(str, num - 1);
  }
}

console.log(repeatStringNumTimesv2('hi',1));

const repeatStringNumTimesv3 = (str, num) => {
  let newStr = "";
  while (num > 0) {
    newStr+= str;
    num--;
  }
  return newStr;
}

console.log(repeatStringNumTimesv3('hi',3));

const repeatStringNumTimesv4 = () => {
  return true;
}