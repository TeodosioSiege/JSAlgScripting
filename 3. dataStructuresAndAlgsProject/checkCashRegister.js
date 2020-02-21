function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  let returnObj = {};
  // Here is your change, ma'am.
  console.log(change);
  let totalValue = cid
    .map(arr => arr[1])
    .reduce((a, b) => a + b)
    .toFixed(2);
  if (totalValue > change) {
    returnObj["status"] = "OPEN";
  }
  console.log(returnObj);
  return returnObj;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
