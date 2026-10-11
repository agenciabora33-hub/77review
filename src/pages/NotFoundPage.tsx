import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate, onOpenSearch }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="font-mono text-sm uppercase tracking-wider text-stone-500">
        404 — Document Not Located
      </div>
      <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900">
        Page Not Found
      </h1>
      <p className="text-stone-600 text-sm leading-relaxed max-w-md mx-auto">
        The research article, product review, or category you requested may have been revised, consolidated, or relocated during our latest editorial audit.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <button
          onClick={() => onNavigate('/')}
          className="px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors inline-flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </button>
        <button
          onClick={onOpenSearch}
          className="px-5 py-2.5 text-xs font-semibold text-stone-800 bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors inline-flex items-center gap-2 cursor-pointer"
        >
          <Search className="w-3.5 h-3.5" />
          <span>Search 77 Review</span>
        </button>
      </div>

      <div className="pt-8 border-t border-stone-200 text-xs text-stone-500 space-y-2">
        <p>Recommended destinations:</p>
        <div className="flex flex-wrap justify-center gap-4 text-stone-800 font-medium">
          <button onClick={() => onNavigate('/category/supplements-nutrition')} className="hover:underline">
            Supplements & Nutrition
          </button>
          <button onClick={() => onNavigate('/category/fitness-sports')} className="hover:underline">
            Fitness & Sports Science
          </button>
          <button onClick={() => onNavigate('/editorial-policy')} className="hover:underline">
            Editorial Policy
          </button>
        </div>
      </div>
    </div>
  );
};
