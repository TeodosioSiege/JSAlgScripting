function titleCase(str) {
  return str.split(" ")
            .map(string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())
            .join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
