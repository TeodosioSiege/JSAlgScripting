function convertHTML(str) {
  // &colon;&rpar;
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "&") {
      arr[i] = "&amp;";
    } else if (arr[i] == "<") {
      arr[i] = "&lt;";
    } else if (arr[i] == ">") {
      arr[i] = "&gt;";
    } else if (arr[i] == '"') {
      arr[i] = "&quot;";
    } else if (arr[i] == "'") {
      arr[i] = "&apos;";
    }
  }
  let newStr = arr.join("");
  return newStr;
}

//console.log(convertHTML("abc"));

function convertHTMLv2(str) {
  // &colon;&rpar;
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "&":
        arr[i] = "&amp;";
        break;
      case "<":
        arr[i] = "&lt;";
        break;
      case ">":
        arr[i] = "&gt;";
        break;
      case '"':
        arr[i] = "&quot;";
        break;
      case "'":
        arr[i] = "&apos;";
        break;
    }
  }

  let newStr = arr.join("");
  return newStr;
}

//console.log(convertHTMLv2("Dolce & Gabbana"));

function convertHTMLv3(str) {
  // &colon;&rpar;
  const HTMLEnt = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (HTMLEnt.hasOwnProperty(arr[i])) {
      arr[i] = HTMLEnt[arr[i]];
    }
  }

  let newStr = arr.join("");
  return newStr;
}

//console.log(convertHTMLv3("Dolce & Gabbana"));

function convertHTMLv4(str) {
  // &colon;&rpar;
  const HTMLEnt = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str.replace(/[&<>"']/g, match => HTMLEnt[match]);
}

console.log(convertHTMLv4("Hamburgers < Pizza < Tacos"));
