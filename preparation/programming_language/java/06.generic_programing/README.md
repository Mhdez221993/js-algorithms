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
