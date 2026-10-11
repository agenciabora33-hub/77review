import React from 'react';
import { ProductRecord } from '../types';
import { ExternalLink, X, ShieldAlert, Check } from 'lucide-react';

interface OutboundAffiliateModalProps {
  product: ProductRecord | null;
  onClose: () => void;
}

export const OutboundAffiliateModal: React.FC<OutboundAffiliateModalProps> = ({
  product,
  onClose,
}) => {
  if (!product) return null;

  const handleProceed = () => {
    // In real affiliate deployment, this forwards to the tracked merchant URL
    // For AI Studio sandboxed preview, we open destination or simulate navigation
    window.open(product.approvedAffiliateUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="outbound-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-lg w-full border border-stone-200 shadow-xl overflow-hidden text-stone-900">
        {/* Header */}
        <div className="p-6 border-b border-stone-100 flex items-start justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
              External Merchant Dispatch
            </span>
            <h3 id="outbound-modal-title" className="text-xl font-serif font-bold text-stone-900 mt-1">
              Transfer to {product.merchantName}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 text-xs">
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 space-y-2 font-mono">
            <div className="flex justify-between text-stone-600">
              <span>Product ID:</span>
              <span className="text-stone-900 font-semibold">{product.id}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Merchant Destination:</span>
              <span className="text-stone-900 font-semibold">{product.merchantName}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Affiliate Network:</span>
              <span className="text-stone-900 font-semibold">{product.affiliateNetwork}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Internal Tracking Ref:</span>
              <span className="text-stone-900 font-semibold">{product.internalTrackingId}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Verified Price:</span>
              <span className="text-stone-900 font-semibold">
                ${product.verifiedPrice.amount.toFixed(2)} {product.verifiedPrice.currency}
              </span>
            </div>
          </div>

          <div className="space-y-2 text-stone-600 leading-relaxed">
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p>
                <strong>Zero Price Markup:</strong> Purchasing through this link does not increase your price. Discounts, promotional codes, and official warranties apply directly.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p>
                <strong>Editorial Independence:</strong> 77 Review's rating score ({product.ratingBreakdown.overallEditorialScore.toFixed(1)}/10) was formulated before commercial link generation.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p>
                <strong>Transaction Security:</strong> 77 Review does not process payments or collect your credit card data. All billing and fulfillment are handled securely on the merchant's checkout server.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-stone-50 border-t border-stone-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 rounded-lg transition-colors cursor-pointer"
          >
            Stay on 77 Review
          </button>

          <button
            onClick={handleProceed}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Proceed to Official Merchant</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
