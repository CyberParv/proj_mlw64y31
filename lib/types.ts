export interface NavigationItem {
  label: string;
  href: string;
}

export interface SiteMeta {
  title: string;
  description: string;
  tagline?: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ServiceItem {
  name: string;
  description: string;
  price?: string;
  duration?: string;
  icon?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  name: string;
  vehicle?: string;
  rating: number;
  text: string;
  image?: string;
}

export interface GalleryImage {
  src: string;
  category?: string;
  caption?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface ContactField {
  name: string;
  type: "text" | "email" | "tel" | "select" | "date" | "textarea";
  label: string;
  required?: boolean;
  options?: string[];
}
