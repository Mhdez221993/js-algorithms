import java.io.*;
import java.util.*;

class Solution {
  static int numOfPathsToDest(int n) {
    int[][] moves = new int[n][n];
    moves[0][0] = 1;

    for(int i = 1; i < n; i++){
      for(int j = 0; j <= i; j++){
        if(i - 1 >= j) {
          moves[i][j] = moves[i - 1][j];
        }

        if(j-1 >= 0) {
          moves[i][j] += moves[i][j - 1];
        }
      }
    }

    return moves[n - 1][n - 1];
  }
}

public class main {
  public static void main(String[] args) {
    int n = 4;
    Solution solution = new Solution();
    System.out.println(solution.numOfPathsToDest(n));
  }
}
