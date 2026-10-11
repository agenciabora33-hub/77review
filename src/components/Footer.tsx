import React from 'react';
import { siteConfig } from '../data/site-config';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 text-sm mt-24">
      {/* Top Banner Notice */}
      <div className="border-b border-stone-800 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-stone-400">
          <p className="max-w-3xl leading-relaxed">
            <span className="text-stone-200 font-semibold">Independence Statement:</span>{' '}
            77 Review is an independent editorial publication. We are not a medical clinic, licensed healthcare provider, pharmaceutical manufacturer, or official merchant distributor. All product recommendations derive strictly from published clinical literature, verified specifications, and transparent editorial evaluation.
          </p>
          <div className="shrink-0 flex items-center gap-3">
            <span className="text-stone-500">Edition:</span>
            <span className="text-stone-300 font-medium">{siteConfig.primaryMarket} ({siteConfig.language})</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Scope */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('/')}
              className="text-left text-2xl font-serif font-bold text-white tracking-tight cursor-pointer"
            >
              77 Review
            </button>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              {siteConfig.editorialScope}
            </p>
            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <p className="font-semibold text-stone-300">Correspondence Desk:</p>
              <p>{siteConfig.contact.addressPlaceholder}</p>
              <p>Inquiries: <span className="text-stone-200">{siteConfig.contact.editorialEmail}</span></p>
            </div>
          </div>

          {/* Col 2: Editorial Departments */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-wider">Departments</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/category/supplements-nutrition')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Supplements & Nutrition
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/category/fitness-sports')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Fitness & Sports Science
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/category/health-wellness')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Health & Circadian Wellness
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/category/product-reviews')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Product Reviews & Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/compare')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Head-to-Head Comparisons
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Editorial Governance */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-wider">Editorial Standards</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/editorial-policy')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  8-Stage Editorial Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/methodology')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Review Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/medical-review')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Medical Review Board
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/corrections-policy')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Corrections Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/affiliate-disclosure')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Affiliate Disclosure (FTC)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-wider">Trust & Legal</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  About 77 Review
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Corrections Desk
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/advertising-policy')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Advertising Policy (Google & Meta)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/privacy')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/terms')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Terms of Use
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimers & Copyright */}
        <div className="mt-12 pt-8 border-t border-stone-800 space-y-4 text-xs text-stone-400 leading-relaxed">
          <p>
            <strong className="text-stone-300">Mandatory Health Disclaimer:</strong> The content on 77 Review is published for educational and informational purposes only. It is not intended to substitute for clinical medical advice, professional diagnosis, or personalized treatment. Statements regarding dietary supplements have not been evaluated by the Food and Drug Administration (FDA). These products are not intended to diagnose, treat, cure, or prevent any disease. Always seek the advice of a qualified healthcare provider regarding any medical condition.
          </p>
          <p>
            <strong className="text-stone-300">Affiliate Commercial Transparency:</strong> When you purchase through commercial links on 77 Review, we may earn an affiliate commission at no additional cost to you. Editorial ratings and rankings are determined by our independent research methodology and are never modified in exchange for compensation.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-stone-400 text-xs">
            <p>© {new Date().getFullYear()} 77 Review. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Designed for US Editorial Standards, FTC 16 CFR Part 255 & Search Guidelines</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
