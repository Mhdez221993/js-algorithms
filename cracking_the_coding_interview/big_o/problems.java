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

// 6 The following code computes the [integer] square root of a number. If the number is not
// a perfect square (there is no integer square root), then it returns -1. It does this by trying
// increasingly large numbers until it finds the right value (or is too high). What is its runtime?
int sqrt(int n) {
  for (int guess = 1; guess * guess <= n; guess++) {
    if (guess * guess == n) {
      return guess;
    }
  }
  return -1;
}
// O(log n)

// 7 If a binary search tree is not balanced, how long might it take (worst case) to find an element
// in it?
// O(n)

// 8  You are looking for a specific value in a binary tree, but the tree is not a binary search tree.
// What is the time complexity of this?
// O(n)

// 9 The appendToNew method appends a value to an array by creating a new, longer array and
// returning this longer array. You've used the appendToNew method to create a copyArray
// function that repeatedly calls appendToNew. How long does copying an array take?
int[] copyArray(int[] array) {
  int[] copy = new int[0];
  for (int value : array) {
    copy = appendToNew(copy, value);
  }
  return copy;
}

int appendToNew(int [] array, int value) {
  // cpy all elemts over to new array
  int[] bigger = new int[array.length + 1];
  for (int i = 0; i < array.length; i++) {
    bigger[i] = array[i];
  }

  // add new elemet
  bigger[bigger.length - 1] = value;
  return bigger;
}
// O(n^2)