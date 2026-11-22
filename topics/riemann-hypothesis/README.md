# The Riemann hypothesis

How wobbly are the primes? For a curious layperson: an adult, or a reader of about 16, with school maths.

| File | What it is |
|---|---|
| [prompt-book.md](prompt-book.md) | The prompt, with the book format block and the two-minute version block. Paste it into Claude to get a book like `book/`. |
| [prompt-notes.md](prompt-notes.md) | Feasibility check, audience verdict, the honest answer on technology and encryption, computed numbers, and the facts checked with sources. |
| [book/index.html](book/index.html) | "How Wobbly Are the Primes?". Contents, an optional two-minute version, and 12 chapters, built cold from `prompt-book.md` (before the two-minute block was added) and then fixed. The top bar counts the zeros the reader has found on the line. |

Review status:

| Check | Result |
|---|---|
| Numbers | Prime counts, the smooth guess, Euler's sum and product, the first five zeros, the wave rebuild, chapter 10's breakout heights and the divisor test all recomputed and matched |
| Dates | 1737 to 2018 all correct as stated |
| Readability | Grade 4.5 or under in every chapter except the summary (5.4, from its list) |
| Sandbox | Loaded through a blob URL in `<iframe sandbox="allow-scripts">`: no errors, no storage use |
| Phone | No horizontal scroll at 375 px; top bar 47 px |
| Learner pass | Alone with understanding: adults and about 16 up. With help: 14 to 15. Chapters 7, 9, 10 and the final test are the hard ones |
| Not yet run | Touch on a real phone; dark mode checked by eye |

Fixes after the cold build:

- Two-minute version added at the owner's request (by hand, so not a cold test of that prompt block).
- Chapter 10: the wave size carried a constant, so the breakout heights were wrong (it said 10² for zeros just off the line). Now 10^379 at 0.51, 10^26 at 0.6, 10^9 at 0.75, 10^4 at 0.95.
- Chapter 7: the half line sat 7 px to the left of where it should be; a colour key added; the turning rule labelled as a trust step.
- Chapter 8: the twist tied to the chapter 7 trust step.
- Chapter 5: a side note giving the closer coin-flip match (the running total of +1 and −1 by prime-factor count).
- Chapter 2: one line saying the table is an average.
- Eight wording fixes from the review.
