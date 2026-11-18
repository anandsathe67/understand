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
| Not yet run | Touch on a real phone |

Open, from the learner pass (each changes the explanation or a sim, so left for the author):

- Pressing Next from chapter 6 without finding the speed, or opening the all-chapters view, fills in 7.8 and 7.9 and so gives the answer away.
- Chapter 12: at the default height the readout flips between "ahead" and "behind" as the satellite laps the house.
- Chapter 6: the slider has 86 fine steps and no nudge buttons, which is hard on a phone.
- Chapter 6: 7.9 km a second is already a slight oval (100 km to 270 km up), while the text speaks of a circle.
- Chapter 2 says falling speeds up; chapter 6 says each second goes the same way. One sentence should say that "down" turns with the ball.
- Chapter 1 home activity: the ruler can sweep the second coin along the edge instead of dropping it. Test by hand and reword.

Known differences from the prompt: the mountain is 100 km tall, so slow shots land closer than the prompt's example sentence; the Moon's lap comes out at about 27.4 days because the sim leaves out the Moon's pull on the Earth; the apple story's date is given as "about 1666".
