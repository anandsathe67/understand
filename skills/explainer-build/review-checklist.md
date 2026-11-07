# Review checklist

Two passes. The adversarial pass asks "is it true and does it work". The learner pass asks "can the reader follow it alone". Do both; they find different things.

## Adversarial pass

| Check | How | Severity if it fails |
|---|---|---|
| Does the page test the prompt? | Was anything given to the builder beyond the prompt plus the three technical lines? | process defect; rerun cold |
| Numbers | Script recomputes every stated number at the sim's default settings | any mismatch is top severity |
| Notice bullets vs readouts | For each bullet, set the sim as the bullet says and read the readout | contradiction = top severity |
| Limits stated as facts | "always lands on", "exactly" when the sim shows an approximation | fix the wording |
| Dates, names, quotes | Verify each; list status in the report | a wrong date is top severity; "unverified" is acceptable if the footer says so |
| Audience line | Compare the stated audience to the learner-pass age table | mismatch is a prompt defect, report it |
| Prompt bloat | Does any prompt line dictate structure the builder would find anyway, or forbid a better one? | note for the prompt author |
| Repeated devices | "Hold on to this idea" planted more than once dilutes it | fix |
| Sims actually fire | Script-drive each control; confirm the readout changes | a dead sim is top severity |
| Phone | 375 px, no horizontal scroll, controls reachable | fix |
| Console | zero errors on load and after driving sims | fix |
| Book: chapter without a sim | list chapters; each has a live control except contents | fix, or merge the chapter |
| Book: handoff | the first line of each chapter answers the previous closing question | fix the wording |
| Book: carried state | move in chapter n, open n+1, readout unchanged; reset, jump to n+2, readout matches its text | a lost move or a mismatch is top severity |
| Book: storage | grep for localStorage, sessionStorage, document.cookie, location.hash =, pushState, replaceState | fix; the sandbox blocks them |
| Book: phone top bar | height at 375 px under a quarter of the viewport | fix |

## Learner pass

Read every section as the youngest reader named, alone. Four logs per section:

1. **Words before explanation.** Any term, symbol or notation used before the page has shown the thing (°, radius, "prove", a power, a letter standing for a number).
2. **Accept-on-trust steps.** Any place the reader is told the result rather than shown it. Includes "check it in the sim" when checking is standing in for showing; that is acceptable only if the page says "checking isn't proving".
3. **Sim instructions the reader can't carry out.** Gestures with no cue, counts the sim doesn't show, values the text names that the controls can't reach, activities whose materials won't work.
4. **Attention.** Section word count, number of new things, whether the section ends the arc (a natural stop).

Then fill the age table:

| | Page |
|---|---|
| Alone, completes with understanding | age range |
| With a parent beside them | age range |
| A {youngest reader} alone gets | which sections, fully or loosely |
| Sittings needed | n, with where to break |
| Sections the reader cannot do alone | list, with the reason in three words each |

Rank the fixes. Mechanical ones (a hidden column, a worked line of numbers, a rounded readout, a material swap, a stop marker, a sentence split) get applied. Ones that change what is explained get listed with the section and the reason.

## Fix classes seen so far

From two pages, 24 fixes. Expect the same classes on any new page:

- answer shown before the reader tried (hint column, worked example given away)
- invariance claimed without the worked numbers
- "prove" used before "checking isn't proving" is said
- prerequisite assumed (powers, degrees, radius)
- letters before numbers
- hard algebra in the main path
- climax delivered as notation
- readout noise (seven decimals)
- bullet contradicts readout at default
- limit stated as fact
- home activity that won't work physically
- sim gesture with no cue
- disguised definition ("inside out" for the dual)
- no stop marker
- long sentences in the recap, stranger-things and footer sections
- a count stated in the text that the sim can't show ("16 − 24 + 11 = 3" with no such shape in the sim)
- a heading that promises more than the list delivers ("Four people drew the plane" above three names)
- book: a sticky top bar that eats the phone viewport; "left" and "right" in the text when the sim stacks on a phone; a Back button that wraps onto two lines
