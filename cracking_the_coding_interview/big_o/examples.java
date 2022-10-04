// Example 1
// What is the runtime of the below code?
void foo(int[] array) {
  int sum = 0;
  int product = 1;
  for(int i = 0; i < array.length; i++) {
    sum += array[i];
  }
  for(int i = 0; i < array.length; i++) {
    product *= array[i];
  }
  System.out.println(sum + ", " + product);
}
// This will take O(N) time. The fact that we iterate through the array twice doesn't matter.

// Example 2
// What is the runtime of the below code?
void printPairs(int[] array) {
  for (int i = 0; i < array.length; i++) {
    for (int j = 0; j < array.length; j++) {
      System.out.println(array[i] + ", " + array[j]);
    }
  }
}
// The inner for loop has O ( N) iterations and it is called N times. Therefore, the runtime is O( N^2).

// Example 3
// This is very similar code to the above example, but now the inner for loop starts at i + 1.
void printUnorderedPairs(int[] array) {
  for (int i = 0; i < array.length; i++) {
    for (int j = i + 1; j < array.length; j++) {
      System.out.println(array[i] + ", " + array[j]);
    }
  }
}
// We know that the outer loop runs N time
// Since the inner loop does N/2 work on average and it is run N times, the total work is N^2/2 which is O(N^2)

// Example 4
// This is similar to the above, but now we have two different arrays.
void printUnorderedPairs (int[] arrayA, int[] arrayB) {
  for (int i = 0; i < arrayA.length; i++) {
    for (int j = 0; j < arrayB.length; j++) {
      if (arrayA[i] < arrayB.length; j++) {
        System.out.println(arrayA[i] + ", " + arrayB[j]);
      }
    }
  }
}
// For each element of array A, the inner for loop goes through b iterations, where b = arrayB. length.
// lf a = arrayA.length,then the runtime is O(ab).

// Examples 5
// What about this strange bit of code?
void printUnorderedPairs (int[] arrayA, int[] arrayB) {
  for (int i = 0; i < arrayA.length; i++) { // O(a)
    for (int j = 0; j < arrayB.length; j++) { // O(b)
      for (int k = 0; k < 100000; k++) { // O(1)
        System.out.println(arrayA[i] + "," arrayB[j]); // O(1)
      }
    }
  }
}
// Nothing has really changed here. 100,000 units of work is still constant, so the runtime is 0(ab).

// Example 6
// The following code reverses an array. What is its runtime?
void reverse (int[] array) {
  for (int i = 0; i < array.length / 2; i++) {
    int other = array.length - i - 1;
    int temp = array[i];
    array[i] = array[other];
    array[other] = temp;
  }
}
// This algorithm runs in O ( N) time. The fact that it only goes through half of the array (in terms of iterations)
// does not impact the big O time.

// Example 7
// Which of the following are equivalent to O(N)? Why?
/*
  O(N + P), where P < N/2
  O(2N)
  O(N + log N)
  O(N + M)

  Let's go through these.
  • If P < X, then we know that N is the dominant term so we can drop the 0( P).
  • 0(2N) isO(N) since we drop constants.
    48 Cracking the Coding Interview, 6th Edition
    VI I Big 0
  • O(N) dominatesO(log N),so we can drop theO(log N).
    There is no established relationship between N and M, so we have to keep both variables in there.
    Therefore, all but the last one are equivalent to O(N).
*/


/*
Examples 8
Suppose we had an algorithm that took in an array of strings, sorted each string, and then sorted the full
array. What would the runtime be?

• Let s be the length of the longest string.
• Let a be the length of the array.
• Sorting each string is 0( s log s).
• We have to do this for every string (and there are a strings), so that's 0( a* s log s).
• Now we have to sort all the strings. There are a strings, so you'll may be inclined to say that this takes O ( a log a) time.
  This is what most candidates would say. You should also take into account that you need
  to compare the strings. Each string comparison takes O(s) time. There are O(a log a) comparisons,
  therefore this will take 0( a*s log a) time.
If you add up these two parts, you get 0( a* s ( log a + log s)).
*/

// Example 9
// The following simple code sums the values of all the nodes in a balanced binary search tree. What is its runtime?
int sum (Node node) {
  if (node == null) {
    return 0;
  }
  return sum(node.left) + node.value + sum(node.right);
}
// Therefore, the runtime will be linear in terms of the number of nodes. If there are N nodes, then the runtime
// is O(N).

// Example 10
// The following method checks if a number is prime by checking for divisibility on numbers less than it. It only
// needs to go up to the square root of n because if n is divisible by a number greater than its square root then
// it's divisible by something smaller than it.
boolean isPrime (int n) {
  for (int x = 2; x * x <= n; x++) {
    if (n %  == 0) {
      return false;
    }
  }
  return true;
}
// This runs in O(n) time.

// Example 11
// The following code computes n ! (n factorial). What is its time complexity?
int factorial (int n) {
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
// This is just a straight recursion from n to n-1 to n-2 down to 1. It will take O ( n) time

// Example 12
// This code counts all permutations of a string.
void permutation (String str) {
  permutation(str, "");
}

void permutation (String str, String prefix) {
  if (str.length() == 0) {
    System.out.println(prefix);
  } else {
    for (int i = 0; i < str.length(); i++) {
      String rem = str.substring(0, i) + str.substring(i + 1);
      permutation(rem, prefix + str.charAt(i));
    }
  }
}
// Since we are calling permutation 0(n * n!) times (as an upper bound), and each one takes 0(n) time,
// the total runtime will not exceed O(n^2 * n!)

// Example 13
// The following code computes the Nth Fibonacci number.
int fib (int n) {
  if (n <= 0) return 0;
  else if (n == 1) return 1;
  return fib (n - 1) + fib (n - 2);
}
// We can use the earlier pattern we'd established for recursive calls: O(branches^depth).
// There are 2 branches per call, and we go as deep as N, therefore the runtime is O(2^N).