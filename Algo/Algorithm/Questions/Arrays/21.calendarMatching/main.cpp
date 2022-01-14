#include <vector>
#include <iostream>
using namespace std;

struct StringMeeting
{
  string start;
  string end;
};

struct Meeting
{
  int start;
  int end;
};

int timeToMinutes(string time)
{
  int delimiter = time.find(":");
  int hour = stoi(time.substr(0, delimiter));
  int minutes = stoi(time.substr(delimiter + 1, time.length()));
  return hour * 60 + minutes;
}

vector<Meeting>
updateCalendar(
    vector<StringMeeting> calendar,
    StringMeeting dailyBounds)
{
  vector<StringMeeting> updatedCalendar;
  updatedCalendar.push_back({"0:00", dailyBounds.start});
  updatedCalendar.insert(updatedCalendar.end(), calendar.begin(), calendar.end());
  updatedCalendar.push_back({dailyBounds.end, "23:59"});
  vector<Meeting> calendarInMinutes;
  for (auto x : updatedCalendar)
    calendarInMinutes.push_back({timeToMinutes(x.start), timeToMinutes(x.end)});

  return calendarInMinutes;
}

vector<Meeting> findAvailableTime(
    vector<Meeting> calendar)
{
  vector<Meeting> avilableCalendar;
  for (int i = 0; i < (calendar.size() - 1); i++)
  {
    int startTime = calendar[i].end;
    int endTime = calendar[i + 1].start;
    avilableCalendar.push_back({startTime, endTime});
  }
  return avilableCalendar;
}

vector<Meeting> mergeAvailableClalendars(vector<Meeting> calendar1, vector<Meeting> calendar2)
{
  vector<Meeting> mergedCalendar;
  int i = 0;
  int j = 0;
  while (i < calendar1.size() && j < calendar2.size())
  {
    Meeting currCalendar1 = calendar1[i];
    Meeting currCalendar2 = calendar2[j];
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

vector<Meeting> calendarMatching(vector<StringMeeting> calendar1,
                                 StringMeeting dailyBounds1,
                                 vector<StringMeeting> calendar2,
                                 StringMeeting dailyBounds2,
                                 int meetingDuration)
{
  // Write your code here.
  vector<Meeting> updatedCalendar1 = updateCalendar(calendar1, dailyBounds1);
  vector<Meeting> updatedCalendar2 = updateCalendar(calendar2, dailyBounds2);
  vector<Meeting> avilableCalendar1 = findAvailableTime(updatedCalendar1);
  vector<Meeting> avilableCalendar2 = findAvailableTime(updatedCalendar2);
  vector<Meeting> mergedCalendars = mergeAvailableClalendars(avilableCalendar1, avilableCalendar2);
  return mergedCalendars;
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

  for (auto x : calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration))
    cout << x.start << " " << x.end << endl;
  return 0;
}