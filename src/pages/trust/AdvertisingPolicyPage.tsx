import React from 'react';
import { ShieldCheck, AlertOctagon, CheckCircle2, FileText } from 'lucide-react';

interface TrustPageProps {
  onNavigate: (path: string) => void;
}

export const AdvertisingPolicyPage: React.FC<TrustPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pb-20 pt-4">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-medium">
        <button onClick={() => onNavigate('/')} className="hover:text-stone-900 cursor-pointer">
          Home
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-stone-900 font-semibold">Advertising Policy</span>
      </nav>

      <header className="space-y-3 border-b border-stone-200 pb-6">
        <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
          Paid Traffic & Policy Standards
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          Google Ads & Meta Ads Destination Compliance Policy
        </h1>
        <p className="text-stone-600 text-sm leading-relaxed max-w-2xl">
          Standards governing landing page destination quality, healthcare advertising boundaries, and ad network policy alignment.
        </p>
      </header>

      {/* Overview */}
      <section className="space-y-4 text-xs sm:text-sm">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          Destination Quality Commitment
        </h2>
        <p className="text-stone-700 leading-relaxed">
          77 Review designs every page to function as a valuable, standalone editorial resource. We strictly prohibit deceptive arbitrage strategies, doorway pages, empty bridge pages, and automatic redirect scripts designed solely to bypass ad network review.
        </p>
      </section>

      {/* Google Ads Standards */}
      <section className="space-y-4 text-xs sm:text-sm">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          Google Ads Healthcare & Destination Standards
        </h2>
        <div className="space-y-3">
          <div className="p-4 border border-stone-200 bg-white rounded-xl space-y-1">
            <strong className="text-stone-900 font-semibold block">1. Meaningful Original Content</strong>
            <p className="text-stone-600 text-xs leading-relaxed">
              Every paid landing page on 77 Review contains verified clinical citations, ingredient analysis, and substantive evaluation independent of any merchant advertisement.
            </p>
          </div>
          <div className="p-4 border border-stone-200 bg-white rounded-xl space-y-1">
            <strong className="text-stone-900 font-semibold block">2. Prohibited Substances & Health Claims</strong>
            <p className="text-stone-600 text-xs leading-relaxed">
              We never promote unapproved active pharmaceutical ingredients (APIs), SARMs, anabolic steroids, or restricted compounds. All supplement reviews clearly display the statutory DSHEA disclaimer.
            </p>
          </div>
          <div className="p-4 border border-stone-200 bg-white rounded-xl space-y-1">
            <strong className="text-stone-900 font-semibold block">3. Transparent Navigation & Mobile Integrity</strong>
            <p className="text-stone-600 text-xs leading-relaxed">
              Visitors can easily access all primary navigation, privacy policies, terms, and editorial methodology without unexpected traps or disruptive popups.
            </p>
          </div>
        </div>
      </section>

      {/* Meta Ads Standards */}
      <section className="space-y-4 text-xs sm:text-sm">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          Meta Ads Health, Body Image & Non-Exploitative Creative
        </h2>
        <div className="space-y-3">
          <div className="p-4 border border-stone-200 bg-white rounded-xl space-y-1">
            <strong className="text-stone-900 font-semibold block">1. Non-Assertion of Sensitive Personal Attributes</strong>
            <p className="text-stone-600 text-xs leading-relaxed">
              Content avoids copy that presumes knowledge of a reader's personal medical conditions, weight struggles, or physical limitations (e.g. avoiding "Do you suffer from belly fat?").
            </p>
          </div>
          <div className="p-4 border border-stone-200 bg-white rounded-xl space-y-1">
            <strong className="text-stone-900 font-semibold block">2. Body Image Respect & No Unrealistic Transformations</strong>
            <p className="text-stone-600 text-xs leading-relaxed">
              We ban manipulative before-and-after imagery and sensational promises of rapid body transformation.
            </p>
          </div>
          <div className="p-4 border border-stone-200 bg-white rounded-xl space-y-1">
            <strong className="text-stone-900 font-semibold block">3. Health Data Privacy in Tracking Pixels</strong>
            <p className="text-stone-600 text-xs leading-relaxed">
              No personal health data, symptoms, or diagnostic information are ever passed into tracking pixels or third-party advertising cookies.
            </p>
          </div>
        </div>
      </section>

      {/* Strictly Prohibited Claims Table */}
      <section className="p-6 bg-red-50/50 border border-red-200 rounded-2xl space-y-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-red-900 font-serif font-bold text-base">
          <AlertOctagon className="w-5 h-5 text-red-700" />
          <h3>Strictly Banned Health & Supplement Marketing Claims</h3>
        </div>
        <p className="text-red-950 text-xs leading-relaxed">
          The following claim types are prohibited across all 77 Review content and associated advertising campaigns:
        </p>
        <ul className="space-y-1.5 text-red-900 list-disc list-inside leading-relaxed text-xs">
          <li>Guaranteed weight loss or muscle gain within fixed timeframes (e.g. "Lose 10 lbs in 7 days").</li>
          <li>Claims that a supplement cures, treats, mitigates, or prevents any chronic clinical pathology.</li>
          <li>Promises that dietary supplements can replace prescription medications.</li>
          <li>Manufactured urgency or artificial scarcity countdown clocks.</li>
        </ul>
      </section>
    </div>
  );
};
