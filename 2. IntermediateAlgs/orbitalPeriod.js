function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for (let i = 0; i < arr.length; i++) {
    arr[i]["orbitalPeriod"] = Math.round(
      Math.sqrt(Math.pow(arr[i]["avgAlt"] + earthRadius, 3) / GM) * 2 * Math.PI
    );
    delete arr[i]["avgAlt"];
    console.log(arr);
  }

  return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
