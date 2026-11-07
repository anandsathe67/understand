# Book cold run

The two Euler prompts, with the book format block from `skills/explainer-prompt/book-format.md` added and nothing else changed, were handed to fresh agents the same way as in the [first cold run](03-cold-run-comparison.md): the prompt, an output path and three technical lines (one file, every number computed live, works at 375 px). No page contract, no sight of the earlier pages, no web search.

Outputs:
- `topics/eulers-polyhedron-formula/book/index.html` ("Why Always Two?", 97 KB, contents + 11 chapters)
- `topics/eulers-identity/book/index.html` ("Walk Halfway Round", 84 KB, contents + 12 chapters)

Both were then checked the same way as before: every readout recomputed or read at the sim's default setting and compared with the chapter text, every date checked, each chapter's word count and sentence length measured from the rendered page, paging and carried state driven by script, the page loaded at 375 px, and the whole file loaded inside an `<iframe sandbox="allow-scripts">` with no same-origin access.

## Verdict

The format rules survive a cold run on a child-audience topic. Both books kept every structural rule without a contract: a contents page whose puzzles link to chapters, claim titles, a first line that answers the previous chapter's question and a last line that asks the next one, one sim in every chapter, collapsed try-at-home and side-note boxes, a summary chapter, a thread in the top bar, arrow keys, an all-chapters view, and state kept in memory only. Three mechanical fixes were needed across the two books, none to the explanation.

| | Football book | Identity book |
|---|---|---|
| Chapters | contents + 11 | contents + 12 |
| Chapters without a sim | none | none |
| Words per chapter (bullets and take-away included) | 169 to 254; contents 270 | 227 to 295; contents 373, last chapter 465 with its footer |
| Reading grade per chapter | 1.7 to 4.3 | 1.5 to 4.1 |
| Sentences over 20 words | 3 in the whole book | 5, four of them in the last chapter |
| Handoff present | every chapter | every chapter |
| Shared sim with carried state | the flat map: made in chapter 3, snipped in 4, grown in 5; a reader who opens chapter 4 first gets a cube flattened for them | the arrow (chapters 2 and 3) and the slice count n (chapters 5, 6, 8, 10, 11, 12); the top bar follows where the turn machine lands |
| Numbers | all 11 shapes, the football (60, 90, 32; 12 pentagons, 20 hexagons), the domes (42, 120, 80 and 92, 270, 180), the frame (0), the snips: all correct | (1 + 1/12)¹² = 2.6130, its square 6.8280, 12 slices of π landing at −1.48 + 0.10i at 176.05°, the string walk, 1.1⁷ = 1.9487: all correct |
| Dates | about 1630, 1750, 1736, 1813, 1996, 1950s: all right, all marked "about" in the footer because the builder had no sources | Bombelli 1572, Descartes 1637, Bernoulli 1683, Jones 1706, Cotes 1714 and 1716, Euler 1748, Wessel 1797, Argand 1806, Gauss 1831, Thomson 1873, Steinmetz 1893, Brahmagupta 628: all right. "About 250 BC" for the Sand Reckoner was loose (Archimedes died in 212 BC); changed to "the 200s BC" |
| Console errors | 0 | 0 |
| Horizontal scroll at 375 px | none | none |
| Top bar at 375 px | 47 px, but the long thread text was clipped in chapter 1; fixed by hiding the counter and wrapping the thread onto its own line (63 px) | 44 px |
| Sandbox | no errors; storage blocked, page unaffected | same |
| Dark mode | toggle | toggle |
| Fixes applied | "A octahedron" (article helper added); phone thread clipping | Sand Reckoner date |

## What the books did that the pages could not

- **No scrolling back.** The football page sent the reader back to the map sim twice; the book's chapters 4 and 5 open on the map the reader just made. The identity page sent the reader back to the growth slider; the book's one slider is on screen in every chapter that needs it, and the number it shows is the one the reader last set.
- **A real stop.** Each contents page names the chapter that ends the first sitting; the chapter's own closing question says it again.
- **A summary with live numbers.** Both chapter 10s (football) and 11 (identity) replay the whole argument with the reader's own settings, which the single pages could only do as prose.
- **Collapsed extras.** The 18 short items that made up "Stranger shapes", "Stranger things", the history bits and the try-at-home boxes are now inside the chapter each belongs to, closed by default. The main text of a chapter is the one idea and nothing else.

## What the books lost

- **Overview.** Nobody can skim a book the way they skim a page; the "all chapters on one page" view is the answer, and both builders added one unasked beyond the format block's one line.
- **Resume.** Neither book remembers the chapter between visits, by design: the no-storage rule exists so the books run inside a sandboxed frame.
- **Chapter 2 of the football book is thin** (169 words). Its idea is the discovery table, which the reader fills in; the words are few because the work is theirs. The rule's floor is a guide, not a gate.

## Prompt notes

Nothing in either prompt needed changing after this run. The two wording lines added after the [spreading book's cold run](../skills/explainer-prompt/book-format.md) (what the word count includes; sentence length) did their job: the football book's builder reported its own counts as 207 to 297 with bullets included, and measured sentences of 6 to 10 words.

One thing worth knowing for the next prompt: the identity book's builder put a "For older readers" box in chapters 6, 7, 9 and 10. That is where the prompt's "honest path" rule and the book's "one idea" rule meet, and the collapsed box is the right answer to both.
