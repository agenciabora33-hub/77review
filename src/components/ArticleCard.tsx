import React, { useState } from 'react';
import { ArticleRecord } from '../types';
import { categories } from '../data/categories';

interface ArticleCardProps {
  article: ArticleRecord;
  onSelect: (slug: string) => void;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onSelect,
  featured = false,
}) => {
  const [imageError, setImageError] = useState(false);
  const cat = categories.find((c) => c.slug === article.category);

  if (featured) {
    return (
      <article
        onClick={() => onSelect(article.slug)}
        className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-stone-200 bg-white p-6 sm:p-8 rounded-xl hover:border-stone-400 transition-colors"
      >
        <div className="lg:col-span-7 space-y-4">
          {/* Zero-Pill unboxed clean metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-medium">
            <span className="text-stone-900 font-semibold">{cat?.name || article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishedDate}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{article.readTimeMinutes} min read</span>
            {article.medicalRiskLevel === 'health_sensitive' && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-amber-800">Specialist Reviewed</span>
              </>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-stone-900 group-hover:text-stone-700 transition-colors leading-snug text-balance">
            {article.title}
          </h2>

          <p className="text-stone-600 text-sm leading-relaxed line-clamp-3">
            {article.summary}
          </p>

          <div className="pt-2 flex items-center justify-between text-xs text-stone-500 border-t border-stone-100">
            <span>By {article.author.name}</span>
            <span className="text-stone-900 font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
              Read Editorial Analysis →
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 aspect-4/3 w-full overflow-hidden rounded-lg bg-stone-100 border border-stone-200/80">
          {!imageError ? (
            <img
              src={article.imageUrl}
              alt={article.title}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-stone-100 text-stone-400 text-xs font-serif p-4 text-center">
              77 Review Research Document
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={() => onSelect(article.slug)}
      className="group cursor-pointer flex flex-col justify-between border border-stone-200 bg-white p-6 rounded-xl hover:border-stone-400 transition-colors h-full"
    >
      <div className="space-y-3">
        <div className="aspect-4/3 w-full overflow-hidden rounded-lg bg-stone-100 border border-stone-200/80 mb-4">
          {!imageError ? (
            <img
              src={article.imageUrl}
              alt={article.title}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-stone-100 text-stone-400 text-xs font-serif p-4 text-center">
              77 Review Research Document
            </div>
          )}
        </div>

        {/* Clean unboxed metadata with bullet separators */}
        <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
          <span className="text-stone-900 font-semibold">{cat?.name || article.category}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">{article.readTimeMinutes} min read</span>
        </div>

        <h3 className="text-lg font-serif font-semibold text-stone-900 group-hover:text-stone-700 transition-colors leading-snug line-clamp-2 text-balance">
          {article.title}
        </h3>

        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
          {article.summary}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
        <span>By {article.author.name}</span>
        <span className="text-stone-900 font-medium group-hover:translate-x-0.5 transition-transform inline-flex items-center">
          Read →
        </span>
      </div>
    </article>
  );
};
