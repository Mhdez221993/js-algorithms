# Strings

Not a standalone data structure per se, strings are generally considered to be a data type that behaves like a data structure.

One of the fundamental data types in Computer Science, strings are stored in
<b>memory</b> as <b>arrays</b> of integers, where each character in a given
string is mapped to an integer via some character-encoding standard like
<b>ASCII</b>.

Strings behave much like normal arrays, with the main distinction being that,
in most programming languages (C++ is a notable exception), strings are
<b>immutable</b>, meaning that they can't be edited after creation. This also
means that simple operations like appending a character to a string are more
expensive than they might appear.

The canonical example of an operation that's deceptively expensive due to
string immutability is the following:

<pre>
string = "this is a string"
newString = ""

for character in string:
newString += character

</pre>

The operation above has a time complexity of <b>O(n<sup>2</sup>)</b> where n
is the length of <span>string</span>, because each addition of a character to
<span>newString</span> creates an entirely new string and is itself an
<b>O(n)</b> operation. Therefore, n O(n) operations are performed, leading to
an O(n<sup>2</sup>) time-complexity operation overall.
