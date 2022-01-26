import java.util.Arrays;
class Program {
  public static int[] twoNumberSum(int[] array, int targetSum) {
    Arrays.sort(array);
    int left = 0;
    int right = array.length - 1;

    while(left < right){
      int current = array[left] + array[right];
      if (current == targetSum) {
        return new int[] {array[left], array[right]};

      } else if (current > targetSum) {
        right -= 1;

      } else {
        left += 1;
      }
    }
    return new int[0];
  }
}

public class main {
  public static void main(String[] args) {
    int [] array = new int []{3, 5, -4, 8, 11, 1, -1, 6};
    int targetSum = 10;
    int[] result = Program.twoNumberSum(array, targetSum);
    System.out.println(result[0] + " "+ result[1]);
  }
}

