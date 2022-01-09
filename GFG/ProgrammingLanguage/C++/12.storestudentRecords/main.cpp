#include <bits/stdc++.h>
using namespace std;

// Write a program to store student records in a structure. It should contain the following information:
// Student ID
// Name
// Year
// CGPA

struct student
{
  string id, name;
  int year;
  double cgpa;
};

int main()
{
  student team[] = {
      {"id1", "Robert", 1, 8.9},
      {"id2", "Karl", 2, 5.9},
      {"id3", "Peter", 5, 6.9},
  };

  for (int i = 0; i < 3; i++)
    cout << "ID: " << team[i].id << " "
         << "Name: " << team[i].name << " "
         << "Year: " << team[i].year << " "
         << "CGPA: " << team[i].cgpa << endl;
  return 0;
}
