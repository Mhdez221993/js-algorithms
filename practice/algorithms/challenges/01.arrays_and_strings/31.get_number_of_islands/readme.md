## Island Count

Given a 2D array <code>binaryMatrix</code> of <code>0s</code> and <code>1s</code>, implement a function <code>getNumberOfIslands</code> that returns the number of islands of <code>1s</code> in <code>binaryMatrix</code>.
An island is defined as a group of adjacent values that are all <code>1s</code>. A cell in <code>binaryMatrix</code> is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of <code>1</code> are <u>not</u> part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).
Explain and code the most efficient solution possible and analyze its time and space complexities.
Example:
<pre>
input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]

output: 6
# since this is the number of islands in binaryMatrix.
# See all 6 islands color-coded below.
</pre>

<img src="./island.png" alt="alt" title="binaryMatrix">

Constraints:

[time limit] 5000ms

[input] array.array.int <code>binaryMatrix</code>

1 ≤ binaryMatrix.length ≤ 100
1 ≤ binaryMatrix[i].length ≤ 100

[output] integer
