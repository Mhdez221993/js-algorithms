function fibonacci(n) {
  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}
// Big O(n)
// console.log(fibonacci(7));

function fib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}
// Big O(2^n)
console.log(fib(6));
