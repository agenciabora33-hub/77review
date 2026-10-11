import { ArticleRecord, ProductRecord } from '../types';
import { siteConfig } from '../data/site-config';

export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.domain}${cleanPath}`;
}

export function generateArticleJsonLd(article: ArticleRecord) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    url: getCanonicalUrl(`/article/${article.slug}`),
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getCanonicalUrl(`/article/${article.slug}`),
    },
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
      description: article.author.bio,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    ...(article.reviewer
      ? {
          reviewedBy: {
            '@type': 'Person',
            name: article.reviewer.name,
            jobTitle: article.reviewer.specialty,
            description: article.reviewer.credentials,
          },
        }
      : {}),
  };
}

export function generateProductReviewJsonLd(product: ProductRecord) {
  // Compliant Schema.org: No fabricated aggregate reviews or artificial user counts
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: product.name,
      description: product.shortDescription,
      brand: {
        '@type': 'Brand',
        name: product.manufacturer,
      },
      offers: {
        '@type': 'Offer',
        price: product.verifiedPrice.amount.toFixed(2),
        priceCurrency: product.verifiedPrice.currency,
        availability: 'https://schema.org/InStock',
        url: getCanonicalUrl(`/review/${product.slug}`),
      },
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: product.ratingBreakdown.overallEditorialScore.toFixed(1),
      bestRating: '10',
      worstRating: '1',
    },
    author: {
      '@type': 'Person',
      name: product.reviewAuthor.name,
      jobTitle: product.reviewAuthor.role,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    datePublished: product.verifiedPrice.verifiedDate,
  };
}

export function generateBreadcrumbsJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.url),
    })),
  };
}
