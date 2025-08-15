function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      newStr += char;
    }
  }

  return newStr.trim().toUpperCase();
}
