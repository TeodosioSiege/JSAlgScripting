function rot13(str) {
  // LBH QVQ VG!
  let arr = str.split("");
  let newArr = arr.map(decoder);
  function decoder(code) {
    if (/\w/.test(code)) {
      let newCharcode = code.charCodeAt() - 13;
      if (newCharcode < 65) {
        newCharcode += 26;
      }
      code = String.fromCharCode(newCharcode);
    }
    return code;
  }
  return newArr.join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
