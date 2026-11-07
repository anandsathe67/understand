I'm looking for a proper interactive explainer that explains Euler's formula for solid shapes, **corners − edges + faces = 2**, to reasonably smart 10-year-olds working on their own. Whenever I ask an AI about this I get the formula stated, a cube counted (8 − 12 + 6 = 2), and nothing else. I want my kids to find the pattern for themselves and then understand *why* it is always 2.

Please build it in the style of two pages I love: Aatish Bhatia & Arkarup Banerjee's "Let's Build a Brain" (https://aatishb.com/myriad/lets-build-a-brain/) and an earlier page I got called "Let's Catch a Rainbow." They add one change at a time, show what happens before giving it a name, stay playful, use no equations, and have simulations you can poke.

**Format: a short book, not a long scroll.** One HTML file that shows one chapter at a time, with a contents page, Back and Next buttons (Next names the next chapter), a chapter counter, left and right arrow keys, and an "all chapters on one page" view for skimming and printing. Every chapter: is titled as a plain claim ("Squash any shape flat and nothing changes") and adds exactly ONE idea; opens with a line that answers the question the previous chapter ended on and closes with the question the next chapter answers; gives an everyday analogy before any term; has one live simulation, two at most, and never none; has up to three "A few things to notice" bullets and one short "Take this with you" box; runs 200 to 300 words of body text, a count that includes the notice bullets and the take-away box and leaves out only sim captions and readouts; keeps sentences short (average under 14 words, none over 20); folds optional material (try-it-at-home boxes, side notes, history bits that need more than a sentence) behind a collapsible heading at its end. Chapters that build on the same simulation share it: the reader's work carries forward, a chapter may show only the part of the sim in play, and a chapter reached out of order fills in the earlier steps so its text still matches its numbers. Never send the reader back to an earlier chapter. Keep a small thread in the top bar that tracks the one number the book is about: corners − edges + faces for the shape on screen right now. Twelve chapters at most, plus contents. The page may be shown in a sandboxed frame, so keep all state in memory: no localStorage, cookies, URL hash or history writes.

Here is what I need:

**Contents page**
- Start with a vivid everyday scene, like a football on the grass, a pair of dice, a cut gemstone or a camping tent. Then list 4–5 puzzling questions the book promises to answer, each linked to the chapter that answers it: "Why does every football have exactly 12 black pentagons?", "Can you build a shape that breaks the rule?", "Why is a donut different from a ball?" Then the chapter list, with a note saying which chapter is a good place to stop for the night (once the proof is complete, before the applications).

**Simulations (the heart of it)**
- Every main diagram must be a live simulation computed from real geometry, not a painted picture. Use actual polyhedra: tetrahedron, cube, octahedron, dodecahedron, icosahedron, prisms, pyramids and the truncated icosahedron. Give them drag-to-rotate, dropdowns, sliders and toggles. Put a live readout sentence under each one ("This shape has 12 corners, 30 edges and 20 faces. 12 − 30 + 20 = 2.") and a caption saying what you're looking at.
- After each sim, "A few things to notice" tells the reader which specific settings to try.
- Suggested chapters (refine freely):
  1. Click corners, edges or faces on a rotating shape to highlight and count them.
  2. A table that fills in as you explore more shapes, so the reader *discovers* the 2 before the book says it. Show only corners, edges and faces at first. Keep any hint column (like corners + faces) behind a "stuck?" button, so the discovery is real. The shapes the reader has already counted in chapter 1 are already in the table.
  3. A "rubber-sheet" sim: pop one face open and stretch the shape into a flat map, where the outside counts as a face.
  4. Click-to-delete edges and corners on that same flat map while a live counter shows the answer never changes, all the way down to a single dot. Every time the text says "the total stays the same", show it with real numbers (8 − 12 + 6 = 2, then 8 − 11 + 5 = 2). "Taking away a take-away makes it bigger" is the one bit of arithmetic that trips 10-year-olds, so never leave it in words alone.
  5. Adding a corner or edge doesn't change it either, on the same map.
  6. Why this is a proof and not just checking: say early what "prove" means and how it differs from checking lots of shapes.
  7. The football needs exactly 12 pentagons: use the rule to *prove* it. Then geodesic domes, virus shells, and the Buckyball (C60, Nobel Prize 1996), each in a chapter or a side note as the idea count allows.
  8. Stranger shapes, folded into the chapters where they belong as collapsed side notes rather than a chapter of their own: a picture frame/donut gives 0 and two holes give −2; a shape with a dent still gives 2; the rule also works on maps (countries, borders, border-points); and "monster" shapes that seem to break it. The donut deserves a sim.
  9. A summary chapter before the last: the whole argument on one page with the worked numbers live (count, squash, snip to a dot), then the ideas and the try-at-home boxes linked back to their chapters.
  10. "Make your own" capstone: build a shape nobody's named and check the rule, then a one-sentence recap of the whole reason it's always 2.
- Plant one key idea early ("Hold on to this idea") and pay it off later.

**History**
- Weave in small history bits instead of a separate history chapter: Descartes' unpublished notes (~1630), Euler's letter to Goldbach (1750), Cauchy's flattening proof (1813), and the Königsberg bridges (1736) as a cousin puzzle. Please check these dates; if you can't, write "about" and say so in the footer.

**Hands-on**
- 3–4 "TRY IT AT HOME" boxes using cheap household materials: toothpicks and clay or plasticine, straws, and paper nets to cut and fold. Each box should say why it works and tie back to a sim. Only suggest materials that actually work (soft dough won't hold straws). Each box is collapsed at the end of the chapter it belongs to.

**Tone and honesty**
- Use exact numbers. Keep the maths to adding and subtracting only, with no algebra and no letters standing for numbers. Where division is unavoidable (sharing corners between patches), use whole-number groups rather than fractions.
- Never state a fact the reader can't check on the page. If a shape is mentioned with counts, put it in a sim or tell them to build it.
- Don't jump to jargon like "Euler characteristic" or "topology" early. Introduce the term only at the very end, once the reader has felt it.
- Add a footer on the last chapter that credits "Let's Build a Brain" and says honestly what the simulations show and what they skip (e.g., which shapes count as "allowed").
- Use warm editorial typography, make sure it works well on a phone (the sticky top bar must stay short on a phone), and support dark mode.

**Please avoid:** stating the result and then admiring it; any "just trust me" step; jargon before intuition; a chapter with no simulation; a chapter that sends the reader back to another chapter's sim.

Ek aadhi page like this would make my kids' week. Please make it properly good, not a summary.
