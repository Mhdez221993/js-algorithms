## Inheritance and Reflection

1. A subclass can inherit or override methods from the superclass, provided they are not private.

2. Use the super keyword to invoke a superclass method or constructor.

3. A final method cannot be overridden; a final class cannot be extended.

4. An abstract method has no implementation; an abstract class cannot be instantiated.

5. A protected member of a superclass is accessible in a subclass method, but only when applied to objects of the same subclass. It is also accessible in its package.

6. Every class is a subclass of Object which provides the toString, equals, hashCode, and clone methods.

7. A sealed type names the subtypes that can be declared in other source files.

8. Each enumerated type is a subclass of Enum which provides instance methods toString and compareTo, and a static valueOf method.

9. The Class class provides information about a Java type, which can be a class, array, interface, primitive type, or void.

10. You can use a Class object to load resources that are placed alongside class files.

11. You can load classes from locations other than the class path by using a class loader.

12. The ServiceLoader class provides a mechanism for locating and selecting service implementations.

13. The reflection library enables programs to discover members of objects, access variables, and invoke methods.

14. Proxy objects dynamically implement arbitrary interfaces, routing all method invocations to a handler.
