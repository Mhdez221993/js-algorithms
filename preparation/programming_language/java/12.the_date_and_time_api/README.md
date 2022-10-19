## The Date and Time API

1. All `java.time` objects are immutable.

2. An `Instant` is a point on the time line (similar to a Date).

3. In `Java time`, each day has exactly `86,400 seconds` (that is, no leap seconds).

4. A `Duration` is the difference between two instants.

5. `LocalDateTime` has no time zone information.

6. `TemporalAdjuster` methods handle common calendar computations, such as `finding` the first `Tuesday` of a month.

7. `ZonedDateTime` is a point in time in a given time zone (similar to GregorianCalendar).

8. Use a `Period`, not a `Duration`, when advancing zoned time, in order to account for daylight savings time changes.

9. Use `DateTimeFormatter` to format and parse dates and times.

## Research

1. Date and Time API
2. java.time objects?
3. Instant?
4. leap seconds?
5. Duration?
6. LocalDateTime?
7. TemporalAdjuster?
8. ZonedDateTime?
9. GregorianCalendar?
10. Period?
11. advancing zoned time?
12. DateTimeFormatter?
13. The Time Line?
14. Arithmetic Operations for Time Instants and Durations?
15. Local Dates?
16. LocalDate Methods?
17. Date Adjusters?
18. Local Time?
19. LocalTime Methods?
20. Zoned Time?
21. ZonedDateTime Methods?
22. Formatting and Parsing?
23. Predefined Formatters?
24. Date and Time Formatting Styles?
25. Commonly Used Formatting Symbols for Date/Time Formats?
26. Interoperating with Legacy Code?
27.  Conversions between java.time Classes and Legacy Classes?
