import React from 'react';
import { reviewers } from '../../data/authors';
import { Stethoscope, ShieldCheck, Check } from 'lucide-react';

interface TrustPageProps {
  onNavigate: (path: string) => void;
}

export const MedicalReviewPage: React.FC<TrustPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pb-20 pt-4">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-medium">
        <button onClick={() => onNavigate('/')} className="hover:text-stone-900 cursor-pointer">
          Home
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-stone-900 font-semibold">Medical Review Board</span>
      </nav>

      <header className="space-y-3 border-b border-stone-200 pb-6">
        <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
          Clinical Governance
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          Medical & Scientific Review Policy
        </h1>
        <p className="text-stone-600 text-sm leading-relaxed max-w-2xl">
          Ensuring health, nutrition, and physiological analyses are scrutinized by licensed physicians and clinical pharmacists.
        </p>
      </header>

      {/* Purpose of the Board */}
      <section className="space-y-4 text-xs sm:text-sm">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          Purpose & Clinical Scrutiny
        </h2>
        <p className="text-stone-700 leading-relaxed">
          Health information is a high-trust category. The 77 Review Medical & Scientific Review Board exists to verify that our published health and sports science coverage accurately reflects established consensus, highlights uncertainties, and respects clinical boundaries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 border border-stone-200 bg-white rounded-xl space-y-1">
            <strong className="text-stone-900 font-serif block text-sm">Contraindication Checks</strong>
            <p className="text-stone-600 text-xs">Auditing known interactions between supplement compounds and prescription drugs.</p>
          </div>
          <div className="p-4 border border-stone-200 bg-white rounded-xl space-y-1">
            <strong className="text-stone-900 font-serif block text-sm">Dosage Safety Bounds</strong>
            <p className="text-stone-600 text-xs">Flagging products exceeding established Tolerable Upper Intake Levels (UL).</p>
          </div>
          <div className="p-4 border border-stone-200 bg-white rounded-xl space-y-1">
            <strong className="text-stone-900 font-serif block text-sm">Trial Interpretative Rigor</strong>
            <p className="text-stone-600 text-xs">Preventing animal and in-vitro study findings from being generalized to humans.</p>
          </div>
        </div>
      </section>

      {/* Review Board Members */}
      <section className="space-y-6">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          Medical & Scientific Review Board Members
        </h2>

        <div className="space-y-6">
          {Object.values(reviewers).map((rev) => (
            <div key={rev.id} className="p-6 border border-stone-200 bg-white rounded-xl space-y-3 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-stone-100 pb-3">
                <div>
                  <h3 className="font-serif font-bold text-stone-900 text-lg">{rev.name}</h3>
                  <p className="text-stone-600 font-medium">{rev.specialty}</p>
                </div>
                <span className="text-xs font-mono text-stone-500">{rev.licenseOrInstitution}</span>
              </div>
              <p className="text-stone-700 leading-relaxed">
                {rev.bio}
              </p>
              <div className="pt-2 text-stone-500 text-xs italic">
                Verified Credentials: {rev.credentials}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Non-Medical Disclaimer */}
      <section className="p-6 bg-stone-100 rounded-xl border border-stone-200 space-y-2 text-xs">
        <h3 className="font-serif font-bold text-stone-900 text-sm">
          Strict Educational Boundary
        </h3>
        <p className="text-stone-700 leading-relaxed">
          The Medical & Scientific Review Board audits content for scientific accuracy; their involvement does not create a physician-patient relationship. Readers must consult their personal licensed healthcare provider regarding medical conditions, diagnostic tests, or therapy changes.
        </p>
      </section>
    </div>
  );
};
