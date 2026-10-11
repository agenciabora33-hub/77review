import React from 'react';
import { comparisons } from '../data/comparisons';
import { products } from '../data/products';
import { SourceCitationList } from '../components/SourceCitationList';
import { AffiliateNoticeBar } from '../components/AffiliateNoticeBar';
import { ProductRecord } from '../types';
import { Scale, CheckCircle2, ArrowRight } from 'lucide-react';

interface ComparisonPageProps {
  slug?: string;
  onNavigate: (path: string) => void;
  onOpenOutbound: (product: ProductRecord) => void;
}

export const ComparisonPage: React.FC<ComparisonPageProps> = ({
  slug,
  onNavigate,
  onOpenOutbound,
}) => {
  const activeComparison = slug
    ? comparisons.find((c) => c.slug === slug) || comparisons[0]
    : comparisons[0];

  const comparedProducts = products.filter((p) =>
    activeComparison.productsComparedIds.includes(p.id)
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-24 pt-4">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-medium">
        <button onClick={() => onNavigate('/')} className="hover:text-stone-900 cursor-pointer">
          Home
        </button>
        <span aria-hidden="true">/</span>
        <span className="hover:text-stone-900 cursor-pointer" onClick={() => onNavigate('/compare')}>
          Comparisons
        </span>
        <span aria-hidden="true">/</span>
        <span className="text-stone-900 font-semibold truncate max-w-xs">{activeComparison.title}</span>
      </nav>

      {/* FTC Notice */}
      <AffiliateNoticeBar onLearnMore={() => onNavigate('/affiliate-disclosure')} />

      {/* Header */}
      <header className="space-y-4 border-b border-stone-200 pb-8">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500">
          <Scale className="w-4 h-4 text-stone-700" />
          <span>Head-to-Head Comparative Study</span>
          <span aria-hidden="true">·</span>
          <span>Updated {activeComparison.updatedDate}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
          {activeComparison.title}
        </h1>

        <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
          {activeComparison.summary}
        </p>

        {/* Comparison Switcher Tabs if multiple comparisons exist */}
        <div className="flex flex-wrap gap-2 pt-4">
          {comparisons.map((c) => (
            <button
              key={c.id}
              onClick={() => onNavigate(`/compare/${c.slug}`)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg cursor-pointer transition-colors ${
                c.slug === activeComparison.slug
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {c.title.split(':')[0]}
            </button>
          ))}
        </div>
      </header>

      {/* Multi-Criteria Weighting Strip */}
      <section className="space-y-4">
        <h3 className="text-lg font-serif font-bold text-stone-900">
          Evaluation Criteria & Weighting Distribution
        </h3>
        <p className="text-xs text-stone-600 leading-relaxed">
          Our scoring follows a pre-defined mathematical matrix where peer-reviewed evidence and purity outweigh all secondary variables.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {activeComparison.comparisonCriteria.map((crit, idx) => (
            <div key={idx} className="p-4 border border-stone-200 bg-white rounded-xl space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-stone-900">{crit.name}</span>
                <span className="font-mono font-bold text-stone-700 tabular-nums">
                  {crit.weightPercentage}%
                </span>
              </div>
              <p className="text-stone-500 text-[11px] leading-relaxed">{crit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Verdict Box */}
      <section className="p-6 sm:p-8 bg-stone-900 text-white rounded-2xl space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
          Official Editorial Verdict
        </span>
        <h3 className="text-2xl font-serif font-bold text-white">
          Clear Clinical & Economic Recommendation
        </h3>
        <p className="text-stone-300 text-sm leading-relaxed">
          {activeComparison.verdictSummary}
        </p>
        <div className="pt-4 border-t border-stone-800 text-xs text-stone-400">
          <strong>Transparent Ranking Rule:</strong> {activeComparison.rankingRationale}
        </div>
      </section>

      {/* Product Details Section */}
      <section className="space-y-6">
        <h3 className="text-xl font-serif font-bold text-stone-900">
          Evaluated Products in this Analysis
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparedProducts.map((p) => (
            <div key={p.id} className="p-6 border border-stone-200 bg-white rounded-xl space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-lg font-serif font-bold text-stone-900">{p.name}</h4>
                  <p className="text-xs text-stone-500">{p.manufacturer}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-500">Verified Price</span>
                  <div className="text-lg font-mono font-bold text-stone-900 tabular-nums">
                    ${p.verifiedPrice.amount.toFixed(2)}
                  </div>
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                {p.shortDescription}
              </p>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(`/review/${p.slug}`)}
                  className="text-xs font-semibold text-stone-900 hover:underline cursor-pointer"
                >
                  Read Comprehensive Review →
                </button>
                <button
                  onClick={() => onOpenOutbound(p)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 cursor-pointer"
                >
                  Merchant Availability
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sources */}
      <SourceCitationList sources={activeComparison.sources} />
    </div>
  );
};
