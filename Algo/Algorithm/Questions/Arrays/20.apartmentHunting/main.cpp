#include <vector>
#include <unordered_map>
#include <climits>
#include <iostream>
using namespace std;

using namespace std;

int distanceBetween(int a, int b)
{
  return abs(a - b);
}

int getIndexAtBestBlock(vector<int> array)
{
  int bestValue = INT_MAX;
  int bestIndex = 0;
  for (int i = 0; i < array.size(); i++)
  {
    if (array[i] < bestValue)
    {
      bestValue = array[i];
      bestIndex = i;
    }
  }
  return bestIndex;
}

int apartmentHunting(vector<unordered_map<string, bool>> blocks,
                     vector<string> reqs)
{
  vector<int> maxDistanceAtBlock(blocks.size(), INT_MIN);
  for (int i = 0; i < blocks.size(); i++)
  {
    for (string req : reqs)
    {
      int closestReqDistance = INT_MAX;
      if (!blocks[i][req])
      {
        for (int j = 0; j < blocks.size(); j++)
        {
          if (blocks[j][req])
            closestReqDistance = min(distanceBetween(i, j), closestReqDistance);
        }
        maxDistanceAtBlock[i] = max(closestReqDistance, maxDistanceAtBlock[i]);
      }
    }
  }

  return getIndexAtBestBlock(maxDistanceAtBlock);
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