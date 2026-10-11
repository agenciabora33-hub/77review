import React, { useState } from 'react';
import { articles } from '../data/articles';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { MedicalReviewPanel } from '../components/MedicalReviewPanel';
import { SourceCitationList } from '../components/SourceCitationList';
import { AffiliateNoticeBar } from '../components/AffiliateNoticeBar';
import { ProductCard } from '../components/ProductCard';
import { ProductRecord } from '../types';
import { ArrowLeft, Clock, Calendar, CheckCircle } from 'lucide-react';

interface ArticlePageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenOutbound: (product: ProductRecord) => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({
  slug,
  onNavigate,
  onOpenOutbound,
}) => {
  const article = articles.find((a) => a.slug === slug);
  const [imageError, setImageError] = useState(false);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="text-2xl font-serif font-bold text-stone-900">Article Not Found</h1>
        <p className="text-stone-600 text-xs">The requested scientific paper may have been updated or moved.</p>
        <button
          onClick={() => onNavigate('/')}
          className="text-xs font-semibold text-stone-900 underline"
        >
          Return to Homepage
        </button>
      </div>
    );
  }

  const category = categories.find((c) => c.slug === article.category);
  const relatedProducts = products.filter((p) => article.relatedProductIds?.includes(p.id));
  const relatedArticles = articles.filter(
    (a) => a.slug !== article.slug && (article.relatedArticleSlugs?.includes(a.slug) || a.category === article.category)
  );

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pb-20 pt-4">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-medium">
        <button onClick={() => onNavigate('/')} className="hover:text-stone-900 cursor-pointer">
          Home
        </button>
        <span aria-hidden="true">/</span>
        <button
          onClick={() => onNavigate(`/category/${article.category}`)}
          className="hover:text-stone-900 cursor-pointer"
        >
          {category?.name || article.category}
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-stone-900 font-semibold truncate max-w-xs">{article.title}</span>
      </nav>

      {/* FTC Disclosure */}
      {article.affiliateDisclosureRequired && (
        <AffiliateNoticeBar onLearnMore={() => onNavigate('/affiliate-disclosure')} />
      )}

      {/* Header & Meta */}
      <header className="space-y-5 border-b border-stone-200 pb-8">
        {/* Zero-Pill Unboxed Metadata with Typographic Separators */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-medium">
          <span className="text-stone-900 font-bold uppercase tracking-wider">{category?.name}</span>
          <span aria-hidden="true">·</span>
          <span>Published {article.publishedDate}</span>
          <span aria-hidden="true">·</span>
          <span className="text-stone-700 font-medium">Updated {article.updatedDate}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">{article.readTimeMinutes} min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-[1.15] text-balance">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
          {article.summary}
        </p>

        {/* Answer-First Executive Summary Box */}
        <div className="p-6 bg-stone-100/80 rounded-xl border border-stone-200/90 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-stone-600 font-semibold block">
            Core Scientific Finding (Answer-First Synthesis)
          </span>
          <p className="text-stone-900 text-sm font-medium leading-relaxed">
            {article.primaryQuestionAnswer}
          </p>
        </div>
      </header>

      {/* Editorial Featured Visual */}
      <div className="aspect-16/9 w-full rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
        {!imageError ? (
          <img
            src={article.imageUrl}
            alt={article.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs">
            77 Review Research Archive
          </div>
        )}
      </div>

      {/* Medical Governance & Review Bar */}
      <MedicalReviewPanel
        author={article.author}
        reviewer={article.reviewer}
        medicalRiskLevel={article.medicalRiskLevel}
        lastUpdatedDate={article.updatedDate}
      />

      {/* Main Body Prose with 65-75ch Measure */}
      <div className="space-y-10 max-w-prose mx-auto text-stone-800 text-[15px] sm:text-[16px] leading-[1.75]">
        {article.contentSections.map((sec, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 pt-2 border-t border-stone-100">
              {sec.heading}
            </h2>

            {sec.bodyMarkdown.map((p, pIdx) => (
              <p
                key={pIdx}
                className={
                  idx === 0 && pIdx === 0
                    ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900'
                    : ''
                }
              >
                {p}
              </p>
            ))}

            {sec.takeaway && (
              <div className="my-6 p-4 border border-stone-200 bg-stone-50 rounded-lg text-xs sm:text-sm text-stone-700 space-y-1">
                <strong className="text-stone-900 font-semibold block text-[11px] uppercase tracking-wider">
                  Clinical & Practical Takeaway:
                </strong>
                <p>{sec.takeaway}</p>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Evidentiary Sources & Citations List */}
      <SourceCitationList sources={article.sources} />

      {/* Related Evaluated Products */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-stone-200">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
              Commercial Lab Verification
            </span>
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              Audited Products Referencing This Research
            </h3>
            <p className="text-xs text-stone-500">
              The products below were evaluated against the exact biochemical criteria outlined above.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onViewReview={(prodSlug) => onNavigate(`/review/${prodSlug}`)}
                onOpenOutbound={onOpenOutbound}
              />
            ))}
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="space-y-4 pt-6 border-t border-stone-200">
          <h3 className="text-xl font-serif font-bold text-stone-900">
            Further Editorial Investigations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.slice(0, 2).map((rel) => (
              <button
                key={rel.id}
                onClick={() => onNavigate(`/article/${rel.slug}`)}
                className="text-left p-4 border border-stone-200 rounded-xl hover:border-stone-400 bg-white transition-colors cursor-pointer space-y-1.5"
              >
                <span className="text-[11px] text-stone-500 uppercase tracking-wider">
                  {rel.category}
                </span>
                <h4 className="text-sm font-serif font-semibold text-stone-900 line-clamp-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-stone-600 line-clamp-2">
                  {rel.summary}
                </p>
              </button>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
