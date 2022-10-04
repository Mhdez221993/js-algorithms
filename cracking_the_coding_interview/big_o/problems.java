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

// The following code performs integer division. What is its runtime (assume a and b are both
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
