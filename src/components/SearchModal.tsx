import React, { useState, useMemo } from 'react';
import { Search, X, FileText, Package, Scale, BookOpen } from 'lucide-react';
import { articles } from '../data/articles';
import { products } from '../data/products';
import { comparisons } from '../data/comparisons';
import { buyingGuides } from '../data/guides';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { articles: [], products: [], comparisons: [], guides: [] };

    const matchedArticles = articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.primaryQuestionAnswer.toLowerCase().includes(q)
    );

    const matchedProducts = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.ingredients?.some((ing) => ing.name.toLowerCase().includes(q))
    );

    const matchedComparisons = comparisons.filter(
      (c) => c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q)
    );

    const matchedGuides = buyingGuides.filter(
      (g) => g.title.toLowerCase().includes(q) || g.summary.toLowerCase().includes(q)
    );

    return {
      articles: matchedArticles,
      products: matchedProducts,
      comparisons: matchedComparisons,
      guides: matchedGuides,
    };
  }, [query]);

  if (!isOpen) return null;

  const totalResults =
    searchResults.articles.length +
    searchResults.products.length +
    searchResults.comparisons.length +
    searchResults.guides.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-stone-200 shadow-2xl overflow-hidden text-stone-900 flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, ingredients (creatine, whey), devices, or guides..."
            className="w-full text-sm outline-none text-stone-900 placeholder:text-stone-400 font-sans"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs text-stone-500 hover:text-stone-900 font-medium cursor-pointer"
          >
            Esc
          </button>
        </div>

        {/* Results Area */}
        <div className="p-4 overflow-y-auto space-y-5 text-xs">
          {!query ? (
            <div className="py-8 text-center text-stone-500 space-y-2">
              <p className="font-serif text-sm text-stone-700">Type a keyword to search 77 Review</p>
              <p className="text-[11px]">Try "creatine", "sleep", "whey", "protein", "smart ring", or "label".</p>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-8 text-center text-stone-500">
              <p className="font-medium text-stone-800">No matching publications found for "{query}"</p>
              <p className="text-[11px] mt-1">Try searching for generic ingredients or health topics.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Products */}
              {searchResults.products.length > 0 && (
                <div className="space-y-2">
                  <span className="font-semibold text-stone-400 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5" />
                    Evaluated Products ({searchResults.products.length})
                  </span>
                  <div className="space-y-1">
                    {searchResults.products.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          onNavigate(`/review/${p.slug}`);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-stone-100 flex items-center justify-between group cursor-pointer transition-colors"
                      >
                        <div>
                          <p className="font-semibold text-stone-900 group-hover:text-stone-700">{p.name}</p>
                          <p className="text-stone-500 line-clamp-1">{p.shortDescription}</p>
                        </div>
                        <span className="font-mono text-stone-600 tabular-nums shrink-0 ml-3">
                          ${p.verifiedPrice.amount.toFixed(2)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles */}
              {searchResults.articles.length > 0 && (
                <div className="space-y-2">
                  <span className="font-semibold text-stone-400 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    Editorial Articles ({searchResults.articles.length})
                  </span>
                  <div className="space-y-1">
                    {searchResults.articles.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => {
                          onNavigate(`/article/${a.slug}`);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-stone-100 group cursor-pointer transition-colors"
                      >
                        <p className="font-semibold text-stone-900 group-hover:text-stone-700">{a.title}</p>
                        <p className="text-stone-500 line-clamp-1">{a.summary}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Comparisons */}
              {searchResults.comparisons.length > 0 && (
                <div className="space-y-2">
                  <span className="font-semibold text-stone-400 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5" />
                    Comparisons ({searchResults.comparisons.length})
                  </span>
                  <div className="space-y-1">
                    {searchResults.comparisons.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          onNavigate(`/compare/${c.slug}`);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-stone-100 group cursor-pointer transition-colors"
                      >
                        <p className="font-semibold text-stone-900 group-hover:text-stone-700">{c.title}</p>
                        <p className="text-stone-500 line-clamp-1">{c.summary}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Guides */}
              {searchResults.guides.length > 0 && (
                <div className="space-y-2">
                  <span className="font-semibold text-stone-400 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Buying Guides ({searchResults.guides.length})
                  </span>
                  <div className="space-y-1">
                    {searchResults.guides.map((g) => (
                      <button
                        key={g.id}
                        onClick={() => {
                          onNavigate(`/guide/${g.slug}`);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-stone-100 group cursor-pointer transition-colors"
                      >
                        <p className="font-semibold text-stone-900 group-hover:text-stone-700">{g.title}</p>
                        <p className="text-stone-500 line-clamp-1">{g.summary}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
