#include <vector>
#include <iostream>
using namespace std;

// O(n) time | O(n) space - where n is the length of the input array
int minRewards(vector<int> scores)
{
  vector<int> customeScores(scores.size(), 1);
  int sum = 0;

  for (int i = 1; i < scores.size(); i++)
  {
    if (scores[i] > scores[i - 1])
      customeScores[i] = customeScores[i - 1] + 1;
  }

  for (int i = (scores.size() - 2); i >= 0; i--)
  {
    if (scores[i] > scores[i + 1])
      customeScores[i] = max(customeScores[i], customeScores[i + 1] + 1);
  }

  for (int x : customeScores)
    sum += x;

  return sum;
}

int main()
{
  vector<int> array = {8, 4, 2, 1, 3, 6, 7, 9, 5};
  cout << minRewards(array) << endl;
  return 0;
}
