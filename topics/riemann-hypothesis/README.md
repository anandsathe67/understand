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
- 22 November 2026: a dated news note on the proof Levent Alpöge claimed on 20 November (written in Lean with Claude, under review), with links to six reports. It sits in chapter 11, with a short version on the two-minute page and pointers from the contents and chapter 5. It also says what a proof would be used for: proven guarantees for prime tests and prime searches, little change in practice, nothing for encryption, and the method as the bigger effect. Two cards in chapter 11's map were updated to match. The book still treats the hypothesis as unproved until mathematicians accept the proof; update the note when that changes.
- 22 November 2026, later: the news note corrected from Quanta Magazine's update (Alpöge posted a four-page paper plus the much larger Lean version; a second, 940-page claim of the generalised hypothesis by Alessandro Masullo, posted by Ravi Vakil). Quanta's Transformation page added as the first source; the two-minute page now says two proofs have been claimed.
- Ideas from [Quanta Magazine's video "The Riemann Hypothesis, Explained"](https://www.youtube.com/watch?v=zlm1aajH6gY) (Alex Kontorovich, 2021), rewritten in the book's own words and credited in each chapter and the footer: a spiral-of-sums sim in chapter 7 (settles at 2 + 3i, never settles on the line), the swirl trail with zeros marked in chapter 8, sums that settle and sums that run away in chapter 6, Factor City in chapter 2 (behind the pattern reveal), and a weighted-count toggle (ψ, steps of ln p, a straight-line smooth part) in chapter 9. History notes added: Gauss's tables to about 3 million, Riemann as Gauss's student, Riemann's geometry and relativity. The video's claim that many cryptography and physics theorems assume the hypothesis was deliberately left out. The two-minute page links to the video as a next step.
- Checked after these changes: spiral at 2 + 3i lands within 0.0002 of zeta (0.798 − 0.114i); weighted count ψ(50.5) = 49.49 and its 100-pair rebuild averages 0.23 from the staircase; Factor City shares match 1 ÷ ln within about 0.002; no errors, no storage, no horizontal scroll at 375 px in the sandboxed frame. Chapter 11 reads at grade 6.2 (its source list), the rest 2.4 to 4.5 apart from the summary.
