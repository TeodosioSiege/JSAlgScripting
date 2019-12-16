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

console.log(repeatStringNumTimesv2('hi',2));

