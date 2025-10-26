# Tackia.ca — Street-Style Site (Next.js + Tailwind)

Deployed on **Cloudflare Pages** (free), contact form via **Formspree** (free).

## Dev
```bash
npm install
npm run dev
```

## Build & Export (for Cloudflare Pages)
```bash
npm run build
# output in out/
```

## Deploy to Cloudflare Pages
1. Create a new **Pages** project → Connect Git → pick this repo.
2. **Build command:** `npm run build`
3. **Build output directory:** `out`
4. Leave env defaults. Cloudflare will serve the static export.

### Domain (Tackia.ca)
- In Cloudflare → Pages → your project → **Custom domains** → add `tackia.ca` + `www.tackia.ca`.
- If your domain is registered elsewhere, point nameservers to Cloudflare (recommended) **or** add CNAME/AAAA per the wizard.

### Free Email (catering@tackia.ca)
Cloudflare **Email Routing** → add address `catering@tackia.ca` → forward to your Gmail.
- Verify destination email
- Add DNS records automatically
- Test by sending an email to `catering@tackia.ca`

## Formspree wiring
- Create a form at https://formspree.io
- Copy your endpoint URL (looks like `https://formspree.io/f/xxxxxx`)
- In `components/Contact.tsx`, replace `FORMSPREE_ENDPOINT` with your URL.

## “Today’s Location” banner
- Edit `public/today.json` and push to main (or use Cloudflare Pages “Quick Edit”).
```json
{ "text": "Today: Lonsdale Quay, 11:00–8:00 • See Instagram for updates", "link": "" }
```
The banner fetches this JSON at runtime.

## Images
Place images in `public/images/` and reference with `/images/...`. Current ones are placeholders from your uploads.

## Cloudflare build tips
- Ensure **Build command** = `npm run build` and **Output directory** = `out`.
- Confirm `next-env.d.ts` exists at repo root, and devDependencies include `@types/react`, `@types/react-dom`, `@types/node`.
- Optional: In Cloudflare Pages → Settings → Environment variables, set `NODE_VERSION=18.18.0`.
