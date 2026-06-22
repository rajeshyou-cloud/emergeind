# EmergeInd — Project State & Facts

**Client:** Emerging Graphics Pvt. Ltd.
**Vendor:** TechFirst Software Solutions
**Live domain:** emergeind.com
**Working dir:** `d:\EmergeInd\`
**Last updated:** 2026-06-22

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

Active theme: **Concept C — Dark Substrate** (carbon dark, signal-orange CTAs, industrial-green eyebrows).
Final theme pending Ram Kumar's selection from `emergeind-q3us.vercel.app`.

---

## Pending — Waiting on Ram Kumar

- [ ] **Design selection** from `emergeind-q3us.vercel.app` — 4 themes, pick one
- [ ] **Cloudflare login** → change A record to `166.62.10.31` to make coming-soon live
- [ ] **cPanel / old FTP access** → back up old WordPress site to `d:\EmergeInd\docs\backup\`

## Pending — Client Assets

- [ ] Hero images (4 × 1920×1080 JPG)
- [ ] Product photos (all 5 products)
- [ ] Tushar Pande headshot
- [ ] Partner logos (EngView, Purvar, IECHO, KingT — PNG transparent)
- [ ] All 4 office addresses confirmed

## Pending — After Design Selection

- [ ] Apply chosen theme tokens across all 8 pages
- [ ] Contact form backend (Formspree — confirm email with client)
- [ ] `.htaccess` 301 redirects for old removed pages (Printers & Copiers, Swiss Cutting, Fluid Solutions, Self Adhesive Stocks)
- [ ] Delete superseded `Logo*.svg` files before deploy
- [ ] Full FTP upload of `d:\EmergeInd\` to npsolutions.in
- [ ] Enable SSL in hosting panel after DNS switch

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
