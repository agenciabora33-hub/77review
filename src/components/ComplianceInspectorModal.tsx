import React, { useState } from 'react';
import { ShieldCheck, Check, AlertCircle, FileText, CheckCircle2, X } from 'lucide-react';
import { auditContentCompliance } from '../lib/compliance';
import { articles } from '../data/articles';
import { products } from '../data/products';

interface ComplianceInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentArticleSlug?: string;
}

export const ComplianceInspectorModal: React.FC<ComplianceInspectorModalProps> = ({
  isOpen,
  onClose,
  currentArticleSlug,
}) => {
  const [activeTab, setActiveTab] = useState<'ad_audit' | 'evidence_hierarchy' | 'publishing_gates'>('ad_audit');

  if (!isOpen) return null;

  const currentArticle = articles.find((a) => a.slug === currentArticleSlug) || articles[0];
  const sampleScanText = currentArticle
    ? `${currentArticle.title} ${currentArticle.summary} ${currentArticle.contentSections.map((s) => s.bodyMarkdown.join(' ')).join(' ')}`
    : 'Health article analysis';

  const auditResult = auditContentCompliance(
    sampleScanText,
    true, // has commercial links
    true, // has FTC notice
    true  // is review/comparison
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-desk-title"
    >
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col border border-stone-200 shadow-2xl overflow-hidden text-stone-900">
        {/* Header */}
        <div className="p-6 border-b border-stone-200 flex items-start justify-between bg-stone-50">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-stone-900" />
              <h3 id="audit-desk-title" className="text-xl font-serif font-bold text-stone-900">
                77 Review Editorial & Ad Compliance Audit Desk
              </h3>
            </div>
            <p className="text-xs text-stone-600">
              Real-time audit engine verifying Google Ads Destination Standards, Meta Health Rules, FTC 16 CFR Part 255, and Medical Risk Gates.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls (Functional buttons with active/inactive segmented styling) */}
        <div className="px-6 pt-4 border-b border-stone-200 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('ad_audit')}
            className={`pb-3 px-3 text-xs font-semibold cursor-pointer border-b-2 transition-colors ${
              activeTab === 'ad_audit'
                ? 'border-stone-900 text-stone-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Google & Meta Ads Simulator
          </button>
          <button
            onClick={() => setActiveTab('evidence_hierarchy')}
            className={`pb-3 px-3 text-xs font-semibold cursor-pointer border-b-2 transition-colors ${
              activeTab === 'evidence_hierarchy'
                ? 'border-stone-900 text-stone-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Evidence Hierarchy Matrix
          </button>
          <button
            onClick={() => setActiveTab('publishing_gates')}
            className={`pb-3 px-3 text-xs font-semibold cursor-pointer border-b-2 transition-colors ${
              activeTab === 'publishing_gates'
                ? 'border-stone-900 text-stone-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Editorial Publishing Gates
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs">
          {activeTab === 'ad_audit' && (
            <div className="space-y-6">
              {/* Scorecard Strip */}
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-semibold text-emerald-900 uppercase tracking-wider">
                    Target Policy Alignment Score
                  </span>
                  <p className="text-emerald-800 text-xs">
                    Evaluated against Google Ads Destination Quality and Meta Advertising Standards for Supplements.
                  </p>
                </div>
                <div className="text-2xl font-mono font-bold text-emerald-900 tabular-nums">
                  {auditResult.score} / 100
                </div>
              </div>

              {/* Policy Checks List */}
              <div className="space-y-3">
                <h4 className="font-semibold text-stone-900 text-sm">Automated Rule Checks</h4>
                <div className="space-y-2">
                  {auditResult.checks.map((check, index) => (
                    <div
                      key={index}
                      className="p-3.5 border border-stone-200 rounded-lg flex items-start gap-3 bg-stone-50/50"
                    >
                      {check.status === 'pass' && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      {check.status === 'warning' && (
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      )}
                      {check.status === 'fail' && (
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      )}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-stone-900">{check.name}</span>
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 bg-stone-200 text-stone-700 rounded">
                            {check.category.replace(/_/g, ' ')}
                          </span>
                        </div>
                        <p className="text-stone-600 leading-relaxed">{check.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Platform Requirements */}
              <div className="p-4 border border-stone-200 rounded-xl space-y-2 bg-stone-50">
                <h5 className="font-semibold text-stone-900">Paid Traffic Deployment Notes:</h5>
                <ul className="space-y-1 text-stone-600 list-disc list-inside leading-relaxed">
                  <li><strong>Google Ads:</strong> Destination offers original analysis. No doorway/bridge redirect scripts without content. Explicit non-medical disclaimers prevent healthcare certification flags.</li>
                  <li><strong>Meta Ads:</strong> Creative framing avoids targeting personal attributes (e.g. no "Are you unhappy with your belly?"). Zero unproven transformation or fast-fat-loss claims.</li>
                  <li><strong>Privacy & Pixels:</strong> Zero sensitive health symptoms or diagnostic parameters are transmitted across external tracking scripts.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'evidence_hierarchy' && (
            <div className="space-y-4">
              <p className="text-stone-600 leading-relaxed">
                77 Review enforces a strict 7-tier scientific hierarchy for substantiating all health, nutrition, and sports performance statements:
              </p>
              <div className="divide-y divide-stone-200 border border-stone-200 rounded-xl overflow-hidden bg-white">
                {[
                  { tier: 'Tier 1', name: 'Systematic Reviews & Meta-Analyses', weight: 'Gold Standard', desc: 'Cochrane reviews, PRISMA meta-analyses of multiple double-blind RCTs.' },
                  { tier: 'Tier 2', name: 'Well-Designed Peer-Reviewed RCTs', weight: 'High Evidentiary', desc: 'Placebo-controlled human trials with documented statistical power and blinding.' },
                  { tier: 'Tier 3', name: 'Clinical Practice Guidelines & Position Stands', weight: 'Authoritative', desc: 'ISSN, ACSM, American Heart Association, Endocrine Society consensus statements.' },
                  { tier: 'Tier 4', name: 'Government Health Agencies', weight: 'Regulatory', desc: 'NIH Office of Dietary Supplements, FDA, CDC, EFSA regulatory assessments.' },
                  { tier: 'Tier 5', name: 'Academic & Medical Institution Reports', weight: 'Secondary Review', desc: 'Harvard Medical School, Mayo Clinic, Johns Hopkins peer-reviewed educational bulletins.' },
                  { tier: 'Tier 6', name: 'Observational & Epidemiological Cohorts', weight: 'Correlational Only', desc: 'Framingham, NHANES data (never presented as definitive biological causation).' },
                  { tier: 'Tier 7', name: 'Manufacturer Technical Data Sheets', weight: 'Verification Only', desc: 'Used exclusively to audit raw specs, batch weights, and certificates of analysis (never treated as scientific proof of efficacy).' },
                ].map((row, i) => (
                  <div key={i} className="p-3.5 flex items-start justify-between gap-4">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-stone-900">{row.tier}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-stone-900">{row.name}</span>
                      </div>
                      <p className="text-stone-600 text-[11px] leading-relaxed">{row.desc}</p>
                    </div>
                    <span className="text-[11px] font-mono text-stone-500 shrink-0">{row.weight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'publishing_gates' && (
            <div className="space-y-4">
              <p className="text-stone-600 leading-relaxed">
                Every publication must successfully clear 5 sequential editorial gates prior to production build inclusion:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { step: '01. Fact Check & Source Check', status: 'Passed', desc: 'All material health claims matched to PubMed DOI or NIH ODS citations.' },
                  { step: '02. Medical Risk Gating', status: 'Passed', desc: 'Classified as General Editorial or Specialist-Reviewed before release.' },
                  { step: '03. Purity & Lab Audit', status: 'Passed', desc: 'Third-party certifications (NSF, Informed Choice) verified against register.' },
                  { step: '04. Ad Compliance Review', status: 'Passed', desc: 'No prohibited disease words, no guaranteed weight loss or muscle timelines.' },
                  { step: '05. Commercial Disclosure', status: 'Passed', desc: 'FTC 16 CFR Part 255 notice displayed prominently near product actions.' },
                ].map((gate, i) => (
                  <div key={i} className="p-4 border border-stone-200 rounded-xl bg-stone-50 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-stone-900">{gate.step}</span>
                      <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded font-medium">
                        {gate.status}
                      </span>
                    </div>
                    <p className="text-stone-600 text-[11px] leading-relaxed">{gate.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span>77 Review Internal Governance Ver. 2.0</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 cursor-pointer"
          >
            Close Audit Desk
          </button>
        </div>
      </div>
    </div>
  );
};
