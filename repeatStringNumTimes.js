function repeatStringNumTimes(str, num) {
  // repeat after me
  let repeatedString = "";
  for (let i = num; i > 0; i--) {
    repeatedString += str;
  }
  return repeatedString;
}

console.log(repeatStringNumTimes("abc", 3));
