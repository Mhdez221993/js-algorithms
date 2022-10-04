// 1 The following code computes the product of a and b. What is its runtime?
int product(int a, int b) {
  int sum = 0; // O(1)
  for (int i = 0; i < b; i++) { // O(b)
    sum += a; // O(1)
  }
  return sum;
}
// O(b)

// 2 The following code computes a^b What is its runtime?
int power(int a, int b) {
  if (b < 0) {
    return 0; // error O(1)
  } else if (b == 0) {
    return 1; // O(1)
  } else {
    return a * power(a, b - 1);  // O(b)
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
  while (sum <= a) { // O(a / b)
    sum += b;
    count++;
  }
  return count;
}
// O(a / b)

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
// O(sqrt(n))

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
  for (int value : array) { // O(n)
    copy = appendToNew(copy, value); // O(n)
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

// 10 The following code sums the digits in a number. What is its big O time?
int sumDigits(int n) {
  int sum = 0;
  while (n > 0) {
    sum += n % 10;
    n /= 10;
  }

  return sum;
}
// O(log n)

// 11 The following code prints all strings of length k where the characters are in sorted order. It
// does this by generating all strings of length k and then checking if each is sorted. What is its
// runtime?
int numChars = 26;

void printSortedStrings(int remaining) {
  printSortedStrings(returning, "");
}

void printSortedStrings(int remaining, String prefix) {
  if (remaining == 0) {
    if (isInOrder(prefix)) { // O(p)
      System.out.println(prefix); // O(p)
    }
  } else {
    for (int i = 0; i < numChars; i++) { // O(c)
      char c = ithLetter(i); // O(1)
      printSortedStrings(remaining - 1; prefix + c); // O(r)
    }
  }
}

boolean isInOrder(String s) {
  for (int i = 1; i < s.length(); i++) {
    int prev = ithLetter(s.charAt(i - 1));
    int curr = ithLetter(s.charAt(i));
    if (prev > curr) {
      return false;
    }
  }
  return true
}

char ithLetter(int i) {
  return (char) (((int) 'a') + i);
}

// O(Kc^k)

// 12  The following code computes the intersection (the number of elements in common) of two
// arrays. It assumes that neither array has duplicates. It computes the intersection by sorting
// one array (array b) and then iterating through array a checking (via binary search) if each
// value is in b. What is its runtime?
int intersection(int[] a, int[] b) {
  mergesort(b); // O(b log b)
  int intersect = 0; // O(1)

  for (int x : a) { // O(a)
    if (binarySearch(b, x) >= 0) { // O(log b)
      intersect++; // O(1)
    }
  }

  return intersect;
}
// O(b log b + a log b)

// Solutions

// 1. O( b). The for loop just iterates through b.
// 2. 0 ( b). The recursive code iterates through b calls, since it subtracts one at each level.
// 3. 0 ( 1). It does a constant amount of work.
// 4. 0( X ). The variable count will eventually equal X. The while loop iterates count times. Therefore, it
// iterates X times.
// 5. 0 ( log n). This algorithm is essentially doing a binary search to find the square root. Therefore, the
// runtime isO(log n).
// 6. O(sqrt(n) ). This is just a straightforward loop that stops when guess*guess > n (or, in other
// words, when guess > sqrt(n)).
// 58 Cracking the Coding Interview, 6th Edition
// VI I Big 0
// 7. O(n), where n is the number of nodes in the tree. The max time to find an element is the depth tree. The
// tree could be a straight list downwards and have depth n.
// 8. O(n ). Without any ordering property on the nodes, we might have to search through all the nodes.
// 9. O ( n2
// ), where n is the number of elements in the array. The first call to appendToNew takes 1 copy. The
// second call takes 2 copies. The third call takes 3 copies. And so on. The total time will be the sum of 1
// through n, which is O ( n2).
// 10.0( log n). The runtime will be the number of digits in the number. A number with d digits can have a
// value up to 10d
// . If n = 10d
// , then d = log n. Therefore, the runtime is 0( log n).
// 11.0( kck), where k is the length of the string and c is the number of characters in the alphabet. It takes
// 0( c
// k) time to generate each string. Then, we need to check that each of these is sorted, which takes
// O(k) time.
// 12.0(b log b + a log b).First,we have to sort arrayb,which takesO(b log b) time.Then,for each
// element in a, we do binary search in 0( log b) time. The second part takes O(a log b) time.