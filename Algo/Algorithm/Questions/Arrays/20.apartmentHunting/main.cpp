#include <vector>
#include <unordered_map>
#include <climits>
#include <iostream>
using namespace std;

using namespace std;

int apartmentHunting(vector<unordered_map<string, bool>> blocks,
                     vector<string> reqs)
{
  vector<int> distances(blocks.size(), 0);
  for (int i = 0; i < blocks.size(); i++)
  {
    unordered_map<string, bool> currBlock = blocks[i];
    for (string req : reqs)
    {
      if (!currBlock[req])
      {
        int difference = blocks.size();
        for (int j = 0; j < blocks.size(); j++)
        {
          if (i == j)
            continue;
          if (blocks[j][req])
          {
            int currDifference = (max(i, j) - min(i, j));
            difference = min(currDifference, difference);
          }
        }
        distances[i] = max(difference, distances[i]);
      }
    }
  }

  int bestLocation = INT_MAX;
  int bestIndex = 0;
  for (int i = 0; i < distances.size(); i++)
  {
    if (distances[i] < bestLocation)
    {
      bestLocation = distances[i];
      bestIndex = i;
    }
  }

  return bestIndex;
}

int main()
{

  vector<unordered_map<string, bool>>
      blocks = {
          {{"gym", false},
           {"school", true},
           {"store", false}},
          {{"gym", true},
           {"school", false},
           {"store", false}},
          {{"gym", true},
           {"school", true},
           {"store", false}},
          {{"gym", false},
           {"school", true},
           {"store", false}},
          {{"gym", false},
           {"school", true},
           {"store", true}}};

  vector<string> reqs = {"gym", "school", "store"};

  cout << apartmentHunting(blocks, reqs) << endl;
  return 0;
}