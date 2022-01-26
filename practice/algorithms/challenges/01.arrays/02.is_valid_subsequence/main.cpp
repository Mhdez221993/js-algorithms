// O(n) time | O(1) space - where n is the length of the array
#include <iostream>
#include <vector>
using namespace std;

bool isValidSubsequence(vector<int> array, vector<int> sequence)
{
  int arrIdx = 0;
  int seqIdx = 0;

  while (arrIdx < array.size() && seqIdx < sequence.size())
  {
    if (array[arrIdx] == sequence[seqIdx])
    {
      seqIdx++;
    }
    arrIdx++;
  }

  return seqIdx == sequence.size();
}

int main()
{
  vector<int> array = {5, 1, 22, 25, 6, -1, 8, 10};
  vector<int> sequence = {1, 6, -1, 10};
  cout << boolalpha;
  cout << isValidSubsequence(array, sequence) << endl;
  return 0;
}
