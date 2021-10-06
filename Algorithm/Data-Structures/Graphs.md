# Graphs

These collections of edges and vertices might look as banal as a child's scribble on a restaurant table, but they're of fundamental importance in discrete mathematics. The eponymous field of "graph theory" is dedicated to their study, and their importance in mathematics carries over to computer science.

# Key Terms

## Graph

A collection of nodes or values called <b>vertices</b> that might be related; relations between vertices are
called <b>edges</b>.

<Graph>Many things in life can be represented by graphs; for example, a social network can be represented by a graph whose
vertices are users and whose edges are friendships between the users. Similarly, a city map can be represented by a
graph whose vertices are locations in the city and whose edges are roads between the locations.

## Graph Cycle

Simply put, a cycle occurs in a <b>graph</b> when three or more
<b>vertices</b> in the graph are connected so as to form a closed loop.

Note that the definition of a graph cycle is sometimes broadened to include
cycles of length two or one; in the context of coding interviews, when dealing
with questions that involve graph cycles, it's important to clarify what
exactly constitutes a cycle.

## Acyclic Graph

A <b>graph</b> that has no <b>cycles</b>.

## Cyclic Graph

A <b>graph</b> that has at least one <b>cycle</b>.

## Directed Graph

A <b>graph</b> whose <b>edges</b> are directed, meaning that they can only be
traversed in one direction, which is specified.

For example, a graph of airports and flights would likely be directed, since a
flight specifically goes from one airport to another (i.e., it has a
direction), without necessarily implying the presence of a flight in the
opposite direction.

## Undirected Graph

A <b>graph</b> whose <b>edges</b> are undirected, meaning that they can be
traversed in both directions.

For example, a graph of friends would likely be undirected, since a friendship
is, by nature, bidirectional.

## Connected Graph

A <b>graph</b> is connected if for every pair of <b>vertices</b> in the graph
there's a path of one or more <b>edges</b> connecting the given vertices.

In the case of a <b>directed graph</b>, the graph is:

- <b>strongly connected</b> if there are bidirectional connections between the
  vertices of every pair of vertices (i.e., for every vertex-pair
  (u, v) you can reach v from u and
  u from v)

- <b>weakly connected</b> if there are connections (but not necessarily
  bidirectional ones) between the vertices of every pair of vertices

A graph that isn't connected is said to be <b>disconnected</b>.
