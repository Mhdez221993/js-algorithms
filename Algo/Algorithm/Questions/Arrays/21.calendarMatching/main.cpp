#include <vector>
#include <iostream>
using namespace std;

struct StringMeeting
{
  string start;
  string end;
};

void updateCalendar(
    vector<StringMeeting> &calendar,
    StringMeeting dailyBounds)
{
  StringMeeting startTime{"00:00", dailyBounds.start};
  StringMeeting endTime{dailyBounds.end, "23:59"};

  calendar.insert(calendar.begin(), startTime);
  calendar.push_back(endTime);
}

vector<StringMeeting> findAvailableTime(
    vector<StringMeeting> calendar)
{
  vector<StringMeeting> avilableCalendar;
  for (int i = 0; i < (calendar.size() - 1); i++)
  {
    string startTime = calendar[i].end;
    string endTime = calendar[i + 1].start;
    avilableCalendar.push_back({startTime, endTime});
  }
  return avilableCalendar;
}

vector<StringMeeting> mergeAvailableClalendars(vector<StringMeeting> calendar1, vector<StringMeeting> calendar2)
{
  vector<StringMeeting> mergedCalendar;
  int i = 0;
  int j = 0;
  while (i < calendar1.size() && j < calendar2.size())
  {
    StringMeeting currCalendar1 = calendar1[i];
    StringMeeting currCalendar2 = calendar2[j];
    if (currCalendar1.start < currCalendar2.start)
    {
      mergedCalendar.push_back(currCalendar1);
      i++;
    }
    else
    {
      mergedCalendar.push_back(currCalendar2);
      j++;
    }
  }

  while (i < calendar1.size())
    mergedCalendar.push_back(calendar1[i++]);
  while (j < calendar2.size())
    mergedCalendar.push_back(calendar2[j++]);

  return mergedCalendar;
}

vector<StringMeeting> calendarMatching(vector<StringMeeting> calendar1,
                                       StringMeeting dailyBounds1,
                                       vector<StringMeeting> calendar2,
                                       StringMeeting dailyBounds2,
                                       int meetingDuration)
{
  // Write your code here.
  updateCalendar(calendar1, dailyBounds1);
  updateCalendar(calendar2, dailyBounds2);
  vector<StringMeeting> avilableCalendar1 = findAvailableTime(calendar1);
  vector<StringMeeting> avilableCalendar2 = findAvailableTime(calendar2);
  vector<StringMeeting> mergedCalendars = mergeAvailableClalendars(avilableCalendar1, avilableCalendar2);
  return {};
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

  calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration);
  return 0;
}