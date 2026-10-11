import React, { useState } from 'react';
import { Search, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
  onOpenCompliance: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenSearch,
  onOpenCompliance,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Supplements', path: '/category/supplements-nutrition' },
    { label: 'Fitness & Gear', path: '/category/fitness-sports' },
    { label: 'Health Science', path: '/category/health-wellness' },
    { label: 'Product Reviews', path: '/category/product-reviews' },
    { label: 'Editorial Policy', path: '/editorial-policy' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand Wordmark (Single text element in display face, no subtext pill or tag) */}
          <button
            onClick={() => {
              onNavigate('/');
              setMobileMenuOpen(false);
            }}
            className="flex items-center text-left text-2xl font-serif font-bold tracking-tight text-stone-900 hover:text-stone-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            77 Review
          </button>

          {/* Zone 2: 4-5 concise single-line nav links with subtle hover styling */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-stone-600">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => onNavigate(link.path)}
                  className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-stone-900 font-semibold border-b-2 border-stone-900 pb-0.5'
                      : 'hover:text-stone-900'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action + Search & Audit Tools */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSearch}
              className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              title="Search editorial publications and ingredients"
              aria-label="Search articles and reviews"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCompliance}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors border border-stone-300 cursor-pointer"
              title="Inspect editorial governance, ad policies, and research trail"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-stone-700" />
              <span>Audit Desk</span>
            </button>

            <button
              onClick={() => onNavigate('/methodology')}
              className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
            >
              Review Methodology
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-600 hover:text-stone-900 rounded-md cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  onNavigate(link.path);
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 px-3 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                onOpenCompliance();
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 px-3 text-sm font-medium text-amber-800 bg-amber-50/70 rounded-md flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Editorial Compliance & Ad Inspector</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
