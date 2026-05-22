# TPM Portfolio Reposition Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the portfolio site from "full-stack web developer" to "Technical Product Manager who can also ship code" by updating copy, restructuring the Skills section, reducing the project grid to 4 entries, and wiring the hero stat card to the live visitor country count.

**Architecture:** All changes are in existing components and one data file. The only logic change is passing `visitorCountries` (derived from already-loaded server data) as a new prop to `Hero`. Everything else is copy and CSS restructuring.

**Tech Stack:** SvelteKit, Svelte 5, TypeScript. Dev server: `npm run dev`. Branch: `tpm-reposition`.

**Spec:** `docs/superpowers/specs/2026-05-22-tpm-portfolio-reposition-design.md`

---

## File Map

| File | Change |
|---|---|
| `src/app.html` | Meta description |
| `src/routes/+page.svelte` | Page title, pass `visitorCountries` prop to Hero |
| `src/lib/components/Hero.svelte` | All copy, stat labels/values, accept `visitorCountries` prop |
| `src/lib/components/About.svelte` | Full body copy rewrite (sidebar unchanged) |
| `src/lib/components/Skills.svelte` | Restructure into Product/Technical columns with new data and CSS |
| `src/lib/projects.ts` | Remove 2 projects, rewrite 4 descriptions |
| `src/lib/components/Contact.svelte` | Description paragraph |
| `src/lib/components/Footer.svelte` | Location text |

---

## Task 1: Meta description and page title

**Files:**
- Modify: `src/app.html:6`
- Modify: `src/routes/+page.svelte:15`

- [ ] **Step 1: Update meta description in `src/app.html`**

Replace line 6:
```html
<meta name="description" content="Gerald Souders — Technical Product Manager with a full-stack developer background. Based in Singapore, open to remote TPM and PM roles." />
```

- [ ] **Step 2: Update page title in `src/routes/+page.svelte`**

Replace line 15:
```svelte
<title>Gerald Souders — Technical Product Manager</title>
```

- [ ] **Step 3: Start dev server and verify**

```bash
npm run dev
```

Open `http://localhost:5173`. Check the browser tab title reads "Gerald Souders — Technical Product Manager". Check page source for the updated meta description.

- [ ] **Step 4: Commit**

```bash
git add src/app.html src/routes/+page.svelte
git commit -m "feat: update meta description and page title for TPM positioning"
```

---

## Task 2: Hero copy and dynamic visitor countries stat

**Files:**
- Modify: `src/routes/+page.svelte:11,20`
- Modify: `src/lib/components/Hero.svelte:1-19`

The `visitsByCountryWithCountryCode` array is already loaded by the server. Each entry is `{ visits: number, country: string, countryCode: string | null }`. Entries where `countryCode` is `null` represent "Origin Unknown" and are not real countries. Filter them out before counting.

- [ ] **Step 1: Pass `visitorCountries` prop from `+page.svelte` to Hero**

Replace the `<Hero />` line in `src/routes/+page.svelte` (currently line 20):

```svelte
<Hero visitorCountries={data.visitsByCountryWithCountryCode.filter((c) => c.countryCode !== null).length} />
```

- [ ] **Step 2: Update `Hero.svelte` script block to accept the prop**

Replace lines 1–3 of `src/lib/components/Hero.svelte`:

```svelte
<script lang="ts">
	import { scrollTo } from '$lib/utils.js';

	interface Props {
		visitorCountries: number;
	}

	let { visitorCountries }: Props = $props();
</script>
```

- [ ] **Step 3: Update hero label, headline, role line, and description**

Replace the `<section class="hero">` content (lines 5–19) with:

```svelte
<section class="hero" aria-labelledby="hero-heading">
	<div class="hero-content">
		<p class="hero-label" aria-hidden="true">Technical Product Manager · Singapore · Open to remote</p>
		<h1 class="hero-name" id="hero-heading">
			TPM Who Can<br />Ship <span>Code.</span>
		</h1>
		<p class="hero-role">Four years in product. Full-stack background. Bias toward shipping.</p>
		<p class="hero-desc">
			Spent four years at startups doing TPM work without a PM title. Requirements, roadmaps,
			stakeholder loops, shipping. Can open the code editor too when the team needs it.
		</p>
		<div class="hero-cta">
			<button type="button" class="btn-fill" onclick={() => scrollTo('work')}>See my work</button>
			<button type="button" class="btn-outline" onclick={() => scrollTo('contact')}>Get in touch</button>
		</div>
	</div>
```

- [ ] **Step 4: Update the stat card**

Replace the `<aside class="hero-card">` block with:

```svelte
	<aside class="hero-card" aria-label="Quick stats">
		<div class="hero-avatar" aria-hidden="true">GS</div>
		<dl class="hero-stats">
			<div class="hero-stat">
				<dt class="hero-stat-label">Years in product</dt>
				<dd class="hero-stat-num">4+</dd>
			</div>
			<div class="hero-stat">
				<dt class="hero-stat-label">Products shipped</dt>
				<dd class="hero-stat-num">6</dd>
			</div>
			<div class="hero-stat" style="margin-bottom:0">
				<dt class="hero-stat-label">Visitor countries</dt>
				<dd class="hero-stat-num">{visitorCountries}</dd>
			</div>
		</dl>
	</aside>
</section>
```

- [ ] **Step 5: Verify in browser**

Check: label reads "Technical Product Manager · Singapore · Open to remote", headline reads "TPM Who Can Ship Code.", role line and description match spec, stat card shows "Years in product / Products shipped / Visitor countries" with a live number for countries (not 0 — confirm the DB is returning data).

- [ ] **Step 6: Commit**

```bash
git add src/routes/+page.svelte src/lib/components/Hero.svelte
git commit -m "feat: reposition hero as TPM with dynamic visitor countries stat"
```

---

## Task 3: About copy

**Files:**
- Modify: `src/lib/components/About.svelte:7-23`

The sidebar (`.about-side`) is unchanged. Only the three `<p>` tags inside `.about-main` change — they become four paragraphs.

- [ ] **Step 1: Replace the body copy inside `.about-main`**

Replace the contents of `<div class="about-main">` (lines 7–23):

```svelte
		<div class="about-main">
			<p>
				At Globalli, I owned internal tools from 0 to 1. Spotted where automation could help, talked
				to the person doing the work, gathered requirements, built prototypes, and iterated based on
				stakeholder feedback until the backlog was clear and the product shipped. One of those tools
				was a purchase order system that cut processing time by 75% and handled 300+ transactions a
				month.
			</p>
			<p>
				At Tickr, the backoffice wasn't working. Fixed the frontend's calls to protected API
				endpoints with the correct auth headers, then worked through the backlog of requirements the
				previous contractor had left undone. Shipped a backoffice they could actually use to
				moderate their app.
			</p>
			<p>
				Cornell B.S., then 18 years across Korea teaching. That time built a habit of explaining
				complicated things to people who need to act on them fast. Also built tools that other
				teachers used. The first time I understood what it meant to ship something and watch people
				rely on it.
			</p>
			<p>
				Looking for TPM or PM roles in SaaS, dev tools, EdTech, or consumer apps. Based in
				Singapore. Available now.
			</p>
		</div>
```

- [ ] **Step 2: Verify in browser**

Check: four paragraphs appear, no em-dashes, sidebar stats (Cornell / ~20 yrs / #1) are unchanged.

- [ ] **Step 3: Commit**

```bash
git add src/lib/components/About.svelte
git commit -m "feat: rewrite About copy for TPM narrative"
```

---

## Task 4: Skills restructure

**Files:**
- Modify: `src/lib/components/Skills.svelte` (full rewrite)

The current flat 4-column grid becomes two labeled groups side by side. The section title changes from "Skills & tools" to "Skills". On mobile (≤640px) the groups stack vertically.

- [ ] **Step 1: Replace `Skills.svelte` entirely**

```svelte
<script lang="ts">
	const productSkills = [
		{ name: 'Requirements gathering', type: 'Discovery', color: 'var(--coral)' },
		{ name: 'Agile / Scrum', type: 'Process', color: 'var(--purple)' },
		{ name: 'Stakeholder management', type: 'Process', color: 'var(--teal)' },
		{ name: 'Product roadmapping', type: 'Strategy', color: 'var(--amber)' }
	];

	const technicalSkills = [
		{ name: 'React / Next.js', type: 'Frontend', color: 'var(--purple)' },
		{ name: 'Svelte / SvelteKit', type: 'Frontend', color: 'var(--coral)' },
		{ name: 'TypeScript', type: 'Language', color: '#378add' },
		{ name: 'Python / Django', type: 'Language', color: 'var(--teal)' },
		{ name: 'MongoDB', type: 'Database', color: '#1d9e75' },
		{ name: 'D3.js', type: 'Visualisation', color: 'var(--amber)' },
		{ name: 'Playwright', type: 'Testing', color: 'var(--color-text-secondary)' },
		{ name: 'Jira / Confluence', type: 'Tooling', color: 'var(--color-text-secondary)' }
	];
</script>

<section class="section" aria-labelledby="skills-heading">
	<div class="section-header">
		<h2 class="section-title" id="skills-heading">Skills</h2>
	</div>
	<div class="skills-columns">
		<div class="skills-group">
			<p class="group-label">Product</p>
			<ul class="skills-list" role="list">
				{#each productSkills as skill (skill.name)}
					<li class="skill-block">
						<span class="skill-dot" style="background:{skill.color}" aria-hidden="true"></span>
						<span class="skill-name">{skill.name}</span>
						<span class="skill-type">{skill.type}</span>
					</li>
				{/each}
			</ul>
		</div>
		<div class="skills-group">
			<p class="group-label">Technical</p>
			<ul class="skills-list" role="list">
				{#each technicalSkills as skill (skill.name)}
					<li class="skill-block">
						<span class="skill-dot" style="background:{skill.color}" aria-hidden="true"></span>
						<span class="skill-name">{skill.name}</span>
						<span class="skill-type">{skill.type}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.section {
		padding: 52px 32px;
		border-bottom: 2px solid var(--color-text-primary);
	}
	.section-header {
		display: flex;
		align-items: baseline;
		gap: 16px;
		margin-bottom: 36px;
	}
	.section-title {
		font-size: 26px;
		font-weight: 500;
		letter-spacing: -0.5px;
	}
	.skills-columns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		border: 1.5px solid var(--color-text-primary);
		border-radius: 16px;
		overflow: hidden;
	}
	.skills-group:first-child {
		border-right: 1.5px solid var(--color-text-primary);
	}
	.group-label {
		padding: 12px 20px;
		border-bottom: 1.5px solid var(--color-text-primary);
		font-size: 11px;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-text-secondary);
	}
	.skills-list {
		list-style: none;
	}
	.skill-block {
		padding: 20px;
		border-bottom: 1.5px solid var(--color-text-primary);
		display: flex;
		flex-direction: column;
	}
	.skill-block:last-child {
		border-bottom: none;
	}
	.skill-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		margin-bottom: 12px;
		flex-shrink: 0;
	}
	.skill-name {
		font-size: 13px;
		font-weight: 500;
		margin-bottom: 3px;
	}
	.skill-type {
		font-size: 11px;
		color: var(--color-text-tertiary);
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	@media (max-width: 640px) {
		.section { padding: 40px 16px; }
		.skills-columns { grid-template-columns: 1fr; }
		.skills-group:first-child {
			border-right: none;
			border-bottom: 1.5px solid var(--color-text-primary);
		}
	}
</style>
```

- [ ] **Step 2: Verify in browser**

Check: "Skills" heading (no "& tools"), "Product" label on left with 4 items, "Technical" label on right with 8 items, correct colors, clean border lines between groups and between items. Resize to mobile width to confirm Product stacks above Technical.

- [ ] **Step 3: Commit**

```bash
git add src/lib/components/Skills.svelte
git commit -m "feat: restructure Skills into Product and Technical columns"
```

---

## Task 5: Projects

**Files:**
- Modify: `src/lib/projects.ts`

Remove "Running on Xero" (num 04) and "Encrypted PO Generator" (num 05). Rewrite descriptions for the four remaining projects. Renumber them 01–04. The 2x2 grid handles an even count natively — no `last-odd` logic triggers.

- [ ] **Step 1: Replace `projects.ts` entirely**

```typescript
export interface Tag {
	label: string;
	cls: string;
}

export interface Project {
	num: string;
	title: string;
	type: string;
	desc: string;
	tags: Tag[];
	url: string;
	accent: string;
	accentLight: string;
	image: string | null;
}

export const projects: Project[] = [
	{
		num: '01',
		title: 'Rep Yourself',
		type: 'PWA',
		desc: 'Built for the Armstrong Pull-up Program, a structured 5-day military training routine. Guides you through each session and tracks progress over time. Nothing existing did both the way it needed to be done. After user feedback, replaced the default data displays with custom D3.js charts. Ranked #1 on Google for "Armstrong Pullup Program App" with 1,200+ visitors.',
		tags: [
			{ label: 'React', cls: 'tag-react' },
			{ label: 'TypeScript', cls: 'tag-ts' },
			{ label: 'Next.js', cls: 'tag-next' }
		],
		url: 'https://www.repyourself.app',
		accent: 'var(--purple)',
		accentLight: 'var(--purple-light)',
		image: 'screenshots/rep-yourself.webp'
	},
	{
		num: '02',
		title: 'Suit Yourself',
		type: 'PWA',
		desc: 'A mobile-first PWA for card-based calisthenics workouts. Built for people doing this with a physical deck. Cards got wet, wore out, nobody remembered which suit meant which exercise. Shipped several iterations: automatic update alerts, swipe gestures and keyboard input, and a stopwatch feature that went out without touching saved workout history.',
		tags: [
			{ label: 'Svelte', cls: 'tag-svelte' },
			{ label: 'TypeScript', cls: 'tag-ts' }
		],
		url: 'https://www.suityourself.app',
		accent: 'var(--coral)',
		accentLight: 'var(--coral-light)',
		image: 'screenshots/suit-yourself.webp'
	},
	{
		num: '03',
		title: 'freeCodeCamp Seoul',
		type: 'Open Source',
		desc: 'Joined the Seoul chapter\'s open source site when the maintainer put out a call for help. Migrated the codebase from Pages Router to App Router, laid the groundwork for Korean translations with next-intl, and reviewed 31 pull requests from other contributors.',
		tags: [
			{ label: 'React', cls: 'tag-react' },
			{ label: 'TypeScript', cls: 'tag-ts' },
			{ label: 'Next.js', cls: 'tag-next' }
		],
		url: 'https://fcc-seoul.fly.dev/',
		accent: 'var(--teal)',
		accentLight: 'var(--teal-light)',
		image: 'screenshots/freeCodeCamp-Seoul.webp'
	},
	{
		num: '04',
		title: 'Work Smarter Randomizer',
		type: 'Productivity Tool',
		desc: 'Built between classes when the manual process for randomizing student vocabulary words was taking too long. Words shuffle automatically as you type them in. See how far each one lands from where it started. Part of a planned suite of tools for teachers, this is the first.',
		tags: [
			{ label: 'Svelte', cls: 'tag-svelte' },
			{ label: 'TypeScript', cls: 'tag-ts' }
		],
		url: 'https://work-smarter.vercel.app/randomizer',
		accent: 'var(--teal)',
		accentLight: 'var(--teal-light)',
		image: 'screenshots/work-smarter-randomizer.webp'
	}
];
```

- [ ] **Step 2: Verify in browser**

Check: 4 project cards in a 2x2 grid, no "Running on Xero" or "PO Generator" cards, descriptions match spec, project numbers read 01–04.

- [ ] **Step 3: Commit**

```bash
git add src/lib/projects.ts
git commit -m "feat: remove 2 projects and reframe remaining 4 for TPM narrative"
```

---

## Task 6: Contact description and Footer location

**Files:**
- Modify: `src/lib/components/Contact.svelte:9-11`
- Modify: `src/lib/components/Footer.svelte:8`

- [ ] **Step 1: Update Contact description**

In `src/lib/components/Contact.svelte`, replace the paragraph inside `.contact-left` (lines 9–11):

```svelte
			<p>
				Looking for TPM and PM roles in SaaS, dev tools, EdTech, or consumer apps. Based in
				Singapore and available now.
			</p>
```

- [ ] **Step 2: Update Footer location**

In `src/lib/components/Footer.svelte`, replace line 8:

```svelte
		<span class="footer-copy" aria-label="Location: Singapore">Singapore</span>
```

- [ ] **Step 3: Verify in browser**

Check: contact description reads "Looking for TPM and PM roles...", footer shows "Singapore" instead of "East & Southeast Asia".

- [ ] **Step 4: Commit**

```bash
git add src/lib/components/Contact.svelte src/lib/components/Footer.svelte
git commit -m "feat: update Contact copy and Footer location for TPM reposition"
```

---

## Done

All six tasks complete. The site is fully repositioned. Push the `tpm-reposition` branch when ready for review.
