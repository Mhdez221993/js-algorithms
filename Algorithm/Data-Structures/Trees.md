# Trees

A special type of graph, trees excel at storing data hierarchically and are commonly used as a means of testing your knowledge of recursion during coding interviews.

# Key Terms

## Tree

A data structure that consists of nodes, each with some value and pointers to
child-nodes, which recursively form <b>subtrees</b> in the tree.

The first node in a tree is referred to as the <b>root</b> of the tree, while
the nodes at the bottom of a tree (the nodes with no child-nodes) are referred
to as <b>leaf nodes</b> or simply <b>leaves</b>. The paths between the root of
a tree and its leaves are called <b>branches</b>, and the <b>height</b> of a
tree is the length of its longest branch. The <b>depth</b> of a tree node is
its distance from its tree's root; this is also known as the node's
<b>level</b> in the tree.

A tree is effectively a <b>graph</b> that's <b>connected</b>, <b>directed</b>,
and <b>acyclic</b>, that has an explicit root node, and whose nodes all have a
single <b>parent</b> (except for the root node, which effectively has no
parent). Note that in most implementations of trees, tree nodes don't have a
pointer to their parent, but they can if desired.

There are many types of trees and tree-like structures, including
<b>binary trees</b>, <b>heaps</b>, and <b>tries</b>.

## Binary Tree

A <b>tree</b> whose nodes have up to <b>two</b> child-nodes.

The structure of a binary tree is such that many of its operations have a
logarithmic time complexity, making the binary tree an incredibly attractive
and commonly used data structure.

## K-ary Tree

A <b>tree</b> whose nodes have up to <b>k</b> child-nodes. A
<b>binary tree</b> is a k-ary tree where <b>k == 2</b>.

## Perfect Binary Tree

A <b>binary tree</b> whose interior nodes all have two child-nodes and whose
<b>leaf nodes</b> all have the same <b>depth</b>. Example:

<pre>
           1
      /         \
     2           3
   /   \       /   \
  4     5     6     7
 / \   / \   / \   / \
8   9 10 11 12 13 14 15
</pre>

## Complete Binary Tree

A <b>binary tree</b> that's <i>almost</i> <b>perfect</b>; its interior nodes
all have two child-nodes, but its <b>leaf nodes</b> don't necessarily all have
the same <b>depth</b>. Furthermore, the nodes in the last <b>level</b> of a
complete binary tree are as far left as possible. Example:

<pre>
          s1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
 /   \
8     9
</pre>

Conversely, the following binary tree <i>isn't</i> complete, because the nodes
in its last level aren't as far left as possible:

<pre>
          1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
         /   \
        8     9
</pre>

## Balanced Binary Tree

A <b>binary tree</b> whose nodes all have left and right <b>subtrees</b> whose
<b>heights</b> differ by no more than 1.

A balanced binary tree is such that the logarithmic time complexity of its
operations is maintained.

For example, inserting a node at the bottom of the following
<i>imbalanced</i> binary tree's left subtree would cleary not be a
logarithmic-time operation, since it would involve traversing through most of
the tree's nodes:

<pre>
             1
          /     \
         2       3
       /
      4
    /
   8
  /
10
</pre>

The following is an example of a balanced binary tree:

<pre>
          1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
 /   \         /
10    9       8
</pre>

## Full Binary Tree

A <b>binary tree</b> whose nodes all have either two child-nodes or zero
child-nodes. Example:

<pre>
    1
 /     \
2       3
      /   \
     6     7
   /   \
  8     9
</pre>
