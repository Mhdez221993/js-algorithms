## Interfaces and Lambda Expressions

1. An interface specifies a set of methods that an implementing class must provide.

2. An interface is a supertype of any class that implements it. Therefore, one can assign instances of the class to variables of the interface type.

3. An interface can contain static methods. All variables of an interface are automatically public, static, and final.

4. An interface can contain default methods that an implementing class can inherit or override.

5. An interface can contain private methods that cannot be called or overridden by implementing classes.

6. The `Comparable` and `Comparator` interfaces are used for comparing objects.

7. Use the `instanceof` operator, and preferably its “pattern matching” form, if you need to test whether an object conforms to a subtype.

8. A functional interface is an interface with a single abstract method.

9. A lambda expression denotes a block of code that can be executed at a later point in time.

10. Lambda expressions are converted to functional interfaces.

11. Method and constructor references refer to methods or constructors without invoking them.

12. Lambda expressions and local classes can access effectively final variables from the enclosing scope.
