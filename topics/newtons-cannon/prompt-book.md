I'm looking for a proper interactive explainer on **why the Moon doesn't fall down**, built around Newton's cannon: fire a cannonball sideways from a very tall mountain, faster and faster, until it never lands. The reader is a reasonably smart 10-to-12-year-old working alone. Everything I find either says "the Moon is always falling but keeps missing" and moves on, or jumps to formulas. I want my kids to fire the cannon themselves and *see* that an orbit is just a fall that never reaches the ground.

Please keep to tools a 10-year-old has: measuring, timing, adding, multiplying, and trying a thing many times. No formulas with letters, no square roots, no "just trust me" steps. Where the honest explanation needs more (why gravity fades the way it does, why the paths are ovals), put it in a short "For older readers" box, state the outcome in the main text, and let the reader check it in a sim. Say plainly that checking isn't the same as proving.

Please build it in the style of Aatish Bhatia & Arkarup Banerjee's "Let's Build a Brain" (https://aatishb.com/myriad/lets-build-a-brain/). It adds one change at a time, shows what happens before giving it a name, stays playful, and has simulations you can poke.

**Format: a short book, not a long scroll.** One HTML file that shows one chapter at a time, with a contents page, Back and Next buttons (Next names the next chapter), a chapter counter, left and right arrow keys, and an "all chapters on one page" view for skimming and printing. Every chapter: is titled as a plain claim ("A thrown ball falls just as fast as a dropped one") and adds exactly ONE idea; opens with a line that answers the question the previous chapter ended on and closes with the question the next chapter answers; gives an everyday analogy before any term; has one live simulation, two at most, and never none; has up to three "A few things to notice" bullets and one short "Take this with you" box; runs 200 to 300 words of body text, a count that includes the notice bullets and the take-away box and leaves out only sim captions and readouts; keeps sentences short (average under 14 words, none over 20); folds optional material (try-it-at-home boxes, side notes, "For older readers" boxes) behind a collapsible heading at its end. Chapters that build on the cannon share one cannon: the reader's shots carry forward, a chapter may show only the part of the sim in play, and a chapter reached out of order fills in the earlier shots so its text still matches its numbers. Never send the reader back to an earlier chapter. Keep a small thread in the top bar that tracks the one number the book is about: the reader's farthest shot so far, which becomes "still flying" once they reach orbit. Twelve chapters at most, plus contents. The page may be shown in a sandboxed frame, so keep all state in memory: no localStorage, cookies, URL hash or history writes.

Here is what I need:

**Contents page**
- Start with a vivid scene: you throw a ball as hard as you can and it lands across the field. Above you the Moon hangs there, night after night, and never lands. Then 4–5 puzzles, each linked to the chapter that answers it: "Why doesn't the Moon fall down?", "How fast would you have to throw a ball so it never lands?", "Why do astronauts float if gravity is still pulling on them?", "What would the Moon do if gravity switched off?" Then the chapter list, with a note on a good place to stop for the night (once the ball is in orbit, before the Moon).

**Simulations (the heart of it)**
- Every diagram is a live simulation computed from real physics, step by step: gravity pulling toward the Earth's centre and getting weaker with distance, the real size of the Earth, real speeds in kilometres per second. Nothing painted. Each has a live readout sentence ("At 5 km a second your ball flew 4,300 km and landed after 14 minutes") and a caption. Round readouts for a child.
- Suggested chapters (refine freely):
  1. Drop one ball and throw another sideways at the same moment. They land together. Sim: a speed slider for the thrown ball and a timer for both.
  2. Everything falls about 5 metres in its first second, however fast it goes sideways. Sim: freeze the picture each second and measure.
  3. Throw harder and it lands farther, but it is in the air just as long. Flat ground.
  4. The ground isn't flat. Zoom out and the Earth curves away: it drops about 5 metres for every 8 kilometres you travel. Sim: a ruler laid flat on a round Earth, with the gap measured. Plant "Hold on to this idea" here: 5 metres, and 8 kilometres.
  5. Newton's mountain. Now the cannon, on a mountain far too tall to be real. Fire at 1, 2, 3 km a second. Each shot lands farther round the curve. The page keeps a log of speed and landing distance. Show only the raw log; put "stuck? give me a hint" and "check my answer" behind buttons. Do not tell the reader the speed that works.
  6. At one speed it never lands. The reader finds it: about 8 km a second. This is the moment the answer must emerge from their own shots. Then pay off the planted idea with worked numbers: in one second the ball goes 8 km sideways and falls 5 m, and the ground has curved away 5 m. So it is no closer to the ground. It keeps falling and keeps missing. Name it only now: an **orbit**.
  7. Faster still. The loop stretches into an oval, and past about 11 km a second the ball leaves and never returns.
  8. Astronauts float because they are falling. The Space Station is only about 400 km up and gravity there is still nearly nine-tenths as strong as on the ground. Sim: raise the cannon to 400 km and read the speed and the time per lap (about 92 minutes).
  9. Higher up, gravity is weaker, so you can go slower. Sim: a height slider with the speed that just orbits and the time for one lap. Let the reader build a table and spot the pattern before the book says it.
  10. The Moon is the cannonball. It is about 60 Earth-widths-from-the-centre away (60 times the Earth's radius, with "radius" explained), moves about 1 km a second, and takes about 27 days a lap. Each second it falls a bit over 1 millimetre and still misses. Sim: the same cannon, zoomed out.
  11. Switch gravity off and the Moon leaves in a straight line. Sim: an on/off switch. This is the place for the idea that moving things keep going unless something pulls them.
  12. Summary: the whole argument on one page with live numbers (falls 5 m, ground curves 5 m, speed found, Moon's numbers), then the ideas and home activities linked to their chapters. End with a "Make your own" challenge on the same page: park a satellite so one lap takes exactly one day, like the ones that carry TV. Then a one-sentence recap.
- Every time the text says "it never gets closer" or "it lands on", show the numbers.

**History, in a sentence or a collapsed note where it belongs:** Newton drew this cannon himself, in a book published in 1728, the year after he died. The apple story (about 1666). Galileo and falling things. Sputnik, the first cannonball that really stayed up (October 1957). An astronaut dropped a hammer and a feather on the Moon in 1971 and they landed together. Please check each date; if you can't, write "about" and say so in the footer.

**TRY IT AT HOME (collapsed, in the chapter each belongs to):** flick one coin off a table edge with a ruler while it knocks a second coin straight down, and listen for one click; poke two holes in a paper cup of water, then drop it outdoors and watch the leaks stop while it falls; swing a soft ball on a string outdoors and let go, and see which way it goes; pull a card from under a coin resting on a glass. Each box says why it works and names its chapter's sim.

**Tone and honesty**
- Explain "kilometres per second" with something a child knows (a plane does about a quarter of a kilometre a second).
- No letters standing for numbers in the main text.
- Say what the sims leave out: air, the mountain being impossible, the Earth's spin, the Moon pulling back.
- A footer on the last chapter credits "Let's Build a Brain" and lists which dates were checked.
- Give it its own look, not cream paper and a serif. Support dark mode. It must work well on a phone, and the sticky top bar must stay short there.

**Please avoid:** stating "the Moon is falling around the Earth" and then admiring it; "centrifugal force"; "zero gravity"; formulas; any "just trust me" step; jargon before intuition; a chapter with no simulation; a chapter that sends the reader back to another chapter's sim.

Please make it properly good, not a summary.
