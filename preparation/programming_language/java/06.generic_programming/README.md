## Generic Programming

1. A `generic` class is a class with one or more type parameters.

2. A generic method is a method with type parameters.

3. You can require a type parameter to be a `subtype` of one or more types.

4. Generic types are `invariant`: When `S` is a subtype of `T`, there is no relationship between `G<S> and G<T>`.

5. By using wildcards `G<? extends T>` or `G<? super T>`, you can specify that a method can accept an instantiation of a generic type `G` with a subtype or supertype of `T`.

6. Type parameters are erased when generic classes and methods are compiled.

7. `Erasure` puts many restrictions on generic types. In particular, you can’t instantiate generic classes or arrays, cast to a generic type, or throw an object of a generic type.

8. The `Class<T>` class is generic, which is useful because methods such as cast are declared to produce a value of type `T`.

9. Even though generic classes and methods are erased in the virtual machine, you can find out at runtime how they were declared.

## Research

1. Generic programming
2. generic class
3. generic method
4. Generic types are invariant
5. wildcards "?"
6. Type Erasure
7. throw an object of a generic type
8. Generic types with primitive types
9. Type Bounds
10. Type Variance and Wildcards
11. Subtype Wildcards
12. Supertype Wildcards
13. Wildcards with Type Variables
14. Unbounded Wildcards
15. Generics in the Java Virtual Machine
16. Cast Insertion
17. Bridge Methods
18. Restrictions on Generics
19. Class Type Variables Are Not Valid in Static Contexts
20. Methods May Not Clash after Erasure
21. Exceptions and Generics
22. Reflection and Generics
