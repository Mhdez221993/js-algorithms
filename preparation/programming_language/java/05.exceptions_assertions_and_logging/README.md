## Exceptions, Assertions, and Logging

1. When you throw an `exception`, control is transferred to the nearest `handler` of the exception.

2. In Java, `checked` exceptions are tracked by the compiler.

3. Use the `try/catch` construct to handle exceptions.

4. The t`ry-with-resources` statement automatically closes resources after normal execution or when an exception occurred.

5. Use the `try/finally` construct to deal with other actions that must occur whether or not execution proceeded normally.

6. You can `catch` and `rethrow` an exception, or chain it to another exception.

7. A `stack` trace describes all method calls that are pending at a point of execution.

8. An `assertion` checks a condition, provided that `assertion` checking is enabled for the class, and `throws` an error if the condition is not fulfilled.

9. `Loggers` are arranged in a hierarchy, and they can receive logging messages with levels ranging from `SEVERE` to `FINEST`.

10. `Log handlers` can send logging messages to alternate destinations, and `formatters` control the message format.

11. You can control logging properties with a `log configuration file`.


## Research

1. logging API
2. handler of the exception
3. checked exceptions
4. try-with-resources
5. stack trace
6. assertion
7. Loggers
8. Log handlers
9. log configuration file
10. The Exception Hierarchy
11. Uncaught Exceptions and the Stack Trace
12. API Methods for Throwing Exceptions
13. Enabling and Disabling Assertions
14. Should You Use the Java Logging Framework?
15. java.util.logging
16. The System.Logger API
17. Logging Configuration
18. ConsoleHandler
19. FileHandler
20. SocketHandler
21. File Handler Configuration Parameters
22. Log File Pattern Variables
23. Filters and Formatters
24. LogRecord Property Getters