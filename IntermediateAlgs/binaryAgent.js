function binaryAgent(str) {
  let wordArr = str.split(' ');
  for(let i = 0; i< wordArr.length; i++){
    let decimal = 0;
    for(let j = 0; j < wordArr[i].length; j++){
      decimal += wordArr[i][j] * Math.pow(2,7 - j);
    }
    wordArr[i] = decimal;
  }
  for(let i = 0; i< wordArr.length; i++){
    wordArr[i] = String.fromCharCode(wordArr[i]);
  }
  str = wordArr.join('');
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
