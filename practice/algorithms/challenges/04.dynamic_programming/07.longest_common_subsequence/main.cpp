#include <vector>
#include <string>
using namespace std;

// O(nm*min(n, m)) | O(nm*min(n, m))
vector<char> longestCommonSubsequence(string str1, string str2)
{
  vector<vector<vector<char>>> lcs(str2.length() + 1, vector<vector<char>>(str1.length() + 1, vector<char>()));

  for (int i = 1; i < str2.length() + 1; i++)
  {
    for (int j = 1; j < str1.length() + 1; j++)
    {
      if (str2[i - 1] == str1[j - 1])
      {
        vector<char> copy = lcs[i - 1][j - 1];
        copy.push_back(str2[i - 1]);
        lcs[i][j] = copy;
      }
      else
        lcs[i][j] = lcs[i - 1][j].size() > lcs[i][j - 1].size() ? lcs[i - 1][j] : lcs[i][j - 1];
    }
  }

  return lcs[str2.length()][str1.length()];
}
