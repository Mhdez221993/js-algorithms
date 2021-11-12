#include <iostream>
using namespace std;
#include <vector>

bool isValidSubsequence(vector<int> array, vector<int> sequence)
{
  if (array.size() < 2)
  {
    return 1;
  }

  int index = 0;
  int idx = 0;

  while (idx < sequence.size() && index < array.size())
  {
    if (array[index] == sequence[idx])
    {
      idx++;
    }
    index++;
  }

  return idx == sequence.size();
}

int main()
{
  vector<int> array = {5, 1, 22, 25, 6, -1, 8, 10};
  vector<int> sequence = {1, 6, -1, 10};
  int isValid = isValidSubsequence(array, sequence);
  cout << isValid << endl;
}
