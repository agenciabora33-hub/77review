import React, { useState } from 'react';
import { siteConfig } from '../../data/site-config';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';

interface TrustPageProps {
  onNavigate: (path: string) => void;
}

export const CorrectionsPolicyPage: React.FC<TrustPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    url: '',
    claim: '',
    sourceUrl: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pb-20 pt-4">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-medium">
        <button onClick={() => onNavigate('/')} className="hover:text-stone-900 cursor-pointer">
          Home
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-stone-900 font-semibold">Corrections Policy</span>
      </nav>

      <header className="space-y-3 border-b border-stone-200 pb-6">
        <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
          Editorial Accuracy & Transparency
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          77 Review Corrections Policy & Public Record
        </h1>
        <p className="text-stone-600 text-sm leading-relaxed max-w-2xl">
          We are committed to rapid, transparent corrections whenever factual, scientific, or commercial errors are identified in our publications.
        </p>
      </header>

      {/* Policy Terms */}
      <section className="space-y-4 text-xs sm:text-sm">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          How We Handle Corrections
        </h2>
        <p className="text-stone-700 leading-relaxed">
          Health science evolves continually as new randomized controlled trials are completed. When an error of fact, outdated clinical guideline, or misstated product specification is discovered:
        </p>
        <div className="space-y-3 pt-2">
          <div className="p-4 border border-stone-200 bg-white rounded-xl space-y-1">
            <strong className="text-stone-900 font-semibold block">1. Substantive Corrections</strong>
            <p className="text-stone-600 text-xs leading-relaxed">
              If an edit alters a clinical takeaway, ingredient dosage, or scientific conclusion, we update the article immediately and append a prominent correction note at the top of the publication detailing the date and nature of the revision.
            </p>
          </div>
          <div className="p-4 border border-stone-200 bg-white rounded-xl space-y-1">
            <strong className="text-stone-900 font-semibold block">2. Typographical & Formatting Adjustments</strong>
            <p className="text-stone-600 text-xs leading-relaxed">
              Minor grammatical corrections or punctuation fixes that do not change scientific meaning are corrected directly without requiring a formal public log entry.
            </p>
          </div>
          <div className="p-4 border border-stone-200 bg-white rounded-xl space-y-1">
            <strong className="text-stone-900 font-semibold block">3. Product Price & Reformulation Updates</strong>
            <p className="text-stone-600 text-xs leading-relaxed">
              When a supplement brand alters its formula or pricing, our database records the new verification date. If a key active ingredient is removed or reduced, the product's editorial rating is recalculated.
            </p>
          </div>
        </div>
      </section>

      {/* Public Correction Log */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          Recent Editorial Updates & Corrections
        </h2>
        <div className="border border-stone-200 rounded-xl overflow-hidden bg-white text-xs divide-y divide-stone-100">
          <div className="p-4 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-sm">Vital Labs Creapure Review</span>
              <span className="font-mono text-stone-500">Updated Sept 28, 2026</span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              <strong>Revision:</strong> Updated per-serving cost calculation from $0.34 to $0.35 following manufacturer retail price adjustment from $33.99 to $34.99.
            </p>
          </div>
          <div className="p-4 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-sm">Creatine Evidence Guide</span>
              <span className="font-mono text-stone-500">Updated Aug 20, 2026</span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              <strong>Revision:</strong> Clarified distinction between serum creatinine biomarker elevations on routine metabolic panels and true GFR reduction via Cystatin-C.
            </p>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="p-6 sm:p-8 bg-stone-100 rounded-2xl border border-stone-200 space-y-4 text-xs sm:text-sm">
        <div className="space-y-1">
          <h2 className="text-xl font-serif font-bold text-stone-900">
            Submit an Editorial Correction
          </h2>
          <p className="text-stone-600 text-xs leading-relaxed">
            If you identify an inaccurate health claim, broken citation, or outdated specification, submit it directly to our editorial desk for verification.
          </p>
        </div>

        {submitted ? (
          <div className="p-4 bg-emerald-100 border border-emerald-300 rounded-xl text-emerald-900 space-y-1">
            <div className="flex items-center gap-2 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Correction Request Received</span>
            </div>
            <p className="text-xs">
              Thank you. Our editorial and medical review desk will review your submission against peer-reviewed records within 48 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-stone-800 mb-1">
                Article or Product Review URL
              </label>
              <input
                type="text"
                required
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                placeholder="e.g. https://77review.com/article/creatine-evidence-guide"
                className="w-full p-2.5 bg-white border border-stone-300 rounded-lg outline-none focus:border-stone-900 font-sans"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-800 mb-1">
                Specific Claim or Data Point in Question
              </label>
              <input
                type="text"
                required
                value={formData.claim}
                onChange={(e) => setFormData({ ...formData, claim: e.target.value })}
                placeholder="e.g. Statement regarding serum creatinine kinetics in section 4"
                className="w-full p-2.5 bg-white border border-stone-300 rounded-lg outline-none focus:border-stone-900 font-sans"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-800 mb-1">
                Supporting Evidence or Citation URL (PubMed, NIH, etc.)
              </label>
              <input
                type="text"
                value={formData.sourceUrl}
                onChange={(e) => setFormData({ ...formData, sourceUrl: e.target.value })}
                placeholder="e.g. https://pubmed.ncbi.nlm.nih.gov/..."
                className="w-full p-2.5 bg-white border border-stone-300 rounded-lg outline-none focus:border-stone-900 font-sans"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-800 mb-1">
                Additional Context or Notes
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Provide any additional explanation for the editorial team..."
                className="w-full p-2.5 bg-white border border-stone-300 rounded-lg outline-none focus:border-stone-900 font-sans"
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Submit to Corrections Desk</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </section>
    </div>
  );
};
