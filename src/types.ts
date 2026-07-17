export type PageId =
  | 'home'
  | 'roofing-asphalt'
  | 'roofing-asphalt-repair'
  | 'roofing-asphalt-maintain'
  | 'roofing-shingles-30yr'
  | 'roofing-shingles-3tab'
  | 'roofing-shingles-class3'
  | 'roofing-shingles-class4'
  | 'roofing-shingles-repair'
  | 'roofing-flat'
  | 'roofing-tile'
  | 'roofing-metal'
  | 'residential-energy'
  | 'residential-exterior'
  | 'residential-fence'
  | 'residential-gutters'
  | 'residential-multifamily'
  | 'residential-replacement'
  | 'residential-ventilation'
  | 'residential-repair-emergency'
  | 'residential-repair-flashing'
  | 'residential-installation'
  | 'residential-inspection'
  | 'residential-maintenance'
  | 'residential-windows'
  | 'commercial-replacement'
  | 'commercial-coatings'
  | 'commercial-coping'
  | 'commercial-inspections'
  | 'commercial-programs'
  | 'commercial-leak'
  | 'commercial-epdm'
  | 'commercial-metal'
  | 'commercial-pvc'
  | 'commercial-tpo'
  | 'commercial-tpo-pvc'
  | 'storm-hail'
  | 'storm-wind'
  | 'storm-trees'
  | 'service-areas'
  | 'about-team'
  | 'about-testimonials'
  | 'resources-blog'
  | 'resources-financing'
  | 'resources-warranties'
  | 'resources-gallery'
  | 'resources-media'
  | 'resources-faq'
  | 'resource-need-roof'
  | 'resource-water-stain'
  | 'resource-insurance'
  | 'resource-look-like'
  | 'resource-estimate'
  | 'contact'
  | 'privacy-policy'
  | 'terms-of-service';

export interface PageContent {
  id: PageId;
  title: string;
  subtitle: string;
  heroImage?: string;
  sections: Array<{
    title: string;
    content: string | string[];
    image?: string;
    bullets?: string[];
  }>;
  faqs?: Array<{ question: string; answer: string }>;
  ctaText?: string;
}
