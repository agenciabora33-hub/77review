import { CategoryInfo } from '../types';

export const categories: CategoryInfo[] = [
  {
    slug: 'supplements-nutrition',
    name: 'Supplements & Nutrition',
    shortDescription: 'Ingredient breakdowns, therapeutic dosages, purity certifications, and evidence evaluations.',
    fullDescription:
      'Rigorous scientific examination of dietary supplements, sports nutrition formulations, bioactive compounds, and nutritional biochemistry. We evaluate label transparency, clinically tested dosages, third-party laboratory verification, and potential contraindications.',
    scopeHighlights: [
      'Peer-reviewed evidence on active ingredients',
      'Clinical vs. sub-therapeutic ingredient dosing',
      'Label interpretation and proprietary blend scrutiny',
      'Independent laboratory purity (heavy metals & banned substances)',
      'Documented safety interactions and contraindications',
    ],
    editorialBoundaries: [
      'We do not endorse unproven cure or disease-prevention claims',
      'We do not recommend dosages exceeding established safe upper limits',
      'We do not treat merchant marketing materials as scientific substantiation',
    ],
  },
  {
    slug: 'fitness-sports',
    name: 'Fitness & Sports',
    shortDescription: 'Strength training education, recovery biomechanics, wearable tech, and training gear.',
    fullDescription:
      'Evidence-grounded education covering strength adaptations, cardiovascular conditioning, endurance performance, active recovery protocols, and fitness technology. All recommendations separate physical conditioning from clinical musculoskeletal rehabilitation.',
    scopeHighlights: [
      'Biomechanically sound training principles',
      'Objective recovery equipment testing (percussive therapy, cold/heat)',
      'Wearable biometric sensors and metric accuracy (HRV, sleep stages)',
      'Ergonomics and durability in home training hardware',
      'Longitudinal training adaptations supported by exercise science',
    ],
    editorialBoundaries: [
      'We do not prescribe rehabilitation exercises for acute injuries',
      'We do not promise guaranteed muscle gain or body transformation timelines',
    ],
  },
  {
    slug: 'health-wellness',
    name: 'Health & Wellness',
    shortDescription: 'Circadian biology, restorative sleep practices, stress physiology, and evidence-based routines.',
    fullDescription:
      'Practical health education grounded in peer-reviewed physiological research. We cover sleep architecture, circadian rhythm optimization, stress management pathways, and consumer wellness products designed to support sustainable daily habits.',
    scopeHighlights: [
      'Sleep hygiene and circadian timing science',
      'Environmental sleep optimization (light, temperature, sound)',
      'Physiological stress recovery and autonomic balance',
      'Consumer health devices and environmental air/water quality',
      'Habit formation models with empirical support',
    ],
    editorialBoundaries: [
      'We do not diagnose sleep disorders, endocrine conditions, or mental health illnesses',
      'We do not recommend abandoning conventional medical treatment',
    ],
  },
  {
    slug: 'product-reviews',
    name: 'Product Reviews & Comparisons',
    shortDescription: 'Head-to-head laboratory comparisons, cost-per-serving calculations, and buying guides.',
    fullDescription:
      'In-depth, standardized product reviews comparing formulation quality, verified pricing, independent laboratory certifications, and real-world utility. Recommendations are dictated solely by verified editorial criteria, never affiliate commissions.',
    scopeHighlights: [
      'Standardized scoring across purity, evidence, value, and transparency',
      'Cost-per-gram and cost-per-effective-serving audits',
      'Verification of merchant refund terms, billing cycles, and policies',
      'Systematic head-to-head comparison matrices',
      'Comprehensive buying guides with red flags to avoid',
    ],
    editorialBoundaries: [
      'Commercial commission rates have zero influence on editorial rankings',
      'We clearly differentiate between firsthand physical testing and literature-based analysis',
      'We do not publish fabricated user testimonials or synthetic reviews',
    ],
  },
];
