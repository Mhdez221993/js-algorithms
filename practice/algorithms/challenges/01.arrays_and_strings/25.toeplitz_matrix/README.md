# Toeplitz Matrix

A Toeplitz matrix is a matrix where every left-to-right-descending diagonal has the same element.
Given a non-empty matrix <code>arr</code>, write a function that returns true if and only if it is a Toeplitz matrix.
The matrix can be any dimensions, not necessarily square.

For example

<pre>
[[1, 2, 3, 4], 
 [5, 1, 2, 3], 
 [6, 5, 1, 2]]
</pre>

is a Toeplitz matrix, so we should return <code>true</code>, while

<pre>
[[1, 2, 3, 4], 
[5, 1, 9, 3], 
[6, 5, 1, 2]]
</pre>

isn’t a Toeplitz matrix, so we should return <code>false</code>.

## C++ Resources

* [programiz_c++](https://www.programiz.com/cpp-programming/vectors)
