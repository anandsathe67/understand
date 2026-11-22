# Riemann hypothesis: prompt notes

## Audience verdict

A curious adult, or a teenager of about 15, working alone. Two load-bearing steps are proven theorems the page must take on trust: stretching the zeta function past where its sum works, and turning zeros into waves. Both are labelled on the page and checked in a sim. The prompt was written for a layman, not a child, so the 10-year-old rules (no letters at all) are relaxed to "numbers before letters".

## Feasibility check

| Step | Tools needed | Mark |
|---|---|---|
| Primes are numbers with no rectangle | counting | shown |
| Primes thin out about one step per extra digit | counting, a table | shown |
| The smooth guess wobbles | reading a graph | shown |
| Coin-flip drift grows like the square root | flipping, square roots | shown |
| The hypothesis as "primes wobble like coin flips" | comparing two curves | shown (the extra log factor gets one honest line) |
| Euler's sum equals a product over primes | adding, multiplying | shown numerically |
| Stretching zeta to new inputs | complex analysis | trust: labelled, then checked in a colour map |
| Zeros on the half line | reading a sign change | shown |
| Zeros as waves that rebuild the prime count | adding waves | trust for the formula; the rebuilding is shown |
| One half means square-root wobbles | powers with a half | shown |
| What changes if proved or disproved | none | stated honestly, with examples |

## What the "importance" chapter must say, and why

The request asked why the hypothesis is "so important for modern technology and life". The honest answer is that it matters mostly to mathematics, not to devices:

| Claim often made | What is true |
|---|---|
| A proof would break RSA or online banking | No. RSA rests on how hard it is to factor a large number. Neither a proof nor a disproof says anything about factoring. |
| Technology depends on it | Very little. Some algorithm guarantees were first proved assuming a stronger form (GRH). The best known, Miller's deterministic primality test (1976), was overtaken by AKS (2002), which needs no hypothesis. Practice uses randomised tests anyway. |
| Proof would change everything | It would turn many conditional theorems ("if RH, then …") into facts: tighter bounds on prime gaps and on errors in prime counting. The new methods might matter more than the answer. |
| Disproof would be a disaster | Proofs that relied on it would need new arguments; many of the results may still be true. The counterexample would sit above every zero checked so far (height 3 × 10^12). Encryption would not notice. |
| It is linked to physics | A striking pattern, not an application: zero spacings match the statistics of energy levels in heavy nuclei (Montgomery and Dyson, 1972). |

## Numbers the page should reproduce (computed)

| Quantity | Value |
|---|---|
| Primes up to 100 / 1,000 / 10,000 / 10^5 / 10^6 | 25 / 168 / 1,229 / 9,592 / 78,498 |
| Smooth guess (logarithmic integral) at 10^6 | about 78,627, so the gap is about 129 |
| x divided by its natural log at 10^6 | 72,382 |
| 1 + 1/4 + 1/9 + … | 1.6449 (π²/6) |
| Euler's product over primes below 1,000 | 1.6447 |
| First zero on the line | height about 14.13 |
| Lagarias' test, closest small number | 12, at about 98.9% of the limit (checked up to 100,000) |

## Facts checked for the prompt

| Fact | Source |
|---|---|
| Zeros verified up to height 3 × 10^12, about 12.36 trillion zeros (2021) | [Platt and Trudgian, arXiv:2004.09765](https://arxiv.org/pdf/2004.09765) |
| A proof is not expected to say anything about factoring, so RSA is unaffected | [Parabola (UNSW), vol. 57](https://parabola.unsw.edu.au/sites/default/files/2024-02/vol57_no1_2.pdf) |
| Lagarias' criterion: σ(n) ≤ H_n + exp(H_n) log H_n for all n, equivalent to RH (2002) | [Lagarias, arXiv:math/0008177](https://arxiv.org/pdf/math/0008177) |
| Ternary Goldbach proved unconditionally (2013) | [Helfgott, arXiv:1312.7748](https://arxiv.org/pdf/1312.7748) |

The remaining dates in the prompt (1737, about 1792, 1859, 1896, 1900, 1914, 1972, 2000, 2018) are from memory and are for the builder to verify.

## Format

Book, 12 chapters. The prime staircase (chapters 2, 3, 5, 9, 10) and the zero hunt (chapters 7, 8, 9) are shared sims. Natural stop after chapter 8. Thread number: zeros found on the line.

## Two-minute version

Added at the owner's request after the first cold build: a front page for readers without time for the book. It was added to the built page by hand and to `prompt-book.md` for future builds, so the current book is not a cold test of that block.

## Left out on purpose

The functional equation, trivial zeros, the full explicit formula, the generalised hypothesis by name in the main text, random matrix theory beyond one side note, and any claimed proofs beyond the 2018 one.
