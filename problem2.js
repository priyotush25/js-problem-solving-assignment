// Problem-02 : Clean & Capitalize Characters

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  let newStr = "";

  for (let i = 0; i < str.length - 1; i++) {
    newStr = newStr.trim().toUpperCase() + str[i];
  }

  return newStr;
}

console.log(onlyCharacter(true));
