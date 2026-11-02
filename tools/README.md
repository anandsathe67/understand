# tools

## readability.mjs

Per-section Flesch-Kincaid grade for a single-file HTML page. Splits on `<h2>`, strips tags, scripts and styles, and prints one line per section:

```
node tools/readability.mjs path/to/index.html
```

```
  4.6  w/s   9.6  long%   7  top 24/21/21  Section 10 Domes, virus shells and a Nobel Prize
```

Columns: FK grade, words per sentence, percent of words with three or more syllables, the three longest sentences in words, section title.

How to read it: grade N is roughly US school grade N (grade 5 is a 10-to-11-year-old). The formula sees only sentence length and word length, not concept load. For a 10-year-old page, aim for grade 6 or under in every section and don't chase it below 4; a section over 6 is almost always fixed by splitting sentences longer than 18 words. The syllable counter is a heuristic and maths-heavy sections skew low because symbols are dropped.
