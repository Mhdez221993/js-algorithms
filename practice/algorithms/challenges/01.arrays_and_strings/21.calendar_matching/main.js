// O(c1 + c2) time | O(c1 + c2) space - where c1 and c2 are the respective numbers of meetings in calendar1 and calendar2.
function timeToMinutes(time) {
  const [hours, minutes] = time.split(':').map(str => parseInt(str, 10));
  return hours * 60 + minutes;
}
function updateCalendar(calendar, dailyBounds) {
  const updatedCalendar = [['0:00', dailyBounds[0]], ...calendar, [dailyBounds[1], '23:59']];

  return updatedCalendar.map(meeting => meeting.map(timeToMinutes));
}

function mergeCalendars(calendar1, calendar2) {
  const mergedCalendars = [];
  let i = 0;
  let j = 0;

  while (i < calendar1.length && j < calendar2.length) {
    if (calendar1[i][0] < calendar2[j][0]) {
      mergedCalendars.push(calendar1[i]);
      i += 1;
    } else {
      mergedCalendars.push(calendar2[j]);
      j += 1;
    }
  }

  while (i < calendar1.length) {
    mergedCalendars.push(calendar1[i]);
    i += 1;
  }

  while (j < calendar2.length) {
    mergedCalendars.push(calendar2[j]);
    j += 1;
  }

  return mergedCalendars;
}

function flattenCalendar(calendar) {
  const flattened = [calendar[0]];

  for (let i = 1; i < calendar.length; i += 1) {
    const currMeeting = calendar[i];
    const prevMeeting = flattened[flattened.length - 1];

    const [currStart, currEnd] = currMeeting;
    const [prevStart, prevEnd] = prevMeeting;

    if (prevEnd >= currStart) {
      const newCurrMeeting = [prevStart, Math.max(prevEnd, currEnd)];
      flattened[flattened.length - 1] = newCurrMeeting;
    } else {
      flattened.push(currMeeting);
    }
  }

  return flattened;
}

function minutesToTime(match) {
  const hour = Math.floor(match / 60);
  let minutes = match % 60;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hour}:${minutes}`;
}

function getMatchingAvailabilities(calendar, meetingDuration) {
  const matchingAvailabilities = [];

  for (let i = 1; i < calendar.length; i += 1) {
    const start = calendar[i - 1][1];
    const end = calendar[i][0];
    const availabilityDuration = end - start;

    if (availabilityDuration >= meetingDuration) {
      matchingAvailabilities.push([start, end]);
    }
  }

  return matchingAvailabilities.map(match => match.map(minutesToTime));
}

function calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration) {
  const updatedCalendar1 = updateCalendar(calendar1, dailyBounds1);
  const updatedCalendar2 = updateCalendar(calendar2, dailyBounds2);
  const mergedCalendars = mergeCalendars(updatedCalendar1, updatedCalendar2);
  const flattedCalendar = flattenCalendar(mergedCalendars);

  return getMatchingAvailabilities(flattedCalendar, meetingDuration);
}
