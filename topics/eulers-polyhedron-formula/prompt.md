I'm looking for a proper interactive web page that explains Euler's formula for solid shapes, **corners − edges + faces = 2**, to reasonably smart 10-year-olds working on their own. Whenever I ask an AI about this I get the formula stated, a cube counted (8 − 12 + 6 = 2), and nothing else. I want my kids to find the pattern for themselves and then understand *why* it is always 2.

Please build it as one single page in the style of two pages I love: Aatish Bhatia & Arkarup Banerjee's "Let's Build a Brain" (https://aatishb.com/myriad/lets-build-a-brain/) and an earlier page I got called "Let's Catch a Rainbow." They add one change at a time, show what happens before giving it a name, stay playful, use no equations, and have simulations you can poke. Here is what I need:

**Structure**
- Start with a vivid everyday scene, like a football on the grass, a pair of dice, a cut gemstone or a camping tent. Then list 4–5 puzzling questions the page promises to answer: "Why does every football have exactly 12 black pentagons?", "Can you build a shape that breaks the rule?", "Why is a donut different from a ball?"
- Use about 10 numbered sections. Title each one as a plain claim (e.g., "Squash any shape flat and nothing changes"), and add exactly ONE new idea per section.
- Give an everyday analogy before any new term. Bold a technical word only after the thing itself has been shown.

**Simulations (the heart of it)**
- Every main diagram must be a live simulation computed from real geometry, not a painted picture. Use actual polyhedra: tetrahedron, cube, octahedron, dodecahedron, icosahedron, prisms, pyramids and the truncated icosahedron. Give them drag-to-rotate, dropdowns, sliders and toggles. Put a live readout sentence under each one ("This shape has 12 corners, 30 edges and 20 faces. 12 − 30 + 20 = 2.") and a caption saying what you're looking at.
- After each sim, add a "A few things to notice" list that tells the reader which specific settings to try.
- Suggested arc:
  1. Click corners, edges or faces on a rotating shape to highlight and count them.
  2. A table that fills in as you explore more shapes, so the reader *discovers* the 2 before the page says it. Show only corners, edges and faces at first. Keep any hint column (like corners + faces) behind a "stuck?" button, so the discovery is real.
  3. A "rubber-sheet" sim: pop one face open and stretch the shape into a flat map, where the outside counts as a face.
  4. Click-to-delete edges and corners while a live counter shows the answer never changes, all the way down to a single dot. Every time the text says "the total stays the same", show it with real numbers (8 − 12 + 6 = 2, then 8 − 11 + 5 = 2). "Taking away a take-away makes it bigger" is the one bit of arithmetic that trips 10-year-olds, so never leave it in words alone.
  5. Adding a corner or edge doesn't change it either.
- Include callbacks: later sections should send the reader back to an earlier sim to change a setting. Plant one key idea early ("Hold on to this idea") and pay it off later.

**Applications and extras**
- Use the rule to *prove* the football needs exactly 12 pentagons. Then cover geodesic domes, virus shells, and the Buckyball (C60, Nobel Prize 1996).
- Weave in small history bits instead of a separate history section: Descartes' unpublished notes (~1630), Euler's letter to Goldbach (1750), Cauchy's flattening proof (1813), and the Königsberg bridges (1736) as a cousin puzzle. Please check these dates.
- End with a "Stranger shapes" section of short subsections: a picture frame/donut gives 0 and two holes give −2; a shape with a dent still gives 2; the rule also works on maps (countries, borders, border-points); and "monster" shapes that seem to break it.

**Hands-on**
- 3–4 "TRY IT AT HOME" boxes using cheap household materials: toothpicks and clay or plasticine, straws, and paper nets to cut and fold. Each box should say why it works and tie back to a sim. Only suggest materials that actually work (soft dough won't hold straws).
- Finish with a "Make your own" project, building a shape nobody's named and checking the rule, then a one-sentence recap of the whole reason it's always 2.

**Tone and honesty**
- Use exact numbers. Keep the maths to adding and subtracting only, with no algebra and no letters standing for numbers. Where division is unavoidable (sharing corners between patches), use whole-number groups rather than fractions.
- Say early what "prove" means and how it differs from checking lots of shapes.
- Never state a fact the reader can't check on the page. If a shape is mentioned with counts, put it in a sim or tell them to build it.
- This is two sittings for a 10-year-old. Mark a "good place to stop" once the proof is complete, before the applications.
- Don't jump to jargon like "Euler characteristic" or "topology" early. Introduce the term only at the very end, once the reader has felt it.
- Add a footer that credits "Let's Build a Brain" and says honestly what the simulations show and what they skip (e.g., which shapes count as "allowed").
- Use warm editorial typography, and make sure it works well on a phone.

Ekaadhi page like this would make my kids' week. Please make it properly good, not a summary.
