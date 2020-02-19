function pairElement(str) {
  let dna = [];
  function dnaJoiner(strand) {
    switch (strand) {
      case "A":
        return ["A", "T"];
        break;
      case "T":
        return ["T", "A"];
        break;
      case "C":
        return ["C", "G"];
        break;
      case "G":
        return ["G", "C"];
        break;
    }
  }
  for (let i = 0; i < str.length; i++) {
    dna.push(dnaJoiner(str[i]));
  }
  return dna;
}

console.log(pairElement("GCG"));
