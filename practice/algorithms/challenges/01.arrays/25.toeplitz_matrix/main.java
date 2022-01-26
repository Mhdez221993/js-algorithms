import java.io.*;
import java.util.*;

class Solution {
  static boolean isToeplitz(int[][] arr) {
    //your code goes here
    if (arr.length == 1) {
      return true;
    }

    for(int i = 1; i < arr.length; i += 1) {
      if(arr[i].length == 1){
        return true;
      }

      for(int j = 1; j < arr.length; j += 1){
        if(arr[i][j] != arr[i - 1][j - 1]) {
          return false;
        }
      }
    }

    return true;
  }
}

public class main {
  public static void main(String[] args) {
    int[][] array_1 = {
      {1, 2, 3, 4},
      {5, 1, 2, 3},
      {6, 5, 1, 2}
    };

    int[][] array_2 = {
      {1, 2, 3, 4},
      {5, 1, 9, 3},
      {6, 5, 1, 2}
    };
    Solution solution = new Solution();
    System.out.println(solution.isToeplitz(array_1));
    System.out.println(solution.isToeplitz(array_2));
  }
}
