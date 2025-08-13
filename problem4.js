function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let x of arr1) {
    for (let i of arr2) {
      if (arr1[x] === arr2[i]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

console.log(isSame([2, 5, 6], 256));
