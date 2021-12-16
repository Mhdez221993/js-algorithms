const SIXTY_MINUTES = 60;

function findGap(currnetMeetingTime, nextMeetingTime, meetingDuration) {
  const start = currnetMeetingTime.split(':')[0] + currnetMeetingTime.split(':')[1];
  const end = nextMeetingTime.split(':')[0] + nextMeetingTime.split(':')[1];

  if (end - start >= meetingDuration) {
    return true;
  }

  return false;
}

function calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration) {
  const matchingTime = [];
  let i = 0;
  while (calendar1[i] && calendar2[i]) {
    const currentMeetingEndTime1 = calendar1[i][1];
    const nextMeetingStartTime1 = !calendar1[i + 1] ? dailyBounds1[1] : calendar1[i + 1][1];

    const currentMeetingEndTime2 = calendar2[i][1];
    const nextMeetingStartTime2 = !calendar2[i + 1] ? dailyBounds2[1] : calendar2[i + 1][1];

    if
    (
      findGap(currentMeetingEndTime1, nextMeetingStartTime1, meetingDuration)
        && findGap(currentMeetingEndTime2, nextMeetingStartTime2, meetingDuration)
    ) {
      matchingTime.push(setMatchingTime());
    }
    i += 1;
  }
}
