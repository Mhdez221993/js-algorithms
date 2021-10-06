# Stacks And Queues

Push. Pop. FIFO. LIFO. That pretty much sums up stacks and queues.

## Stack

An array-like data structure whose elements follow the <b>LIFO</b> rule: <b>L</b>ast <b>I</b>n, <b>F</b>irst
<b>O</b>ut.

A stack is often compared to a stack of books on a table: the last book that's placed on the stack of books is the
first one that's taken off the stack.

The following are a stack's standard operations and their
corresponding time complexities:

- <b>Pushing an element onto the stack</b>: O(1)
- <b>Popping an element off the stack</b>: O(1)
- <b>Peeking at the element on the top of the stack</b>: O(1)
- <b>Searching for an element in the stack</b>: O(n)

A stack is typically implemented with a <b>dynamic array</b> or with a <b>singly linked list</b>.

## Queue

An array-like data structure whose elements follow the <b>FIFO</b> rule: <b>F</b>irst <b>I</b>n, <b>F</b>irst
<b>O</b>ut.

A queue is often compared to a group of people standing in line to purchase items at a store: the first person to get
in line is the
first one to purchase items and to get out of the queue.

The following are a queue's standard operations and their
corresponding time complexities:

- <b>Enqueuing an element into the queue</b>: O(1)
- <b>Dequeuing an element out of the queue</b>: O(1)
- <b>Peeking at the element at the front of the queue</b>: O(1)
- <b>Searching for an element in the queue</b>: O(n)

  A queue is typically implemented with a <b>doubly linked list</b>.
