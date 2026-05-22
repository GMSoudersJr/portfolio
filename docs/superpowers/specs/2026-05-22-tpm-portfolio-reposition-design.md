# TPM Portfolio Reposition — Design Spec
Date: 2026-05-22

## Overview

Reposition the portfolio site from "full-stack web developer" to "Technical Product Manager who can also ship code." All changes are content and light structural — no layout overhaul. Approach B from the brainstorm: content rewrite + targeted structural updates (skills split, hero stats, footer location).

---

## app.html — Meta Description

**Current:** `Gerald Souders — Full-stack developer based in Seoul, Korea. Building fast, purposeful web apps with React, Svelte, TypeScript, and Python.`

**Updated:** `Gerald Souders — Technical Product Manager with a full-stack developer background. Based in Singapore, open to remote TPM and PM roles.`

---

## Hero.svelte

### Label (small caps above h1)
**Current:** `Full-stack web developer · Open to new projects`
**Updated:** `Technical Product Manager · Singapore · Open to remote`

### Headline
**Current:** `Building things that actually work.`
**Updated:** `TPM Who Can Ship Code.`

### Role line
**Current:** `React · Svelte · TypeScript · Python · MongoDB`
**Updated:** `Four years in product. Full-stack background. Bias toward shipping.`

### Description
**Current:** Dev-focused, lists tech stack.
**Updated:** `Spent four years at startups doing TPM work without a PM title. Requirements, roadmaps, stakeholder loops, shipping. Can open the code editor too when the team needs it.`

### CTAs
No change: **See my work** (fill) / **Get in touch** (outline).

### Stat card
| Stat | Current | Updated |
|---|---|---|
| 1 | Years shipping code: 3+ | Years in product: 4+ |
| 2 | Live projects: 6 | Products shipped: 6 |
| 3 | Main stacks: 2 | Visitor countries: [derived dynamically from visitor data already loaded by the page] |

---

## About.svelte

### Body copy (3 paragraphs → 4)

> At Globalli, I owned internal tools from 0 to 1. Spotted where automation could help, talked to the person doing the work, gathered requirements, built prototypes, and iterated based on stakeholder feedback until the backlog was clear and the product shipped. One of those tools was a purchase order system that cut processing time by 75% and handled 300+ transactions a month.
>
> At Tickr, the backoffice wasn't working. Fixed the frontend's calls to protected API endpoints with the correct auth headers, then worked through the backlog of requirements the previous contractor had left undone. Shipped a backoffice they could actually use to moderate their app.
>
> Cornell B.S., then 18 years across Korea teaching. That time built a habit of explaining complicated things to people who need to act on them fast. Also built tools that other teachers used. The first time I understood what it meant to ship something and watch people rely on it.
>
> Looking for TPM or PM roles in SaaS, dev tools, EdTech, or consumer apps. Based in Singapore. Available now.

### Sidebar stats
No changes. Busan & Seoul and ~20 yrs stay as-is.

---

## Skills.svelte

### Section title
**Current:** `Skills & tools`
**Updated:** `Skills`

### Layout
Split into two labeled groups rendered side by side. On desktop: Product (left column) | Technical (right column). At 640px breakpoint: Product stacked above Technical, each full width.

### Product group
- Requirements gathering
- Agile / Scrum
- Stakeholder management
- Product roadmapping

### Technical group
- React / Next.js
- Svelte / SvelteKit
- TypeScript
- Python / Django
- MongoDB
- D3.js
- Playwright
- Jira / Confluence

---

## projects.ts

### Projects removed
- Running on Xero (blog, does not support TPM narrative)
- Encrypted PO Generator (not usable by visitors — requires login and encryption keys; Globalli story already told in About)

### Projects remaining (in order)
1. Rep Yourself
2. Suit Yourself
3. freeCodeCamp Seoul
4. Work Smarter Randomizer

Grid becomes a clean 2x2. No odd last-item spanning logic needed.

### Updated descriptions

**Rep Yourself**
> Built for the Armstrong Pull-up Program, a structured 5-day military training routine. Guides you through each session and tracks progress over time. Nothing existing did both the way it needed to be done. After user feedback, replaced the default data displays with custom D3.js charts. Ranked #1 on Google for "Armstrong Pullup Program App" with 1,200+ visitors.

**Suit Yourself**
> A mobile-first PWA for card-based calisthenics workouts. Built for people doing this with a physical deck. Cards got wet, wore out, nobody remembered which suit meant which exercise. Shipped several iterations: automatic update alerts, swipe gestures and keyboard input, and a stopwatch feature that went out without touching saved workout history.

**freeCodeCamp Seoul**
> Joined the Seoul chapter's open source site when the maintainer put out a call for help. Migrated the codebase from Pages Router to App Router, laid the groundwork for Korean translations with next-intl, and reviewed 31 pull requests from other contributors.

**Work Smarter Randomizer**
> Built between classes when the manual process for randomizing student vocabulary words was taking too long. Words shuffle automatically as you type them in. See how far each one lands from where it started. Part of a planned suite of tools for teachers, this is the first.

---

## Contact.svelte

### Description copy
**Current:** `Available for freelance projects, full-time roles, and interesting collaborations. I'm especially interested in building tools that save real time.`
**Updated:** `Looking for TPM and PM roles in SaaS, dev tools, EdTech, or consumer apps. Based in Singapore and available now.`

LinkedIn, GitHub, and Email links: no changes.

---

## Footer.svelte

**Current:** `East & Southeast Asia`
**Updated:** `Singapore`

---

## Tone constraints (applies to all copy)
- No em-dashes
- No filler phrases
- Lead with outcomes and decisions, not tools and tasks
- Short sentences preferred
- First person where natural, but do not open every sentence with "I"
