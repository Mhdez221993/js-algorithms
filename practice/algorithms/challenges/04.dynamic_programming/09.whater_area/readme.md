## Water Area

  You're given an array of non-negative integers where each non-zero integer
  represents the height of a pillar of width 1. Imagine water being
  poured over all of the pillars; write a function that returns the surface area
  of the water trapped between the pillars viewed from the front. Note that
  spilled water should be ignored.

  You can refer to the first three minutes of this question's video explanation
  for a visual example.

## Sample Input

<pre>
  heights = [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]
</pre>

## Sample Output

<pre>
  48

  // Below is a visual representation of the sample input.
  // The dots and vertical lines represent trapped water and pillars, respectively.
  // Note that there are 48 dots.
  //        |
  //        |
  //  |.....|
  //  |.....|
  //  |.....|
  //  |..|..|
  //  |..|..|
  //  |..|..|.....|
  //  |..|..|.....|
  // _|..|..|..||.|
</pre>

## Hint 1

  In order to calculate the amount of water above a single point in the input array, you must know the height of the tallest pillar to its left and the height of the tallest pillar to its right.

## Hint 2

  If a point can hold water above it, then the smallest of the two heights mentioned in Hint #1 minus the height at that respective point should lead you to the amount of water above it.

## Hint 3

  Try building an array of the left and right max heights for each point in the input array. You should be able to build this array and to compute the final amount of water above each point in just two loops over the input array.

## Optimal Space & Time Complexity

  O(n) time | O(1) space - where n is the length of the input array
