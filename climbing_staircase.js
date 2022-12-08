function climbing_staircase(n) {
  if (n < 2) return 1;

  return climbing_staircase(n - 1) + climbing_staircase(n - 2);
}

function climbing_staircase_with_loop(n) {
  const stairs = [1, 2];
  for (let i = 2; i <= n; i++) {
    stairs[i] = stairs[i - 1] + stairs[i - 2];
  }
  return stairs[n - 1];
}

console.log(climbing_staircase(4));
console.log(climbing_staircase_with_loop(4));
