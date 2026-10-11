import React from 'react';
import { ArrowLeft, CheckCircle2, ShieldAlert, FileText, Check } from 'lucide-react';
import { siteConfig } from '../../data/site-config';

interface TrustPageProps {
  onNavigate: (path: string) => void;
}

export const EditorialPolicyPage: React.FC<TrustPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pb-20 pt-4">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-medium">
        <button onClick={() => onNavigate('/')} className="hover:text-stone-900 cursor-pointer">
          Home
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-stone-900 font-semibold">Editorial Policy</span>
      </nav>

      <header className="space-y-3 border-b border-stone-200 pb-6">
        <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
          Editorial Governance
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          77 Review Editorial & Scientific Integrity Policy
        </h1>
        <p className="text-stone-600 text-sm leading-relaxed max-w-2xl">
          Our standards for research organization, source verification, medical boundaries, and AI drafting controls.
        </p>
      </header>

      {/* The 8-Stage Workflow */}
      <section className="space-y-6">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          The 8-Stage Editorial Workflow
        </h2>
        <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
          No article, review, or buying guide is published on 77 Review without navigating through our sequential 8-stage verification pipeline:
        </p>

        <div className="divide-y divide-stone-200 border border-stone-200 rounded-xl overflow-hidden bg-white text-xs">
          {[
            {
              num: '01',
              title: 'Clinical Research & Scoping',
              desc: 'Editorial researchers identify a reader query or product category and assemble a bibliography of peer-reviewed human trials, NIH dossiers, and meta-analyses.',
            },
            {
              num: '02',
              title: 'Evidence Hierarchy Mapping',
              desc: 'Claims are cataloged against our 7-tier evidence hierarchy. High-quality human RCTs and Cochrane reviews are prioritized over preliminary in-vitro or rodent data.',
            },
            {
              num: '03',
              title: 'AI Drafting Constraints',
              desc: 'When AI models assist in synthesizing literature, strict prompt parameters prevent hallucinated credentials, synthetic testimonials, or exaggerated benefit claims.',
            },
            {
              num: '04',
              title: 'Source Verification & Fact Checking',
              desc: 'Every empirical statement is paired with an active PubMed PMID or government dossier. If reliable evidence is absent, the claim is omitted.',
            },
            {
              num: '05',
              title: 'Health Risk & Medical Boundary Gating',
              desc: 'Articles addressing active supplementation or clinical markers are reviewed by medical or pharmacy advisors (Dr. Chen or Dr. Patel). Prohibited disease cure claims are rejected.',
            },
            {
              num: '06',
              title: 'Human Editorial Sign-Off',
              desc: 'A senior sports science or nutrition editor verifies readability, American English voice, and ensures commercial links are separated from rankings.',
            },
            {
              num: '07',
              title: 'FTC & Platform Compliance Audit',
              desc: 'Pre-flight checks confirm visible affiliate disclosures, Google Ads destination standards, and Meta Ads policy alignment.',
            },
            {
              num: '08',
              title: 'Freshness & Post-Publication Monitoring',
              desc: 'Content is scheduled for re-audit whenever product formulations, clinical evidence, or manufacturer claims change.',
            },
          ].map((stage, i) => (
            <div key={i} className="p-4 sm:p-5 flex items-start gap-4">
              <span className="font-mono font-bold text-stone-900 text-base shrink-0">{stage.num}</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900 text-sm">{stage.title}</h3>
                <p className="text-stone-600 leading-relaxed">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Usage Policy */}
      <section className="p-6 bg-stone-100 rounded-xl border border-stone-200 space-y-3 text-xs sm:text-sm">
        <h3 className="font-serif font-bold text-stone-900 text-base">
          AI-Assisted Editorial Boundaries
        </h3>
        <p className="text-stone-700 leading-relaxed">
          At 77 Review, AI tools are employed strictly for data organization, literature clustering, and syntactic editing under human editorial direction.
        </p>
        <ul className="space-y-1.5 text-stone-600 list-disc list-inside leading-relaxed text-xs">
          <li><strong>Zero Synthetic Testimonials:</strong> We never generate fabricated user experiences, fictional case studies, or artificial reviews.</li>
          <li><strong>Zero Fabricated Credentials:</strong> Medical reviewers and authors represent real, credentialed contributors.</li>
          <li><strong>Mandatory Human Gate:</strong> Automated bulk publishing directly from AI generators is strictly forbidden.</li>
        </ul>
      </section>

      {/* Medical Boundaries */}
      <section className="space-y-3 text-xs sm:text-sm">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          Medical & Clinical Boundaries
        </h2>
        <p className="text-stone-700 leading-relaxed">
          The content on 77 Review provides general educational information and evidence-based analysis. We are not a medical practice and our content must never be interpreted as individual medical advice.
        </p>
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
          <p className="font-semibold">Our Non-Prescriptive Pledge:</p>
          <p>
            We never prescribe medication dosages, diagnose pathology, recommend terminating physician-directed therapy, or assert that dietary supplements can cure or prevent disease.
          </p>
        </div>
      </section>
    </div>
  );
};
