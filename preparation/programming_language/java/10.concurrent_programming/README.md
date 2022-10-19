## Concurrent Programming

1. A `Runnable` describes a task that can be executed `asynchronously` but does not return a result.

2. An `ExecutorService` schedules tasks instances for execution.

3. A `Callable` describes a task that can be executed asynchronously and `yields` a result.

4. You can submit one or more Callable instances to an ExecutorService and combine the results when they are available.

5. When multiple threads operate on shared data without synchronization, the result is unpredictable.

6. Prefer using `parallel` algorithms and `threadsafe` data structures over programming with `locks`.

7. `Parallel` streams and array operations automatically and safely parallelize computations.

8. A `ConcurrentHashMap` is a threadsafe hash table that allows atomic update of entries.

9. You can use `AtomicLong` for a `lock-free` shared counter, or use `LongAdder` if contention is high.

10. A `lock` ensures that only one thread at a time executes a critical section.

11. An `interruptible` task should terminate when the interrupted flag is set or an `InterruptedException` occurs.

12. A `long-running` task should not block the user-interface thread of a program, but progress and final updates need to occur in the user interface thread.

13. The `Process` class lets you execute a command in a separate process and interact with the `input`, `output`, and `error` streams.

## Research

1. What is Concurrent Programming?
2. Who is an application programmer?
3. Who is an system programmer?
4. Runnable?
5. ExecutorService?
6. Callable?
7. What are parallel algorithms?
8. programming with locks?
9. Parallel streams?
10. ConcurrentHashMap?
11. AtomicLong for lock-free shared counter?
12. LongAdder if contention is high?
13. interruptible task?
14. InterruptedException?
15. Process class?
16. Concurrent Tasks?
17. Asynchronous Computations?
18. Adding an Action to a CompletableFuture<T> Object?
19. What are Composition Objects?
20. Combining Multiple Composition Objects
21. Thread Safety?
22. Strategies for Safe Concurrency?
23. Immutable Classes?
24. What does the word PARALLEL refer to?
25. Threadsafe Data Structures?
26. Blocking Queue Operations?
27. Atomic Counters and Accumulators?
28. Locks and Conditions?
29. Threads?
30. Miscellaneous Thread Properties?
31. Thread class?
32. Processes?
