function titleCase(str) {
  return str.split(" ")
            .map(string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())
            .join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

String.prototype.replaceAt = function(index, character) {
  return (this.substr(0,index) + character + this.substr(index + character.length));
}

const titleCasev2 = str => {
  let title = str.split(" ");
  for  (let i = 0; i < title.length; i++){
    title[i] = title[i]
              .toLowerCase()
              .replaceAt(0,title[i].charAt(0).toUpperCase());
  }
  return title.join(" ");
}
console.log(titleCasev2("I'm a little tea pot"));
console.log(titleCasev2("sHoRt AnD sToUt"));
console.log(titleCasev2("HERE IS MY HANDLE HERE IS MY SPOUT"));