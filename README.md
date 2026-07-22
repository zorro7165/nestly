# Nestly Homes

Marketing site for **Nestly Homes** — a managed home-rental service. Owners hand over their
property and receive **guaranteed monthly rent**; Nestly furnishes, maintains and rents the home
to vetted tenants. Built for the Indian market (₹, cities like Bengaluru, Hyderabad, Chennai,
Pune, Mumbai). Domain: [nestlyhomes.in](https://nestlyhomes.in)

## Pages

- `index.html` — Owners-first landing page (guaranteed-rent pitch, how it works, tenant path, FAQ, lead form, contact)
- `owners.html` — Dedicated home-owner page (value props, comparison table, detailed process, owner lead form)
- `rentals.html` — Furnished homes to rent, with city/type filters (tenant path)

Each HTML page is **fully self-contained** — the CSS and JS are inlined, so any page renders
correctly on its own with no external files needed.

## Source files (for editing)

- `css/styles.css` — design system (shared source)
- `js/icons.js`, `js/data.js`, `js/main.js` — icons, sample data, shared behavior

> After editing the source `css/`/`js/` files, re-inline them into the HTML pages so the
> standalone pages stay in sync.

## Deploy with GitHub Pages

1. Push to GitHub (this repo).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: `main` / `root`**.
4. Save — your site publishes at `https://<user>.github.io/nestly/`.
5. To use the custom domain `nestlyhomes.in`, add it under **Pages → Custom domain** and point your
   DNS to GitHub Pages.

## Notes

This is a prototype. Phone number, email, stats and testimonials are placeholder content, and the
lead/enquiry forms are demo-only (nothing is submitted or stored). Wire the forms to a backend or a
form service (e.g. Formspree, Getform) before going live.
