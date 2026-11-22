# Book format

A second shape for an explainer: one chapter on screen at a time instead of one long scroll. Same sims, same one-idea-per-section rule, different packaging. Both skills use this file; `explainer-prompt` writes the rules into the prompt, `explainer-build` checks the page against them.

## When to choose it

Pick the book when any of these holds; otherwise the scroll is simpler and loses nothing.

| Signal | Why it tips toward a book |
|---|---|
| Body text over about 2,500 words, or more than 8 sims | One scroll gets tiring before the capstone, and the late sections drift into long sentences |
| Sections that reuse an earlier sim ("go back to the board and switch the year") | Scrolling back breaks the thread; a shared sim that carries state does not |
| The reader works in short sittings (trainees at a desk, a child before bed) | A chapter is a natural stop; a scroll has none |
| The page will be read inside an app or a frame | Chapters keep the viewport short and the top bar useful |

## Rules for every chapter

| Rule | Reason |
|---|---|
| Title is a plain claim; the chapter adds exactly one idea | Same as the scroll rule; a chapter makes it enforceable |
| First line answers the question the previous chapter ended on; last line asks the question the next chapter answers | The handoff is what makes one chapter lead into the next; without it the book is a slide deck |
| Analogy before any term; bold the term after the reader has seen it at work | Unchanged from the scroll |
| One live sim, two at most; every chapter except the contents page has one | A chapter with no sim is a page of prose, which is what the reader came to avoid |
| Up to three "things to notice" bullets, then one "take this with you" box | Three is the attention budget after a sim; the box is the only place the rule is stated as a rule |
| 200 to 300 words of body text, counting the notice bullets and the take-away box, excluding only sim captions and readouts | Two to three minutes; measured on the first book, chapters under 175 felt thin and over 320 felt like the scroll again. Say what the count includes: a cold build read "body text" as prose only and delivered 290 to 400 |
| Sentences short: average under 14 words, none over 20 | A child-audience prompt gets this from the learner rules; a professional-topic prompt has to say it, or the cold build runs a third longer per sentence |
| Optional material (home or desk exercises, side notes, an appendix point) is collapsed at the end of its chapter | Keeps the chapter at one idea without losing the material |
| No "stranger things" chapter | Each point goes into the chapter it belongs to as a collapsed side note; a leftover point goes in the summary |
| A summary chapter before the capstone | The moves or steps on one page, before-and-after numbers computed live, then the ideas and exercises linked back to their chapters |
| Contents page: the opening scene, the puzzles each linked to the chapter that answers it, the chapter list | The puzzles are the contents |
| Twelve chapters at most, plus contents | Beyond that the format itself tires the reader |

## Rules for the page

| Rule | Reason |
|---|---|
| One HTML file; all state in memory; no localStorage, cookies, URL hash or history writes | The page may be shown in a sandboxed frame with no storage and an opaque origin; the first book's viewer blocks all of these |
| Chapters that build on the same sim share one instance that keeps its state; a chapter may show only the part of the sim in play | Never send the reader back to an earlier chapter; the work carries forward instead |
| A chapter the reader reaches out of order fills in the earlier chapters' moves | Its text quotes numbers that assume those moves |
| A thread in the top bar tracks the one number the book is about | Progress the reader can feel ("current ratio so far 1.51") |
| Back and Next buttons (Next names the next chapter), a chapter counter, numbered chapter buttons, left and right arrow keys | Arrow keys must not fire while focus is inside a sim or a form control |
| An "all chapters on one page" view | Skimming and printing; a shared sim sits in its first chapter in that view |
| On a phone the sticky top bar stays short (hide the chapter buttons, keep the counter and the thread) | The first book's bar took 200 of 300 px until this was fixed |
| Moving to a chapter scrolls to the top and focuses the chapter heading | Keyboard and screen-reader users land on the new chapter |

## Optional: a two-minute version

A single page in front of chapter 1 for the reader who wants the gist and will not read the book. It is an extra door, not a replacement for the contents page.

### When to add it

| Add it when | Skip it when |
|---|---|
| Many readers want the gist of a famous result or a question in the news (the Riemann hypothesis, "would it break encryption?") | The book is a discovery book for a child, where the gist would give away what the reader is meant to find |
| The book is long or hard (several "trust" or "older readers" steps), so a time-poor reader would otherwise get nothing | The whole book is already short enough to skim (under about 2,000 words) |
| The topic carries a popular myth the reader should leave without | The topic has no conclusion that survives being said in a sentence |

### Rules

| Rule | Reason |
|---|---|
| The contents page offers two doors: "Short on time? Read the two-minute version" and "Or start the book at chapter 1" | The reader chooses before they start; neither path hides the other |
| One page between the contents and chapter 1. It is not a chapter: chapter count, numbering, links and the thread are unchanged | Every chapter link and "chapter n" reference in the book stays correct |
| The top bar shows a label of its own ("Two minutes") on that page; its Next goes to chapter 1 and Back to the contents; the arrow keys do the same | It behaves like a page of the book without being counted as one |
| In the "all chapters on one page" view it sits after the contents | Skimming and printing still start with the gist |
| 300 to 400 words, counting everything but the sim caption and readout; reading grade 8 or under | Two minutes at an ordinary reading pace; it is the page most people will read |
| In order: the thing in a line; the claim in one plain sentence; one live picture; where it comes from in three lines; why it matters, as a short honest table where the topic has stakes; anything time-limited (a prize, the state of the question); links into the chapters that explain each part | Conclusions first, then provenance, then consequences, then the way in |
| One live sim, reused from a chapter (same drawing code, own controls, one slider at most), not a new one | The picture stays computed and costs almost no extra build |
| Conclusions, never answers the book asks the reader to find (no pattern the reader discovers in chapter 2, no value they hunt for in chapter 8) | The book's discovery moments still work for a reader who reads both |
| Compression must not overclaim. Where the topic has a popular myth, the honest table says it plainly ("your phone and your bank: nothing changes") | Two-minute summaries are where the myth creeps back in |
| Anything dated (news, a claimed proof, "still unclaimed") is written with its date and kept in step with the chapter that covers it in full | The front page is the first thing to go stale |
| An outside resource worth the reader's next step (a good video or article) may close the "go deeper" list, credited by name, author and year | The time-poor reader's next step is often not the book |

### What the first one measured

Added by hand to the Riemann hypothesis book after its cold build (`topics/riemann-hypothesis/`), then written into its `prompt-book.md`. It opened at about 400 words with one live picture (the smooth curve's error against the square-root band, one zoom slider) and an honest "what would change" table. A dated news box and a "watch next" link took it to about 480 words, which is the upper limit worth allowing. The block has not yet been run cold.

## What the first book measured

Converted from a 3,600-word scroll with 12 sections and 9 sims: 12 chapters of 175 to 310 words (about 3,000 words of chapter text), one sim each with the board shared by three chapters, reading grade 6 or under in every chapter, no errors inside a `sandbox="allow-scripts"` frame.

The same rules written into the prompt and run cold (a fresh agent, the prompt and the data files only) produced a book with every structural rule intact: contents with linked puzzles, handoff questions, one sim per chapter, a shared board with carried state and out-of-order fill-in, collapsed extras, a summary chapter, a thread in the top bar, in-memory state only. The two things it got wrong were both wording gaps in the prompt, now fixed above: what the word count includes, and sentence length.

With those two lines in, the two Euler prompts ran cold into books of 11 and 12 chapters (`topics/*/book/`): every chapter 169 to 297 words with a sim and a handoff, sentences averaging 6 to 10 words, state carried across chapters, no errors in the sandbox, and only a clipped phone top bar and a wrong article to fix afterwards. The review is `reviews/04-book-cold-run.md`.
