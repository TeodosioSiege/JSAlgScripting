function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr = [...collection];
  let sourceKeys = Object.keys(source);
  function filterArr(filtArr, filtKey){
  arr = filtArr.filter(obj => obj[filtKey] == source[filtKey]);
  }
  for(let i = 0; i < sourceKeys.length; i++){
    filterArr(arr, sourceKeys[i]);
  }
  
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
