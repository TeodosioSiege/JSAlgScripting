function myReplace(str, before, after) {
  let arr = str.split(" ");
  let regExp = /^[A-Z]/;
  let capitalize;
  regExp.test(arr[arr.indexOf(before)])
    ? (capitalize = after.charAt(0).toUpperCase() + after.slice(1))
    : (capitalize = after);
  arr[arr.indexOf(before)] = capitalize;
  return arr.join(" ");
}

console.log(
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);
