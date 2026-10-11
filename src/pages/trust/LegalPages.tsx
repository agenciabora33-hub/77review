import React from 'react';
import { siteConfig } from '../../data/site-config';

interface TrustPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (path: string) => void;
}

export const LegalPages: React.FC<TrustPageProps> = ({ type, onNavigate }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pb-20 pt-4">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-medium">
        <button onClick={() => onNavigate('/')} className="hover:text-stone-900 cursor-pointer">
          Home
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-stone-900 font-semibold">
          {isPrivacy ? 'Privacy Policy' : 'Terms of Use'}
        </span>
      </nav>

      <header className="space-y-3 border-b border-stone-200 pb-6">
        <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
          Legal & Regulatory Information
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          {isPrivacy ? '77 Review Privacy Policy' : '77 Review Terms of Use'}
        </h1>
        <p className="text-stone-600 text-sm leading-relaxed max-w-2xl">
          Effective Date: October 1, 2026 · Governing Jurisdiction: United States
        </p>
      </header>

      {isPrivacy ? (
        <div className="space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-stone-900">
              1. Our Privacy Pledge Regarding Health Data
            </h2>
            <p>
              77 Review does not collect, harvest, store, or sell sensitive personal health information, medical diagnoses, genetic data, or individual biometric records. We operate as an informational publishing website.
            </p>
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-1">
              <strong>Strict Pixel Boundary:</strong>
              <p>
                We do not configure advertising pixels (such as Meta Pixel or Google Analytics) to associate medical conditions or sensitive search queries with individual identifiable user profiles.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-stone-900">
              2. Information We Collect
            </h2>
            <p>
              We collect minimal standard analytical information to maintain platform functionality:
            </p>
            <ul className="list-disc list-inside space-y-1 text-stone-600 text-xs">
              <li>Log data (IP address, browser type, referring URL, time of visit).</li>
              <li>Voluntary correspondence submitted through our contact or corrections desk.</li>
              <li>Aggregated affiliate referral click identifiers (sub-IDs) to verify transaction routing without capturing buyer names or billing cards.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-stone-900">
              3. External Merchant Links & Third-Party Cookies
            </h2>
            <p>
              When you click outbound affiliate links to merchants (e.g. via ClickBank, BuyGoods, ShareASale), the destination merchant or affiliate network may place a temporary tracking cookie on your browser to record that 77 Review referred the visit. We do not control merchant cookies or data collection policies. Please review the destination merchant's privacy policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-stone-900">
              4. California Consumer Privacy Act (CCPA) Rights
            </h2>
            <p>
              Under the CCPA, California residents have the right to request disclosure of personal data collected, request deletion of personal information, and opt out of the sale of personal information. 77 Review does not sell personal data. To exercise rights, email {siteConfig.contact.complianceEmail}.
            </p>
          </section>
        </div>
      ) : (
        <div className="space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-stone-900">
              1. Acceptance of Terms & Educational Scope
            </h2>
            <p>
              By accessing 77 Review, you acknowledge and agree that all content is provided exclusively for general informational and educational purposes. You agree not to use our publications as a substitute for professional clinical medical advice or diagnosis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-stone-900">
              2. Non-Medical Nature of Publication
            </h2>
            <p>
              The creators, editors, and reviewers of 77 Review are not acting as your healthcare provider. Dietary supplements evaluated on this website are not evaluated by the FDA to treat, cure, or prevent any illness. Never disregard clinical medical advice or delay seeking care because of material read on this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-stone-900">
              3. Independent External Merchant Transactions
            </h2>
            <p>
              77 Review does not process orders, issue refunds, or supply products. When you purchase an item via an external merchant link, your transaction, shipment, and warranty exist strictly between you and that independent merchant. 77 Review disclaims liability for merchant fulfillment, product defects, or adverse reactions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-stone-900">
              4. Limitation of Liability
            </h2>
            <p>
              In no event shall 77 Review, its owners, contributors, or reviewers be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the information, reviews, or external links provided on this site.
            </p>
          </section>
        </div>
      )}
    </div>
  );
};
