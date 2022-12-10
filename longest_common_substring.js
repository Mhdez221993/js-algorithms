function longest_common_substring(str1, str2) {
  let longest = 0;

  let matrix = new Array(str1.length + 1)
    .fill(0)
    .map(() => new Array(str2.length + 1).fill(0));

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        if (matrix[i][j] > longest) longest = matrix[i][j];
      }
    }
  }

  console.log(longest);

  return longest;
}

longest_common_substring("java", "javascript");
