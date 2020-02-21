function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let cidObj = {};
  cid.forEach(arr => (cidObj[arr[0]] = arr[1]));
  let returnObj = {};
  let remainingVal = change;
  let totalValue = cid
    .map(arr => arr[1])
    .reduce((a, b) => a + b)
    .toFixed(2);
  const denomObj = {
    "ONE HUNDRED": 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01
  };
  //check status key
  if (totalValue > change) {
    returnObj["status"] = "OPEN";
  } else if (totalValue < change) {
    returnObj["status"] = "INSUFFICIENT_FUNDS";
    returnObj["change"] = [];
    return returnObj;
  } else {
    returnObj["status"] = "CLOSED";
    returnObj["change"] = cid;
    return returnObj;
  }
  //check change key
  console.log(change);
  returnObj["change"] = [];
  const cashCal = denomination => {
    if (remainingVal > cidObj[denomination]) {
      remainingVal -= cidObj[denomination];
      remainingVal = remainingVal.toFixed(2);
      returnObj["change"].push([denomination, cidObj[denomination]]);
      cidObj[denomination] = 0;
    } else if (remainingVal < cidObj[denomination]) {
      returnObj["change"].push([
        denomination,
        Math.floor((remainingVal / denomObj[denomination]).toFixed(2)) *
          denomObj[denomination]
      ]);
      remainingVal = (remainingVal % denomObj[denomination]).toFixed(2);
    }
  };

  while (remainingVal > 0) {
    if (remainingVal > 100 && cidObj["ONE HUNDRED"] > 0) {
      cashCal("ONE HUNDRED");
    } else if (remainingVal > 20 && cidObj["TWENTY"] > 0) {
      cashCal("TWENTY");
    } else if (remainingVal > 10 && cidObj["TEN"] > 0) {
      cashCal("TEN");
    } else if (remainingVal > 5 && cidObj["FIVE"] > 0) {
      cashCal("FIVE");
    } else if (remainingVal > 1 && cidObj["ONE"] > 0) {
      cashCal("ONE");
    } else if (remainingVal > 0.25 && cidObj["QUARTER"] > 0) {
      cashCal("QUARTER");
    } else if (remainingVal > 0.1 && cidObj["DIME"] > 0) {
      cashCal("DIME");
    } else if (remainingVal > 0.5 && cidObj["NICKEL"] > 0) {
      cashCal("NICKEL");
    } else if (
      remainingVal > 0.01 &&
      cidObj["PENNY"] > 0 &&
      cidObj["PENNY"] > remainingVal
    ) {
      cashCal("PENNY");
    } else {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
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
