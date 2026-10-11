import { BuyingGuideRecord } from '../types';
import { authors } from './authors';

export const buyingGuides: BuyingGuideRecord[] = [
  {
    id: 'creatine-buying-guide',
    title: 'How to Choose an Evidence-Backed Creatine Supplement: Purity, Form, and Sourcing',
    slug: 'creatine-buying-guide',
    category: 'supplements-nutrition',
    summary:
      'A four-step buyer framework for selecting high-purity creatine monohydrate without overpaying for ineffective designer salts or unverified generic commodity blends.',
    publishedDate: '2026-08-30',
    updatedDate: '2026-09-27',
    author: authors.elena_rodriguez,
    selectionCriteria: [
      {
        step: 'Step 1: Insist on Micronized Creatine Monohydrate',
        guideline:
          'Ensure the ingredient panel lists only Creatine Monohydrate (preferably 200-mesh micronized). Avoid paying 200–400% markups for Creatine HCl, nitrate, ethyl ester, or liquid solutions, none of which exhibit superior muscle uptake in clinical trials.',
        evidenceBacking:
          'Over 500 peer-reviewed studies establish monohydrate as the definitive benchmark for intramuscular bioavailability and safety.',
      },
      {
        step: 'Step 2: Verify Trademarked Creapure® or Third-Party Heavy Metal Screening',
        guideline:
          'Inquire whether the raw ingredient is sourced from Creapure® (synthesized in Germany with rigorous contaminant monitoring) or accompanied by an accessible Certificate of Analysis (CoA) confirming lead <0.02 ppm and cadmium <0.01 ppm.',
        evidenceBacking:
          'Independent laboratory testing of low-cost commodity creatine powder has identified traces of dicyandiamide and dihydrotriazine byproducts from unmonitored synthesis routes.',
      },
      {
        step: 'Step 3: Calculate Cost-Per-5-Gram Serving',
        guideline:
          'A high-grade 500g tub of pure micronized creatine monohydrate should cost between $25 and $38 (approx. $0.25 to $0.40 per 5g clinical serving). Anything exceeding $0.60 per serving is an inflated marketing markup.',
        evidenceBacking:
          'Industrial manufacturing economics of pharmaceutical-grade creatine monohydrate allow fair pricing without cutting purity standards.',
      },
      {
        step: 'Step 4: Confirm Anti-Doping Certifications for Competitive Athletes',
        guideline:
          'Competitive collegiate or professional athletes subject to WADA or NCAA testing must select products carrying NSF Certified for Sport® or Informed Sport logos.',
        evidenceBacking:
          'Multi-agency audits have documented accidental cross-contamination in shared manufacturing facilities lacking dedicated line cleaning protocols.',
      },
    ],
    redFlagsToAvoid: [
      'Proprietary "performance matrices" that bundle 2g of creatine with cheap maltodextrin or sugar.',
      'Effervescent or liquid creatine drinks (creatine breaks down into inactive creatinine in liquid solution within days).',
      'Extravagant marketing slogans promising "10 pounds of solid muscle in 14 days" or "No water weight guaranteed".',
      'Unflavored powders that fail to dissolve into a fine suspension and leave gritty chemical residue.',
    ],
    labelReadingGuide: [
      {
        element: 'Active Ingredient Line',
        whatToLookFor: 'Single-ingredient "Creatine Monohydrate: 5,000 mg (5g)" with zero artificial sweeteners or silicon dioxide fillers.',
        warningSignal: 'Multi-ingredient proprietary blends where creatine amount is not explicitly quantified.',
      },
      {
        element: 'Manufacturer Facility & Sourcing',
        whatToLookFor: 'Manufactured in cGMP-audited facility with ISO 17025 laboratory verification.',
        warningSignal: 'No facility origin declared; generic "Distributed by" address without lab traceability.',
      },
    ],
    recommendedProductIds: ['vital-creapure-monohydrate'],
    sources: [
      {
        id: 'guide-src-1',
        claim: 'Creatine monohydrate is the most stable and effective form when consumed as powder.',
        sourceTitle: 'International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation',
        sourceUrl: 'https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0173-z',
        sourceType: 'clinical_guideline',
        publicationDate: '2017-06-13',
        relevantFindings: 'Powder formulations of monohydrate remain stable indefinitely at room temperature when kept dry.',
        limitations: 'Aqueous liquid solutions undergo rapid degradation into creatinine.',
        directlySupports: true,
        lastCheckedDate: '2026-09-27',
      },
    ],
  },
];
