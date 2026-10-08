export type CategoryId = 'all' | 'fashion' | 'electronics' | 'home' | 'beauty' | 'grocery' | 'gadgets';

export interface Category {
  id: CategoryId;
  name: string;
  shortName: string;
  tagline: string;
  icon: string;
  bannerImage: string;
  itemCount: number;
}

export interface MarketplaceLinks {
  amazon?: string;
  flipkart?: string;
  meesho?: string;
}

export interface Product {
  id: string;
  title: string;
  category: CategoryId;
  categoryName: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  ratingCount: number;
  badge?: 'Bestseller' | 'Mega Deal' | 'Trending' | 'Top Rated' | 'New';
  images: string[];
  description: string;
  features: string[];
  inStock: boolean;
  stockCount: number;
  deliveryDays: string;
  isFlashDeal?: boolean;
  marketplaceLinks: MarketplaceLinks;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  userName: string;
  userCity: string;
  userState: string;
  rating: number;
  date: string;
  comment: string;
  productTitle: string;
  platform: 'Amazon' | 'Flipkart' | 'Meesho' | 'Direct Store';
  verified: boolean;
}

export interface PincodeInfo {
  pincode: string;
  city: string;
  state: string;
  deliveryDays: number;
  codAvailable: boolean;
  freeShipping: boolean;
}
