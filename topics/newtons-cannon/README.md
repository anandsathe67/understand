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
| Readability | Grade 4.4 or under in every chapter; sentences average about 10 words |
| Console and storage | No errors on load; no browser storage used |
| Fixes applied | Two sentences reworded (chapter 6 take-away, final recap) |
| Not yet run | Learner pass, sandboxed-frame test, touch and arrow keys |

Known differences from the prompt: the mountain is 100 km tall, so slow shots land closer than the prompt's example sentence; the Moon's lap comes out at about 27.4 days because the sim leaves out the Moon's pull on the Earth; the apple story's date is given as "about 1666".
