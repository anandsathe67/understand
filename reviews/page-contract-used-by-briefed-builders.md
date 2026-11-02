# Page contract (published as a claude.ai Artifact)

- Write page content only: NO <!doctype>, <html>, <head>, <body> tags. A skeleton is added at publish time (charset, viewport with viewport-fit=cover, small reset, `[hidden]{display:none!important}`, :root padded by safe-area insets top/bottom — keep that).
- Top of file: `<title>` (2–4 word name, no dash/colon explainer), `<meta name="claude:viewport-fit-sides" content="cover">`, Google Fonts `<link>` if used, then `<style>`.
- Side gutter on body or one outer wrapper: `padding-left: max(16px, env(safe-area-inset-left, 0px)); padding-right: max(16px, env(safe-area-inset-right, 0px));` and vertical via `padding-block` (never a `padding` shorthand on that element).
- CSP: scripts only from cdnjs.cloudflare.com (preferred), cdn.jsdelivr.net/npm/, unpkg.com — exact pinned versions (e.g. three.js r128 is fine but prefer hand-rolled canvas/SVG). Stylesheets only Google Fonts. No other fetches, images, iframes. Inline everything else; embed images as data: URIs. Prefer zero libraries: plain JS + SVG/Canvas.
- No alert/confirm/prompt, no window.print, no download links.
- localStorage optional only, wrapped in try/catch.
- Must work at ~400px wide with no horizontal body scroll. Sims scale to container width; touch + mouse (pointer events). Wide things inside their own overflow-x:auto container.
- Theme-aware: every color is a CSS token on bare :root (light); redefine under `@media (prefers-color-scheme: dark){ :root:not([data-theme="light"]){ ...; color-scheme: dark } }` and again under `:root[data-theme="dark"]{ ...; color-scheme: dark }`. body sets `background: var(--bg); color: var(--fg)`. Canvas drawing must read colors from the tokens (getComputedStyle) and redraw on theme change (matchMedia change listener + MutationObserver on documentElement data-theme). SVG fills from tokens.
- Complete at rest: everything visible on load, sims render an initial meaningful state immediately; no opacity:0 waiting for scroll observers. Respect prefers-reduced-motion. Visible keyboard focus. Every form control has a stable id.
- Design: deliberate, subject-specific identity. AVOID the AI-default looks: cream #F4F1EA + serif + terracotta, near-black + acid green, purple-blue gradient hero, Inter/Space Grotesk, emoji section markers, rounded-lg + shadow on everything, accent-rail cards. Pair a characterful display face with a readable body face (Google Fonts), real fallback stacks. Running text ~65ch. text-wrap: balance on headings. tabular-nums for live numbers.
- Copy: plain, active voice, short sentences. Avoid em-dash asides, "not X, but Y", colon-reveal sentences, "worth noting".
- Size < 16MB (aim < 300KB).
