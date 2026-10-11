import React, { useState } from 'react';
import { ProductRecord } from '../types';
import { ExternalLink, CheckCircle } from 'lucide-react';

interface ProductCardProps {
  product: ProductRecord;
  onViewReview: (slug: string) => void;
  onOpenOutbound: (product: ProductRecord) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewReview,
  onOpenOutbound,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="border border-stone-200 bg-white rounded-xl p-6 flex flex-col justify-between hover:border-stone-400 transition-colors">
      <div className="space-y-4">
        {/* Visual Showcase */}
        <div className="aspect-4/3 w-full overflow-hidden rounded-lg bg-stone-50 border border-stone-200/80 relative">
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
          {/* Subtle unboxed score flag */}
          <div className="absolute top-3 right-3 bg-stone-900/90 text-white px-2.5 py-1 rounded text-xs font-mono tabular-nums">
            Score {product.ratingBreakdown.overallEditorialScore.toFixed(1)} / 10
          </div>
        </div>

        {/* Unboxed Metadata */}
        <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
          <span>{product.manufacturer}</span>
          <span aria-hidden="true">·</span>
          <span>Verified {product.verifiedPrice.verifiedDate}</span>
        </div>

        <div>
          <h3
            onClick={() => onViewReview(product.slug)}
            className="text-lg font-serif font-semibold text-stone-900 hover:text-stone-700 cursor-pointer leading-snug line-clamp-2 text-balance"
          >
            {product.name}
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Certifications unboxed list */}
        <div className="space-y-1.5 pt-2 border-t border-stone-100">
          <p className="text-[11px] font-semibold text-stone-700 uppercase tracking-wider">Independent Testing</p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-stone-600">
            {product.certifications.slice(0, 2).map((cert, i) => (
              <span key={i} className="inline-flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-stone-600 shrink-0" />
                <span>{cert}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Verified Price & Servings */}
        <div className="pt-2 border-t border-stone-100 flex items-baseline justify-between">
          <div>
            <span className="text-xs text-stone-500">Verified Retail</span>
            <div className="text-xl font-serif font-bold text-stone-900 tabular-nums">
              ${product.verifiedPrice.amount.toFixed(2)}{' '}
              <span className="text-xs font-sans font-normal text-stone-500">
                {product.verifiedPrice.currency}
              </span>
            </div>
          </div>
          {product.verifiedPrice.servingCost && (
            <div className="text-right">
              <span className="text-xs text-stone-500">Per Serving</span>
              <div className="text-sm font-mono font-medium text-stone-700 tabular-nums">
                ${product.verifiedPrice.servingCost.toFixed(2)}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-6 mt-4 border-t border-stone-100 space-y-2">
        <button
          onClick={() => onViewReview(product.slug)}
          className="w-full py-2.5 px-4 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer text-center"
        >
          Read Independent Evaluation
        </button>

        <button
          onClick={() => onOpenOutbound(product)}
          className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5 shadow-xs"
        >
          <span>Check Merchant Availability</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>

        <p className="text-[11px] text-stone-500 text-center pt-1">
          Authorized {product.merchantName} link via {product.affiliateNetwork}
        </p>
      </div>
    </div>
  );
};
