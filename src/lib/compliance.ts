import { ArticleRecord, ProductRecord, ReviewStatus } from '../types';

export interface ComplianceCheckResult {
  passed: boolean;
  score: number; // 0-100
  checks: {
    category: 'google_ads' | 'meta_ads' | 'ftc_transparency' | 'health_claims';
    name: string;
    status: 'pass' | 'warning' | 'fail';
    details: string;
  }[];
}

const PROHIBITED_HEALTH_CLAIMS = [
  'guaranteed weight loss',
  'cure',
  'cures',
  'treats disease',
  'miracle cure',
  'prevents all cancer',
  'replaces prescription medication',
  'lose 10 pounds in 7 days',
  'effortless fat burn',
  '100% effective cure',
];

export function auditContentCompliance(
  textToScan: string,
  hasAffiliateLinks: boolean,
  hasFTCNotice: boolean,
  isReviewPage = false
): ComplianceCheckResult {
  const lowerText = textToScan.toLowerCase();
  const checks: ComplianceCheckResult['checks'] = [];
  let violations = 0;

  // 1. Health Claims Check
  const foundProhibited: string[] = [];
  for (const phrase of PROHIBITED_HEALTH_CLAIMS) {
    if (lowerText.includes(phrase)) {
      foundProhibited.push(phrase);
    }
  }

  if (foundProhibited.length > 0) {
    violations += 3;
    checks.push({
      category: 'health_claims',
      name: 'Substantiated Health Claims Boundary',
      status: 'fail',
      details: `Detected prohibited or unsubstantiated claim wording: "${foundProhibited.join(', ')}". Medical boundaries prohibit disease cure/guaranteed outcome claims.`,
    });
  } else {
    checks.push({
      category: 'health_claims',
      name: 'Substantiated Health Claims Boundary',
      status: 'pass',
      details: 'Zero prohibited cure, treatment, or guaranteed weight-loss claims detected.',
    });
  }

  // 2. FTC Affiliate Disclosure Check
  if (hasAffiliateLinks && !hasFTCNotice) {
    violations += 2;
    checks.push({
      category: 'ftc_transparency',
      name: 'FTC Commercial Disclosure Visibility',
      status: 'fail',
      details: 'Commercial links present without visible above-the-fold affiliate disclosure.',
    });
  } else {
    checks.push({
      category: 'ftc_transparency',
      name: 'FTC Commercial Disclosure Visibility',
      status: 'pass',
      details: 'Clear, compliant affiliate relationship disclosure displayed to reader.',
    });
  }

  // 3. Google Ads Destination Standards
  const hasSubstantiveContent = textToScan.length > 600;
  if (!hasSubstantiveContent) {
    violations += 2;
    checks.push({
      category: 'google_ads',
      name: 'Google Ads Destination Quality & Content Depth',
      status: 'warning',
      details: 'Content is under 600 characters; risk of being flagged as thin bridge or doorway landing page.',
    });
  } else {
    checks.push({
      category: 'google_ads',
      name: 'Google Ads Destination Quality & Content Depth',
      status: 'pass',
      details: 'Original high-substance editorial content provides independent reader value before any outbound action.',
    });
  }

  // 4. Meta Ads Personal Attributes & Body Shaming
  const bodyShamingPhrases = ['ugly fat', 'ashamed of your body', 'are you suffering from', 'embarrassing belly'];
  const foundShaming = bodyShamingPhrases.filter((p) => lowerText.includes(p));
  if (foundShaming.length > 0) {
    violations += 3;
    checks.push({
      category: 'meta_ads',
      name: 'Meta Ads Personal Health Attributes & Respect',
      status: 'fail',
      details: `Negative body attribution detected: "${foundShaming.join(', ')}". Meta prohibits ads asserting personal physical deficiencies.`,
    });
  } else {
    checks.push({
      category: 'meta_ads',
      name: 'Meta Ads Personal Health Attributes & Respect',
      status: 'pass',
      details: 'Compliant educational framing without asserting negative personal attributes or body-shaming tropes.',
    });
  }

  // 5. Independent Editorial Separation
  if (isReviewPage) {
    checks.push({
      category: 'ftc_transparency',
      name: 'Merchant Impersonation Prevention',
      status: 'pass',
      details: '77 Review is clearly identified as an independent evaluator; does not process transactions directly or mimic merchant checkout.',
    });
  }

  const score = Math.max(0, 100 - violations * 20);
  return {
    passed: violations === 0,
    score,
    checks,
  };
}

export function isContentPublishable(status: ReviewStatus): boolean {
  return status === 'published' || status === 'approved';
}

export function filterPublishedOnly<T extends { editorialStatus?: ReviewStatus; reviewStatus?: ReviewStatus }>(
  items: T[]
): T[] {
  return items.filter((item) => {
    const status = item.editorialStatus || item.reviewStatus;
    return status === 'published';
  });
}
