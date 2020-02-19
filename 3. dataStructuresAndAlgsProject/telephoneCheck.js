function telephoneCheck(str) {
  // Good luck!
  let regEpx = /^1{0,1}\s{0,1}([0-9]{3}|\([0-9]{3}\))[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$/;
  console.log(regEpx.test(str));
  return regEpx.test(str);
}

telephoneCheck("555-555-5555");
