# TheBridgely Marketing Website

Premium production-ready marketing site for **TheBridgely** — embedded engineering teams for global startups.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_CALENDLY_URL` — your Calendly event link
- `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` — for contact form leads (see `supabase/leads.sql`)

Run `supabase/leads.sql` once in the Supabase SQL Editor before testing the contact form.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/       # Page sections
│   ├── ui/             # Button, etc.
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── FeatureCard.tsx
│   ├── BentoGrid.tsx
│   ├── ComparisonTable.tsx
│   ├── StepTimeline.tsx
│   ├── TeamCard.tsx
│   ├── CTASection.tsx
│   ├── ContactForm.tsx
│   ├── CalendlyModal.tsx
│   ├── Footer.tsx
│   └── SectionWrapper.tsx
└── lib/
    ├── constants.ts
    ├── motion.ts
    └── utils.ts
```

## Build

```bash
npm run build
npm start
```

## Deploy

Optimized for Vercel. Connect your repo and deploy with zero config.
