## The Java Platform Module System

1. The Java Platform Module System was designed to `modularize` the Java platform.

2. You can use the Java Platform Module System to modularize applications and libraries.

3. A `module` is a collection of packages.

4. The properties of a module are defined in `module-info.java`.

5. A module declares on which other modules it depends.

6. A module provides encapsulation. Accessible packages must be explicitly exported.

7. A module may allow `reflective` access to private features by opening a package or the entire module.

8. The module system provides support for the `ServiceLoader` facility.

9. A modular `JAR` is a JAR with a `module-info.class` file that is placed on the module path.

10. By placing a regular JAR on the module path, it becomes an automatic module that exports and opens all of its packages.

11. All packages on the `class path` form the unnamed module.

12. To migrate existing applications, you may need to override access restrictions with command-line options.

13. The `jdeps` tool analyzes the dependencies of a given set of JAR files. The `jlink` tool produces an application with minimal dependencies.

## Research

1. The Java Platform Module System?
2. encapsulation?
3. module system?
4. class loaders?
5. how to migrate your applications to work with the modularized Java platform?
6. modularize?
7. How to modularize applications and libraries?
8. module-info.java?
9. ServiceLoader facility?
10. modular JAR?
11. unnamed module?
12. The jdeps tool?
13. JAR files?
14. The jlink tool?
15. The Module Concept?
16. Naming Modules?
17. The Modular “Hello, World!” Program?
18. Requiring Modules?
19. Exporting Packages?
20. Modules and Reflective Access?
21. Automatic Modules?
22. Command-Line Flags for Migration?
23. Transitive and Static Requirements?
24. Qualified Exporting and Opening?
25. Service Loading?
26. Tools for Working with Modules?
27. jdeps tool?
