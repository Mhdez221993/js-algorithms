// package ch01.sec01;
import java.util.*;


// Our first Java program

public class HelloWorld {
    public static void main(String[] args) {
        int n = 5;
        int[][] triangle = new int[n][];
        for (int i = 0; i < n; i++) {
            triangle[i] = new int[i + 1];
            triangle[i][0] = 1;
            triangle[i][i] = 1;
            for (int j = 1; j < i; j++) {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
        System.out.println(Arrays.deepToString(triangle));
    }

}
