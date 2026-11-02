# understand

Interactive explainer pages for curious 10-year-olds (and the adults beside them), plus the prompts that produced them, the reviews that fixed them, and two Claude Code skills that turn the whole process into something repeatable.

The model for all of it is Aatish Bhatia and Arkarup Banerjee's ["Let's Build a Brain"](https://aatishb.com/myriad/lets-build-a-brain/): one idea per section, show the thing before naming it, let the reader poke live simulations.

## The pages

Each topic has two builds. **Briefed** pages were built by an agent that got the prompt plus a technical page contract. **Cold** pages were built by a fresh agent that got nothing but the prompt. The cold builds are the honest test of the prompt, and they came out at least as good.

| Topic | Cold build (prompt only) | Briefed build (prompt + contract) | Prompt |
|---|---|---|---|
| Euler's formula for solid shapes, corners − edges + faces = 2 | [The Number That Never Changes](https://anandsathe67.github.io/understand/topics/eulers-polyhedron-formula/cold/) | [Let's Squash a Football](https://anandsathe67.github.io/understand/topics/eulers-polyhedron-formula/briefed/) | [prompt.md](topics/eulers-polyhedron-formula/prompt.md) |
| Euler's identity, e^(iπ) + 1 = 0 | [Let's Walk Round a Circle](https://anandsathe67.github.io/understand/topics/eulers-identity/cold/) | [Spinning to Minus One](https://anandsathe67.github.io/understand/topics/eulers-identity/briefed/) | [prompt.md](topics/eulers-identity/prompt.md) |

Every page is a single self-contained HTML file with no libraries. Every number shown is computed live from the real geometry or arithmetic. Works on a phone.

Audience, honestly: the football page is for a 10-year-old alone (two sittings). The identity page is for a strong 12-to-14-year-old alone, or a 10-year-old with a parent; the hard steps are marked "Parent, carry here".

## How the pages were made

1. **Prompt generation.** Starting from a parent's 90-word request that had produced a good rainbow page, two ~600-word prompts were written for the Euler topics ([v1 versions](topics/eulers-polyhedron-formula/prompt-v1.md)).
2. **Briefed build.** Two agents built pages from the prompts plus a [page contract](reviews/page-contract-used-by-briefed-builders.md) and a technical brief.
3. **Adversarial review** ([reviews/01](reviews/01-adversarial-review.md)). Every number recomputed by script, every date checked, every sim driven in a browser. Found one false claim, found that the pages did not actually test the prompts, found the audience line on the identity page was not credible.
4. **Learner pass** ([reviews/02](reviews/02-learner-pass.md)). Each section read as a 10-year-old alone: words used before they are explained, trust-me steps, sim instructions a child cannot follow, where attention runs out. 24 fixes applied to the pages and folded into the prompts (v2).
5. **Cold run** ([reviews/03](reviews/03-cold-run-comparison.md)). The v2 prompts were handed verbatim to fresh agents. The cold pages matched or beat the briefed pages on every learner criterion, which is the evidence that the prompts, not the briefing, carry the quality.
6. **Readability pass.** Flesch-Kincaid per section ([tools/readability.mjs](tools/readability.mjs)). Teaching sections sit at grade 3 to 5. The late summary sections had crept to grade 7 to 9 on sentence length alone and were shortened to grade 4 to 5.

## The skills

Two Claude Code skills in [skills/](skills/) capture the process:

| Skill | Input | Output |
|---|---|---|
| [explainer-prompt](skills/explainer-prompt/SKILL.md) | a topic, an audience, optionally URLs of existing good content | a prompt anyone can paste into Claude, plus notes on what is honest at that age |
| [explainer-build](skills/explainer-build/SKILL.md) | a prompt (from the skill above, or your own) | a reviewed, fixed, readability-checked single-file page, published to a link |

Install: copy a skill folder into `.claude/skills/` of a project (or `~/.claude/skills/` for everywhere), then `/explainer-prompt` or `/explainer-build` in Claude Code.

## Repo layout

```
topics/<slug>/prompt.md        the current prompt (v2)
topics/<slug>/prompt-v1.md     the first version, before review
topics/<slug>/cold/index.html  built from prompt.md alone
topics/<slug>/briefed/index.html  built from v1 prompt + page contract, then fixed
reviews/                       the three review documents and the page contract
skills/                        the two Claude Code skills
tools/readability.mjs          per-section Flesch-Kincaid for an HTML page
```

## Known gaps

- Cold pages have no dark mode and use the default cream-and-serif look. The prompt does not ask for either; add two lines if you want them.
- The identity page's section 10 bullet says the spiral "ends close to 1.65" while the default readout shows 1.690 beside the exact 1.649. Both are on screen, so a child sees the gap is the step count.
- Dates were checked against the reviewer's own knowledge, not the web. Each page's footer lists them.
