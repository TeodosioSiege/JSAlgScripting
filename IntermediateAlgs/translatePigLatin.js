function translatePigLatin(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  let pig = str;
  if (vowel.indexOf(pig[0]) > -1) {
    pig += "way";
  } else {
    let cluster = "";
    let arr = str.split("");
    let i = 0;
    while (vowel.indexOf(pig[i]) == -1 && i < str.length) {
      cluster += pig[i];
      arr.shift();
      i++;
    }
    pig = arr.join("") + cluster + "ay";
  }
  return pig;
}

console.log(translatePigLatin("rhythm"));
