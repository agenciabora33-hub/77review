import React from 'react';
import { buyingGuides } from '../data/guides';
import { products } from '../data/products';
import { SourceCitationList } from '../components/SourceCitationList';
import { AffiliateNoticeBar } from '../components/AffiliateNoticeBar';
import { ProductCard } from '../components/ProductCard';
import { ProductRecord } from '../types';
import { BookOpen, AlertCircle, CheckCircle, FileText } from 'lucide-react';

interface BuyingGuidePageProps {
  slug?: string;
  onNavigate: (path: string) => void;
  onOpenOutbound: (product: ProductRecord) => void;
}

export const BuyingGuidePage: React.FC<BuyingGuidePageProps> = ({
  slug,
  onNavigate,
  onOpenOutbound,
}) => {
  const guide = slug
    ? buyingGuides.find((g) => g.slug === slug) || buyingGuides[0]
    : buyingGuides[0];

  const recommendedProducts = products.filter((p) =>
    guide.recommendedProductIds.includes(p.id)
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-24 pt-4">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-medium">
        <button onClick={() => onNavigate('/')} className="hover:text-stone-900 cursor-pointer">
          Home
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-stone-900 font-semibold truncate max-w-xs">{guide.title}</span>
      </nav>

      {/* FTC Notice */}
      <AffiliateNoticeBar onLearnMore={() => onNavigate('/affiliate-disclosure')} />

      {/* Header */}
      <header className="space-y-4 border-b border-stone-200 pb-8">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500">
          <BookOpen className="w-4 h-4 text-stone-700" />
          <span>Independent Buying Guide</span>
          <span aria-hidden="true">·</span>
          <span>Updated {guide.updatedDate}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
          {guide.title}
        </h1>

        <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
          {guide.summary}
        </p>

        <div className="text-xs text-stone-500">
          Authored by <strong>{guide.author.name}</strong> ({guide.author.role})
        </div>
      </header>

      {/* Selection Framework (Step-by-Step) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          Step-by-Step Selection Methodology
        </h2>

        <div className="space-y-4">
          {guide.selectionCriteria.map((crit, idx) => (
            <div key={idx} className="p-6 border border-stone-200 bg-white rounded-xl space-y-2">
              <h3 className="font-serif font-bold text-stone-900 text-lg">{crit.step}</h3>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">{crit.guideline}</p>
              <div className="pt-2 text-xs text-stone-500 italic border-t border-stone-100">
                <strong>Scientific Basis:</strong> {crit.evidenceBacking}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Red Flags to Avoid */}
      <section className="p-6 sm:p-8 border border-red-200 bg-red-50/50 rounded-2xl space-y-4 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-red-900 font-serif font-bold text-lg">
          <AlertCircle className="w-5 h-5 text-red-700" />
          <h3>Marketing Red Flags: Reject Immediately</h3>
        </div>
        <p className="text-red-950 text-xs leading-relaxed">
          If a product displays any of the following commercial gimmicks, our research protocol recommends avoiding the purchase:
        </p>
        <ul className="space-y-2 text-red-900">
          {guide.redFlagsToAvoid.map((flag, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="font-bold text-red-700 shrink-0">✕</span>
              <span>{flag}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Label Reading Guide */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          Supplement Label Audit Checklist
        </h2>
        <div className="border border-stone-200 rounded-xl overflow-hidden bg-white text-xs divide-y divide-stone-100">
          {guide.labelReadingGuide.map((item, idx) => (
            <div key={idx} className="p-4 space-y-1.5">
              <span className="font-bold text-stone-900 text-sm">{item.element}</span>
              <p className="text-stone-700">
                <strong className="text-emerald-800">What to Look For:</strong> {item.whatToLookFor}
              </p>
              <p className="text-stone-600">
                <strong className="text-amber-800">Warning Signal:</strong> {item.warningSignal}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Evaluated Products */}
      {recommendedProducts.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-stone-200">
          <div className="space-y-1">
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              Verified Products Matching This Buying Standard
            </h2>
            <p className="text-xs text-stone-500">
              The products below satisfied all 4 steps of our purity and cost framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recommendedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onViewReview={(prodSlug) => onNavigate(`/review/${prodSlug}`)}
                onOpenOutbound={onOpenOutbound}
              />
            ))}
          </div>
        </section>
      )}

      {/* Evidence Sources */}
      <SourceCitationList sources={guide.sources} />
    </div>
  );
};
