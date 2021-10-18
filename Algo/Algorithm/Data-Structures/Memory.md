# Memory

The bedrock of all data structures, memory is the underlying concept that you absolutely need to know in order to understand why data structures work the way they do.

## Bit

Short for binary digit , a bit is a fundamental unit of information in Computer Science that represents a state with one of two values, typically 0 and 1.
Any data stored in a computer is, at the most basic level, represented in bits.

## Byte

A group of eight bits. For example, 01101000 is a byte.

A single byte can represent up to 256 data values (2<sup>8</sup>).

Since a binary number is a number expressed with only two symbols, like
0 and 1, a byte can effectively represent all of the numbers
between 0 and 255, inclusive, in binary format.

The following bytes represent the numbers 1, 2, 3, and 4 in binary format.

<pre>1: 00000001
2: 00000010
3: 00000011
4: 00000100
</pre>

## Fixed-Width Integer

An integer represented by a fixed amount of <b>bits</b>. For example, a
<b>32-bit integer</b> is an integer represented by 32 bits (4 bytes), and a
<b>64-bit integer</b> is an integer represented by 64 bits (8 bytes).

The following is the 32-bit representation of the number 1, with clearly
separated bytes:

<pre>00000000 00000000 00000000 00000001</pre>

The following is the 64-bit representation of the number 10, with clearly
separated bytes:

<pre>00000000 00000000 00000000 00000000 00000000 00000000 00000000 00001010</pre>

Regardless of how large an integer is, its fixed-width-integer representation
is, by definition, made up of a constant number of bits.

It follows that, regardless of how large an integer is, an operation performed
on its fixed-width-integer representation consists of a constant number of bit
manipulations, since the integer is made up of a fixed number of bits.
