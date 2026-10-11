import React, { useState } from 'react';
import { products } from '../data/products';
import { articles } from '../data/articles';
import { ProductRecord } from '../types';
import { SourceCitationList } from '../components/SourceCitationList';
import { AffiliateNoticeBar } from '../components/AffiliateNoticeBar';
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  DollarSign,
  HelpCircle,
  FlaskConical,
} from 'lucide-react';

interface ProductReviewPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenOutbound: (product: ProductRecord) => void;
}

export const ProductReviewPage: React.FC<ProductReviewPageProps> = ({
  slug,
  onNavigate,
  onOpenOutbound,
}) => {
  const product = products.find((p) => p.slug === slug);
  const [imageError, setImageError] = useState(false);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="text-2xl font-serif font-bold text-stone-900">Product Evaluation Not Found</h1>
        <button
          onClick={() => onNavigate('/')}
          className="text-xs font-semibold text-stone-900 underline"
        >
          Return to Homepage
        </button>
      </div>
    );
  }

  const relatedArticles = articles.filter((a) => product.relatedArticles?.includes(a.id) || product.relatedArticles?.includes(a.slug));
  const alternativeProducts = products.filter((p) => p.id !== product.id);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-24 pt-4">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-medium">
        <button onClick={() => onNavigate('/')} className="hover:text-stone-900 cursor-pointer">
          Home
        </button>
        <span aria-hidden="true">/</span>
        <button
          onClick={() => onNavigate('/category/product-reviews')}
          className="hover:text-stone-900 cursor-pointer"
        >
          Product Reviews
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-stone-900 font-semibold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Mandatory FTC Disclosure */}
      <AffiliateNoticeBar onLearnMore={() => onNavigate('/affiliate-disclosure')} />

      {/* 1. Product Identification & Hero Header */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-stone-200 pb-10">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-medium">
            <span className="text-stone-900 font-bold uppercase tracking-wider">{product.manufacturer}</span>
            <span aria-hidden="true">·</span>
            <span>Last Verified: {product.lastVerificationDate}</span>
            <span aria-hidden="true">·</span>
            <span className="capitalize text-stone-700">
              {product.reviewMethodology.replace(/_/g, ' ')}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
            {product.name}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
            {product.fullDescription}
          </p>

          {/* Editorial Score Strip with Tabular Figures */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/90 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 block">
                Overall Editorial Rating
              </span>
              <div className="text-3xl font-serif font-bold text-stone-900 tabular-nums">
                {product.ratingBreakdown.overallEditorialScore.toFixed(1)}{' '}
                <span className="text-xs font-sans text-stone-500">/ 10</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="text-stone-500 block text-[10px]">Purity / Build</span>
                <strong className="text-stone-900">{product.ratingBreakdown.ingredientPurityOrBuild.toFixed(1)}</strong>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px]">Evidence</span>
                <strong className="text-stone-900">{product.ratingBreakdown.evidenceSubstantiation.toFixed(1)}</strong>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px]">Transparency</span>
                <strong className="text-stone-900">{product.ratingBreakdown.labelTransparency.toFixed(1)}</strong>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px]">Value</span>
                <strong className="text-stone-900">{product.ratingBreakdown.costPerDoseValue.toFixed(1)}</strong>
              </div>
            </div>
          </div>

          {/* Pricing & Outbound Merchant Action */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div>
              <span className="text-xs text-stone-500 block">Audited Retail Price:</span>
              <div className="text-2xl font-serif font-bold text-stone-900 tabular-nums">
                ${product.verifiedPrice.amount.toFixed(2)}{' '}
                <span className="text-xs font-sans font-normal text-stone-500">
                  {product.verifiedPrice.currency}
                </span>
                {product.verifiedPrice.servingCost && (
                  <span className="text-xs font-sans font-normal text-stone-500 ml-2">
                    (${product.verifiedPrice.servingCost.toFixed(2)}/serving)
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={() => onOpenOutbound(product)}
              className="px-6 py-3 text-xs font-bold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Check Official Merchant Availability</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[11px] text-stone-500 italic">
            Merchant: {product.merchantName} ({product.affiliateNetwork} network) · No price markup.
          </p>
        </div>

        {/* Product Visual */}
        <div className="lg:col-span-5 aspect-4/3 rounded-2xl overflow-hidden bg-stone-50 border border-stone-200/90 relative">
          {!imageError ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs">
              Product Specimen
            </div>
          )}
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded text-xs text-stone-700 font-mono">
            {product.classification.toUpperCase()} SPECIMEN
          </div>
        </div>
      </header>

      {/* 2 & 3. Editorial Summary & Intended Audience */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
        <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
            2. Editorial Summary
          </h3>
          <p className="text-stone-700 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
            3. Target Audience & Intended Use
          </h3>
          <p className="text-stone-700 leading-relaxed">
            <strong>Target:</strong> {product.targetAudience}
          </p>
          <p className="text-stone-600 leading-relaxed pt-1">
            <strong>Intended Use:</strong> {product.intendedUse}
          </p>
        </div>
      </section>

      {/* 4. Verified Specifications Table */}
      <section className="space-y-4">
        <h3 className="text-xl font-serif font-bold text-stone-900">
          4. Verified Technical Specifications
        </h3>
        <div className="border border-stone-200 rounded-xl overflow-hidden bg-white text-xs divide-y divide-stone-100">
          {Object.entries(product.specifications).map(([key, val], idx) => (
            <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-semibold text-stone-900 w-1/3">{key}</span>
              <span className="text-stone-700 sm:w-2/3">{val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Ingredient / Component Analysis */}
      {product.ingredients && product.ingredients.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FlaskConical className="w-5 h-5 text-stone-800" />
            <h3 className="text-xl font-serif font-bold text-stone-900">
              5. Ingredient Breakdown & Evidence Ratings
            </h3>
          </div>
          <div className="border border-stone-200 rounded-xl overflow-hidden bg-white text-xs divide-y divide-stone-100">
            {product.ingredients.map((ing, i) => (
              <div key={i} className="p-4 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-bold text-stone-900 text-sm">{ing.name}</span>
                  <div className="flex items-center gap-2 font-mono text-stone-600">
                    <span className="font-semibold">{ing.amountPerServing}</span>
                    {ing.dailyValuePercentage && <span>({ing.dailyValuePercentage})</span>}
                    <span className="text-[11px] px-2 py-0.5 bg-stone-100 text-stone-800 rounded uppercase font-semibold">
                      {ing.evidenceRating} evidence
                    </span>
                  </div>
                </div>
                <p className="text-stone-600">
                  <strong>Functional Purpose:</strong> {ing.purpose}
                </p>
                <p className="text-stone-600 italic">
                  <strong>Scientific Notes:</strong> {ing.evidenceNotes}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7 & 8 & 9. Benefits, Limitations & Safety Warnings */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
        {/* Benefits */}
        <div className="p-5 border border-stone-200 bg-white rounded-xl space-y-3">
          <h4 className="font-serif font-bold text-stone-900 text-sm flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Potential Benefits
          </h4>
          <ul className="space-y-2 text-stone-700 leading-relaxed">
            {product.potentialBenefits.map((b, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-emerald-700 font-bold shrink-0">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Limitations */}
        <div className="p-5 border border-stone-200 bg-white rounded-xl space-y-3">
          <h4 className="font-serif font-bold text-stone-900 text-sm flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-stone-500" />
            Limitations & Uncertainties
          </h4>
          <ul className="space-y-2 text-stone-700 leading-relaxed">
            {product.limitationsAndUncertainties.map((lim, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-stone-400 font-bold shrink-0">•</span>
                <span>{lim}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Safety Warnings */}
        <div className="p-5 border border-stone-200 bg-white rounded-xl space-y-3">
          <h4 className="font-serif font-bold text-stone-900 text-sm flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            Safety Considerations
          </h4>
          <ul className="space-y-2 text-stone-700 leading-relaxed">
            {product.safetyWarnings.map((warn, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-amber-700 font-bold shrink-0">•</span>
                <span>{warn}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11. Alternatives */}
      <section className="space-y-4 pt-6 border-t border-stone-200">
        <h3 className="text-xl font-serif font-bold text-stone-900">
          11. Alternative Evaluated Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {alternativeProducts.slice(0, 2).map((alt) => (
            <div
              key={alt.id}
              onClick={() => onNavigate(`/review/${alt.slug}`)}
              className="p-5 border border-stone-200 bg-white rounded-xl hover:border-stone-400 transition-colors cursor-pointer space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-stone-900 text-sm font-serif">{alt.name}</span>
                <span className="font-mono text-stone-700 font-semibold tabular-nums">
                  ${alt.verifiedPrice.amount.toFixed(2)}
                </span>
              </div>
              <p className="text-stone-600 line-clamp-2 leading-relaxed">
                {alt.shortDescription}
              </p>
              <span className="text-stone-900 font-medium inline-block pt-1">
                View Comparative Review →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 12. Review Methodology Notice */}
      <section className="p-6 bg-stone-100 rounded-xl border border-stone-200 space-y-2 text-xs">
        <h4 className="font-mono uppercase tracking-wider text-stone-600 font-semibold">
          12. Editorial Testing Methodology Notice
        </h4>
        <p className="text-stone-700 leading-relaxed">
          {product.reviewMethodology === 'hands_on_testing'
            ? 'This evaluation includes firsthand testing conducted under structured conditions by Julian Reed, combined with optical sensor telemetry analysis and manufacturer Certificate of Analysis verification.'
            : 'This evaluation constitutes a systematic literature review and analytical specification audit conducted by Elena Rodriguez and Marcus Vance. We audited Alzchem/Vital Labs analytical quality certificates and peer-reviewed human trials. 77 Review never fabricates laboratory or personal physical experiences.'}
        </p>
      </section>

      {/* 13. Sources & Citations */}
      <SourceCitationList sources={product.sources} />

      {/* 14. Author Information */}
      <div className="p-6 bg-white rounded-xl border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
        <div className="space-y-1">
          <span className="text-stone-500">Lead Reviewer:</span>
          <p className="font-bold text-stone-900 text-sm">{product.reviewAuthor.name}</p>
          <p className="text-stone-600">{product.reviewAuthor.credentials}</p>
        </div>
        <div className="text-right sm:text-right">
          <span className="text-stone-500 block">Editorial Status:</span>
          <span className="font-mono text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded uppercase">
            {product.editorialStatus}
          </span>
        </div>
      </div>

      {/* 17. Final Merchant Call to Action */}
      <div className="p-8 bg-stone-900 text-white rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="text-xl font-serif font-bold text-white">
            Ready to Verify Availability?
          </h4>
          <p className="text-stone-400 text-xs">
            Proceed to the official {product.merchantName} store with all authorized buyer warranties.
          </p>
        </div>
        <button
          onClick={() => onOpenOutbound(product)}
          className="px-6 py-3 text-xs font-bold text-stone-900 bg-white hover:bg-stone-100 rounded-lg transition-colors cursor-pointer shrink-0 inline-flex items-center gap-2"
        >
          <span>Visit Official Merchant</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
