function palindrome(str) {
  // Good luck!
  let regExp = /[\W_]/g;
  let orig = str.replace(regExp, "").toLowerCase();
  let reverse = orig
    .split("")
    .reverse()
    .join("");
  return orig == reverse;
}

console.log(palindrome("nope"));
