function isToeplitz(arr) {
  if (arr.length === 1) {
    return true;
  }

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i].length === 1) {
      return true;
    }

    for (let j = 1; j < arr[i].length; j += 1) {
      if (arr[i][j] !== arr[i - 1][j - 1]) {
        return false;
      }
    }
  }

  return true;
}
