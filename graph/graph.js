/*
     B
    /\
  /   \
 A     C

*/

// Adjacency matix of a graph
const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];
console.log(matrix[0][1]);

// Adjacency list of a graph
const adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};
console.log(adjacencyList["B"]);
