# Adversarial review: "Euler's Law educational prompt" session

Reviewed: the two generated prompts (`prompt-polyhedra.md`, `prompt-identity.md`), the two sub-agent briefs that produced them, the page contract, and the two published pages ("Let's Squash a Football", "Spinning to Minus One"). Every number on both pages was recomputed by script; both pages were loaded in a browser and their sims driven by script. Dates were checked against my own knowledge, not the web.

## Verdict

Both pages are strong and almost everything checks out. Two things deserve a fix before sharing: one false claim on the identity page, and the fact that the pages do not actually test the prompts.

## Findings, most severe first

### 1. The pages do not validate the prompts (process)

The user asked for a prompt. The pages were built by agents that received the prompt **plus** a 1,200-word technical page contract, **plus** the rainbow PDF, **plus** a long "Technical requirements" list naming every sim, every date and every geometry trick. The prompt alone was never pasted into a fresh Claude. So the session's output proves the briefs work, not the prompts. If the parent pastes `prompt-identity.md` cold, they will get something materially different, and probably weaker (no page contract, no "compute, never hard-code" rule, no dark theme, no verification pass).

Fix: run each prompt once, cold, in a fresh conversation and compare. Or fold the few load-bearing technical lines from the builder brief into the prompt (counts computed from real geometry; sims computed from real complex arithmetic; verify with a script; works on a phone).

### 2. False claim at default settings, identity page section 10 (content)

Text: "With turn at 2π, the chain always finishes on the line, pointing right. The grow dial alone decides how far out. Grow 0.2 lands near 1.22, which is e^0.2."

At the sim's default n = 100 the readout under that very sentence says: "You land at 1.49 − 0.04i … 1.486× … turned 0.996 full turns." Recomputed: 1.486 at n = 100, 1.246 at n = 1,000. The 1.22 figure is the n → ∞ limit only. A 10-year-old who reads the bullet and looks at the readout sees the page contradict itself.

Same overreach in section 8 ("the chain always lands on the gold ring"): at n = 1,000 the 2π walk lands at 1.02, and at 4π it lands at 2.19 on the default n = 100. The honesty footer covers this in general, but the two bullets state it as exact.

Fix: "Push n to 10,000 first. Then grow 0.2 lands near 1.22…" and "lands close to the gold ring, closer the more steps you take."

### 3. Audience claim is not credible for the identity page (prompt design)

Both prompts say "reasonably smart 10-year-olds." The identity page's load-bearing step (section 4) expands (1 + i)(1 + i) with brackets and i² = −1, then verifies "angles add, lengths multiply" only by poking a sim, pushing the proof to a trig box. Section 6 needs π/n, percentages and "stretch 1.0000197×". The first turn of the session said this topic was 13–14 material; the user asked for both anyway, which is fine, but the prompt should say "a strong 12-to-14-year-old, or a 10-year-old with an adult" rather than keep the rainbow audience by copy-paste. The identity prompt also says "no 'just trust me' steps" while the angle-add rule is exactly a trust-the-sim step; the page is honest about it ("checking isn't proving"), so this is a prompt/page mismatch rather than dishonesty.

### 4. Prompt bloat and over-specification (prompt design)

The parent's original rainbow prompt was ~90 words and got a great page. The generated prompts are ~600 and ~650 words with a 12-point structural spec, a fixed section arc, exact history list and exact sim list. Two risks:

- The prompt now dictates structure the model would have found anyway, and forbids it from finding a better one (the polyhedra builder followed the arc almost verbatim).
- The second prompt copies "Hold on to this idea" once; the identity page plants it **three** times (sections 2, 4, 5), diluting the device the rainbow page used once.

The prompts also inherit a tic: "Ekaadhi page like this would make my kids' week" / "Ekdum simple stuff is best." One Indian-English touch was asked for; both prompts put it in a closing flourish that reads as pastiche of the original rather than the parent's voice.

### 5. "Please verify every date" with no way to verify (process)

Both prompts and both builder briefs ask for dates to be verified, but the builders had no web search and said so. The orchestrator relayed the two doubtful dates. My check of the rest:

| Claim | Status |
|---|---|
| Euler letter to Goldbach Nov 1750; Königsberg 1736; Cauchy 1813; L'Huilier ~1813; Leibniz copy 1676, found 1860; Lakatos 1976; Expo 67; C60 1985 / Nobel 1996; Telstar 1970 World Cup; adenovirus 240 + 12 | correct |
| Bernoulli 1683; Cotes 1714; Introductio 1748; Descartes 1637; Wessel 1799; Argand 1806; Gauss 1831; i in 1777; Brahmagupta 628; Aryabhata 499 / 3.1416; India 50 Hz; A = 440 | correct |
| "Euler started calling it e in the late 1720s" | defensible (1727/28 manuscript; 1731 letter) |
| "Euler never wrote e^(iπ) + 1 = 0 in that form" | standard view, stated carefully |

No date errors found. The process gap is real, but it did not bite.

### 6. Numbers on both pages (content) — all correct

Identity page: ₹225 / ₹261.30 / ₹271.46 / ₹271.83; "every second adds under 40 paise" (37 p); 1.01^100 = 2.7048; 1.001^1000 = 2.7169; 1 + 0.1i turns 5.71° and stretches 0.5 %; n = 2 lands at −1.47 + 3.14i; n = 10,000 lands 0.0005 from −1; ruler drawing lands 8.87 cm (page says "about 8.9"); i^i = 0.2079; one radian "just under 60°."

Polyhedra page: cube net 14 V / 19 E / 7 F; chopped cube 10 / 15 / 7; dented cube 9 / 16 / 9; kissing cubes 15 / 24 / 12 = 3; stacked cube 16 / 24 / 11 = 3; star as 60 triangles = 2, as 12 pentagrams = −6; six pentagons add 1; six 5-valent dome corners add 1; dome size 2 has 42 corners; pizza map 4 − 6 + 4.

### 7. Pedagogy nits (content)

- Polyhedra section 2 adds a pre-computed "Corners + faces" column before the reader looks, which tells them which combination to try. Discovery is guided, not free. Still far better than stating the formula.
- Polyhedra section 8: "A ball could have 20 hexagons, or 200, or none at all" then "12 and 1 … nobody can build that ball." Correct (every hexagon count except 1 is realisable) but the two sentences sit close enough to confuse a child.
- Identity section 6 uses "turn amount π" a full section before section 7 explains why π is halfway. The page flags it ("section 7 explains"); acceptable.
- Identity page: "Why does e show up in money and circles?" is on the question list but is answered only implicitly.

### 8. Contract and robustness (technical) — passes

- No console errors on either page. Dark mode via `data-theme` works on both. Fonts are Bricolage Grotesque + Literata / Atkinson Hyperlegible, not the banned defaults.
- The identity page includes `<meta charset>` and a viewport line the contract said to omit; the publish wrapper duplicates them harmlessly.
- Polyhedra "Check your shape" box handles bad input (negatives, decimals, letters → "Type three counts"), zero (points to the tunnel idea), and non-2 totals (points to section 10).
- Known limitation reported by the session: on phones the 3D shapes only rotate side to side. Not re-tested here.

## What I did not check

Rendering on a real phone; drag/touch behaviour; the snip and build sims beyond the builder's own script test (my scripted "snip all" click did not fire, so that claim rests on the builder's report).
