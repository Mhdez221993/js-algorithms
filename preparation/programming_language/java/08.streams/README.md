## Streams

1. `Iterators` imply a specific traversal strategy and prohibit efficient concurrent execution.

2. You can create streams from `collections`, `arrays`, `generators`, or `iterators`.

3. Use `filter` to select elements and `map` to transform elements.

4. Other operations for transforming `streams` include `limit`, `distinct`, and `sorted`.

5. To obtain a result from a stream, use a reduction operator such as `count`, `max`, `min`, `findFirst`, or `findAny`. Some of these methods return an Optional value.

6. The `Optional` type is intended as a safe alternative to working with `null` values. To use it safely, take advantage of the `ifPresent` and `orElse` methods.

7. You can collect stream results in `collections`, `arrays`, `strings`, or `maps`.

8. The `groupingBy` and `partitioningBy` methods of the Collectors class allow you to split the contents of a stream into groups, and to obtain a result for each group.

9. There are specialized streams for the primitive types `int`, `long`, and `double`.

10. `Parallel` streams automatically parallelize stream operations.

## Research

1. Streams
2. Stream library
3. Generators
4. Iterators
5. Stream operations
6. reduction operator
7. Optional type
8. ifPresent and orElse methods
9. Collectors calss
10. groupingBy and partitioningBy methods
11. Primitive Type Streams
12. Parallel streams
13. From Iterating to Stream Operations
14. Stream Creation
15. The filter, map, and flatMap Methods
16. Extracting Substreams and Combining Streams
17. The distinct method
18. sorted method
19. peek method
20. Simple Reductions
21. The Optional Type
22. How Not to Work with Optional Values
23. Turning an Optional Into a Stream
24. Collecting results
25. Collecting into Maps
26. singleton set
27. Grouping and Partitioning
28. Downstream Collectors
29. Reduction Operations
30. Parallel Streams
