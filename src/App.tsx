import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { OutboundAffiliateModal } from './components/OutboundAffiliateModal';
import { ComplianceInspectorModal } from './components/ComplianceInspectorModal';
import { SearchModal } from './components/SearchModal';

import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ArticlePage } from './pages/ArticlePage';
import { ProductReviewPage } from './pages/ProductReviewPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { BuyingGuidePage } from './pages/BuyingGuidePage';
import { NotFoundPage } from './pages/NotFoundPage';

import { EditorialPolicyPage } from './pages/trust/EditorialPolicyPage';
import { MethodologyPage } from './pages/trust/MethodologyPage';
import { MedicalReviewPage } from './pages/trust/MedicalReviewPage';
import { AffiliateDisclosurePage } from './pages/trust/AffiliateDisclosurePage';
import { AdvertisingPolicyPage } from './pages/trust/AdvertisingPolicyPage';
import { CorrectionsPolicyPage } from './pages/trust/CorrectionsPolicyPage';
import { AboutPage } from './pages/trust/AboutPage';
import { ContactPage } from './pages/trust/ContactPage';
import { LegalPages } from './pages/trust/LegalPages';

import { ProductRecord, CategorySlug } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [searchOpen, setSearchOpen] = useState(false);
  const [complianceOpen, setComplianceOpen] = useState(false);
  const [outboundProduct, setOutboundProduct] = useState<ProductRecord | null>(null);

  // Sync with browser history and popstate
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Route Parser
  const renderCurrentRoute = () => {
    // 1. Homepage
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomePage
          onNavigate={navigate}
          onOpenOutbound={(prod) => setOutboundProduct(prod)}
        />
      );
    }

    // 2. Category routes: /category/:slug
    if (currentPath.startsWith('/category/')) {
      const slug = currentPath.replace('/category/', '') as CategorySlug;
      return (
        <CategoryPage
          slug={slug}
          onNavigate={navigate}
          onOpenOutbound={(prod) => setOutboundProduct(prod)}
        />
      );
    }

    // 3. Article routes: /article/:slug
    if (currentPath.startsWith('/article/')) {
      const slug = currentPath.replace('/article/', '');
      return (
        <ArticlePage
          slug={slug}
          onNavigate={navigate}
          onOpenOutbound={(prod) => setOutboundProduct(prod)}
        />
      );
    }

    // 4. Product Review routes: /review/:slug
    if (currentPath.startsWith('/review/')) {
      const slug = currentPath.replace('/review/', '');
      return (
        <ProductReviewPage
          slug={slug}
          onNavigate={navigate}
          onOpenOutbound={(prod) => setOutboundProduct(prod)}
        />
      );
    }

    // 5. Comparison routes: /compare or /compare/:slug
    if (currentPath === '/compare' || currentPath.startsWith('/compare/')) {
      const slug = currentPath === '/compare' ? undefined : currentPath.replace('/compare/', '');
      return (
        <ComparisonPage
          slug={slug}
          onNavigate={navigate}
          onOpenOutbound={(prod) => setOutboundProduct(prod)}
        />
      );
    }

    // 6. Buying Guides: /guide/:slug
    if (currentPath.startsWith('/guide/')) {
      const slug = currentPath.replace('/guide/', '');
      return (
        <BuyingGuidePage
          slug={slug}
          onNavigate={navigate}
          onOpenOutbound={(prod) => setOutboundProduct(prod)}
        />
      );
    }

    // 7. Trust & Governance Pages
    if (currentPath === '/editorial-policy') {
      return <EditorialPolicyPage onNavigate={navigate} />;
    }
    if (currentPath === '/methodology') {
      return <MethodologyPage onNavigate={navigate} />;
    }
    if (currentPath === '/medical-review') {
      return <MedicalReviewPage onNavigate={navigate} />;
    }
    if (currentPath === '/affiliate-disclosure') {
      return <AffiliateDisclosurePage onNavigate={navigate} />;
    }
    if (currentPath === '/advertising-policy') {
      return <AdvertisingPolicyPage onNavigate={navigate} />;
    }
    if (currentPath === '/corrections-policy') {
      return <CorrectionsPolicyPage onNavigate={navigate} />;
    }
    if (currentPath === '/about') {
      return <AboutPage onNavigate={navigate} />;
    }
    if (currentPath === '/contact') {
      return <ContactPage onNavigate={navigate} />;
    }
    if (currentPath === '/privacy') {
      return <LegalPages type="privacy" onNavigate={navigate} />;
    }
    if (currentPath === '/terms') {
      return <LegalPages type="terms" onNavigate={navigate} />;
    }

    // 8. 404
    return <NotFoundPage onNavigate={navigate} onOpenSearch={() => setSearchOpen(true)} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 font-sans selection:bg-amber-100 selection:text-stone-900">
      {/* Top Navigation */}
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenCompliance={() => setComplianceOpen(true)}
      />

      {/* Main Content Viewport */}
      <main className="flex-1">
        {renderCurrentRoute()}
      </main>

      {/* Comprehensive Editorial Footer */}
      <Footer onNavigate={navigate} />

      {/* Global Modals & Utilities */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={navigate}
      />

      <ComplianceInspectorModal
        isOpen={complianceOpen}
        onClose={() => setComplianceOpen(false)}
      />

      <OutboundAffiliateModal
        product={outboundProduct}
        onClose={() => setOutboundProduct(null)}
      />
    </div>
  );
}
