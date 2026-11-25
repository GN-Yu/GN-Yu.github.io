# Website changes — November 25, 2026

Prepared November 25, 2026 on `codex/website-review-improvements`.
The owner approved the reviewed changes for publication on November 25, 2026. Today's website work is consolidated into one commit for release through `main`, the GitHub Pages production branch.

## Preview

- [Updated site](http://127.0.0.1:8000/)
- [Original snapshot](http://127.0.0.1:8001/)

Both previews are local to this computer. The original snapshot is stored temporarily at `/tmp/personal-website-before`.

If the updated preview stops, run this from the repository and open the updated-site link:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

The existing VS Code Live Server workflow also works. No build or package installation is required to run the site.

To restart the original snapshot while it remains in `/tmp`:

```bash
python3 -m http.server 8001 --bind 127.0.0.1 --directory /tmp/personal-website-before
```

## Complete change list

### Homepage content and navigation — index.html

1. Removed the Skills section and its entries from desktop, mobile, and footer navigation.
2. Added the computational-neuroscientist role and postdoctoral affiliation beneath the name. Following review, removed the opening research paragraph and replaced the About Me biography with the owner's exact supplied text, preserving its italicized links. Kept the English and Chinese names and both existing photographs.
3. Replaced the opening Contact Info button with Explore Research, linked to the existing `#projects` anchor. Added a direct email icon beside LinkedIn and GitHub.
4. Changed the Projects heading to Selected Research and the introductory label to Explore my work. Navigation now uses Research; the established `#projects` URL remains compatible.
5. Added motivation, a research question, a plain-language summary explaining the broader significance, and a topic line to each of the three existing cards: Alzheimer's clinical data modeling, mouse locomotion, and linear arboricity. Following review, removed collaborator names and personal contribution statements from these cards. Summaries describe supported work without adding accuracy scores or unsupported causal claims.
6. Corrected “5+ year research” to “5+ years of research.”
7. Converted project resources, CV access, social icons, and section arrows to native links. Existing CV and project resource destinations are preserved, including the locomotion preprint link deferred for later review.
8. Repaired the About arrow: it now points to `#projects` instead of nonexistent `#experience`.
9. Converted the mobile-menu toggle to a labeled button with `aria-expanded` and `aria-controls`; changed its list wrapper to a proper `ul`.
10. Added a Skip to content link, a main landmark, navigation labels, a Chinese-language attribute, and descriptive labels on icon links.
11. Kept one page-level `h1`; section headings are `h2` and research-card headings are `h3`.
12. Added responsive portrait sources, JPEG fallbacks, image dimensions, and high-priority loading for the opening portrait. Added WebP sources and lazy loading for the About photo, research images, and section-arrow images. Original images remain available.

### Search and sharing — index.html, robots.txt, sitemap.xml

13. Added a page title containing name and role, a descriptive meta description, and the canonical `https://www.yuguoning.com/` URL.
14. Added Open Graph and Twitter metadata with the existing portrait as a square sharing image, including image alt text and Open Graph dimensions.
15. Added `robots.txt` pointing to the sitemap, and a sitemap containing the canonical homepage. No Search Console or indexing action was performed.

### Appearance and responsive behavior — style.css, mediaqueries.css

16. Preserved the white/gray palette, existing fonts, circular portrait appearance, rounded cards/buttons, and original imagery.
17. Replaced viewport-height content sections with content-driven spacing and a centered maximum width. Kept generous opening-section spacing.
18. Adjusted the hero layout for the role and affiliation; retained side-by-side presentation on wider screens and stacked content on phones. After moving the research introduction into About Me, retained spacing between the affiliation and buttons and removed the unused intro styling.
19. Replaced fixed-width project-image/card layout with a three-column desktop grid, two columns on tablets, and a single column on narrower screens. The final tablet card is centered.
20. Removed title clipping. Research titles now wrap naturally, summaries are left-aligned, and resource links wrap inside their cards.
21. Improved About-section wrapping, phone text alignment, contact/footer wrapping, and presentation-date alignment. Phone presentation dates sit above their entries.
22. Added visible keyboard-focus outlines and 44px menu/social targets. The closed mobile menu is removed from the tab order.
23. Added reduced-motion support for smooth scrolling and transitions.
24. Applied consistent border-box sizing and body-text line height.

### Mobile-menu behavior — script.js

25. Replaced inline click handlers with event listeners and synchronized visibility, accessible state, label, and icon appearance.
26. Added closing on Escape (with focus returned to the button), link activation, outside click, focus leaving the menu, and desktop/mobile breakpoint changes.

### Image assets — assets/optimized/

27. Added 11 resized/compressed variants without changing the original files:

```text
hero-400.webp
hero-800.webp
hero-400.jpg
hero-800.jpg
yu-about-pic-400.webp
yu-about-pic-800.webp
yu-about-pic-400.jpg
yu-about-pic-800.jpg
CPG-800.webp
project_alzheimer-800.webp
LAC-800.webp
```

The five 800px WebP images total 289,120 bytes, compared with 4,205,364 bytes for the five source images: a 93.1% reduction in asset bytes. At standard pixel density, browsers can choose the still smaller 400px portraits. This is an asset-size comparison, not a measured page-load-time improvement. Proportions and the circuit figure's transparency were preserved; metadata was stripped from generated variants.

### Review materials

28. Added this review note, started the two local previews, and saved browser screenshots/check outputs under `/tmp/personal-website-preview-tools`. Browser-testing dependencies were installed only under `/tmp`; the site still has no build step or package dependencies.

## Dark mode addition

29. Added a rounded sun/moon theme button to desktop and mobile navigation, with a visible action label, accessible name, keyboard support, and a minimum 44px target.
30. Added `theme.js`, loaded before styles so the selected palette is applied before the page renders. New visitors follow their system preference; an explicit choice is saved under `guoning-theme` in local storage. The page follows system changes until a visitor chooses a mode. Switching still works if browser storage is blocked.
31. Replaced fixed UI colors with shared light/dark palette variables for the page, cards, text, links, buttons, focus outlines, and mobile menu. Added color-scheme and browser theme-color metadata. The existing light palette and layout remain the basis of the design.
32. Adapted monochrome icons for dark backgrounds, removed fixed black link colors in About Me, and clipped the opening portrait to a circle so its white corners do not appear on dark backgrounds. Photographs and scientific figures retain their colors; figures retain white backgrounds for readability.
33. Included dark mode in the same static website deployment. No hosting configuration, publication content, or CV files changed.

## Follow-up copy adjustments

34. Refined research terminology following review: “biomarkers” in the Alzheimer's summary, “neuro-biomechanical model” and “limbs” in the locomotion summary, and “sets of paths” in the graph summary, without references to layers or paths branching.
35. Renamed “Projects” to “Research” in desktop, mobile, and footer navigation, and updated the About arrow's accessible label to “Continue to research.” Existing section links remain compatible.
36. Changed the five selected section introductions to sentence case: “Get to know more,” “Explore my work,” “List of my,” “Some of my academic,” and “Get in touch.” The three research card titles use title case, per the latest preference: “Alzheimer's Disease Clinical Data Modeling,” “Mouse Locomotion Control,” and “Linear Arboricity of Degenerate Graphs.”
37. Added “School of Medicine” between Insanally Lab and University of Pittsburgh in the opening affiliation, on its own line for readability at narrow widths.

## Preserved and deferred

- CV files and destination unchanged; PDF/HTML modernization deferred.
- Publication records and footnote unchanged; status/date/link updates deferred.
- Presentation content unchanged.
- `CNAME`, Google verification file, CSP, MathJax loading, hosting, DNS, HTTPS, and redirect configuration unchanged.
- Existing user changes to `TODO.md` and the untracked `CLAUDE.md` were not edited.
- No new RNN/transformer cards, blog, analytics, or Google Scholar link added in this pass.

## Copy evidence

The supplied Windows handoff and existing biography informed the scope and introduction. The summaries were checked against public primary sources:

- Current role: https://www.insanallylab.com/people
- Research direction: https://mathstat.gsu.edu/files/2026/02/Post-Grad-Employment.pdf
- Clinical modeling notebook: https://github.com/GN-Yu/Alzheimer-prediction/blob/main/AD_predict.ipynb
- Locomotion paper, including author contributions: https://www.rybak-et-al.net/pdfs/Molkov_et_al_2024.pdf
- Linear arboricity paper: https://doi.org/10.1002/jgt.22967
- Decomposition manuscript: https://math.gsu.edu/gchen/files/2023/LAC2-23July17.pdf

## Validation

- JavaScript syntax and Git whitespace checks passed.
- Static validation passed for local files, responsive source paths, internal anchors, unique IDs, and sitemap XML.
- Publication entries, their footnote, and presentation content were compared with the original and remain identical.
- Chromium screenshots inspected at desktop (1440px), tablet (1024px), and phone (390px) widths; 320px layout also checked.
- Keyboard opening, navigation, Escape closing, outside-click closing, focus-exit closing, and breakpoint-reset behavior passed. The skip link and repaired About arrow also passed.
- No horizontal overflow or JavaScript errors in the primary desktop/tablet/phone runs; fonts and displayed images loaded.
- Additional breakpoint checks passed at 800, 801, 1200, 1201, 1280, and 1920px, including title wrapping without clipping. High-density responsive portrait selection, reduced-motion behavior, CV/metadata/image HTTP routes, and console-error checks passed.
- Mobile arrows are intentionally hidden and lazy-loaded, so their images need not be downloaded on phones.
- Dark-mode checks passed in both palettes at 1440, 1201, 1024, 390, and 320px: no horizontal overflow, one visible theme control, a minimum 44px target, keyboard activation, synchronized labels, saved choice after reload, and working mobile navigation. System-preference changes, manual overrides, invalid saved values, and blocked local storage were also verified without JavaScript errors.
- Dark and light screenshots were inspected; photographs and research figures remain unfiltered. Checked visible text and sampled button hover states meet 4.5:1 contrast in both palettes. This was a focused contrast check, not a complete accessibility audit.
- Browser validation used Chromium, not physical phones or Safari/Firefox. Search-engine indexing and social-platform processing of sharing metadata have not been verified.
