# Linked Lists

The data structure whose singular purpose in life is to be reversed.

## Singly Linked List

A data structure that consists of nodes, each with some value and a pointer to
the next node in the linked list. A linked list node's value and next node are
typically stored in <span>value</span>
and
<span>next</span> properties, respectively.

The first node in a linked list is referred to as the <b>head</b> of the
linked list, while the last node in a linked list, whose
<span>next</span> property points to the <span>null</span> value, is known as
the <b>tail</b> of the linked list.

Below is a visual representation of a singly linked list whose nodes hold
integer values:

<pre>0 ->; 1 ->; 2 ->; 3 ->; 4 ->; 5 ->; null
</pre>

A singly linked list typically exposes its head to its user for easy access.
While finding a node in a singly linked list involves traversing through all
of the nodes leading up to the node in question (as opposed to instant access
with an array), adding or removing nodes simply involves overwriting
<span>next</span> pointers (assuming that you have access to the node right
before the node that you're adding or removing).

The following are a singly linked list's standard operations and their
corresponding time complexities:

- <b>Accessing the head</b>: O(1)
- <b>Accessing the tail</b>: O(n)
- <b>Accessing a middle node</b>: O(n)
- <b>Inserting / Removing the head</b>: O(1)
- <b>Inserting / Removing the tail</b>: O(n) to access + O(1)
- <b>Inserting / Removing a middle node</b>: O(n) to access + O(1)
- <b>Searching for a value</b>: O(n)

# Doubly Linked List

Similar to a <b>singly linked list</b>, except that each node in a doubly
linked list also has a pointer to the previous node in the linked list. The
previous node is typically stored in a <span>prev</span> property.

Just as the <span>next</span> property of a doubly linked list's
<b>tail</b> points to the <span>null</span> value, so too does the
<span>prev</span> property of a doubly linked list's <b>head</b>.

Below is a visual representation of a doubly linked list whose nodes hold
integer values:

<pre>null <- 0 <-> 1 <-> 2 <-> 3 <-> 4 <-> 5 -> null
</pre>

While a doubly linked list typically exposes both its head and tail to its
user, as opposed to just its head in the case of a singly linked list, it
otherwise behaves very similarly to a singly linked list.

The following are a doubly linked list's standard operations and their
corresponding time complexities:

- <b>Accessing the head</b>: O(1)
- <b>Accessing the tail</b>: O(1)
- <b>Accessing a middle node</b>: O(n)
- <b>Inserting / Removing the head</b>: O(1)
- <b>Inserting / Removing the tail</b>: O(1)
- <b>Inserting / Removing a middle node</b>: O(n) to access + O(1)
- <b>Searching for a value</b>: O(n)

## Circular Linked List

A linked list that has no clear <b>head</b> or <b>tail</b>, because its "tail"
points to its "head," effectively forming a closed circle.

A circular linked list can be either a <b>singly circular linked list</b> or a
<b>doubly circular linked list</b>.
