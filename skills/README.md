# skills

Two Claude Code skills that repeat the process used for the pages in this repo.

| Skill | Does | Start it with |
|---|---|---|
| [explainer-prompt](explainer-prompt/SKILL.md) | topic (+ optional exemplar URLs, audience) → a prompt anyone can paste into Claude, plus a feasibility note that sets the audience honestly | "write me a prompt for an explainer on X like Y" |
| [explainer-build](explainer-build/SKILL.md) | prompt → page built cold → numbers, dates, learner pass, readability, browser check → fixes → published link | "build and review this prompt", "does this page work for a 10-year-old" |

## Install

Copy a skill folder into a project's `.claude/skills/` (project-wide) or `~/.claude/skills/` (every project):

```bash
cp -r skills/explainer-prompt ~/.claude/skills/
```

```bash
cp -r skills/explainer-build ~/.claude/skills/
```

Then in Claude Code: `/explainer-prompt Euler's formula for solid shapes, for a 10-year-old, modelled on https://aatishb.com/myriad/lets-build-a-brain/`.

`explainer-build` spawns a fresh agent for the build step and uses a browser for the check step; both are standard Claude Code tools. `readability.mjs` needs node.

## Typical run

1. `/explainer-prompt <topic> [URL]` → `prompt.md`, `prompt-notes.md`. Read the audience verdict.
2. `/explainer-build prompt.md` → `cold/index.html`, review report, fixes applied, link.
3. If the learner pass found a prompt defect (audience line, missing rule), edit `prompt.md` and rerun step 2. The prompt is the asset; the page is its test.
