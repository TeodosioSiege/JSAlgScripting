function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  let returnObj = {};
  let remainingVal = change;
  // Here is your change, ma'am.
  let totalValue = cid
    .map(arr => arr[1])
    .reduce((a, b) => a + b)
    .toFixed(2);
  //let cidObj = {};
  //check status
  if (totalValue > change) {
    returnObj["status"] = "OPEN";
  } else if (totalValue < change) {
    returnObj["status"] = "INSUFFICIENT_FUNDS";
  } else {
    returnObj["status"] = "CLOSED";
  }
  //check change key
  returnObj["change"] = [];
  if (remainingVal > 100) {
    returnObj["change"].push(["ONE HUNDRED", change]);
  } else if (remainingVal > 20) {
    returnObj["change"].push(["TWENTY", change]);
  } else if (remainingVal > 10) {
    returnObj["change"].push(["TEN", change]);
  } else if (remainingVal > 5) {
    returnObj["change"].push(["FIVE", change]);
  } else if (remainingVal > 1) {
    returnObj["change"].push(["ONE", change]);
  } else if (remainingVal > 0.25) {
    returnObj["change"].push(["QUARTER", change]);
  } else if (remainingVal > 0.1) {
    returnObj["change"].push(["DIME", change]);
  } else if (remainingVal > 0.5) {
    returnObj["change"].push(["NICKEL", change]);
  } else if (remainingVal > 0.01) {
    returnObj["change"].push(["PENNY", change]);
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

checkCashRegister(3.26, 100, [
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
