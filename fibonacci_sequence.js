function fibonacci(n) {
  // O(1)
  let fib = [0, 1];

  // O(n)
  for (let i = 2; i < n; i++) {
    // O(1)
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  // O(1)
  return fib;
}

// Big O(n)

console.log(fibonacci(7));
