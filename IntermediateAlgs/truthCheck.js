function truthCheck(collection, pre) {
  // Is everyone being true?
  for (let i = 0; i < collection.length; i++) {
    if (!Boolean(collection[i][pre])) {
      return false;
    }
  }
  return true;
}

let truthy = truthCheck(
  [
    { name: "Pete", onBoat: true },
    { name: "Repeat", onBoat: true, alias: "Repete" },
    { name: "FastForward", onBoat: true }
  ],
  "onBoat"
);
//console.log(truthy);
