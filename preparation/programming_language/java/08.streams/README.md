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
