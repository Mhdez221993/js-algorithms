## Pairs with Specific Difference

Given an array <code>arr</code> of distinct integers and a nonnegative integer <code>k</code>, write a function <code>findPairsWithGivenDifference</code> that returns an array of all pairs <code>[x,y]</code> in <code>arr</code>, such that <code>x - y = k</code>. If no such pairs exist, return an empty array.
Note: the order of the pairs in the output array should maintain the order of the <code>y</code> element in the original array.
Examples:
<pre>
input:  arr = [0, -1, -2, 2, 1], k = 1
output: [[1, 0], [0, -1], [-1, -2], [2, 1]]

input:  arr = [1, 7, 5, 3, 32, 17, 12], k = 17
output: []
</pre>
Constraints:

[time limit] 5000ms

[input] array.integer <code>arr</code>

0 ≤ arr.length ≤ 100

[input]integer <code>k</code>

k ≥ 0

[output] array.array.integer

>
