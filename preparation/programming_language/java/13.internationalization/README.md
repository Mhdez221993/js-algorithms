## Internationalization

1. Translating an application for international users requires more than translating messages. In particular, `formatting` for `numbers` and `dates` varies widely across the world.

2. A `locale` describes language and formatting preferences for a population of users.

3. The `NumberFormat` and `DateTimeFormat` classes handle locale-aware formatting of `numbers`, `currencies`, `dates`, and `times`.

4. The `MessageFormat` class can format message strings with placeholders, each of which can have its own format.

5. Use the `Collator` class for `locale-dependent` sorting of strings.

6. The `ResourceBundle` class manages localized strings and objects for multiple locales.

7. The `Preferences` class can be used for storing user preferences in a `platform-independent` way.
