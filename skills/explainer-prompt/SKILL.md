---
name: explainer-prompt
description: Writes a paste-into-Claude prompt for an interactive, simulation-driven explainer page on a given topic for a given audience (default a reasonably smart 10-year-old), optionally modelled on URLs of existing good content. Use when someone asks for "a prompt that gets me a page like X about Y", wants an explainer for a child, or wants to reproduce the "Let's Build a Brain" style for a new topic.
---

# explainer-prompt

Turn a topic (and optionally a URL or two of content the user already likes) into a prompt that, pasted cold into a fresh Claude conversation, produces a single-page interactive explainer the audience can actually follow.

The output is a prompt, not a page. To build and review the page, use `explainer-build`.

## Inputs

| Input | Required | Notes |
|---|---|---|
| Topic | yes | "Euler's formula for solid shapes", "how rainbows form", "why the sky is blue" |
| Audience | no | Default: "reasonably smart 10-year-old working alone". Adjust honestly after step 2. |
| Exemplar URLs | no | Pages the user already thinks are good. Fetch them, extract principles, never copy text. |
| The user's own earlier prompt | no | If they have one that worked, keep its voice and length as the baseline. |
| Format | no | `scroll` (default) or `book`: one chapter on screen at a time. Decide with the table in [book-format.md](book-format.md); the usual triggers are more than about 2,500 words or 8 sims, sections that reuse an earlier sim, or readers who work in short sittings. |

## Steps

### 1. Study the exemplars (if any)

Fetch each URL. Write down, in your own words, 5 to 8 things the page does that make it work. Typical findings for the "Let's Build a Brain" family:

- one idea per section, each section titled as a plain claim
- show the thing before naming it; bold the term only after
- every main diagram is a live simulation computed from the real maths, with sliders, a readout sentence and a caption
- "a few things to notice" bullets that tell the reader which settings to try
- callbacks: plant an idea early, pay it off later
- one moment where the answer emerges from repetition instead of being asserted
- "try it at home" boxes with cheap household things
- history woven into sections, not a separate history section
- a "stranger things" section of short extras, then a "make your own" capstone and a one-sentence recap

If the user supplied a prompt that produced one of those pages, treat that prompt's length and voice as the target. A 90-word prompt once produced an excellent page; a 1,000-word prompt is justified only when every line changes the output.

### 2. Feasibility and honesty check for the topic at the audience

This is the step that was missing when the first Euler's identity prompt said "10-year-olds" and produced a page that expanded (1 + i)(1 + i). Do it before drafting.

List the 4 to 8 load-bearing steps of the explanation. For each, decide which tools the audience has (counting, adding, multiplying, measuring, turning, repeating a step many times) and mark the step:

| Mark | Meaning | What the prompt must say |
|---|---|---|
| shown | can be seen with those tools and a sim | nothing special |
| older box | needs a tool the audience lacks (bracket algebra, limits, trig) | "put it in a 'For older readers' box; the main text states the outcome and checks it in a sim" |
| trust | cannot be made honest at this age | "say so on the page; never fudge it" |

Then set the audience line. If more than one load-bearing step is "older box" or "trust", the honest line is "a strong 12-to-14-year-old alone, or a 10-year-old reading with a parent", and the prompt should ask the builder to mark the places the parent has to carry the child. Do not keep an audience claim by copy-paste from a previous prompt.

Write this check into `prompt-notes.md` so the user can see why the audience line is what it is.

### 3. Draft the prompt

Use [prompt-template.md](prompt-template.md). Fill every slot with topic-specific content; delete slots that do not apply. The parts that matter most, in order:

1. The opening paragraph: who the reader is, what the user has tried, what they want the child to *see*. One honest sentence about difficulty if the topic is hard.
2. Constraints on the path: which tools the explanation may use, what is banned (calculus, "just trust me", jargon before intuition), where hard steps go.
   - For a book, the format block from the template, filled in with the one number the thread tracks. Then go through the numbered requirements and apply every `{book: …}` substitution; the chapter rules in [book-format.md](book-format.md) are what the block encodes, and the reasons there are for you, not the prompt.
3. Models to imitate, as principles in your words from step 1, not as "copy this page".
4. The numbered requirements (about 12). Keep the ones in the template; they are all load-bearing and each one was missing from some earlier page.
5. A suggested arc, marked "refine freely". Four to six bullets, each naming the one idea and its sim. The arc is where the thinking goes; a good arc is the difference between a page and a tour.
6. The learner rules from [learner-rules.md](learner-rules.md). These came from reading finished pages as a 10-year-old and every one of them fixed a real defect.
7. Stranger-things ideas and try-at-home ideas, with "verify every date and number" and a fallback ("if unsure, say 'about'").
8. Sittings and stop markers.
9. The avoid list.

Length: 600 to 1,100 words. Over that, cut the sim list and history list first; the builder finds those on its own. A prompt that carries a data source and house definitions (a professional topic with attached files) runs 1,200 to 1,600 words, and a book prompt adds about 250 for the format block; that is the one case where the length is earned.

### 4. Self-check before handing over

Go down this list. Fix the prompt, don't just note it.

- [ ] Audience line survives step 2. Hard steps have a named home ("older readers" box or an honest "we can't show this at 10").
- [ ] Every letter that stands for a number is required to arrive after the concrete number (letters-after-numbers rule).
- [ ] At least one "emerges from repetition" moment is named concretely for this topic.
- [ ] The discovery moment is protected: the prompt forbids showing the answer column before the reader has tried (hint-on-request).
- [ ] Worked numbers are required at every "stays the same" or "lands on" claim.
- [ ] Readouts are required to be rounded for a child, and no notice bullet may contradict a readout at default settings.
- [ ] Try-at-home materials would actually work (plasticine holds straws; dough does not).
- [ ] Stop markers are requested at the natural sittings.
- [ ] No line dictates structure the builder would find anyway; no line forbids a better structure ("refine freely" is present).
- [ ] The voice is the user's. One touch of their idiom at most; no pastiche.
- [ ] "Verify every date" has a fallback the builder can honour without web access.
- [ ] Every formula, definition or house rule the page must use is stated in the prompt itself. A builder that only has the attached data will fall back to the standard definition and say so honestly; if your organisation's definition differs (a ratio that also subtracts insider receivables, say), the prompt has to carry it.
- [ ] If the prompt depends on source files, it says "I have attached" and names them; it never points at a repository path a cold reader cannot open.
- [ ] If the format is a book: the handoff rule (first line answers, last line asks), the no-chapter-without-a-sim rule, the carried-state rule with its out-of-order fill-in, the no-storage rule and the thread number are all in the prompt. A builder given "chapters" without these produces a slide deck with Next buttons.

### 5. Deliver

Write `prompt.md` (the prompt, nothing else, ready to paste) and `prompt-notes.md` (feasibility table, audience decision, what was deliberately left out, exemplar principles). Tell the user the one-line audience verdict and offer `explainer-build` to run it cold.

## Worked examples

Two finished prompts with their v1 versions and the reviews that changed them:

- `topics/eulers-polyhedron-formula/prompt.md` (10-year-old alone; 930 words)
- `topics/eulers-identity/prompt.md` (12 to 14 alone, or 10 with a parent; 1,100 words)

Read one before drafting; the arc bullets show the level of detail that works. For the book format there is no public example yet; the rules and the measurements from the first book are in [book-format.md](book-format.md).
