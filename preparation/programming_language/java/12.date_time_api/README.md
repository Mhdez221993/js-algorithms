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
