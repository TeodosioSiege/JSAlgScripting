function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/([a-z])([A-Z])/g,"$1 $2");
  let regExp = /[\W-_]/g;
  
  str = str.replace(regExp,"-").toLowerCase();
  return str;
}

console.log(spinalCase('ThisIsSpinalTap'));
