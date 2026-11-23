import { useEffect } from 'react';
import siteConfig from '../config/site.config';
import { telLink } from '../lib/helpers';

/** Dados estruturados JSON-LD (RealEstateAgent / LocalBusiness), gerados a partir de site.config. */
export default function JsonLd() {
  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': ['RealEstateAgent', 'LocalBusiness'],
      name: siteConfig.legalName,
      alternateName: siteConfig.name,
      url: siteConfig.url,
      image: siteConfig.images.ogImage,
      telephone: telLink().replace('tel:', ''),
      email: siteConfig.email,
      description: siteConfig.copy.footerDescription,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: siteConfig.address.country,
      },
      sameAs: siteConfig.social.map((s) => s.url),
      openingHours: ['Mo-Fr 08:00-18:00', 'Sa 08:00-12:00'],
    };
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.text = JSON.stringify(data);
    document.head.appendChild(el);
    return () => el.remove();
  }, []);
  return null;
}
