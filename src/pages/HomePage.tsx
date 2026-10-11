import React from 'react';
import { articles } from '../data/articles';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { comparisons } from '../data/comparisons';
import { ArticleCard } from '../components/ArticleCard';
import { ProductCard } from '../components/ProductCard';
import { AffiliateNoticeBar } from '../components/AffiliateNoticeBar';
import { ProductRecord } from '../types';
import heroImg from '../assets/images/hero_editorial_research_1791671386027.jpg';
import { ShieldCheck, FileCheck, Award, ArrowRight, ExternalLink } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenOutbound: (product: ProductRecord) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenOutbound,
}) => {
  const leadArticle = articles[0];
  const secondaryArticles = articles.slice(1);
  const featuredProducts = products;

  return (
    <div className="space-y-16 pb-12">
      {/* FTC Notice Banner near the top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <AffiliateNoticeBar onLearnMore={() => onNavigate('/affiliate-disclosure')} />
      </div>

      {/* Editorial Hero Marquee */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Publication Premise */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2 space-y-6">
            <div className="space-y-4">
              {/* Unboxed natural kicker */}
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500">
                <span>Independent Health & Fitness Editorial</span>
                <span aria-hidden="true">·</span>
                <span>Peer-Reviewed Evidence</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.1] text-balance">
                Evidence-Aware Health, Fitness & Supplement Analysis.
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
                77 Review investigates nutritional formulations, fitness equipment, and health devices through peer-reviewed literature and label verification—free from commercial merchant hype.
              </p>
            </div>

            {/* Operational Utility Strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200 text-xs">
              <div>
                <span className="text-stone-500 block text-[11px]">Evidence Standard</span>
                <strong className="text-stone-900 font-serif text-sm">7-Tier Hierarchy</strong>
                <p className="text-stone-500 text-[11px] mt-0.5">Systematic reviews first</p>
              </div>
              <div>
                <span className="text-stone-500 block text-[11px]">Lab Verifications</span>
                <strong className="text-stone-900 font-serif text-sm">ISO 17025 Audited</strong>
                <p className="text-stone-500 text-[11px] mt-0.5">Heavy metal screening</p>
              </div>
              <div>
                <span className="text-stone-500 block text-[11px]">Commercial Ethics</span>
                <strong className="text-stone-900 font-serif text-sm">Zero Pay-to-Rank</strong>
                <p className="text-stone-500 text-[11px] mt-0.5">Commissions never alter scores</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('/methodology')}
                className="px-5 py-3 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer shadow-xs inline-flex items-center gap-2"
              >
                <span>Read Our Research Methodology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('/category/supplements-nutrition')}
                className="px-5 py-3 text-xs font-semibold text-stone-800 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
              >
                Browse Ingredient Reviews
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Editorial Visual */}
          <div className="lg:col-span-5 relative aspect-4/3 lg:aspect-auto rounded-2xl overflow-hidden border border-stone-200/80 bg-stone-100">
            <img
              src={heroImg}
              alt="77 Review sports nutrition and health research desk"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent text-white text-xs">
              <p className="font-serif italic text-stone-200">
                Editorial Research Desk — Every health claim is cross-referenced with peer-reviewed literature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Tier Salience Editorial Front Page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-end justify-between border-b border-stone-200 pb-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
              Department Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-0.5">
              Featured Scientific Investigations
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/category/supplements-nutrition')}
            className="text-xs font-semibold text-stone-900 hover:text-stone-700 cursor-pointer hidden sm:inline-flex items-center gap-1"
          >
            <span>View All Editorial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Lead Story */}
        <ArticleCard
          article={leadArticle}
          onSelect={(slug) => onNavigate(`/article/${slug}`)}
          featured={true}
        />

        {/* Secondary Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onSelect={(slug) => onNavigate(`/article/${slug}`)}
            />
          ))}
        </div>
      </section>

      {/* Featured Products & Verified Evaluations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200 pb-4 gap-2">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
              Laboratory & Clinical Audits
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-0.5">
              Verified Product Evaluations
            </h2>
          </div>
          <p className="text-xs text-stone-500 max-w-md sm:text-right">
            Independent evaluations based on raw ingredient certificates, third-party purity screening, and documented retail pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewReview={(slug) => onNavigate(`/review/${slug}`)}
              onOpenOutbound={onOpenOutbound}
            />
          ))}
        </div>
      </section>

      {/* Head-to-Head Comparisons Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-stone-200 pb-4">
          <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
            Comparative Analysis
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-0.5">
            Head-to-Head Ingredient & Device Comparisons
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisons.map((comp) => (
            <div
              key={comp.id}
              onClick={() => onNavigate(`/compare/${comp.slug}`)}
              className="border border-stone-200 bg-white p-7 rounded-xl hover:border-stone-400 transition-colors cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="text-xs text-stone-500 flex items-center gap-2">
                  <span className="text-stone-900 font-semibold">Comparative Review</span>
                  <span aria-hidden="true">·</span>
                  <span>{comp.publishedDate}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-stone-900 leading-snug">
                  {comp.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                  {comp.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>By {comp.author.name}</span>
                <span className="text-stone-900 font-medium inline-flex items-center gap-1">
                  View Multi-Criteria Matrix →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Taxonomy / Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-stone-200 pb-4">
          <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
            Content Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-0.5">
            Editorial Departments
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.slug}
              onClick={() => onNavigate(`/category/${cat.slug}`)}
              className="border border-stone-200 bg-white p-6 rounded-xl hover:border-stone-400 transition-colors cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-serif font-bold text-stone-900">{cat.name}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{cat.shortDescription}</p>
              </div>
              <span className="text-xs font-semibold text-stone-900 inline-flex items-center gap-1 pt-2 border-t border-stone-100">
                Explore Department →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Governance Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-stone-200 rounded-2xl p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
              The 77 Review Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Why Readers & Clinicians Trust 77 Review
            </h2>
            <p className="text-stone-400 text-sm leading-relaxed">
              We operate under stricter editorial boundaries than lifestyle or consumer blogs. Our methodology separates proven physiology from marketing hype.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-stone-800 text-xs">
            <div className="space-y-2">
              <Award className="w-5 h-5 text-stone-300" />
              <h4 className="font-semibold text-stone-100 text-sm">Evidence Hierarchy</h4>
              <p className="text-stone-400 leading-relaxed">
                Prioritizing systematic reviews and randomized double-blind human trials over animal studies, in-vitro hypotheses, or merchant claims.
              </p>
            </div>
            <div className="space-y-2">
              <FileCheck className="w-5 h-5 text-stone-300" />
              <h4 className="font-semibold text-stone-100 text-sm">Medical Boundaries</h4>
              <p className="text-stone-400 leading-relaxed">
                We never diagnose conditions, prescribe drug alternatives, or endorse unproven cures. All health-sensitive content undergoes specialist review.
              </p>
            </div>
            <div className="space-y-2">
              <ShieldCheck className="w-5 h-5 text-stone-300" />
              <h4 className="font-semibold text-stone-100 text-sm">Commercial Separation</h4>
              <p className="text-stone-400 leading-relaxed">
                Affiliate partnerships with ClickBank, BuyGoods, and merchant programs are strictly ring-fenced. Commissions never influence editorial ratings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
