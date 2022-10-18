## Annotations

1. You can annotate declarations just as you use `modifiers` such as `public` or `static`.

2. You can also annotate types that appear in `declarations`, `casts`, `instanceof` `checks`, or method `references`.

3. An annotation starts with a `@` symbol and may contain `key/value` pairs called elements.

4. Annotation values must be `compile-time` constants: `primitive` types, `enum` constants, `Class` literals, other annotations, or `arrays` thereof.

5. An `item` can have repeating annotations or annotations of different types.

6. To define an annotation, specify an `annotation interface` whose methods correspond to the annotation elements.

7. The Java library defines over a dozen annotations, and annotations are extensively used in the Java Enterprise Edition.

8. To process annotations in a running Java program, you can use reflection and query the `reflected` items for annotations.

9. Annotation `processors` process source files during compilation, using the Java language model `API` to locate annotated items.
