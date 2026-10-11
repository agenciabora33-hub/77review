export type CategorySlug =
  | 'health-wellness'
  | 'fitness-sports'
  | 'supplements-nutrition'
  | 'product-reviews';

export type ReviewStatus =
  | 'draft'
  | 'research_required'
  | 'editorial_review'
  | 'specialist_review_required'
  | 'approved'
  | 'published'
  | 'needs_correction'
  | 'archived';

export type MedicalRiskLevel =
  | 'general_editorial'
  | 'health_sensitive'
  | 'high_risk_specialist'
  | 'rejected';

export type EvidenceHierarchyLevel =
  | 'systematic_review'
  | 'peer_reviewed_rct'
  | 'clinical_guideline'
  | 'public_health_agency'
  | 'academic_institution'
  | 'observational_study'
  | 'manufacturer_spec';

export type EvidenceRating =
  | 'established'
  | 'preliminary'
  | 'limited'
  | 'insufficient';

export interface AuthorProfile {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  avatarUrl?: string;
}

export interface ReviewerProfile {
  id: string;
  name: string;
  credentials: string;
  specialty: string;
  licenseOrInstitution: string;
  bio: string;
}

export interface SourceCitation {
  id: string;
  claim: string;
  sourceTitle: string;
  sourceUrl: string;
  sourceType: EvidenceHierarchyLevel;
  publicationDate: string;
  relevantFindings: string;
  limitations: string;
  directlySupports: boolean;
  lastCheckedDate: string;
}

export interface CategoryInfo {
  slug: CategorySlug;
  name: string;
  shortDescription: string;
  fullDescription: string;
  scopeHighlights: string[];
  editorialBoundaries: string[];
}

export interface ProductIngredient {
  name: string;
  amountPerServing: string;
  dailyValuePercentage?: string;
  purpose: string;
  evidenceRating: EvidenceRating;
  evidenceNotes: string;
}

export interface ProductRecord {
  id: string;
  name: string;
  slug: string;
  category: CategorySlug;
  classification: 'physical' | 'digital';
  manufacturer: string;
  shortDescription: string;
  fullDescription: string;
  intendedUse: string;
  targetAudience: string;
  imageUrl: string;
  verifiedPrice: {
    amount: number;
    currency: string;
    servingCost?: number;
    servingsCount?: number;
    billingType: 'one-time' | 'subscription' | 'optional-subscription';
    verifiedDate: string;
  };
  ingredients?: ProductIngredient[];
  specifications: Record<string, string>;
  certifications: string[]; // e.g. "NSF Certified for Sport", "Informed Sport", "Third-Party Heavy Metal Screened"
  potentialBenefits: string[];
  limitationsAndUncertainties: string[];
  safetyWarnings: string[];
  merchantName: string;
  affiliateNetwork: 'ClickBank' | 'BuyGoods' | 'ShareASale' | 'DirectMerchant' | 'Impact';
  approvedAffiliateUrl: string;
  internalTrackingId: string;
  editorialStatus: ReviewStatus;
  lastVerificationDate: string;
  reviewAuthor: AuthorProfile;
  reviewMethodology: 'hands_on_testing' | 'systematic_literature_review';
  ratingBreakdown: {
    ingredientPurityOrBuild: number; // 0-10
    evidenceSubstantiation: number; // 0-10
    labelTransparency: number; // 0-10
    costPerDoseValue: number; // 0-10
    overallEditorialScore: number; // 0-10
  };
  sources: SourceCitation[];
  relatedArticles: string[];
  adEligibilityNotes: {
    googleAdsEligible: boolean;
    metaAdsEligible: boolean;
    notes: string;
  };
}

export interface ArticleRecord {
  id: string;
  title: string;
  slug: string;
  category: CategorySlug;
  summary: string;
  primaryQuestionAnswer: string;
  readTimeMinutes: number;
  publishedDate: string;
  updatedDate: string;
  author: AuthorProfile;
  reviewer?: ReviewerProfile;
  reviewStatus: ReviewStatus;
  medicalRiskLevel: MedicalRiskLevel;
  imageUrl: string;
  contentSections: {
    heading: string;
    bodyMarkdown: string[];
    takeaway?: string;
  }[];
  sources: SourceCitation[];
  relatedProductIds: string[];
  relatedArticleSlugs: string[];
  affiliateDisclosureRequired: boolean;
}

export interface ComparisonRecord {
  id: string;
  title: string;
  slug: string;
  category: CategorySlug;
  summary: string;
  publishedDate: string;
  updatedDate: string;
  author: AuthorProfile;
  reviewer?: ReviewerProfile;
  productsComparedIds: string[];
  comparisonCriteria: {
    name: string;
    description: string;
    weightPercentage: number;
  }[];
  verdictSummary: string;
  rankingRationale: string; // Explains transparent editorial weighting
  sources: SourceCitation[];
}

export interface BuyingGuideRecord {
  id: string;
  title: string;
  slug: string;
  category: CategorySlug;
  summary: string;
  publishedDate: string;
  updatedDate: string;
  author: AuthorProfile;
  selectionCriteria: {
    step: string;
    guideline: string;
    evidenceBacking: string;
  }[];
  redFlagsToAvoid: string[];
  labelReadingGuide: {
    element: string;
    whatToLookFor: string;
    warningSignal: string;
  }[];
  recommendedProductIds: string[];
  sources: SourceCitation[];
}
