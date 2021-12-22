// O(n) time | O(k) space - where n is the number of competitions and k is the number of teams
#include <vector>
#include <map>
#include <iostream>
using namespace std;

void updateScores(string currWinner, int point, map<string, int> &scores)
{
  if (scores.find(currWinner) == scores.end())
  {
    scores[currWinner] = 0;
  }

  scores[currWinner] += point;
}

string tournamentWinner(vector<vector<string>> competitions, vector<int> results)
{
  string currBestTeam = "";
  map<string, int> scores = {{currBestTeam, 0}};

  for (int i = 0; i < results.size(); i++)
  {
    int result = results[i];
    string home = competitions[i][0];
    string visitor = competitions[i][1];
    string currWinner = result ? home : visitor;

    updateScores(currWinner, 3, scores);

    if (scores[currWinner] > scores[currBestTeam])
    {
      currBestTeam = currWinner;
    }
  }

  return currBestTeam;
}

int main()
{
  vector<vector<string>> competitions = {{"HTML", "C#"}, {"C#", "Python"}, {"Python", "HTML"}};
  vector<int> results = {0, 0, 1};
  cout << tournamentWinner(competitions, results) << endl;
  return 0;
}