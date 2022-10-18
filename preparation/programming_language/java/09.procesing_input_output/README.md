## Processing Input and Output

1. An `InputStream` is a source of `bytes`, and an `OutputStream` is a destination for bytes.

2. A `Reader` reads characters, and a `Writer` writes them. Be sure to specify a character encoding.

3. The `Files` class has convenience methods for reading all bytes or lines of a file.

4. The `DataInput` and `DataOutput` interfaces have methods for writing numbers in binary format.

5. Use a `RandomAccessFile` or a `memory-mapped` file for random access.

6. A `Path` is an `absolute` or `relative` sequence of path components in a file system. Paths can be combined (or “resolved”).

7. Use the methods of the Files class to `copy`, `move`, or `delete` files and to recursively walk through a directory tree.

8. To `read` or `update` a `ZIP` file, use a ZIP file system.

9. You can read the contents of a web page with the `URL` class. To `read` metadata or `write` data, use the `URLConnection` class.

10. With the `Pattern` and `Matcher` classes, you can find all matches of a regular expression in a string, as well as the `captured` groups for each match.

11. The `serialization` mechanism can `save` and `restore` any object implementing the Serializable interface, provided its instance variables are also serializable.
