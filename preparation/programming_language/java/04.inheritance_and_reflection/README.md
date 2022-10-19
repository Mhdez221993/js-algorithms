## Inheritance and Reflection

1. A `subclass` can inherit or override methods from the superclass, provided they are not private.

2. Use the `super` keyword to invoke a `superclass` method or constructor.

3. A `final` method cannot be overridden; a final class cannot be extended.

4. An `abstract` method has no implementation; an abstract class cannot be instantiated.

5. A protected member of a `superclass` is accessible in a subclass method, but only when applied to objects of the same subclass. It is also accessible in its package.

6. Every class is a subclass of `Object` which provides the `toString`, `equals`, `hashCode`, and `clone` methods.

7. A `sealed` type names the subtypes that can be declared in other source files.

8. Each `enumerated` type is a subclass of `Enum` which provides instance methods `toString` and `compareTo`, and a static `valueOf` method.

9. The `Class` class provides information about a Java type, which can be a `class`, `array`, `interface`, `primitive` type, or `void`.

10. You can use a Class object to load resources that are placed alongside class files.

11. You can load classes from `locations` other than the class path by using a class `loader`.

12. The `ServiceLoader` class provides a mechanism for locating and selecting `service implementations`.

13. The `reflection` library enables programs to discover members of objects, access variables, and invoke methods.

14. `Proxy objects` dynamically implement arbitrary interfaces, routing all method invocations to a `handler`.

## Research

1. Tool builders
2. Protected member of a superclass
3. Sealed Types
4. Enumerated type
5. Class object to load resources
6. Class loader
7. ServiceLoader
8. Proxy objects
9. Superclass Assignments
10. Java arrays are covariant
11. Method Expressions with super
12. Protected Access
13. Inheritance and Default Methods
14. java.lang.Object Class
15. The hashCode Method
16. Cloning Objects
17. Enumerations
18. Methods of the java.lang.Enum<E> Class
19. Constructors, Methods, and Fields of Enumerations
20. Bodies of enum Instances
21. Switching on an Enumeration
22. Runtime Type Information and Resources
23. Useful Methods of the java.lang.Class<T> Class
24. Methods of the java.lang.reflect.Modifier Class
25. Loading Resources
26. Class Loaders
27. bootstrap class loader
28. platform class loader
29. system class loader
30. URLClassLoader
31. The Context Class Loader
32. ServiceLoader
33. object-relational mappers
34. java.lang.reflect package
35. Invoking Methods
36. Useful Classes and Methods in the java.lang.reflect Package
37. Methods of the java.lang.reflect.Array Class
38. Proxy class