---
name: explainer-build
description: Builds an interactive explainer page from a prompt (one written by explainer-prompt, or the user's own), then reviews it as an adversary and as the target-age learner, checks every number, date, readability score and browser behaviour, applies the fixes and publishes to a link. Use when someone has a prompt and wants the page, wants an existing explainer page reviewed or fixed, or asks "does this page work for a 10-year-old".
---

# explainer-build

Run a prompt cold, then make the result trustworthy. The build is the cheap part; the review is where the quality comes from.

## Inputs

| Input | Required | Notes |
|---|---|---|
| `prompt.md` | yes | Or an existing page to review (skip step 1). |
| Output path | no | Default `topics/<slug>/cold/index.html` in a repo laid out like this one. |
| Audience | no | Read it from the prompt's first paragraph. |
| Publish target | no | GitHub Pages folder, or a claude.ai artifact (see the page contract note in step 8). |

## Steps

### 1. Build cold

Spawn a fresh general-purpose agent with [build-brief.md](build-brief.md): the prompt text verbatim plus an output path and three technical lines (single self-contained HTML file, no libraries, every number computed live). Nothing else: no page contract, no list of sims, no history list. Anything you add beyond the prompt means the result no longer tests the prompt.

If the user also wants a house look or dark mode, that goes in the prompt as two lines, not in the brief.

Record what the agent reports back, then ignore it and verify everything yourself.

### 2. Recompute every number

Write a short node script that recomputes every number the page states: counts, sums, limits, where a chain lands, what a readout shows at the sim's **default** settings. Compare each to the page text and to the notice bullets.

A bullet that is true only in the limit ("lands on 1.22") while the default readout shows something else (1.49) is a defect, not a rounding issue. A child reads both.

### 3. Check dates and names

List every date, name and attributed quote. Verify with web search if available. If not, check against your own knowledge and mark anything doubtful; the page footer should say which dates were verified and which are "about".

### 4. Learner pass

Read the page section by section as the youngest reader the prompt names, alone, no adult. For each section log:

- words used before they are explained
- steps the reader is told to accept ("trust me" moments, including ones disguised as sim checks)
- sim instructions the reader could not carry out (gestures with no cue, counts not in the sim)
- where attention runs out (section length, number of new things)

Produce the age table and the ranked fixes using [review-checklist.md](review-checklist.md). The age table is the headline: "alone with understanding: 11 to 12; with a parent: 9 to 10". If it disagrees with the prompt's audience line, say so first.

### 5. Readability

```
node readability.mjs path/to/index.html
```

Target grade 6 or under in every section for a 10-year-old page. Sections over 6 are almost always the late ones (recap, stranger things, make-your-own, footer) and the cause is sentence length, not vocabulary. Split sentences over 18 words. Don't chase a section below grade 4; it goes choppy and buys nothing. See [readability.mjs](readability.mjs) for the columns.

For a book, also read the words column: each chapter's body text should sit between 200 and 300 words (sim captions and readouts excluded). Under 175 is a chapter with no idea of its own; over 320 is two ideas, or the scroll page coming back.

### 6. Browser check

Serve the folder statically (a local file:// open renders as a snapshot in some tools; a static server does not) and load the page:

- console errors: none
- `document.documentElement.scrollWidth <= innerWidth` at 375 px
- drive the key sims by script: set each slider to the values the notice bullets name and read the readout; press the buttons the text names
- the discovery mechanism works (hint column hidden until asked, check-my-answer before reveal)
- dark mode, if the prompt asked for it

For a book (the prompt has a format block; rules in `../explainer-prompt/book-format.md`), add:

- paging: Next, Back, the chapter buttons and the arrow keys each change the chapter; arrow keys do nothing while focus is inside a sim or a form control; the chapter heading takes focus and the page is at the top
- every chapter has a sim; the contents page links each puzzle to a chapter
- carried state: make a move in a chapter, go to the next, read the shared sim's readout; the move is still there
- out of order: reset the sim, jump straight to a later chapter that assumes earlier moves, read the readout; it matches that chapter's text
- the thread in the top bar changes when the sim changes
- "all on one page" shows every chapter and comes back cleanly
- at 375 px the sticky top bar is under a quarter of the viewport height
- sandbox: load the file through a blob URL in an `<iframe sandbox="allow-scripts">` (no `allow-same-origin`) and drive the same checks by script with `postMessage` back; zero errors, and no use of localStorage, cookies, hash or history

### 7. Fix pass

Apply fixes with an exact-string replacement script, one `(old, new)` pair per fix, asserting each `old` occurs exactly once ([fix-script-template.py](fix-script-template.py)). Keep a copy of the page before the pass. Re-run steps 2, 5 and 6 after. Fixes that are mechanical and unambiguous (a wrong number, a sentence split, a hidden column) just get applied; fixes that change the explanation get listed for the user with the reason.

### 8. Publish

- **GitHub Pages**: the page is complete with doctype; drop it in a folder and link it.
- **claude.ai artifact**: the artifact publisher wraps the file in its own skeleton, so strip `<!doctype>`, `<html>`, `<head>` and `<body>` tags and keep only head elements followed by body content. The briefed builds in this repo were made that way; see `reviews/page-contract-used-by-briefed-builders.md`.

### 9. Report

One table: words, reading grade, sims, console errors, horizontal scroll, numbers checked, dates checked, age-alone, age-with-parent. For a book add chapters, words per chapter (min and max), chapters without a sim, and the sandbox result. Then the fixes applied and the ones left for the user, each with the section and the reason.

### Converting an existing scroll page to a book

Cheaper than a cold build when the scroll page has already been reviewed: keep its CSS, data, calculations and sim markup verbatim, write new chapter markup around the sims, and add the paging script. Assemble with a build script rather than editing a copy, so the sims stay identical to the reviewed ones and the conversion can be re-run after a fix to the scroll page. Then run steps 2, 5 and 6 on the book. The first book was made this way; its prompt was run cold afterwards to see whether the format rules alone produce it.

## Why cold

The first Euler pages were built with the prompt plus a 1,200-word page contract plus a technical brief naming every sim. They were good, but they proved the brief worked, not the prompt. When the revised prompts were run cold, the pages matched or beat the briefed ones on every learner criterion. The contract bought only the look and dark mode. So: build cold, and put anything the page genuinely needs into the prompt where the next person who pastes it will get it too.

## Files

| File | Use |
|---|---|
| [build-brief.md](build-brief.md) | the exact brief for the cold-build agent |
| [review-checklist.md](review-checklist.md) | adversarial items, learner-pass classes, age-table format |
| [readability.mjs](readability.mjs) | per-section Flesch-Kincaid |
| [fix-script-template.py](fix-script-template.py) | exact-string replacement with single-occurrence asserts |
