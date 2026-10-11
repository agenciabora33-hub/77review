import React from 'react';
import { siteConfig } from '../../data/site-config';
import { authors, reviewers } from '../../data/authors';
import { ShieldCheck, HeartPulse, Scale, Check } from 'lucide-react';

interface TrustPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<TrustPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pb-20 pt-4">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-medium">
        <button onClick={() => onNavigate('/')} className="hover:text-stone-900 cursor-pointer">
          Home
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-stone-900 font-semibold">About Us</span>
      </nav>

      <header className="space-y-3 border-b border-stone-200 pb-6">
        <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
          Independent Publication Identity
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          About 77 Review
        </h1>
        <p className="text-stone-600 text-sm leading-relaxed max-w-2xl">
          An independent editorial platform dedicated to evidence-aware health analysis, athletic performance science, and transparent supplement evaluations.
        </p>
      </header>

      {/* Mission & Brand Promise */}
      <section className="space-y-4 text-xs sm:text-sm">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          Our Editorial Mission
        </h2>
        <p className="text-stone-700 leading-relaxed">
          The health, fitness, and wellness industry is saturated with marketing hyperbole, unverified proprietary blends, and exaggerated transformation promises. 77 Review was founded to provide readers with sober, evidence-grounded analysis that respects the limits of science.
        </p>
        <p className="text-stone-700 leading-relaxed">
          We help readers make informed decisions about wellness products, dietary supplements, and training technology by translating peer-reviewed research into understandable, practical guides.
        </p>
      </section>

      {/* Core Distinctions Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
        <div className="p-5 border border-stone-200 bg-white rounded-xl space-y-2">
          <Scale className="w-5 h-5 text-stone-800" />
          <h3 className="font-serif font-bold text-stone-900 text-sm">Editorial Independence</h3>
          <p className="text-stone-600 leading-relaxed">
            We are not owned by, affiliated with, or funded by any supplement brand, pharmaceutical firm, or merchant conglomerate.
          </p>
        </div>

        <div className="p-5 border border-stone-200 bg-white rounded-xl space-y-2">
          <HeartPulse className="w-5 h-5 text-stone-800" />
          <h3 className="font-serif font-bold text-stone-900 text-sm">Non-Medical Entity</h3>
          <p className="text-stone-600 leading-relaxed">
            77 Review is an educational journalism platform, not a healthcare provider or diagnostic medical clinic.
          </p>
        </div>

        <div className="p-5 border border-stone-200 bg-white rounded-xl space-y-2">
          <ShieldCheck className="w-5 h-5 text-stone-800" />
          <h3 className="font-serif font-bold text-stone-900 text-sm">Transparent Commerce</h3>
          <p className="text-stone-600 leading-relaxed">
            All affiliate monetization relationships are disclosed above the fold in compliance with FTC guidelines.
          </p>
        </div>
      </section>

      {/* Editorial Team */}
      <section className="space-y-6">
        <h2 className="text-2xl font-serif font-bold text-stone-900">
          Editorial Leadership & Contributors
        </h2>
        <div className="space-y-4">
          {Object.values(authors).map((author) => (
            <div key={author.id} className="p-5 border border-stone-200 bg-white rounded-xl space-y-2 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="font-serif font-bold text-stone-900 text-base">{author.name}</h3>
                  <p className="text-stone-500 font-medium text-xs">{author.role}</p>
                </div>
              </div>
              <p className="text-stone-600 text-xs italic">Credentials: {author.credentials}</p>
              <p className="text-stone-700 text-xs leading-relaxed">{author.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Governance Info */}
      <section className="p-6 bg-stone-100 rounded-xl border border-stone-200 space-y-2 text-xs">
        <h3 className="font-serif font-bold text-stone-900 text-sm">Correspondence & Office Details</h3>
        <p className="text-stone-700 leading-relaxed">
          {siteConfig.contact.addressPlaceholder}
        </p>
        <p className="text-stone-600">
          General Inquiries: <span className="text-stone-900 font-medium">{siteConfig.contact.editorialEmail}</span>
        </p>
      </section>
    </div>
  );
};
