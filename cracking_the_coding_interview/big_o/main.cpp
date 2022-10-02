// Exanple 1
// Code like this would take O(n) time and O(n) space.
int sum(int n)
{
  if (n <= 0)
  {
    return 0;
  }

  return n + sum(n - 1);
}

/*
Each call adds a level to the stack
  sum(4)
    sum(3)
      sum(2)
        sum(1)
          sum(0)

Each of these call is added to the call stack and takes upactual memory
*/

// Example 2
// Consider the below function, which adds adjacent elements between O and n:
int pairSumSequence(int n)
{
  int sum = 0;
  for (int i = 0; i < n; i++)
  {
    sum += pairSum(i, i + 1);
  }
  return sum;
}

int pairSum(int a, int b)
{
  return a + b;
}

// There will be roughly O(n) calls to pairSum. However, those calls do not exist simultaneously on the call
//  stack, so you only need O ( 1) space