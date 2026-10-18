export interface LightboxItem {
  src: string;
  title: string;
  caption: string;
}

export interface CarouselSlide {
  src: string;
  title: string;
  caption: string;
  tag: string;
  italicWord?: string;
}

export interface CarouselRowData {
  id: number;
  category: string;
  slides: CarouselSlide[];
}

export interface FeatureItem {
  src: string;
  title: string;
  caption: string;
  tag: string;
  italicWord?: string;
}

export interface MasonryItem {
  src: string;
  title: string;
  caption: string;
  tag: string;
  italicWord?: string;
}

export interface ServiceItem {
  num: string;
  name: string;
  desc: string;
  img: string;
}

export interface StatItem {
  count: number;
  label: string;
  detail: string;
  isAvailable?: boolean;
}

export interface ClientLogo {
  name: string;
  category: string;
  src: string;
  caption: string;
}

export interface MarqueeItem {
  text: string;
  em?: string;
}

