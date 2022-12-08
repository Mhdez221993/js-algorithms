function climbing_staircase(n) {
  if (n < 2) return 1;

  return climbing_staircase(n - 1) + climbing_staircase(n - 2);
}

console.log(climbing_staircase(4));
