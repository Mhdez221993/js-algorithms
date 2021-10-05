# Arrays

Perhaps the most classic and most commonly used of all data structures, the array is deceptively simple. Key word: "deceptively."

Don’t be fooled! Where it might appear trivially straightforward at surface level, it actually boasts an array—pun intended—of nuances worthy of taking a second gander.

A linear collection of data values that are accessible at numbered indices,
starting at index 0.

The following are an array's standard operations and their corresponding time
complexities:

- <b>Accessing a value at a given index</b>: O(1)
- <b>Updating a value at a given index</b>: O(1)
- <b>Inserting a value at the beginning</b>: O(n)
- <b>Inserting a value in the middle</b>: O(n)

- <b>Inserting a value at the end</b>:

  - amortized O(1) when dealing with a <b>dynamic array</b>
  - O(n) when dealing with a <b>static array</b>

- <b>Removing a value at the beginning</b>: O(n)
- <b>Removing a value in the middle</b>: O(n)
- <b>Removing a value at the end</b>: O(1)
- <b>Copying the array</b>: O(n)

A static array is an implementation of an array that allocates a fixed amount
of memory to be used for storing the array's values. Appending values to the
array therefore involves copying the entire array and allocating new memory
for it, accounting for the extra space needed for the newly appended value.
This is a linear-time operation.

A dynamic array is an implementation of an array that preemptively allocates
double the amount of memory needed to store the array's values. Appending
values to the array is a constant-time operation until the allocated memory is
filled up, at which point the array is copied and double the memory is once
again allocated for it. This implementation leads to an amortized
constant-time insertion-at-end operation.

A lot of popular programming languages like JavaScript and Python implement
arrays as dynamic arrays.
