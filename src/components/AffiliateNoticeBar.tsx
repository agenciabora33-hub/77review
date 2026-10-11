import React from 'react';

interface AffiliateNoticeBarProps {
  onLearnMore?: () => void;
  className?: string;
}

export const AffiliateNoticeBar: React.FC<AffiliateNoticeBarProps> = ({
  onLearnMore,
  className = '',
}) => {
  return (
    <div
      className={`border border-stone-200 bg-stone-50/80 px-4 py-3 text-xs text-stone-600 rounded-lg ${className}`}
      role="note"
      aria-label="Affiliate Disclosure"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p className="leading-relaxed">
          <strong className="text-stone-900 font-semibold">Editorial Disclosure:</strong>{' '}
          77 Review may earn a commission when you purchase through links on this page, at no additional cost to you. Our reviews, ratings, and comparative analyses are strictly independent and governed by our clinical research team.
        </p>
        {onLearnMore && (
          <button
            onClick={onLearnMore}
            className="text-stone-900 font-medium underline underline-offset-2 hover:text-stone-700 whitespace-nowrap shrink-0 cursor-pointer text-xs"
          >
            How We Evaluate
          </button>
        )}
      </div>
    </div>
  );
};
