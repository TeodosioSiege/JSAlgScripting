function convertToRoman(num) {
  let arabic = num;
  let roman = "";

  if (arabic >= 1000) {
    for (let i = 0; i < Math.floor(arabic / 1000); i++) {
      roman += "M";
    }
    arabic -= Math.floor(arabic / 1000) * 1000;
  }
  if (arabic >= 900) {
    roman += "CM";
    arabic -= 900;
  }
  if (arabic >= 500) {
    roman += "D";
    arabic -= 500;
  }
  if (arabic >= 400) {
    roman += "CD";
    arabic -= 400;
  }
  if (arabic >= 100) {
    for (let i = 0; i < Math.floor(arabic / 100); i++) {
      roman += "C";
    }
    arabic -= Math.floor(arabic / 100) * 100;
  }
  if (arabic >= 90) {
    roman += "XC";
    arabic -= 90;
  }
  if (arabic >= 50) {
    roman += "L";
    arabic -= 50;
  }
  if (arabic >= 40) {
    roman += "XL";
    arabic -= 40;
  }
  if (arabic >= 10) {
    for (let i = 0; i < Math.floor(arabic / 10); i++) {
      roman += "X";
    }
    arabic -= Math.floor(arabic / 10) * 10;
  }
  if (arabic >= 9) {
    roman += "IX";
    arabic -= 9;
  }
  if (arabic >= 5) {
    roman += "V";
    arabic -= 5;
  }
  if (arabic >= 4) {
    roman += "IV";
    arabic -= 4;
  }
  if (arabic >= 1) {
    for (let i = 0; i < Math.floor(arabic / 1); i++) {
      roman += "I";
    }
    arabic -= Math.floor(arabic / 1) * 1;
  }

  console.log(arabic);
  console.log(roman);
  return roman;
}

convertToRoman(3999);
