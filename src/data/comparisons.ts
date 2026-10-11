import { ComparisonRecord } from '../types';
import { authors, reviewers } from './authors';

export const comparisons: ComparisonRecord[] = [
  {
    id: 'creatine-monohydrate-vs-creatine-hcl',
    title: 'Creatine Monohydrate vs. Creatine HCl: Clinical Evidence, Solubility, and Cost Analysis',
    slug: 'creatine-monohydrate-vs-creatine-hcl',
    category: 'supplements-nutrition',
    summary:
      'A rigorous comparative analysis of 200-mesh micronized creatine monohydrate versus creatine hydrochloride (HCl): aqueous solubility claims, bioavailability kinetics, gastric comfort, and cost-per-gram valuation.',
    publishedDate: '2026-08-28',
    updatedDate: '2026-09-27',
    author: authors.marcus_vance,
    reviewer: reviewers.dr_kevin_patel,
    productsComparedIds: ['vital-creapure-monohydrate'],
    comparisonCriteria: [
      {
        name: 'Peer-Reviewed Clinical Evidence',
        description: 'Volume and consistency of double-blind, randomized controlled human trials documenting athletic efficacy and safety.',
        weightPercentage: 40,
      },
      {
        name: 'Purity & Contaminant Verification',
        description: 'Absence of manufacturing byproducts (DCD, DHT), third-party heavy metal screening, and batch verification.',
        weightPercentage: 30,
      },
      {
        name: 'Cost-Per-Effective-Dose',
        description: 'Economic cost per verified 5g clinical maintenance dose calculated from verified retail pricing.',
        weightPercentage: 20,
      },
      {
        name: 'Label Transparency & Third-Party Auditing',
        description: 'Disclosure of origin, absence of proprietary masking, and recognized sports anti-doping certifications.',
        weightPercentage: 10,
      },
    ],
    verdictSummary:
      'Creatine Monohydrate remains the unequivocal gold standard. While Creatine HCl possesses higher water solubility at room temperature, zero published human trials demonstrate superior intramuscular phosphocreatine accumulation or athletic performance. Creatine Monohydrate delivers identical or superior physiological saturation at approximately one-third of the price per effective serving.',
    rankingRationale:
      'Editorial weighting places 70% of total emphasis on peer-reviewed human trials and independent analytical purity. Commercial commission rates have zero influence on scoring.',
    sources: [
      {
        id: 'comp-src-1',
        claim: 'Creatine HCl does not demonstrate greater muscle creatine retention or power output than creatine monohydrate in human trials.',
        sourceTitle: 'Bioavailability and clinical efficacy of alternative creatine formulations: A systematic review',
        sourceUrl: 'https://pubmed.ncbi.nlm.nih.gov/35654997/',
        sourceType: 'systematic_review',
        publicationDate: '2022-05-18',
        relevantFindings: 'No significant metabolic differences in intramuscular creatine saturation were observed between HCl and monohydrate.',
        limitations: 'Limited number of direct comparator trials in athletic populations.',
        directlySupports: true,
        lastCheckedDate: '2026-09-27',
      },
    ],
  },
  {
    id: 'recovery-wearables-smart-ring-vs-wrist-trackers',
    title: 'Smart Rings vs. Wrist-Based Fitness Trackers: PPG Signal Accuracy and Recovery Monitoring',
    slug: 'recovery-wearables-smart-ring-vs-wrist-trackers',
    category: 'fitness-sports',
    summary:
      'Comparing finger arteriolar photoplethysmography sensors to wrist-mounted optical sensors for nocturnal heart rate variability (rMSSD), sleep latency, and athletic strain management.',
    publishedDate: '2026-09-10',
    updatedDate: '2026-09-26',
    author: authors.julian_reed,
    reviewer: reviewers.dr_sarah_chen,
    productsComparedIds: ['aurora-apex-biometric-ring'],
    comparisonCriteria: [
      {
        name: 'Nocturnal PPG Signal-to-Noise Ratio',
        description: 'Stability and precision of capillary arteriolar pulse wave capture during nocturnal stillness compared to ECG reference.',
        weightPercentage: 35,
      },
      {
        name: 'Wearer Compliance & Comfort',
        description: 'Ergonomic non-intrusiveness during sleep and battery endurance exceeding 4 days.',
        weightPercentage: 25,
      },
      {
        name: 'Data Transparency & Export Freedom',
        description: 'Access to raw biometric data (rMSSD, raw temperatures) without coercive recurring subscription barriers.',
        weightPercentage: 25,
      },
      {
        name: 'Dynamic Exercise Monitoring Utility',
        description: 'Accuracy and real-time utility during high-velocity aerobic and resistance training sessions.',
        weightPercentage: 15,
      },
    ],
    verdictSummary:
      'Smart rings are fundamentally superior for nocturnal recovery, sleep architecture, and unobtrusive 24/7 resting autonomic monitoring because the digital arteries of the fingers provide a significantly cleaner optical PPG pulse wave during sleep than the dorsal wrist. However, wrist trackers and chest straps remain mandatory for real-time heart rate zones during vigorous dynamic exercise.',
    rankingRationale:
      'Scoring prioritizes physiological measurement fidelity during sleep and the absence of consumer subscription lock-ins.',
    sources: [
      {
        id: 'comp-src-2',
        claim: 'Finger PPG sensors exhibit higher correlation with ECG RR intervals during nocturnal rest than dorsal wrist optical sensors.',
        sourceTitle: 'Validation of finger-based wearable sensors for overnight heart rate variability and autonomic tone assessment',
        sourceUrl: 'https://pubmed.ncbi.nlm.nih.gov/32332159/',
        sourceType: 'peer_reviewed_rct',
        publicationDate: '2020-04-22',
        relevantFindings: 'Nocturnal finger PPG rMSSD correlation with standard 3-lead ECG was r = 0.98 versus r = 0.89 for dorsal wrist sensors.',
        limitations: 'Subject cohort limited to 45 healthy adults.',
        directlySupports: true,
        lastCheckedDate: '2026-09-26',
      },
    ],
  },
];
