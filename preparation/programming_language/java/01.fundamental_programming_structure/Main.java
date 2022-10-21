import java.nio.charset.StandardCharsets;
import java.util.Random;
import java.math.BigDecimal;
import java.util.Scanner;

// Fundamental Programming Structures

public class Main {
  public static final int DAYS_PER_WEEK = 7;

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
        // If you need precise numerical computations with arbitrary precision and without roundoff errors, use the BigDecimal class
        System.out.println(2.0 - 1.7);
        BigDecimal num1 = new BigDecimal("2.0");
        BigDecimal num2 = new BigDecimal("1.7");
        System.out.println(num1.subtract(num2));
      // The char type
        // The char type describes “code units” in the UTF-16 character encoding
        // The special codes ’\n’, ’\r’, ’\t’, ’\b’ denote a line feed, carriage return, tab, and backspace
      // The boolean Type
        // The boolean type has two values, false and true

    // 3. Variables
      // Each variable can only hold values of a specific type
      // Variable Declarations
        int total = 0, count; // count is an uninitialized integer
        Random generator2 = new Random();
        var generator3 = new Random(); // to avoid this repetions use var keyword
      // Identifiers
        // The name of a variable, method, or class is called an identifier
        // By convention, names of variables and methods start with a lowercase letter, and names of classes start with an uppercase letter
      // Initialization
        // When you declare a variable in a method, you must initialize it before you can use it
        var in = new Scanner(System.in);
        System.out.println("How old are you?");
        int age = in.nextInt();
        System.out.println("You are " + age + " years old!");
      // Constants
        // The final keyword denotes a value that cannot be changed once it has been assigned
        final int DAYS_PER_WEEK = 7;
        // By convention, uppercase letters are used for names of constants

  }
}

// single line comment (e.g)

/*
multiline comment (e.g)
*/

/**
documentation comment (e.g)
*/

// System.out.println(Main.DAYS_PER_WEEK);


// 4. Arithmetic Operations
// 5. Strings
// 6. Input and Output
// 7. Control Flow
// .8. Arrays and Array Lists
// 9. Functional Decomposition