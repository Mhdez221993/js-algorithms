#include <vector>
#include <iostream>
using namespace std;

struct StringMeeting
{
  string start;
  string end;
};

vector<StringMeeting> calendarMatching(
    vector<StringMeeting> calendar1,
    StringMeeting dailyBounds1,
    vector<StringMeeting> calendar2,
    StringMeeting dailyBounds2,
    int meetingDuration)
{
}

int main()
{
  vector<StringMeeting> calendar1 = {
      {"9:00", "10:30"},
      {"12:00", "13:00"},
      {"16:00", "18:00"}};
  vector<StringMeeting> calendar2 = {
      {"10:00", "11:30"},
      {"12:30", "14:30"},
      {"14:30", "15:00"},
      {"16:00", "17:00"}};
  StringMeeting dailyBounds1 = {"9:00", "20:00"};
  StringMeeting dailyBounds2 = {"9:00", "20:00"};
  int meetingDuration = 30;

  // calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2

  , meetingDuration);
  return 0;
}