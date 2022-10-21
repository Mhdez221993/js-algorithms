import java.nio.charset.StandardCharsets;
import java.util.Random;
// Fundamental Programming Structures

public class Main {
  public static void main (String[] args) {
    // 1. Our First Program
    String str = "Hello, Word!";
    System.out.println(str.toUpperCase());
    System.out.println(str.toLowerCase());
    System.out.println(str.length());

    Random generator = new Random();
    System.out.println(generator.nextInt());

    // 2. Primitive Types
      // Signed Integer Types
        // byte storage: 1 bytes, range: -128 to 127
        // short storage: 2 bytes, range: -23,768 to 32,767
        // int storage: 4 bytes, range: -2,147,483,648 to 2,147,483,647(over 2 billion)
        // long storage: 8 bytes range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,8071
      // Floating-Point Types
        // float storage: 4 bytes, range: 3.4e-038 to 3.4e+038
        // double storage: 8 bytes, range: 1.7e-308 to 1.7e+308
      // The char type
        // The char type describes “code units” in the UTF-16 character encoding
        // The special codes ’\n’, ’\r’, ’\t’, ’\b’ denote a line feed, carriage return, tab, and backspace
      // The boolean Type
        // The boolean type has two values, false and true
  }
}

// single line comment (e.g)

/*
multiline comment (e.g)
*/

/**
documentation comment (e.g)
*/



// 3. Variables
// 4. Arithmetic Operations
// 5. Strings
// 6. Input and Output
// 7. Control Flow
// .8. Arrays and Array Lists
// 9. Functional Decomposition