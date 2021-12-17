function calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration) {
}

let calendar1 = [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']]
let dailyBounds1 = ['9:00', '20:00']
let calendar2 = [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']]
let dailyBounds2 = ['10:00', '18:30']
let meetingDuration = 30

console.log(calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration));