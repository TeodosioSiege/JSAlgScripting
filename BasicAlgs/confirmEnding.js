function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let newTarget = `.*${target}$`;
  let regex = new RegExp(newTarget);
  let result =  regex.test(str);
  return result;
}

console.log(confirmEnding("Bastian", "n"));
