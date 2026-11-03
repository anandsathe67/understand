# Learner rules

Each rule below came from reading a finished explainer page as a 10-year-old and finding a place where the child stopped. Put the rule in the prompt (the template already does) and check the built page against it (the `explainer-build` skill does).

| Rule | The defect it fixed |
|---|---|
| Protect the discovery: raw data first, hint column on request, "check my answer" before the reveal | The pattern table showed "corners + faces" before the child looked, so "find the pattern yourself" became "compare two columns" |
| Worked numbers at every invariance or landing claim | "Losing an edge makes the total 1 bigger" with no numbers is the one piece of arithmetic that trips 10-year-olds |
| Explain "prove" vs "check" in one line before using "prove" | A 10-year-old reads "prove" as "check"; the point of the page was lost |
| Letters after numbers | n, x and θ arrived in five lines; the child skipped them and was lost at the climax, which was a substitution |
| Prerequisite named in section 1 | "Raised to the power" was assumed from the first paragraph; many 10-year-olds know "squared" and nothing more |
| Hard algebra in a "For older readers" box, never in the main path | (1 + i)(1 + i) expanded in the main text was "the wall" |
| Climax in words first, symbols after | The T-shirt line arrived as pure notation |
| One sentence linking the climax back to the first concrete idea | "The bank keeps your money and adds a slice; this machine keeps your arrow and adds a sideways slice" carried a whole section |
| Round readouts for a child, say they are rounded | "1.0000197×" and "359.9953°" are strange numbers, not "nearly 1" |
| No notice bullet may contradict the readout at default settings | A bullet said "lands near 1.22" while the readout beneath it showed 1.49; a child notices and loses trust |
| Try-at-home materials must work | Straws in dough collapse; plasticine holds |
| Sim gestures need a cue | "Tap a line, tap two dots, or tap an empty spot" with no feedback on the first tap |
| Stop markers at natural sittings | 4,400 words and 11 sims; the child needs to know the proof ended at section 7 |
| Don't assert a limit as a fact; say "closer the more steps you take" | "The chain always lands on the gold ring" was false at the default step count |
| Replace a disguised definition with the visible fact | "A dome is a football turned inside out" means the dual; the child tries to picture it and fails. "Every red corner sits where a pentagon would be" |
| Keep the voice; one idiom touch at most | Two prompts both closed with the same borrowed flourish; it read as pastiche |
| Audience line must survive a feasibility check | "10-year-olds" was kept by copy-paste for a topic whose load-bearing step is taught at 13 to 14 |
| Late sections (recap, stranger things, make-your-own) are where sentences get long | Teaching sections scored grade 3 to 5; the last two scored 8 to 9 on sentence length alone. Ask for short sentences everywhere, including the footer |
| State every definition the page must use; name attached files, never repository paths | A professional-topic prompt pointed at two files by repo path and left a ratio undefined; run cold, the builder had no data, and when given the data it used the standard definition instead of the house one |
