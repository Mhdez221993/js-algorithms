# Hash Tables

A data structure that provides fast insertion, deletion, and lookup of
key/value pairs.

Fun. Fast. Flexible. This beloved data structure is a fan favorite among interviewers and interviewees alike, and for good reason: it lends itself extremely well to any problem requiring some sort of lookup operation, of which (spoiler alert) there are many.

Under the hood, a hash table uses a <b>dynamic array</b> of
<b>linked lists</b> to efficiently store key/value pairs. When inserting a
key/value pair, a hash function first maps the key, which is typically a
string (or any data that can be hashed, depending on the implementation of the
hash table), to an integer value and, by extension, to an index in the
underlying dynamic array. Then, the value associated with the key is added to
the linked list stored at that index in the dynamic array, and a reference to
the key is also stored with the value.

Hash tables rely on highly optimized hash functions to minimize the number of
<b>collisions</b> that occur when storing values: cases where two keys map to
the same index.

Below is an example of what a hash table might look like under the hood:

<pre>[
  0: (value1, key1) -> null
  1: (value2, key2) -> (value3, key3) -> (value4, key4)
  2: (value5, key5) -> null
  3: (value6, key6) -> null
  4: null
  5: (value7, key7) -> (value8, key8)
  6: (value9, key9) -> null
]
</pre>

In the hash table above, the keys <b>key2</b>, <b>key3</b>, and
<b>key4</b> collided by all being hashed to <b>1</b>, and the keys
<b>key7</b> and <b>key8</b> collided by both being hashed to <b>5</b>.

The following are a hash table's standard operations and their corresponding
time complexities:

- <b>Inserting a key/value pair</b>: O(1) on average; O(n) in the worse case

- <b>Removing a key/value pair</b>: O(1) on average; O(n) in the worse case

- <b>Looking up a key</b>: O(1) on average; O(n) in the worse case

The worst-case linear-time operations occur when a hash table experiences a
lot of collisions, leading to long linked lists internally, which take O(n)
time to traverse.

However, in practice and especially in coding interviews, we typically assume
that the hash functions employed by hash tables are so optimized that
collisions are extremely rare and constant-time operations are all but
guaranteed.
