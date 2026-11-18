# Newton's cannon

Why the Moon doesn't fall down, for a reasonably smart 10-to-12-year-old alone.

| File | What it is |
|---|---|
| [prompt-book.md](prompt-book.md) | The prompt, with the book format block from `skills/explainer-prompt/book-format.md`. Paste it into Claude to get a book like `book/`. |
| [prompt-notes.md](prompt-notes.md) | Feasibility check, audience verdict, the numbers the page should reproduce, and what was left out. |
| [book/index.html](book/index.html) | "Why the Moon Doesn't Fall Down". Contents page plus 12 chapters, built cold from `prompt-book.md`. Chapters 5 to 7 share one cannon and one shot log; the top bar follows the reader's farthest shot. |

Review status:

| Check | Result |
|---|---|
| Numbers | Shot log, chapter 6 worked numbers, Moon figures and summary recomputed and matched |
| Readability | Grade 4.3 or under in every chapter; sentences average about 10 words |
| Sandbox | Loaded through a blob URL in `<iframe sandbox="allow-scripts">`: no errors, no storage use |
| Paging | Next, Back, arrow keys, contents and the all-chapters view work; arrow keys do nothing inside a slider; top bar is 44 px at 375 px wide |
| Carried state | Shots fired in chapter 6 are in chapter 7's log; a jump straight to chapter 8 fills in the earlier shots and sets the thread to "still flying" |
| Learner pass | Alone with understanding: 11 to 13. With a parent: 9 to 12. A 10-year-old alone gets chapters 1 to 5, 8, 10 and 11 fully and 6, 7, 9 and 12 loosely |
| Fixes applied | 24: orbit speed shown as 7.85 so it no longer clashes with the 7.8 that landed; log and readout distances to three figures; four notice bullets that gave answers away; a stop marker in chapter 6; "radii", degrees and the 60 times 60 explained; chapter heading takes focus on a chapter change |

Fixed after the learner pass (each changed the explanation or a sim):

- Pressing Next from chapter 6 without finding the speed now asks the reader to keep hunting; a second press fills it in. The all-chapters view no longer fills in the answer, so the summary shows "?" until the reader has found it.
- Chapter 12 counts whole turns ahead or behind, so the readout no longer flips direction.
- Every cannon slider has one-step minus and plus buttons.
- Chapter 6 says that 7.9 km a second is a touch too fast, shows the 100 km to 270 km swing, and gives the level speed (7.85).
- Chapter 6 says why the fall does not build up: "down" turns with the ball.
- The two-coin activity now uses a table corner, so the ruler knocks the second coin off the side edge.

Still to do by hand: try the two-coin activity on a real table, check touch on a real phone, and watch the chapter 12 readout run (it was changed but not watched live).

Known differences from the prompt: the mountain is 100 km tall, so slow shots land closer than the prompt's example sentence; the Moon's lap comes out at about 27.4 days because the sim leaves out the Moon's pull on the Earth; the apple story's date is given as "about 1666".
