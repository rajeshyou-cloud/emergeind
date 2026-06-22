# EmergeInd — emergeind.com Website Revamp

---

## Session Start — Read This First

At the start of every session on this project, read **`PROJECT_STATE.md`** in this directory before doing anything else. It contains:
- Infrastructure facts (FTP, Cloudflare, GoDaddy — two-server architecture)
- GitHub repo and Vercel URLs
- Current build state (which pages are done)
- Pending tasks and blockers
- Session log (what was done and when)

After reading it, update the session log at the bottom of `PROJECT_STATE.md` when work is completed.

---

## Active Skills — Always Apply

These skills are **mandatory** for every task in this project. They are never optional.

### 1. Ponytail (lazy senior dev)
Enforce the efficiency ladder on every change:
1. Does this need to exist at all? (YAGNI — skip it)
2. Stdlib / native CSS does it? Use it.
3. Already-written code covers it? Reuse it.
4. Can it be one line? One line.
5. Only then: minimum code that works.

No abstractions unless asked. No scaffolding "for later". Deletion beats addition. Shortest diff wins. Mark deliberate simplifications with `// ponytail:` comment.

### 2. Karpathy (think before coding)
- State assumptions before touching code. If ambiguous, ask first.
- Simplest solution that satisfies the spec — nothing more.
- Surgical changes only — don't improve adjacent code that isn't broken.
- Match existing style even if you'd do it differently.
- Define success criteria before starting multi-step tasks.

### 3. RTK (token efficiency)
All shell/git commands run through `rtk` proxy automatically via hooks. Use `rtk gain` to check savings. No manual intervention needed.

### 4. Artifact-Design / Frontend Design Superpower
Every UI/UX decision in this project follows these principles:

**Ground design in the subject.** This is B2B print & packaging technology. Visual language = precision, industrial craft, reliability. Not generic SaaS, not startup-playful.

**Design system is law.** Always derive from the tokens in this file — `--primary`, `--accent`, `--secondary`, `--light`. Never introduce new colors without updating the token table.

**Hero = thesis.** Every page opens with the most characteristic thing on that page. No filler hero text.

**Typography carries personality.** Inter at tight letter-spacing for headings, comfortable line-height (1.6) for body. Font weights: 400 body, 600 labels, 700 headings only. No other weights.

**Motion with purpose.** One CSS transition per interactive element. No animation for decoration.

**Mobile-first QA.** Every change tested at 375px, 768px, 1200px before considered done.

**Copy = design material.** Write from the end user's side. Active voice, plain verbs, sentence case. No lorem ipsum in delivered code.

**B2B tone.** Direct, precise, technical credibility. Packnology.in is the reference for tone.

---

**Client:** Emerging Graphics Pvt. Ltd.  
**Vendor:** TechFirst Software Solutions  
**Live URL:** https://emergeind.com  
**Working dir:** `d:\EmergeInd\`

## Project Summary

9-page static HTML/CSS/JS website for a print & packaging technology distributor. No framework, no CMS — TechFirst manages all updates. Deployed via FTP to Hostinger India.

## Tech Stack

- Pure HTML5 / CSS3 / Vanilla JS
- Google Fonts — Inter (400, 600, 700)
- No build tools, no dependencies, no npm
- FTP deploy to `public_html/`

## File Structure

```
d:\EmergeInd\
├── CLAUDE.md
├── index.html          ← Homepage
├── about.html
├── contact.html
├── products/
│   ├── engview.html
│   ├── purvar-pasharp.html
│   ├── purvar-linesharp.html
│   ├── kingt.html
│   └── iecho.html
├── assets/
│   ├── css/
│   │   ├── main.css        ← design tokens, typography, utilities
│   │   ├── nav.css
│   │   ├── footer.css
│   │   └── product.css     ← shared product page template
│   ├── js/
│   │   ├── main.js         ← nav toggle, scroll
│   │   ├── slider.js       ← homepage hero slider
│   │   └── iecho-selector.js
│   └── images/
│       ├── Logo-mark.png   ← MARK = "EG" monogram, warm-white — nav+footer IN USE (dark bg)
│       ├── Logo-mark-color.png ← "EG" monogram, brand indigo — for LIGHT backgrounds (preview B/D)
│       ├── EGI Logo 2026_1.png ← client source PNG (transparent, blue) — reference / mark source
│       ├── Logo*.svg        ← SUPERSEDED Illustrator exports (unreferenced) — safe to delete before deploy
│       ├── hero/           ← AWAITING CLIENT (4 slides, 1920×1080)
│       ├── products/       ← AWAITING CLIENT
│       ├── team/           ← AWAITING CLIENT (Tushar Pande)
│       └── partners/       ← AWAITING CLIENT (EngView, Purvar, IECHO, KingT)
└── coming-soon.html        ← live placeholder (keep until launch)
```

## Design Tokens — Theme: DARK SUBSTRATE

Active theme is Concept C "Dark Substrate" — a carbon dark-mode industrial look (uppercase headings, signal-orange CTAs, industrial-green eyebrows, orange hairline borders). Token roles are **split** because dark mode separates "text ink" from "surface": never collapse them back.

```css
/* text inks */
--primary:    #EDE9E0   /* warm-white — headings, strong text */
--text:       #CFC9BC   /* body copy */
--text-muted: rgba(237,233,224,.55)

/* brand */
--accent:     #E8740A   /* signal orange — CTAs, highlights (dark text ON orange) */
--secondary:  #3D8C68   /* industrial green — eyebrows, links */

/* surfaces (dark → light layering) */
--bg:         #18160F   /* page — carbon */
--bg-deep:    #0F0E0A   /* bands — footer, stats, hero, sidebar headers */
--surface:    #1E1C14   /* raised cards, form fields */

--border:     rgba(232,116,10,.16)   /* orange-tinted hairline */
--white:      #EDE9E0   /* alias: light ink for text-on-dark */
--light:      #211E16   /* alias: alt surface */
--radius:     8px
--container:  1200px
```

**Identity rules:** headings & buttons & eyebrows are UPPERCASE; buttons have `border-radius: 0`; CTAs are orange with `color: var(--bg)` (dark text on orange); hero/CTA bands carry subtle orange+green radial glows.

**Logo lockup:** nav + footer use the **"EG" monogram only** (`Logo-mark.png`, warm-white) + HTML wordmark `EMERGING`(warm-white)/`GRAPHICS`(cyan). The layered chevron/arrow from the source logo is **deliberately dropped** — it's tall/narrow and renders as a sliver at nav height (client-confirmed: "remove the arrow, keep only the EG sign"). Marks are rasters cropped/recolored from `EGI Logo 2026_1.png` via PIL — never viewBox-crop the Illustrator SVGs (that caused the recurring "partial logo" defect).

> Light-mode source palette (navy #1A2E4A / orange #E85D04 / blue #0077B6) is retired. The 4-theme comparison lives at `_themes-preview.html` (do **not** deploy that file).

## Pages & Scope (Phase 1)

| Page | File | Status |
|---|---|---|
| Homepage | index.html | — |
| About Us | about.html | — |
| Contact Us | contact.html | — |
| EngView | products/engview.html | — |
| Purvar PaSharp | products/purvar-pasharp.html | — |
| Purvar LineSharp | products/purvar-linesharp.html | — |
| KingT | products/kingt.html | — |
| IECHO | products/iecho.html | — |

## Phase 2 (Out of Scope)

Services page, Blog/News, WhatsApp widget, GA4, Eagle RIP / SuperLine / Xploar product pages, product comparison tables.

## Assets Awaited from Client

Logo · Brand colours · Product images · Hero slides · Tushar Pande headshot · Partner logos · Product spec content · IECHO 9-model spec sheets · Office addresses · Hosting/DNS credentials

## Deployment

1. Get correct FTP credentials from Ram Kumar (npsolutions.in hosting)
2. FTP upload entire `d:\EmergeInd\` → server `public_html/`
3. Enable SSL in Hostinger dashboard
4. Point `emergeind.com` A record to Hostinger IP
5. Add `.htaccess` 301 redirects for removed pages (Printers & Copiers, Swiss Cutting, Fluid Solutions, Self Adhesive Stocks)

## Reference Site

www.packnology.in — use for navigation structure and B2B design tone reference.
