# Euler's formula for solid shapes

corners − edges + faces = 2, for a reasonably smart 10-year-old working alone.

| File | What it is |
|---|---|
| [prompt.md](prompt.md) | Current prompt (v2). Paste it into Claude to get a page like `cold/`. |
| [prompt-v1.md](prompt-v1.md) | First version, before the adversarial review and learner pass. |
| [cold/index.html](cold/index.html) | "The Number That Never Changes". Built by a fresh agent from `prompt.md` alone. Sentences in sections 10 and 12 later shortened for readability. |
| [book/index.html](book/index.html) | "Why Always Two?". The book edition: contents page plus 11 chapters, one on screen at a time, built cold from `prompt-book.md` and left as built apart from two mechanical fixes (an article, a clipped phone top bar). The flat map the reader makes in chapter 3 is the one they snip in 4 and grow in 5; the top bar carries corners − edges + faces for the shape on screen. |
| [prompt-book.md](prompt-book.md) | The v2 prompt with the book format block from `skills/explainer-prompt/book-format.md`: chapter rules, carried state, a summary chapter, side notes instead of a stranger-shapes section. |
| [briefed/index.html](briefed/index.html) | "Let's Squash a Football". Built from `prompt-v1.md` plus the page contract and a technical brief, then given the 24 learner-pass fixes. Dark mode, own look. |

What changed from v1 to v2 (all from the learner pass):

- The data table withholds the "corners + faces" column until the child asks for a hint.
- A worked numeric line at every "the total stays the same" moment (8 − 12 + 6 = 2; snip one: 8 − 11 + 5 = 2).
- "Checking is not proving" explained in one line before the word "prove" is used.
- Plasticine, not dough, for the straw model.
- A visible "good place to stop" after the proof ends.
- The dual ("a dome is a football inside out") replaced with "every red corner sits where a pentagon would be".
