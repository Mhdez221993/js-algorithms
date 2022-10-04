// 1 The following code computes the product of a and b. What is its runtime?
int product(int a, int b) {
  int sum = 0;
  for (int i = 0; i < b; i++) {
    su += a;
  }
  return sum;
}
// O(a*b)

// 2 The following code computes a^b What is its runtime?
int power(int a, int b) {
  if (b < 0) {
    return 0; // error
  } else if (b == 0) {
    return 1;
  } else {
    return a * power(a, b - 1);
  }
}
// O(b)

// 3 The following code computes a % b. What is its runtime?
int mod(int a, int b) {
  if (b <= 0) {
    return -1;
  }
  int div = a / b;
  return a - div * b;
}
// O(1)

// 4 The following code performs integer division. What is its runtime (assume a and b are both
// positive)?
int div(int a, int b) {
  int count = 0; // O(1)
  int sum =  b; // O(1)
  while (sum <= a) { // O(log b * a)
    sum += b;
    count++;
  }
  return count;
}
// O(log b * a)

// 5 The following code computes the [integer] square root of a number. If the number is not a
// perfect square (there is no integer square root), then it returns -1. It does this by successive
// guessing. If n is 100, it first guesses 5O. Too high? Try something lower - halfway between 1
// and 5O. What is its runtime?
int sqrt(int n) {
  return sqrt_helper(n, 1, n);
}

int sqrt_helper(int n, int min, int max) {
  if (max < min) return -1; // no square root

  int guess = (min + max) / 2;
  if (guess * guess == n) { // found it!
    return guess;
  } else if (guess * guess < n) { // too low
    return sqrt_helper(n, guess + 1, max); // try  higher
  } else {
    return sqrt_helper(n, min, guess - 1); // try lower
  }
}
// O(log n)