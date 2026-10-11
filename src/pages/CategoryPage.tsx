import React from 'react';
import { CategorySlug, ProductRecord } from '../types';
import { categories } from '../data/categories';
import { articles } from '../data/articles';
import { products } from '../data/products';
import { comparisons } from '../data/comparisons';
import { ArticleCard } from '../components/ArticleCard';
import { ProductCard } from '../components/ProductCard';
import { AffiliateNoticeBar } from '../components/AffiliateNoticeBar';
import { Check, X, Shield, ArrowLeft } from 'lucide-react';

interface CategoryPageProps {
  slug: CategorySlug;
  onNavigate: (path: string) => void;
  onOpenOutbound: (product: ProductRecord) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  slug,
  onNavigate,
  onOpenOutbound,
}) => {
  const category = categories.find((c) => c.slug === slug);
  const categoryArticles = articles.filter((a) => a.category === slug);
  const categoryProducts = products.filter((p) => p.category === slug);
  const categoryComparisons = comparisons.filter((c) => c.category === slug);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="text-2xl font-serif font-bold text-stone-900">Category Not Found</h1>
        <button
          onClick={() => onNavigate('/')}
          className="text-xs font-semibold text-stone-900 underline"
        >
          Return to Homepage
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16 pt-4">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-medium">
        <button onClick={() => onNavigate('/')} className="hover:text-stone-900 cursor-pointer">
          Home
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-stone-900 font-semibold">{category.name}</span>
      </nav>

      {/* FTC Notice */}
      <AffiliateNoticeBar onLearnMore={() => onNavigate('/affiliate-disclosure')} />

      {/* Category Marquee Header */}
      <header className="border-b border-stone-200 pb-8 space-y-4">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Editorial Department
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900">
            {category.name}
          </h1>
          <p className="text-base text-stone-600 max-w-3xl leading-relaxed">
            {category.fullDescription}
          </p>
        </div>

        {/* Editorial Scope & Boundaries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs">
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 space-y-2">
            <h4 className="font-semibold text-stone-900 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              What We Cover:
            </h4>
            <ul className="space-y-1 text-stone-600 list-disc list-inside leading-relaxed">
              {category.scopeHighlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 space-y-2">
            <h4 className="font-semibold text-stone-900 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
              <X className="w-3.5 h-3.5 text-stone-500" />
              Editorial Boundaries:
            </h4>
            <ul className="space-y-1 text-stone-600 list-disc list-inside leading-relaxed">
              {category.editorialBoundaries.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Category Editorial Articles */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            Research Articles & Literature Reviews
          </h2>
        </div>

        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onSelect={(artSlug) => onNavigate(`/article/${artSlug}`)}
              />
            ))}
          </div>
        ) : (
          <p className="text-xs text-stone-500 py-6">
            New peer-reviewed investigations in this department are currently undergoing clinical audit.
          </p>
        )}
      </section>

      {/* Category Products */}
      {categoryProducts.length > 0 && (
        <section className="space-y-6 pt-6">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              Evaluated Products & Lab Analysis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewReview={(prodSlug) => onNavigate(`/review/${prodSlug}`)}
                onOpenOutbound={onOpenOutbound}
              />
            ))}
          </div>
        </section>
      )}

      {/* Category Comparisons */}
      {categoryComparisons.length > 0 && (
        <section className="space-y-6 pt-6">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              Head-to-Head Comparisons in {category.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoryComparisons.map((comp) => (
              <div
                key={comp.id}
                onClick={() => onNavigate(`/compare/${comp.slug}`)}
                className="border border-stone-200 bg-white p-6 rounded-xl hover:border-stone-400 transition-colors cursor-pointer space-y-3"
              >
                <h3 className="text-lg font-serif font-semibold text-stone-900">
                  {comp.title}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {comp.summary}
                </p>
                <span className="text-xs font-semibold text-stone-900 inline-flex items-center gap-1 pt-2">
                  View Comparative Matrix →
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
