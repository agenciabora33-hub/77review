import React from 'react';
import { Award, ShieldCheck, Scale, CheckCircle2 } from 'lucide-react';

interface TrustPageProps {
  onNavigate: (path: string) => void;
}

export const MethodologyPage: React.FC<TrustPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pb-20 pt-4">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-medium">
        <button onClick={() => onNavigate('/')} className="hover:text-stone-900 cursor-pointer">
          Home
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-stone-900 font-semibold">Review Methodology</span>
      </nav>

      <header className="space-y-3 border-b border-stone-200 pb-6">
        <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
          Scientific Evaluation Framework
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          77 Review Scoring & Product Testing Methodology
        </h1>
        <p className="text-stone-600 text-sm leading-relaxed max-w-2xl">
          How we evaluate supplements, fitness hardware, and wellness devices using pre-registered scoring weights, independent lab certificates, and clinical trials.
        </p>
      </header>

      {/* The 4-Pillar Scoring Architecture */}
      <section className="space-y-6">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          The 4-Pillar Scoring Architecture
        </h2>
        <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
          Every product reviewed on 77 Review receives a standardized 0–10 score determined by an unweighted mathematical formula. Commercial affiliate revenue is excluded from the calculation:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
          <div className="p-6 border border-stone-200 bg-white rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-stone-900 text-base">
                1. Evidentiary Substantiation
              </h3>
              <span className="font-mono text-stone-700 font-bold">35% Weight</span>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed">
              Does the product use ingredients in therapeutic doses validated by published human RCTs? We compare the exact milligram yield against the dosages established in clinical literature. Sub-therapeutic underdosing receives immediate deductions.
            </p>
          </div>

          <div className="p-6 border border-stone-200 bg-white rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-stone-900 text-base">
                2. Purity & Manufacturing Quality
              </h3>
              <span className="font-mono text-stone-700 font-bold">25% Weight</span>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed">
              We audit Certificates of Analysis (CoA) for heavy metals (lead, arsenic, cadmium, mercury) and microbial counts. For sports supplements, accredited certifications like NSF Certified for Sport or Informed Choice earn maximum credit.
            </p>
          </div>

          <div className="p-6 border border-stone-200 bg-white rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-stone-900 text-base">
                3. Label Transparency
              </h3>
              <span className="font-mono text-stone-700 font-bold">20% Weight</span>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed">
              Does the brand disclose the individual weight of every active compound? We heavily penalize proprietary blends ("fairy dusting") that mask individual ingredient amounts behind an umbrella matrix weight.
            </p>
          </div>

          <div className="p-6 border border-stone-200 bg-white rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-stone-900 text-base">
                4. Cost-Per-Effective-Dose
              </h3>
              <span className="font-mono text-stone-700 font-bold">20% Weight</span>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed">
              We divide the verified retail price by the number of clinically validated servings—not marketing scoops. This protects consumers from products that appear cheap per bottle but require four scoops to reach therapeutic efficacy.
            </p>
          </div>
        </div>
      </section>

      {/* Firsthand Testing vs Literature Review */}
      <section className="p-6 bg-stone-100 rounded-xl border border-stone-200 space-y-3 text-xs sm:text-sm">
        <h3 className="font-serif font-bold text-stone-900 text-base">
          Firsthand Testing vs. Systematic Literature Audits
        </h3>
        <p className="text-stone-700 leading-relaxed">
          In strict compliance with editorial truthfulness standards:
        </p>
        <ul className="space-y-1.5 text-stone-600 list-disc list-inside leading-relaxed text-xs">
          <li><strong>Hands-On Testing:</strong> Clearly noted only when hardware or wearables are physically worn and benchmarked against reference sensors by our gear team.</li>
          <li><strong>Literature & Specification Audits:</strong> Clearly identified when our sports scientists analyze published peer-reviewed human trials and independent analytical chemistry documents. We never falsely state a supplement was "personally tested" when conducting an analytical review.</li>
        </ul>
      </section>

      {/* Non-Commercial Ranking Guarantee */}
      <section className="space-y-3 text-xs sm:text-sm">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          Independent Ranking Guarantee
        </h2>
        <p className="text-stone-700 leading-relaxed">
          77 Review accepts zero sponsored placements or pay-to-win ranking schemes. While we may earn affiliate commissions via networks like ClickBank, BuyGoods, and direct programs, these agreements are managed separately from our editorial team. A merchant offering a 50% commission will never outrank a superior product offering 0% commission.
        </p>
      </section>
    </div>
  );
};
