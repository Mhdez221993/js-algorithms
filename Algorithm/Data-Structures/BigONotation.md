# Big O Notation

The notation used to describe the <b>time complexity</b> and
<b>space complexity</b> of algorithms.

The speed and memory usage of an algorithm aren't necessarily fixed; they might change depending on the input. So how do we express the performance of an algorithm then?

Enter Big O Notation, a powerful tool that allows us to generalize the space-time complexity of an algorithm as a function of its input size.

Variables used in Big O notation denote the sizes of inputs to algorithms. For
example, <b>O(n)</b> might be the time complexity of an algorithm that
traverses through an array of length <b>n</b>; similarly,
<b>O(n + m)</b> might be the time complexity of an algorithm that traverses
through an array of length <b>n</b> and through a string of length <b>m</b>.

The following are examples of common complexities and their Big O notations,
ordered from fastest to slowest:

- <b>Constant</b>: O(1)
- <b>Logarithmic</b>: O(log(n))
- <b>Linear</b>: O(n)
- <b>Log-linear</b>: O(nlog(n))
- <b>Quadratic</b>: O(n<sup>2</sup>)
- <b>Cubic</b>: O(n<sup>3</sup>)
- <b>Exponential</b>: O(2<sup>n</sup>)
- <b>Factorial</b>: O(n!)

Note that in the context of coding interviews, Big O notation is usually
understood to describe the
<b>worst-case</b> complexity of an algorithm, even though the worst-case
complexity might differ from the <b>average-case</b> complexity.

For example, some sorting algorithms have different time complexities
depending on the layout of elements in their input array. In rare cases, their
time complexity will be much worse than in more common cases. Similarly, an
algorithm that takes in a string and performs special operations on uppercase
characters might have a different time complexity when run on an input string
of only uppercase characters vs. on an input string with just a few uppercase
characters.

Thus, when describing the time complexity of an algorithm, it can sometimes be
helpful to specify whether the time complexity refers to the average case or
to the worst case (e.g., "this algorithm runs in O(nlog(n)) time on average
and in O(n<sup>2</sup>) time in the worse case").
