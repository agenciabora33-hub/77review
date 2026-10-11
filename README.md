# 77 Review — International Health, Fitness & Supplement Editorial Affiliate Platform

**Version:** 2.0  
**Primary Market:** United States  
**Primary Language:** American English  
**Architecture:** Modern High-Performance React / TypeScript / Vite / Tailwind CSS  
**Deployment Target:** Vercel / GitHub  

---

## 1. Overview & Editorial Charter

**77 Review** is an independent health, fitness, sports science, and dietary supplement editorial publication. The platform combines:
- Evidence-aware health journalism grounded in a 7-tier scientific hierarchy.
- Standardized product evaluations across purity, evidence, label transparency, and cost-per-effective dose.
- Head-to-head comparison matrices with transparent, non-commercial ranking formulas.
- Multi-channel affiliate monetization (ClickBank, BuyGoods, ShareASale, Direct) strictly ring-fenced from editorial scoring.
- Destination quality compliance for Google Ads and Meta Advertising Standards for Health Products.
- Full compliance with FTC 16 CFR Part 255 endorsement guidelines.

---

## 2. Project Directory Structure

```
├── public/
│   ├── robots.txt                    # Search crawler rules with sitemap declaration
│   └── sitemap.xml                   # XML sitemap with canonical URLs & priorities
├── src/
│   ├── assets/
│   │   └── images/                   # High-fidelity studio product & editorial photography
│   ├── components/
│   │   ├── Header.tsx                # Strict 3-zone Top Bar Contract
│   │   ├── Footer.tsx                # Independent editorial footer & disclaimers
│   │   ├── ArticleCard.tsx           # Zero-pill unboxed editorial card
│   │   ├── ProductCard.tsx           # Standardized product showcase card
│   │   ├── AffiliateNoticeBar.tsx    # FTC 16 CFR Part 255 commercial disclosure
│   │   ├── SourceCitationList.tsx    # Study limitations and findings trail
│   │   ├── MedicalReviewPanel.tsx    # Author & reviewer credential separation
│   │   ├── OutboundAffiliateModal.tsx # Transparent merchant dispatch interstitial
│   │   ├── ComplianceInspectorModal.tsx # Google/Meta Ads & Evidence Audit Desk
│   │   └── SearchModal.tsx           # Instant client-side search across publications
│   ├── data/
│   │   ├── site-config.ts            # Brand, contact placeholders, and FTC text
│   │   ├── categories.ts             # 4 core departments with scopes & boundaries
│   │   ├── authors.ts                # Verified author and medical reviewer profiles
│   │   ├── products.ts               # Evaluated product records with lab specs
│   │   ├── articles.ts               # Evidence-based research publications
│   │   ├── comparisons.ts            # Multi-criteria weighted comparisons
│   │   └── guides.ts                 # 4-step consumer buying guides
│   ├── lib/
│   │   ├── seo.ts                    # Schema.org JSON-LD & canonical URL helpers
│   │   └── compliance.ts             # Ad compliance & prohibited claim scanner
│   ├── pages/
│   │   ├── HomePage.tsx              # 3-tier salience editorial front page
│   │   ├── CategoryPage.tsx          # Department taxonomy view
│   │   ├── ArticlePage.tsx           # 65–75ch long-form reading canvas
│   │   ├── ProductReviewPage.tsx     # 18-section standardized review template
│   │   ├── ComparisonPage.tsx        # Multi-criteria weighted comparison view
│   │   ├── BuyingGuidePage.tsx       # Decision framework & red flags view
│   │   ├── NotFoundPage.tsx          # Editorial 404 handler
│   │   └── trust/                    # Complete trust & governance suite
│   │       ├── AboutPage.tsx
│   │       ├── ContactPage.tsx
│   │       ├── EditorialPolicyPage.tsx
│   │       ├── MethodologyPage.tsx
│   │       ├── MedicalReviewPage.tsx
│   │       ├── AffiliateDisclosurePage.tsx
│   │       ├── AdvertisingPolicyPage.tsx
│   │       ├── CorrectionsPolicyPage.tsx
│   │       └── LegalPages.tsx
│   ├── types/
│   │   └── index.ts                  # TypeScript types for all records & governance
│   ├── App.tsx                       # Client-side router & application container
│   ├── main.tsx                      # DOM entry point
│   └── index.css                     # Editorial typography & Tailwind CSS theme
├── index.html                        # SEO metadata, OpenGraph, JSON-LD Organization
├── metadata.json                     # AI Studio metadata
├── package.json
└── tsconfig.json
```

---

## 3. Installation & Local Development

### Prerequisites
- Node.js 18.x or 20.x
- npm, yarn, or bun

### Setup
```bash
# Clone the repository
git clone https://github.com/your-username/77-review.git
cd 77-review

# Install dependencies
npm install

# Start local development server (Port 3000)
npm run dev
```

Open `http://localhost:3000` in your web browser.

---

## 4. How to Register & Publish Content

### A. Registering an Evaluated Product (`src/data/products.ts`)
Add a new object implementing `ProductRecord`:
```ts
{
  id: 'product-slug-id',
  name: 'Brand Name Formulation',
  slug: 'brand-name-formulation',
  category: 'supplements-nutrition',
  classification: 'physical',
  manufacturer: 'Manufacturer LLC',
  shortDescription: '...',
  fullDescription: '...',
  verifiedPrice: {
    amount: 39.99,
    currency: 'USD',
    servingCost: 0.66,
    servingsCount: 60,
    billingType: 'one-time',
    verifiedDate: '2026-10-10'
  },
  ingredients: [...],
  certifications: ['NSF Certified for Sport'],
  merchantName: 'Merchant Portal',
  affiliateNetwork: 'ClickBank',
  approvedAffiliateUrl: 'https://...',
  internalTrackingId: '77REV-PROD-01',
  editorialStatus: 'published',
  ratingBreakdown: {
    ingredientPurityOrBuild: 9.5,
    evidenceSubstantiation: 9.6,
    labelTransparency: 9.2,
    costPerDoseValue: 9.0,
    overallEditorialScore: 9.4
  },
  sources: [...]
}
```

### B. Registering an Editorial Research Article (`src/data/articles.ts`)
Articles require answer-first synthesis, 65–75 character line length, verified citations, author attribution, and medical review classification:
```ts
{
  id: 'article-slug',
  title: 'Full Descriptive Title',
  slug: 'article-slug',
  category: 'supplements-nutrition',
  summary: 'Concise deck...',
  primaryQuestionAnswer: 'Answer-first executive summary...',
  readTimeMinutes: 8,
  publishedDate: '2026-10-10',
  updatedDate: '2026-10-10',
  author: authors.marcus_vance,
  reviewer: reviewers.dr_sarah_chen,
  reviewStatus: 'published',
  medicalRiskLevel: 'health_sensitive',
  contentSections: [...],
  sources: [...]
}
```

---

## 5. Compliance & Advertising Standards

### Google Ads Destination Standards
- Every landing page contains substantive, original analysis (>600 characters) independent of any merchant offer.
- Zero bridge pages, doorway redirects, or interstitial redirects without content.
- Explicit disclaimers prevent healthcare certification misclassification.

### Meta Advertising Standards
- Creative and landing copy never asserts negative personal health attributes (e.g. no body shaming or accusatory health language).
- Zero claims of guaranteed body transformation or rapid fat loss.
- Pixels do not collect or pass sensitive medical conditions.

### FTC 16 CFR Part 255 Disclosure
- All commercial links are accompanied by prominent, above-the-fold disclosures.
- Outbound clicks trigger a verification modal displaying network and merchant information.

---

## 6. GitHub & Vercel Deployment Workflow

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete 77 Review production platform"
   git branch -M main
   git remote add origin https://github.com/your-org/77-review.git
   git push -u origin main
   ```

2. **Import into Vercel**:
   - Log into [vercel.com](https://vercel.com).
   - Click **Add New Project** and select your GitHub repository.
   - Framework Preset: **Vite**.
   - Build Command: `npm run build`.
   - Output Directory: `dist`.

3. **Configure Environment Variables on Vercel**:
   - `VITE_SITE_URL`: `https://77review.com`

4. **Verify Deployment & Submit Sitemaps**:
   - Verify canonical tags resolve to `https://77review.com`.
   - Submit `https://77review.com/sitemap.xml` to Google Search Console and Bing Webmaster Tools.

---

## 7. License & Rights

© 2026 77 Review. All rights reserved. Content and research methodology are proprietary editorial assets.
