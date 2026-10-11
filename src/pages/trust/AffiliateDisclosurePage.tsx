import React from 'react';
import { siteConfig } from '../../data/site-config';
import { CheckCircle2, Shield, DollarSign, ExternalLink } from 'lucide-react';

interface TrustPageProps {
  onNavigate: (path: string) => void;
}

export const AffiliateDisclosurePage: React.FC<TrustPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pb-20 pt-4">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-medium">
        <button onClick={() => onNavigate('/')} className="hover:text-stone-900 cursor-pointer">
          Home
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-stone-900 font-semibold">Affiliate Disclosure</span>
      </nav>

      <header className="space-y-3 border-b border-stone-200 pb-6">
        <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
          Commercial Transparency & FTC Compliance
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          77 Review Affiliate Disclosure
        </h1>
        <p className="text-stone-600 text-sm leading-relaxed max-w-2xl">
          In full accordance with the Federal Trade Commission (FTC) Guides Concerning the Use of Endorsements and Testimonials in Advertising (16 CFR Part 255).
        </p>
      </header>

      {/* Primary Statement */}
      <section className="p-6 sm:p-8 bg-stone-100 rounded-2xl border border-stone-200 space-y-3">
        <h2 className="text-xl font-serif font-bold text-stone-900">
          Our Primary Commercial Disclosure
        </h2>
        <p className="text-stone-800 text-sm leading-relaxed">
          {siteConfig.affiliateDisclosureText}
        </p>
      </section>

      {/* How Affiliate Links Work */}
      <section className="space-y-4 text-xs sm:text-sm">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          How Affiliate Monetization Operates on 77 Review
        </h2>
        <p className="text-stone-700 leading-relaxed">
          To maintain our editorial team, laboratory auditing costs, and medical review processes without implementing a paywall or intrusive display advertisements, 77 Review participates in authorized affiliate marketing programs.
        </p>
        <div className="space-y-3 pt-2">
          <div className="p-4 border border-stone-200 bg-white rounded-xl space-y-1">
            <strong className="text-stone-900 font-semibold block">1. Zero Extra Cost to Readers</strong>
            <p className="text-stone-600 text-xs leading-relaxed">
              When you click on an external merchant link and complete a purchase, the merchant or network pays 77 Review a referral fee. This commission is paid entirely by the merchant and does not raise the price you pay.
            </p>
          </div>
          <div className="p-4 border border-stone-200 bg-white rounded-xl space-y-1">
            <strong className="text-stone-900 font-semibold block">2. Editorial Ring-Fencing</strong>
            <p className="text-stone-600 text-xs leading-relaxed">
              Our writers, sports science editors, and medical reviewers do not know the specific commission percentages associated with individual merchant offers. Products are ranked strictly according to our 4-pillar scoring matrix.
            </p>
          </div>
          <div className="p-4 border border-stone-200 bg-white rounded-xl space-y-1">
            <strong className="text-stone-900 font-semibold block">3. Supported Affiliate Networks</strong>
            <p className="text-stone-600 text-xs leading-relaxed">
              We partner exclusively with verified affiliate networks and direct merchant portals, including ClickBank, BuyGoods, ShareASale, and Impact. Every merchant offer is audited before links are authorized.
            </p>
          </div>
        </div>
      </section>

      {/* Clear Merchant Separation */}
      <section className="space-y-3 text-xs sm:text-sm">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          Clear Merchant Separation & Non-Collection of Payments
        </h2>
        <p className="text-stone-700 leading-relaxed">
          77 Review is an independent publishing platform. We do not manufacture products, maintain physical warehouses, process retail payments, or store customer credit card data. All commercial transactions, warranties, subscriptions, and return requests are executed directly between you and the respective merchant.
        </p>
      </section>
    </div>
  );
};
