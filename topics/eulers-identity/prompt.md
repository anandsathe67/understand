I'm looking for an interactive explainer web page on Euler's identity, e^(iπ) + 1 = 0. The reader is a strong 12-to-14-year-old working alone, or a reasonably smart 10-year-old reading with a parent beside them. Please write for the 10-year-old and label clearly the few places where the older reader or the parent has to carry them. Everything I find either repeats "it links the five most important constants" or jumps straight to Taylor series. I want my child to actually *see* why e^(iπ) lands on −1.

I know this is much harder than most topics for a 10-year-old. Please build an honest path that uses only multiplication, a number line, turning and angles, and repeating a multiplication many times. No calculus, no Taylor series, no "just trust me" steps. No expanding brackets in the main text either: if you need (1 + i)(1 + i) worked out, put it in a "For older readers" box and let the main text state the outcome and check it in a sim. Introducing e through a story is fine, as long as the story is true. If a step genuinely can't be made honest at age 10, say so on the page and mark it "For older readers" rather than fudging it.

**Models to imitate:** Aatish Bhatia & Arkarup Banerjee's "Let's Build a Brain" (https://aatishb.com/myriad/lets-build-a-brain/), and a page called "Let's Catch a Rainbow" that worked brilliantly for us. Both build an idea one change at a time, show what happens before naming it, stay playful, and let the reader poke live simulations. Specifically:

1. Open with a vivid everyday scene (say, the equation printed on a cousin's T-shirt), then list 4–5 puzzling questions the page promises to answer: "How can a number be imaginary?", "How can multiplying ever make you spin?", "Why does e show up in both money and circles?"
2. About 10 numbered sections. Title each as a plain claim ("Multiplying by −1 is a half-turn"), and have each one add exactly ONE idea.
3. Give an everyday analogy before any term. Bold a technical word only after the thing itself has been shown. Explain what a power is (2³ means 2 × 2 × 2) in the first section, because the whole page is about one. Every letter that stands for a number (n, x, θ) must arrive *after* the concrete number it stands for, in a side remark, never as the thing the reader has to follow.
4. Every main diagram is a live simulation computed from the real maths, not a painted picture. Use sliders, drag handles, buttons and toggles, with a live readout sentence and a caption under each. Add "A few things to notice" bullets that tell the reader which settings to try.
5. Use callbacks: later sections send the reader back to an earlier sim. Plant an idea early ("Hold on to this idea") and pay it off later.
6. Include one moment where the answer emerges from repetition rather than being asserted.
7. Add 3–4 "TRY IT AT HOME" boxes using cheap household things. Each should explain why it works and tie back to a sim.
8. Weave small history nuggets into the sections. No separate history section.
9. Include a "Stranger things" section of short esoteric extras.
10. End with a "Make your own" capstone and a one-sentence recap of the whole mechanism. The footer should credit "Let's Build a Brain" and say honestly what the sims model and what they simplify.
11. Show exact numbers live.
12. Make it a single page with warm editorial typography that works well on a phone.

**Suggested arc (refine freely):**
- Multiplying is stretching AND turning. ×2 stretches, and ×(−1) is a half-turn on the number line. So negative × negative = positive is just two half-turns. Sim: an arrow on a number line.
- What number, done twice, gives a half-turn? A quarter-turn, which we call **i**. Show i × i = −1 as two 90° turns, which opens up a second axis (the number plane). Sim: an arrow on the plane with ×i, ×(−1) and ×2 buttons.
- Introduce e through plain growth first: a bank paying interest more and more often, (1 + 1/n)^n creeping toward 2.718… Sim: a slider for n. Plant "hold on to this idea."
- Feed the same (1 + x/n)^n machine a small *turn* instead of growth. Sim: a slider for n that draws (1 + iπ/n)^n step by step as a chain of arrows. As n grows, the path bends into a half-circle and lands closer and closer to −1, with a live readout of where it lands. This is the "emerges from repetition" moment.
- Put it together: e^(iθ) means "walk θ along a circle of radius 1." π is the halfway point, because the distance is measured as string length along the circle. So e^(iπ) = −1, and adding 1 gives 0. Write this climax in words first ("run the machine with a turn of π and you walk halfway round") and only then in symbols.
- Link the turn machine back to the bank in one sentence: the bank keeps your money and adds a slice; this machine keeps your arrow and adds a sideways slice. That one sentence is the whole idea.
- Round the live readouts for a child. "1.00002×" is nearly 1; "1.0000197×" is just a strange number.
- Never let a notice bullet claim something the readout under it contradicts at the sim's default setting. If a claim only holds as the step count grows, say so.

**Stranger things ideas:** e^(2πi) = 1 (a full turn); i^i is an ordinary real number (about 0.208); spinning arrows in AC electricity and sound; Descartes meaning "imaginary" as an insult; Bernoulli and compound interest (1683); Cotes (about 1714); Euler's *Introductio* (1748); Wessel, Argand and Gauss drawing the number plane. Please verify every date and number. If Euler never wrote the identity in exactly this form, say so.

**TRY IT AT HOME ideas:** turning a paper arrow by quarter-turns for ×i; a steel plate or roti with string, to show that π radius-lengths of string reach exactly halfway round; a calculator race between 1.01^100 and 1.001^1000 to watch them approach 2.718; folding a paper-strip spiral. Ekdum simple stuff is best.

- This is two or three sittings. Mark a "good place to stop" after i is introduced and again after e.

**Please avoid:** stating the formula and then admiring it; "it links the five most important constants"; Taylor series; calculus; any "just trust me" step; and jargon before intuition.
