# EmergeInd — Project State & Facts

**Client:** Emerging Graphics Pvt. Ltd.
**Vendor:** TechFirst Software Solutions
**Live domain:** emergeind.com
**Working dir:** `d:\EmergeInd\`
**Last updated:** 2026-07-01 (Session 4)

---

## Infrastructure — Two Separate Servers

> The most important thing to remember: there are TWO completely separate servers.

### Server A — OLD site (current live emergeind.com)
- Hosts the current live WordPress site at emergeind.com
- Hosting provider: **UNKNOWN** — Cloudflare proxy hides the real origin IP
- We have NO access (no FTP, no WordPress admin, no cPanel)
- Cannot crawl/backup — Cloudflare blocks automated requests with 403
- **To get access:** Ask Ram Kumar for cPanel login or old FTP credentials

### Server B — NEW site (GoDaddy / npsolutions.in)
- Provider: GoDaddy shared hosting, managed by Ram Kumar via npsolutions.in
- IP: `166.62.10.31`
- FTP hostname: `npsolutions.in` or `166.62.10.31` directly
  - `ftp.npsolutions.in` does NOT resolve — DNS does not exist for that subdomain
- FTP user: `tusharpande@emergeind.com`
- FTP port: 21
- Protocol: **Plain FTP only** (FTPS cert mismatch — server cert issued to `*.secureserver.net`)
  - Use FileZilla or WinSCP with "accept certificate" for full deploy
- FTP root `/` = web root (account is chrooted — no `public_html/` subfolder)
- **Already uploaded:** `coming-soon.html` ✅ · `index.html` (= coming-soon) ✅

### Cloudflare (DNS layer)
- Role: DNS proxy for emergeind.com
- Nameservers: `paige.ns.cloudflare.com` / `rex.ns.cloudflare.com`
- Current A record: points to old WordPress (Server A) — exact IP hidden by proxy
- **To go live:** Log into Cloudflare → change emergeind.com A record to `166.62.10.31`
- Credentials: must get Cloudflare login from **Ram Kumar**
- After DNS switch: enable free SSL in GoDaddy/npsolutions.in hosting panel

### Why the coming-soon page isn't live yet
Uploading to Server B does NOT affect emergeind.com — the domain still points to Server A via Cloudflare. Only changing the Cloudflare A record will connect the domain to the new server.

---

## FTP Quick Reference

| Field | Value |
|---|---|
| Host | `166.62.10.31` |
| User | `tusharpande@emergeind.com` |
| Port | 21 |
| Protocol | Plain FTP (not FTPS) |
| Root | `/` = web root |

---

## GitHub & Vercel

| Resource | URL |
|---|---|
| GitHub repo | https://github.com/rajeshyou-cloud/emergeind |
| Full site preview | https://emergeind.vercel.app |
| Themes-only preview (shared with Ram) | https://emergeind-q3us.vercel.app |

- Vercel project `emergeind` → Root Directory: `/` (full 8-page site)
- Vercel project `emergeind-q3us` → Root Directory: `themes/` (4 design options only)
- `themes/index.html` = self-contained 4-theme comparison, TechFirst footer included

---

## Build State

| Page | File | Status |
|---|---|---|
| Homepage | index.html | Complete |
| About Us | about.html | Complete |
| Contact Us | contact.html | Complete |
| EngView | products/engview.html | Complete |
| Purvar PaSharp | products/purvar-pasharp.html | Complete |
| Purvar LineSharp | products/purvar-linesharp.html | Complete |
| KingT | products/kingt.html | Complete |
| IECHO | products/iecho.html | Complete |

Active theme: **Concept B — Die Line** (warm cream `#F2EFE7` bg, near-black `#1C1826`, crimson `#C8000A` CTAs, navy `#2D4B8E` links, Georgia serif headings, Courier New eyebrows, `border-radius: 0`).
Theme selected by Ram Kumar. Nav is dark (`var(--bg-deep)`) for contrast. `themes/index.html` now redirects to `emergeind.vercel.app`.

---

## Pending — Waiting on Ram Kumar

- [x] **Design selection** ✅ — Ram Kumar selected **Concept B "Die Line"**
- [ ] **Cloudflare login** → change A record to `166.62.10.31` to make new site live
- [ ] **cPanel / old FTP access** → back up old WordPress site to `d:\EmergeInd\docs\backup\`

## Pending — Client Assets

- [ ] Hero images (4 × 1920×1080 JPG)
- [ ] Product photos (all 5 products)
- [ ] Tushar Pande headshot
- [ ] Partner logos (EngView, Purvar, IECHO, KingT — PNG transparent)
- [ ] All 4 office addresses confirmed (Navi Mumbai address in file: D370A, TTC MIDC, Jui Nagar 400705)

## Pending — Pre-Launch

- [x] Apply chosen theme (Die Line) across all 8 pages ✅
- [x] IECHO model selector — dark image panel, 3D tilt animation, absolute-fill layout ✅
- [x] Homepage hero — split layout with real product images ✅
- [ ] Contact form backend — Formspree or mailto fallback (mailto currently in place as interim)
- [ ] `.htaccess` 301 redirects for old removed pages — URL pattern `/product/<slug>/`; known slugs: `swiss-cutting-systems` ✅, `iecho` ✅; need to confirm: `printers-copiers`, `fluid-solutions`, `self-adhesive-stocks`
- [ ] Favicon — use `Logo-mark-color.png` resized to 32×32
- [ ] `robots.txt` + `sitemap.xml`
- [ ] Full FTP upload of `d:\EmergeInd\` to npsolutions.in (after Cloudflare DNS switch)
- [ ] Enable SSL in hosting panel after DNS switch

## Completed — Pre-launch QA (2026-07-01)

- [x] Cross-link audit — all 143 internal links verified across 8 pages ✅
- [x] Mobile QA — breakpoints confirmed at 375/768/1200px ✅ (grids collapse, mega-menu goes to full-width mobile)
- [x] Deleted superseded `Logo*.svg` files (Logo.svg, Logo-dark.svg, Logo-mark.svg, Logo-mark-color.svg) ✅
- [x] SEO pass — canonical + OG tags added to all 8 pages; titles/descriptions/H1s already passed ✅
- [x] Old WordPress URL pattern found via Google cache: `/product/<slug>/index.html` — use for .htaccess redirects

---

## Session Log

### 2026-06-22
- Fixed 2 stale hero slides in `index.html` (EngView "1,500+", KingT KGT-1600H reference)
- Initialised git, pushed to `rajeshyou-cloud/emergeind` on GitHub
- Deployed full site to Vercel (`emergeind.vercel.app`)
- Created `themes/index.html` — 4-theme comparison for client review
- Added TechFirst branding footer (techfirstsoft.in) to themes preview
- Deployed themes-only to second Vercel project (`emergeind-q3us.vercel.app`)
- Shared URL with Ram Kumar for design selection
- Documented infrastructure (two-server architecture, Cloudflare DNS, FTP facts)

### 2026-07-01 (Session 1 — QA & SEO)
- Cross-link audit: all 143 links clean across 8 pages
- Mobile QA: CSS breakpoints verified — grids collapse at 768px, mega-menu at 900px, all safe at 375px
- Deleted 4 superseded Logo*.svg files (~835KB removed)
- SEO: added canonical + OG tags to all 8 pages (6 tags per page × 8 = 48 tags added)
- Confirmed old WordPress URL pattern: `/product/<slug>/` — needed for .htaccess redirects
- .htaccess draft: pending (need remaining old URL slugs from Ram / cPanel)

### 2026-07-01 (Session 2 — Theme, Content & Spec Sync)

**Theme applied — Concept B "Die Line":**
- Ram Kumar selected Concept B Die Line from `emergeind-q3us.vercel.app`
- `themes/index.html` replaced with meta-refresh redirect to `emergeind.vercel.app`
- Homepage inline `<style>` block rewritten — was hardcoded Concept C dark hex values, now uses CSS variables correctly
- `assets/css/main.css`: Die Line design tokens, section padding reduced (72px→48px), page-hero padding reduced (72px→36px), eyebrow font-size .68→.74rem; added `h1 em, h2 em, h3 em { color: var(--accent); font-style: italic; }` rule
- `assets/css/nav.css`: Nav darkened to `var(--bg-deep)` for contrast; nav link colors and hamburger updated for dark background
- Hero slider: height reduced from 92vh to 60vh; all slides and controls updated for cream background
- Crimson italic `<em>` accent added to H1s across all 8 pages

**Homepage & inner page improvements:**
- Hero slider height reduced (92vh → 60vh / 52vh mobile) — was covering full screen
- Inner page hero padding reduced — was too much space above "OUR STORY" heading

**KingT page — real content from kingtgroup.com:**
- Full page rewrite: 2 model cards (KGT-1600H, KGT-2500A) with real spec tables
- 6 component images hotlinked from kingtgroup.com CDN
- KGT-2500A model image from kingtgroup.com CDN

**IECHO page — real images from iechocutter.com:**
- All 9 model panels already had full specs from prior session
- Replaced 9 broken local image paths with live CDN URLs from `cdnus.globalso.com/iechocutter/`

**Content sync — client document (`emergeind content(1).docx`):**
- `about.html`: Replaced generic placeholder with client-provided text — Dubai HQ, 20+ professionals, Juinagar Navi Mumbai; strengths section rewritten to match client's 5-point list
- `products/purvar-pasharp.html`: **Complete rewrite** — was incorrectly describing a CTP/plate-RIP system (Kodak/Agfa/dot gain/JDF). Correctly rewritten as packaging prepress software: trapping, Step & Repeat, intelligent nesting, mark generation, VDP, Adobe Illustrator support
- `products/purvar-linesharp.html`: **Complete rewrite** — was incorrectly described as "AI line sharpening for print quality." Correctly rewritten as anti-counterfeiting security design system: Guilloche patterns, microtext, engraving simulation, brand protection
- `products/engview.html`: Library count corrected "hundreds" → "over 1,500" (per client doc)
- Nav mega-menu: LineSharp subtitle updated from "Line Art Enhancement" → "Security Design System" across all 6 pages carrying the nav

**Spec corrections against reference websites (kingtgroup.com, packnology.in, iechocutter.com):**
- KGT-1600H print speed: "Up to 80 m/min" → "30–75 m/min (varies by print pattern)" — manufacturer kingtgroup.com is definitive; 80 m/min was from client doc and overstated
- KGT-2500A printhead: "Epson I3200-A" → "Epson I3200-A1" — correct model suffix per kingtgroup.com
- IECHO overview max cutting speed: "1,200 mm/s" → "1,800 mm/s" — BK4/BK4F/AK4 all achieve 1,800 mm/s per packnology.in spec tables
- All other IECHO model specs (BK, BK3, BK4, PK, TK4S, MCT) verified correct against packnology.in — no changes needed

### 2026-07-01 (Session 4 — Visual Quality & Nav Polish)

**Product images — self-hosted from packnology.in CDN:**
- All IECHO model images downloaded and self-hosted in `assets/images/products/` — zero external CDN dependencies remain
- `iecho-pk-removebg.png` (transparent bg) obtained from packnology.in — used for PK model panel and IECHO hero slide so machine floats on dark/cream without a white box
- KingT overview image also downloaded; KingT component images already self-hosted

**IECHO model selector — `assets/css/product.css`:**
- Image panel grid: `420px 1fr` → `1fr 1fr` (50/50) — image column grows from 420px to ~600px
- Removed `max-height: 360px` cap — machines scale to full panel width
- Padding reduced 24px → 0 (16px kept for breathing room); `min-height` 320 → 420px
- Panel background: flat `bg-deep` → `radial-gradient` with navy centre for depth

**Homepage hero — `index.html`:**
- Split ratio: `55% 45%` → `42% 58%` — machine gets more than half the viewport
- Right panel bg: dark `bg-deep` → `var(--bg)` cream for hardware slides (machine bg blends in, packnology.in style)
- Software slides (EngView, Purvar) added `.dark` class — keep dark panel for ghost wordmark
- Hero now has **5 slides**: EngView · Purvar · IECHO BK · IECHO PK · KingT
  - EngView slide: ghost wordmark → `assets/images/hero/engview.png` (CAD workstation photo, `object-fit:cover`, zero padding)
  - Purvar slide: ghost wordmark → `assets/images/hero/pasharp.png` (prepress ops photo, `object-fit:cover`, zero padding)
  - IECHO BK slide: new slide added, `iecho-bk.png` on cream
  - IECHO PK slide: `iecho-pk-removebg.png` (transparent bg) on cream
  - KingT slide: `kingt-2500a.png` on cream — unchanged
- Slider dots: 4 → 5; realigned from `left: 27.5%` → `left: 21%` (centre of 42% text panel)
- Right arrow re-styled for cream bg (was light-on-dark from previous session)

**Nav — `assets/css/nav.css`:**
- Nav link font: `.82rem` → `.95rem` → `1.05rem`
- Logo mark height: `40px` → `48px`
- Wordmark ("Emerging Graphics") font: `1rem` → `1.2rem`
- Nav bar height: `64px` → `70px` → `76px`
- Top strip: dark `bg-deep` bg → `var(--surface)` white; text `rgba(255,255,255,.5)` → `var(--primary)` (near-black); link colour → `var(--secondary)` navy; `font-weight: 500` added for legibility
- Location icon: `📍` emoji (renders inconsistently on Windows) → `⬥` solid diamond — updated across all 8 pages

### 2026-07-01 (Session 3 — UI Improvements)

**IECHO model selector — `assets/css/product.css`:**
- Image column width: 260px → 380px → 420px (iterative sizing)
- Image panel background: `var(--bg)` (cream) → `var(--bg-deep)` (near-black) — machines pop on dark
- Added `border-top: 3px solid var(--accent)` (crimson) to `.model-panel` — deliberate selected-state frame
- Model h4 font-size: default → 1.35rem italic Georgia
- Image layout: changed from `display:flex; max-height:300px` to `position:absolute; inset:20px` — image now fills 100% of panel height regardless of how tall the spec table is (solves PK/TK4S small-image problem)
- Added `tilt3d` keyframe: `perspective(700px) rotateY(-14deg ↔ +14deg)` over 7s — pendulum 3D effect (not full 360° which would flatten 2D PNGs)
- `prefers-reduced-motion` respected — animation disabled for accessibility
- All 9 IECHO model images confirmed to be from `cdnus.globalso.com/iechocutter/` — same CDN as iechocutter.com (no better source exists)

**Homepage hero — `index.html`:**
- Layout redesign: was text-only on cream (hero images never provided by client) → split 55%/45% grid
  - Left (55%): cream bg, tag + h1 + description + CTAs
  - Right (45%): `var(--bg-deep)` dark panel
- Hardware slides (IECHO slide 3, KingT slide 4): right panel shows actual machine image with `hero-tilt` animation (same pendulum as IECHO selector)
  - IECHO: `cdnus.globalso.com/iechocutter/BK4-high-speed-digital-cutting-system.png`
  - KingT: `kingtgroup.com/data/upload/20231215/65e2a846a45fc_.png` (KGT-2500A)
- Software slides (EngView slide 1, Purvar slide 2): right panel shows ghost wordmark + Georgia italic product name(s) + stat/meta badge — no client images needed
- Slider dots repositioned to center of left panel (`left: 27.5%`)
- Right arrow styled for dark bg (`rgba(242,239,231,.1)` bg, light text)
- Hero height: 60vh → 70vh
- Slide 2 description corrected: was wrong ("plate making, colour separation, line art enhancement") → now correct ("PaSharp for trapping/Step & Repeat/VDP; LineSharp for anti-counterfeiting security design")
- "Purvar LineSharp — Line Art" → "Purvar LineSharp — Security Design" in software category card
- Partner logos: replaced 4 broken `<img>` tags (SVGs never provided) with `.partner-name` text badges — Georgia italic, border, hover effect — intentional rather than broken
