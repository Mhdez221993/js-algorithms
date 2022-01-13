#include <vector>
#include <unordered_map>
#include <climits>
#include <iostream>
using namespace std;

using namespace std;

// O(br) time | O(br) space - where b is the number of blocks and r is the number of requirements.
vector<int> minDistances(vector<unordered_map<string, bool>> blocks, string req)
{
  vector<int> distances(blocks.size(), 0);
  int closestReq = INT_MAX;
  for (int i = 0; i < blocks.size(); i++)
  {
    if (blocks[i][req])
      closestReq = i;
    distances[i] = abs(i - closestReq);
  }

  closestReq = INT_MAX;
  for (int i = (blocks.size() - 1); i >= 0; i--)
  {
    if (blocks[i][req])
      closestReq = i;
    distances[i] = min(distances[i], abs(closestReq - i));
  }

  return distances;
}

int maxDistances(unordered_map<string, vector<int>> distances, vector<string> reqs, int index)
{
  int myIndex = INT_MIN;
  for (string req : reqs)
    myIndex = max(myIndex, distances[req][index]);
  return myIndex;
}

int bestBlock(vector<int> maxDistanceOfAReq)
{
  int myIndex = 0;
  int myValue = INT_MAX;
  for (int i = 0; i < maxDistanceOfAReq.size(); i++)
  {
    if (maxDistanceOfAReq[i] < myValue)
    {
      myIndex = i;
      myValue = maxDistanceOfAReq[i];
    }
  }
  return myIndex;
}

int apartmentHunting(vector<unordered_map<string, bool>> blocks,
                     vector<string> reqs)
{
  unordered_map<string, vector<int>> minDistanceFromBlock;
  vector<int> maxDistanceOfAReq(blocks.size(), 0);
  for (string req : reqs)
    minDistanceFromBlock[req] = minDistances(blocks, req);

  for (int i = 0; i < blocks.size(); i++)
    maxDistanceOfAReq[i] = maxDistances(minDistanceFromBlock, reqs, i);

  return bestBlock(maxDistanceOfAReq);
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