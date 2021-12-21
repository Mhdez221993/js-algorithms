#include <vector>
#include <map>
#include <iostream>
using namespace std;

string tournamentWinner(vector<vector<string>> competitions, vector<int> results) {
  map <string, int> winners;
  for(int i = 0; i < results.size(); i++){
    string currWinner;
    string home = competitions[i][0];
    string visitor = competitions[i][1];
    if(results[i] == 1){
      currWinner = home;
    } else {
      currWinner = visitor;
    }

    if(!winners.count(currWinner)) {
      winners[currWinner] = 1;
    }
    winners[currWinner] += 1;
  }

  string finalWinner = "";
  int finalPoint = 0;
  for(auto const& [key, val] : winners) {

    if(val > finalPoint){
      finalWinner = key;
      finalPoint = val;
    }
  }

  return finalWinner;
}

int main()
{
  vector<vector<string>> competitions = {{"HTML", "C#"}, {"C#", "Python"}, {"Python", "HTML"}};
  vector<int> results = {0, 0, 1};
  cout << tournamentWinner(competitions, results) << endl;
  return 0;
}