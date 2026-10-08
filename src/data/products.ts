import type { Product } from '../types';

export const products: Product[] = [
  // ELECTRONICS & AUDIO
  {
    id: 'prod-elec-1',
    title: 'Krishna Pro ANC Wireless Earbuds with 40H Playtime & Low Latency',
    category: 'electronics',
    categoryName: 'Electronics & Audio',
    price: 1299,
    originalPrice: 3499,
    discountPercentage: 63,
    rating: 4.8,
    ratingCount: 3840,
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Immerse in crystal clear audio with advanced Active Noise Cancellation (ANC), 13mm dynamic bass drivers, Quad-mic ENC for HD calling, and IPX5 splash resistance.',
    features: [
      'Active Noise Cancellation up to 30dB',
      'Up to 40 Hours total backup with fast charging case (10 min charge = 2 hours playback)',
      'Ultra-low 45ms gaming latency mode',
      'Bluetooth 5.3 with instant pairing',
      '1 Year Replacement Warranty by Krishna Enterprises'
    ],
    inStock: true,
    stockCount: 42,
    deliveryDays: '2-3 Days',
    isFlashDeal: true,
    marketplaceLinks: {
      amazon: 'https://www.amazon.in/s?k=Krishna+Enterprises+Earbuds',
      flipkart: 'https://www.flipkart.com/search?q=Krishna+Enterprises+Earbuds',
      meesho: 'https://www.meesho.com/search?q=Krishna+Enterprises+Earbuds'
    }
  },
  {
    id: 'prod-elec-2',
    title: 'Krishna Ultra 2.01" HD Display Smartwatch with BT Calling & Health Suite',
    category: 'electronics',
    categoryName: 'Electronics & Audio',
    price: 1799,
    originalPrice: 4999,
    discountPercentage: 64,
    rating: 4.7,
    ratingCount: 2950,
    badge: 'Mega Deal',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Feature-rich smartwatch with a brilliant 2.01-inch curved AMOLED display, single-chip Bluetooth calling with dialpad, 120+ sports modes, and 24/7 heart rate and SpO2 tracking.',
    features: [
      '2.01" Super Bright 600 Nits HD Screen',
      'Seamless Bluetooth Calling with noise-filtering mic',
      'Comprehensive Health & Sleep tracking',
      '7-Day battery life on regular usage',
      'IP68 Dust and Waterproof rating'
    ],
    inStock: true,
    stockCount: 28,
    deliveryDays: '2-3 Days',
    isFlashDeal: true,
    marketplaceLinks: {
      amazon: 'https://www.amazon.in/s?k=Krishna+Enterprises+Smartwatch',
      flipkart: 'https://www.flipkart.com/search?q=Krishna+Enterprises+Smartwatch',
      meesho: 'https://www.meesho.com/search?q=Krishna+Enterprises+Smartwatch'
    }
  },
  {
    id: 'prod-elec-3',
    title: 'Krishna 65W GaN Fast Charger Multi-Port (Type-C PD + USB-A)',
    category: 'electronics',
    categoryName: 'Electronics & Audio',
    price: 999,
    originalPrice: 2299,
    discountPercentage: 57,
    rating: 4.9,
    ratingCount: 1420,
    badge: 'Top Rated',
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Compact Gallium Nitride (GaN) fast charger capable of charging laptops, MacBooks, iPhones, Samsung, and Android devices simultaneously with over-voltage protection.',
    features: [
      '65W Super Fast Power Delivery (PD 3.0 & QC 4.0)',
      'Dual Type-C + USB-A triple output',
      'GaN III technology keeps adapter 40% smaller and runs cool',
      'BIS Certified with Multi-Protect safety system'
    ],
    inStock: true,
    stockCount: 65,
    deliveryDays: '1-2 Days',
    marketplaceLinks: {
      amazon: 'https://www.amazon.in/s?k=Krishna+Enterprises+Charger',
      flipkart: 'https://www.flipkart.com/search?q=Krishna+Enterprises+Charger',
      meesho: 'https://www.meesho.com/search?q=Krishna+Enterprises+Charger'
    }
  },

  // FASHION & APPAREL
  {
    id: 'prod-fash-1',
    title: 'Krishna Premium Heavyweight Oversized Cotton Streetwear T-Shirt',
    category: 'fashion',
    categoryName: 'Fashion & Apparel',
    price: 549,
    originalPrice: 1299,
    discountPercentage: 58,
    rating: 4.6,
    ratingCount: 4210,
    badge: 'Trending',
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Crafted from 240 GSM 100% bio-washed combed cotton, this drop-shoulder streetwear tee provides ultimate comfort, breathability, and shrink-resistant longevity.',
    features: [
      '240 GSM 100% Combed Bio-washed Cotton',
      'Modern drop shoulder boxy streetwear fit',
      'Durable ribbed neck collar that does not sag',
      'Vibrant colorfast dyes (machine washable)'
    ],
    inStock: true,
    stockCount: 120,
    deliveryDays: '2-4 Days',
    marketplaceLinks: {
      amazon: 'https://www.amazon.in/s?k=Krishna+Enterprises+Oversized+Tshirt',
      flipkart: 'https://www.flipkart.com/search?q=Krishna+Enterprises+Oversized+Tshirt',
      meesho: 'https://www.meesho.com/search?q=Krishna+Enterprises+Oversized+Tshirt'
    }
  },
  {
    id: 'prod-fash-2',
    title: 'Krishna Ethnic Pure Handloom Embroidered Kurta & Pant Set',
    category: 'fashion',
    categoryName: 'Fashion & Apparel',
    price: 899,
    originalPrice: 2499,
    discountPercentage: 64,
    rating: 4.7,
    ratingCount: 3100,
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Graceful ethnic ensemble featuring intricate zari and resham thread embroidery on soft rayon-cotton blend fabric. Perfect for festivals, family celebrations, and festive parties.',
    features: [
      'Premium breathable Rayon-Cotton slub fabric',
      'Intricate neck and cuff detailing',
      'Elasticated comfortable matching pants with pocket',
      'Gentle hand/machine wash recommended'
    ],
    inStock: true,
    stockCount: 54,
    deliveryDays: '3-4 Days',
    marketplaceLinks: {
      amazon: 'https://www.amazon.in/s?k=Krishna+Enterprises+Kurta+Set',
      flipkart: 'https://www.flipkart.com/search?q=Krishna+Enterprises+Kurta+Set',
      meesho: 'https://www.meesho.com/search?q=Krishna+Enterprises+Kurta+Set'
    }
  },
  {
    id: 'prod-fash-3',
    title: 'Krishna Lightweight Memory Foam Breathable Running & Walking Shoes',
    category: 'fashion',
    categoryName: 'Fashion & Apparel',
    price: 799,
    originalPrice: 2199,
    discountPercentage: 64,
    rating: 4.5,
    ratingCount: 1890,
    badge: 'New',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ultra-lightweight athletic sneakers with high-rebound cushioned soles, breathable flyknit mesh upper, and slip-resistant rubber outsole for daily exercise and all-day wear.',
    features: [
      'CloudFoam shock-absorbing dual-density insole',
      'Breathable engineered 3D mesh exterior',
      'Slip-resistant traction grip outsole',
      'Weighs only 260g per shoe'
    ],
    inStock: true,
    stockCount: 38,
    deliveryDays: '2-4 Days',
    marketplaceLinks: {
      amazon: 'https://www.amazon.in/s?k=Krishna+Enterprises+Shoes',
      flipkart: 'https://www.flipkart.com/search?q=Krishna+Enterprises+Shoes',
      meesho: 'https://www.meesho.com/search?q=Krishna+Enterprises+Shoes'
    }
  },

  // HOME & KITCHEN ESSENTIALS
  {
    id: 'prod-home-1',
    title: 'Krishna Tri-Ply Stainless Steel Heavy-Duty Induction Kadhai with Lid (2.5L)',
    category: 'home',
    categoryName: 'Home & Kitchen Essentials',
    price: 1199,
    originalPrice: 2899,
    discountPercentage: 59,
    rating: 4.8,
    ratingCount: 2740,
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    ],
    description: '3-Layer Tri-Ply technology with 304 food-grade stainless steel inside, heavy aluminum core for uniform heat distribution without burning food, and induction-friendly magnetic steel base.',
    features: [
      '100% Food Grade 304 Stainless Steel (No chemical coating)',
      'Tri-Ply even heat technology consumes 20% less gas/power',
      'Cool-touch riveted ergonomic cast steel handles',
      'Compatible with Gas Stove, Induction, Halogen & Oven'
    ],
    inStock: true,
    stockCount: 45,
    deliveryDays: '2-3 Days',
    isFlashDeal: true,
    marketplaceLinks: {
      amazon: 'https://www.amazon.in/s?k=Krishna+Enterprises+Kadhai',
      flipkart: 'https://www.flipkart.com/search?q=Krishna+Enterprises+Kadhai',
      meesho: 'https://www.meesho.com/search?q=Krishna+Enterprises+Kadhai'
    }
  },
  {
    id: 'prod-home-2',
    title: 'Krishna Airtight Borosilicate Glass Kitchen Container Set (Set of 4)',
    category: 'home',
    categoryName: 'Home & Kitchen Essentials',
    price: 749,
    originalPrice: 1699,
    discountPercentage: 56,
    rating: 4.7,
    ratingCount: 1980,
    badge: 'Top Rated',
    images: [
      'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80'
    ],
    description: '100% pure borosilicate transparent kitchen storage jars with natural bamboo wooden airtight lids and food-grade silicone seals to keep spices, cookies, grains and tea fresh.',
    features: [
      'High thermal shock resistant Borosilicate Glass',
      'Airtight silicone-ring natural bamboo lid',
      'BPA-free, dishwasher safe & microwave friendly jar body',
      'Set includes 400ml, 700ml, 1000ml, and 1400ml jars'
    ],
    inStock: true,
    stockCount: 70,
    deliveryDays: '2-3 Days',
    marketplaceLinks: {
      amazon: 'https://www.amazon.in/s?k=Krishna+Enterprises+Glass+Jars',
      flipkart: 'https://www.flipkart.com/search?q=Krishna+Enterprises+Glass+Jars',
      meesho: 'https://www.meesho.com/search?q=Krishna+Enterprises+Glass+Jars'
    }
  },
  {
    id: 'prod-home-3',
    title: 'Krishna Sunset Lamp 16 Colors RGB Atmosphere Projection Night Light',
    category: 'home',
    categoryName: 'Home & Kitchen Essentials',
    price: 499,
    originalPrice: 1299,
    discountPercentage: 62,
    rating: 4.6,
    ratingCount: 1650,
    badge: 'Trending',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Transform your bedroom, living space, or content studio with 16 vibrant projection hues, remote control color switching, 360-degree rotatable aluminum head, and USB power.',
    features: [
      '16 Color options + 4 dynamic transition modes',
      '360-degree rotatable magnetic hinge',
      'High-definition optical crystal lens for vivid halo spread',
      'USB plug-and-play with wireless IR remote'
    ],
    inStock: true,
    stockCount: 82,
    deliveryDays: '1-3 Days',
    marketplaceLinks: {
      amazon: 'https://www.amazon.in/s?k=Krishna+Enterprises+Sunset+Lamp',
      flipkart: 'https://www.flipkart.com/search?q=Krishna+Enterprises+Sunset+Lamp',
      meesho: 'https://www.meesho.com/search?q=Krishna+Enterprises+Sunset+Lamp'
    }
  },

  // BEAUTY & PERSONAL CARE
  {
    id: 'prod-beau-1',
    title: 'Krishna All-in-One Cordless Beard Trimmer & Hair Grooming Kit (Titanium Blades)',
    category: 'beauty',
    categoryName: 'Beauty & Personal Care',
    price: 849,
    originalPrice: 1999,
    discountPercentage: 58,
    rating: 4.7,
    ratingCount: 3420,
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Professional precision cordless groomer with self-sharpening titanium coated blades, 20 length settings (0.5mm to 10mm dial), 90 mins cordless runtime, and Type-C quick charging.',
    features: [
      'Self-sharpening Titanium & Stainless Steel blades',
      '20 Lock-in length settings with precision zoom wheel',
      'Type-C Universal Fast Charging with battery indicator LED',
      'IPX7 washable head for hygienic cleaning'
    ],
    inStock: true,
    stockCount: 50,
    deliveryDays: '2-3 Days',
    marketplaceLinks: {
      amazon: 'https://www.amazon.in/s?k=Krishna+Enterprises+Trimmer',
      flipkart: 'https://www.flipkart.com/search?q=Krishna+Enterprises+Trimmer',
      meesho: 'https://www.meesho.com/search?q=Krishna+Enterprises+Trimmer'
    }
  },
  {
    id: 'prod-beau-2',
    title: 'Krishna Pure Himalayan Rose Water & Vitamin C Hydrating Face Glow Mist (200ml)',
    category: 'beauty',
    categoryName: 'Beauty & Personal Care',
    price: 299,
    originalPrice: 699,
    discountPercentage: 57,
    rating: 4.8,
    ratingCount: 1540,
    badge: 'Top Rated',
    images: [
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Steam-distilled Himalayan rose petals infused with natural Vitamin C, Aloe Vera, and Hyaluronic Acid to tighten pores, balance pH levels, and deliver instant dewy hydration.',
    features: [
      '100% Steam-Distilled Natural Himalayan Petals',
      'Alcohol-Free, Paraben-Free & Sulphate-Free',
      'Restores skin moisture and tightens open pores',
      'Suitable for all skin types including sensitive skin'
    ],
    inStock: true,
    stockCount: 110,
    deliveryDays: '2-3 Days',
    marketplaceLinks: {
      amazon: 'https://www.amazon.in/s?k=Krishna+Enterprises+Face+Mist',
      flipkart: 'https://www.flipkart.com/search?q=Krishna+Enterprises+Face+Mist',
      meesho: 'https://www.meesho.com/search?q=Krishna+Enterprises+Face+Mist'
    }
  },

  // GROCERIES & DAILY NEEDS
  {
    id: 'prod-groc-1',
    title: 'Krishna Royal Jumbo California Almonds (Badam) - 100% Raw & Natural (500g)',
    category: 'grocery',
    categoryName: 'Groceries & Daily Needs',
    price: 499,
    originalPrice: 999,
    discountPercentage: 50,
    rating: 4.9,
    ratingCount: 4890,
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1508736793122-f516e3ba5569?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574545488652-2a97d6b6c387?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Handpicked premium grade jumbo California almonds, packed under sterile conditions to preserve maximum crunch, natural sweetness, and essential Vitamin E and Omega-3 nutrients.',
    features: [
      '100% Natural, Gluten-Free & Zero Preservatives',
      'Rich in plant protein, dietary fiber, and healthy fats',
      'Vacuum-sealed freshness zip-lock pouch',
      'FSSAI certified quality & lab tested'
    ],
    inStock: true,
    stockCount: 95,
    deliveryDays: '1-2 Days',
    marketplaceLinks: {
      amazon: 'https://www.amazon.in/s?k=Krishna+Enterprises+Almonds',
      flipkart: 'https://www.flipkart.com/search?q=Krishna+Enterprises+Almonds',
      meesho: 'https://www.meesho.com/search?q=Krishna+Enterprises+Almonds'
    }
  },
  {
    id: 'prod-groc-2',
    title: 'Krishna Single-Origin Kashmiri Saffron (Kesar) Grade A+ (1 Gram)',
    category: 'grocery',
    categoryName: 'Groceries & Daily Needs',
    price: 449,
    originalPrice: 899,
    discountPercentage: 50,
    rating: 4.9,
    ratingCount: 1870,
    badge: 'Top Rated',
    images: [
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Direct from the fields of Pampore, Kashmir. Pure deep red stigma threads delivering intoxicating aroma, natural rich golden color, and potent antioxidant wellness benefits.',
    features: [
      '100% Pure Mongra Kashmiri Saffron (No artificial coloring)',
      'High Crocin content for deep golden milk and culinary dishes',
      'Packaged in an airtight glass vial inside a protective tin',
      'Tested for purity under ISO 3632 guidelines'
    ],
    inStock: true,
    stockCount: 60,
    deliveryDays: '2-3 Days',
    marketplaceLinks: {
      amazon: 'https://www.amazon.in/s?k=Krishna+Enterprises+Kesar',
      flipkart: 'https://www.flipkart.com/search?q=Krishna+Enterprises+Kesar',
      meesho: 'https://www.meesho.com/search?q=Krishna+Enterprises+Kesar'
    }
  },

  // LIFESTYLE GADGETS & SMART UTILITIES
  {
    id: 'prod-gadg-1',
    title: 'Krishna Portable Rechargeable USB Smoothie & Protein Blender (450ml)',
    category: 'gadgets',
    categoryName: 'Lifestyle Gadgets & Smart Utilities',
    price: 699,
    originalPrice: 1599,
    discountPercentage: 56,
    rating: 4.7,
    ratingCount: 2350,
    badge: 'Trending',
    images: [
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Blend on-the-go with 6 high-speed 304 stainless steel serrated blades, powerful 4000mAh rechargeable battery, magnetic safety lock, and leakproof sport lid with lanyard.',
    features: [
      '6 Sharp 304 Stainless Steel serrated blades (20,000 RPM)',
      '4000mAh USB Type-C Rechargeable Battery (15+ blends per charge)',
      'BPA-free food grade Tritan bottle body',
      'Magnetic induction safety sensor prevents accidental start'
    ],
    inStock: true,
    stockCount: 40,
    deliveryDays: '2-3 Days',
    isFlashDeal: true,
    marketplaceLinks: {
      amazon: 'https://www.amazon.in/s?k=Krishna+Enterprises+Portable+Blender',
      flipkart: 'https://www.flipkart.com/search?q=Krishna+Enterprises+Portable+Blender',
      meesho: 'https://www.meesho.com/search?q=Krishna+Enterprises+Portable+Blender'
    }
  },
  {
    id: 'prod-gadg-2',
    title: 'Krishna Ergonomic Aluminum Alloy Multi-Angle Laptop & Tablet Stand',
    category: 'gadgets',
    categoryName: 'Lifestyle Gadgets & Smart Utilities',
    price: 599,
    originalPrice: 1499,
    discountPercentage: 60,
    rating: 4.8,
    ratingCount: 3120,
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Engineered from premium sandblasted aluminum alloy. Features 7 adjustable height angles for healthy posture, hollow heat dissipation, and non-slip silicone pads.',
    features: [
      'Supports laptops up to 17 inches and 20kg weight',
      'Foldable into a slim travel pouch (included)',
      'Anti-slip silicone rubber grips on top and base',
      'Improves laptop airflow to prevent overheating'
    ],
    inStock: true,
    stockCount: 75,
    deliveryDays: '1-2 Days',
    marketplaceLinks: {
      amazon: 'https://www.amazon.in/s?k=Krishna+Enterprises+Laptop+Stand',
      flipkart: 'https://www.flipkart.com/search?q=Krishna+Enterprises+Laptop+Stand',
      meesho: 'https://www.meesho.com/search?q=Krishna+Enterprises+Laptop+Stand'
    }
  }
];


