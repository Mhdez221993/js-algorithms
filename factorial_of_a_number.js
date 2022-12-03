function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(0));

function factorial2(n) {
  let product = 1;
  for (let i = 2; i <= n; i++) {
    product *= i;
  }

  return product;
}

console.log(factorial2(0));
