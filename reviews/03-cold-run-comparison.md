# Cold run of the revised Euler prompts

Method: each revised prompt was handed, verbatim, to a fresh agent with no other context. The only additions were "deliver a single HTML file at this path" and "reply with a short note". No page contract, no rainbow PDF, no technical requirements, no web search. The agents could not see "Let's Catch a Rainbow", which is also true of anyone who pastes the prompt into a new chat. Each result was then checked the same way as the briefed pages: numbers recomputed by script, dates checked, text read as a 10-year-old, page loaded in a browser at desktop and phone width with the key sims driven by script.

Cold outputs:
- `topics/eulers-polyhedron-formula/cold/index.html` ("The Number That Never Changes", 109 KB, SVG, 16 sims)
- `topics/eulers-identity/cold/index.html` ("Let's Walk Round a Circle", 75 KB, canvas, 10 sims)

## Verdict

The revised prompts work cold. Both cold pages are at least as good as the briefed-and-fixed pages on the learner criteria, and in several places better. The extra length of the prompts did not hurt. The technical contract the briefed builders were given bought dark mode and a house look, not pedagogy.

| | Briefed + fixed | Cold | Briefed + fixed | Cold |
|---|---|---|---|---|
| | **Football** | **Football** | **Identity** | **Identity** |
| Words | 4,500 | 5,900 | 4,100 | 5,200 |
| Reading grade (FK) | 4 to 5 | 5.2 | 4 to 5 | 5.4 |
| Sims | 11 | 16 | 8 | 10 |
| Console errors | 0 | 0 | 0 | 0 |
| Horizontal scroll at 375 px | none | none | none | none |
| Numbers checked | all correct | all correct | all correct | all correct |
| Dates checked | all correct | all correct | all correct | all correct |
| Dark mode | yes | no | yes | no |
| Look | own identity | cream + serif default | own identity | cream + serif default |

## What the cold pages did that the briefed pages did not

### Football page

- **The discovery is real.** The table starts with corners, edges and faces only. "Stuck? Give me a hint" adds the sum column. "I think I've found it, check my answer" lets the child commit before the reveal. Verified in the browser: the header gains "Corners + faces" only after the hint click.
- **"Prove" is taught with an analogy** (ten sweet apples do not prove the eleventh is sweet) in its own section, before the proof starts. The briefed page got one sentence in the intro after my fix.
- **A shape-family slider** (prisms, pyramids, double pyramids with any number of sides) makes "checking a thousand shapes is not proving" something the child can feel. Each extra side adds 2 − 3 + 1 = 0.
- **The take-away arithmetic is shown as counters**: green dots and blue squares for the pluses, red bars for the minuses, with the leftover pair always 2. This is a better treatment of "taking away a take-away makes it bigger" than any sentence.
- **A whole-proof machine** runs the three steps on the football in 90 steps and names each move. The child does not need to click 90 times to see the proof hold on a big shape.
- **The 12-pentagon proof avoids division entirely.** It multiplies the rule by 6 first (360 − 540 + 192 = 12), then hands whole numbers to patches. The briefed page used "6 ÷ 3 = 2 corners" sharing.
- **Königsberg is playable**, with a click-the-bridges walk and the odd-degree argument. The briefed page only described it.
- **Every monster is in the sim**, including cube-on-cube and a "cut line" toggle that repairs the ring face and returns the count to 2. The briefed page could only tell the child to build that one.
- **A dates footer** lists every date with its source status, including Legendre 1794 and Caspar and Klug 1962, both correct.

### Identity page

- **Powers get their own section and sim** ("the power machine") before anything else, with "how many times = 0 gives 1" as the first thing to notice.
- **Complex multiplication is shown tip-to-tail** (one copy of the arrow plus one copy turned a quarter), which is distributivity drawn rather than expanded. The brackets are in an older-readers box, exactly as the prompt asked.
- **"Parent, carry here" boxes** (3) name the places a 10-year-old needs help: the distributive step, the overshoot, and the honesty about e^(iπ) being a definition. This is a better answer to the audience problem than my "with a parent" line alone.
- **e^2 and e^3 are shown in the bank sim** by setting total growth to 2 and 3, so "the power is the amount you fed the machine" is seen before e^(iπ) is named.
- **A sixth puzzle question**, "Why π and not 180?", is answered explicitly in the string section.
- **The climax is in words first** with the bank sentence ("keeps your money and adds a slice / keeps your arrow and adds a sideways slice"), then the symbols, then a box that says plainly that e^(iπ) is a name chosen to keep the power rules, "a definition, not a discovery".
- **Readouts show the exact answer beside the computed one** (section 9: "gap between them 0.020"; section 10: "exact answer length e^0.50 = 1.649"), so no bullet can contradict a readout. The one soft spot: the section 10 bullet says "grown to 1.65" while the default 800-slice readout shows 1.690. The readout itself shows the exact value, so the child sees both.
- **Extra correct history**: Euler's e in Mechanica 1736, James Thomson coining "radian" in 1873, Steinmetz 1893, Feynman's "our jewel" 1964, Cotes dying at 33 with Newton's remark.

## What the briefed pages still do better

- **Theme and identity.** Both cold pages use the cream background and serif that the page contract bans as the AI default, and neither has a dark mode. The briefed pages have both. This is cosmetic and is a contract matter, not a prompt matter.
- **Publishing fit.** The cold pages carry their own doctype and head, so publishing them as artifacts means stripping the wrapper. Also a contract matter.
- **Length.** The cold pages are 30 percent longer. The extra length is mostly extra sims and the counters, which earn their place, but a 10-year-old will need three sittings on the football page rather than two.
- **Football section 3 breaks "one idea per section"**: it holds the shape-family slider, what "prove" means, and the history paragraph. Worth splitting.
- **Em dashes everywhere** on the cold football page. The contract bans them; the prompt does not.

## Learner read of the cold pages

Football: a 10-year-old alone gets sections 1 to 8 (the whole proof) with the counters doing the arithmetic. Section 9's "×6 pockets" argument is the hard step and is clearer than the briefed page's shares. Sections 10 to 12 are second-sitting material. Alone: 10 to 11. With a parent: 9.

Identity: a 10-year-old alone gets sections 1 to 4 and 6, and the four home activities. Sections 5, 7 and 9 are marked "Parent, carry here" and that is honest. Alone: 12 to 13. With a parent: 10 to 11. The page is a notch more accessible than the briefed one because the hard steps are named.

## What this says about the prompts

- The prompts are long, but every added line showed up in the cold output: the hint button, the worked numbers, the stop markers, the power section, the letters-after-numbers rule, the words-first climax, the parent markers. Nothing was ignored.
- The two things the prompts do not control, and which the briefed builders got from the contract, are look and dark mode. If those matter, add two lines: "give the page its own look, not cream paper and a serif" and "support dark mode". Everything else the contract supplied turned out to be unnecessary for quality.
- Neither cold page could see "Let's Catch a Rainbow", and neither suffered for it. The description of its principles inside the prompt was enough. The reference can stay, but it is not load-bearing.
