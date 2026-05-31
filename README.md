# Felix AI Labs — Website UI Kit

A high-fidelity recreation of the Felix AI Labs **marketing landing page**: a dark, cinematic "AI operations center" site for selling custom AI operators that run on Raspberry Pi hardware.

## Run it
Open `index.html`. It assembles the full landing page and is interactive — the nav scrolls to sections and the **"See it run"** section plays a live call-handling scenario when you press **Run scenario**.

## Files
| File | Contents |
|---|---|
| `index.html` | App shell: loads React + Babel + Lucide + tokens, mounts the full page. Holds the cinematic atmosphere CSS (vignette, grain, starfield, agent-graph, terminal) and responsive breakpoints. |
| `Primitives.jsx` | Reusable atoms: `Icon` (Lucide), `LiveDot`, `Pill`, `Button` (defaults to “Book a Discovery Call”), `Eyebrow`, `Section`, `SectionHeader`, `FeatureCard`. |
| `Hero.jsx` | `Nav` (sticky glass), animated `AgentGraph` (Felix core + orbiting task agents), `Hero`, `TrustStrip`. |
| `Story.jsx` | `Features` (what Felix handles), `HowItWorks` (4 steps), `Vision` (founder/manifesto). |
| `Offer.jsx` | `Hardware` (3 Raspberry Pi models) + `Pricing` (all 5 tiers, setup + monthly). |
| `Close.jsx` | `LiveTerminal` (auto-streaming status feed), `CTABand`, `Footer`. |
| `image-slot.js` | User-fillable image placeholders (founder portrait, Pi photos). |

## Dependencies
- Tokens: `../../colors_and_type.css` + `../../components.css`
- Icons: **Lucide** via CDN (`lucide@latest`)
- Logos: `../../assets/logo-mark.svg`, `../../assets/logo-wordmark.svg`

## Component coverage
Sticky glass nav · pill/badge · primary/secondary/ghost buttons · feature cards (default + amber-featured) · animated agent graph · how-it-works step rail · vision panel with portrait slot · hardware spec cards · 5-tier pricing table · auto-streaming live terminal · live status dots · glowing CTA band · multi-column footer. Every CTA reads “Book a Discovery Call.”

## Pricing (as provided)
Speed to Lead ($1,500 + $250/mo) · Core ($750 + $100/mo) · **Pro ($750 + $200/mo, most popular)** · Power ($750 + $350/mo) · Enterprise ($3k–5k + $500–800/mo). Per-tier feature lists are an editable starting point — confirm against your real offering.

## Placeholders to fill
Founder name + portrait (Vision) and Raspberry Pi product photos (Hardware) are empty `image-slot`s. Note: image-slot persistence only works at project root, so in this nested kit the slots render as drop targets but won’t save — drop real assets into `assets/` and swap the slots for `<img>` for a permanent build.

## Notes
- These are cosmetic recreations, not production code — interactions are faked for demonstration.
- Built from the written brand brief (no source codebase/Figma). Reconcile against real source if/when available.
