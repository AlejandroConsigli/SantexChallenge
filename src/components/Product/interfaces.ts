export interface Product {
  id: string;
  name: string;
  description: string;
  featuredAsset?: FeaturedAsset;
  variants: Variants[];
}

interface FeaturedAsset {
  name: string;
  source: string;
}

interface Variants {
  id: string;
  price: number;
  currencyCode: string;
}
