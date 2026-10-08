import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Star, Users, Package, ExternalLink, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface DynamicMessage {
  id: number;
  badge: string;
  tagline: string;
  highlightText: string;
  subHighlight: string;
  description: string;
}

const dynamicMessages: DynamicMessage[] = [
  {
    id: 0,
    badge: '10,000+ Products Across India',
    tagline: 'Authentic Sourcing • Best Value',
    highlightText: 'Quality & Unbeatable Prices',
    subHighlight: 'Trending fashion, audio, kitchen essentials, groceries & gadgets.',
    description: 'Directly sourced from certified Indian manufacturers and inspected through our 5-point quality assurance protocol before dispatch.'
  },
  {
    id: 1,
    badge: 'Official Omnichannel Seller',
    tagline: 'Amazon • Flipkart • Meesho • Direct',
    highlightText: 'Meesho, Amazon & Flipkart',
    subHighlight: 'Shop Krishna Enterprises on your favorite platform with fast pan-India delivery.',
    description: 'Enjoy Amazon Prime speeds, Flipkart Assured quality, Meesho zero-commission value, or exclusive direct website coupons.'
  },
  {
    id: 2,
    badge: 'Limited Time Welcome Offer',
    tagline: 'Code: KRISHNA100 at Checkout',
    highlightText: 'Up to 70% Off + Flat ₹100 Welcome Discount',
    subHighlight: 'Festive pricing with Free Pan-India Shipping on orders above ₹499 & COD support.',
    description: 'Use promo code KRISHNA100 at direct checkout. Save extra on bulk packs, lifestyle accessories, and everyday household essentials.'
  }
];

export const HeroSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [motionState, setMotionState] = useState<'active' | 'exiting'>('active');
  const { setSelectedCategory } = useCart();

  useEffect(() => {
    const interval = setInterval(() => {
      setMotionState('exiting');
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % dynamicMessages.length);
        setMotionState('active');
      }, 350);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleManualSelect = (idx: number) => {
    if (idx === activeIndex) return;
    setMotionState('exiting');
    setTimeout(() => {
      setActiveIndex(idx);
      setMotionState('active');
    }, 300);
  };

  const handleExplore = () => {
    setSelectedCategory('all');
    const el = document.getElementById('catalog-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMarketplaces = () => {
    const el = document.getElementById('marketplace-hub');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentMsg = dynamicMessages[activeIndex];

  return (
    <section className="relative bg-brand-dark text-white overflow-hidden select-none">
      {/* 1. FIXED AMBIENT BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="w-full h-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061724] via-[#082a36]/95 to-[#061724]/85" />
        <div className="absolute -top-40 -left-40 w-80 sm:w-96 h-80 sm:h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-80 sm:w-96 h-80 sm:h-96 bg-amber-500/15 rounded-full blur-3xl" />
      </div>

      {/* 2. FIXED CONTENT STAGE */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-16 lg:pt-20 pb-8 sm:pb-14">
        <div className="max-w-3xl">
          
          {/* Top Pill Badge */}
          <div className="h-8 sm:h-9 flex items-center mb-2.5 sm:mb-4">
            <div
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-[11px] sm:text-xs font-semibold text-amber-300 backdrop-blur-md shadow-sm transition-all duration-300 ${
                motionState === 'active'
                  ? 'opacity-100 translate-y-0 filter-none'
                  : 'opacity-0 -translate-y-2 blur-[2px]'
              }`}
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 flex-shrink-0" />
              <span>{currentMsg.badge}</span>
              <span className="text-teal-400/60 hidden xs:inline">•</span>
              <span className="text-teal-100 font-normal hidden sm:inline">{currentMsg.tagline}</span>
            </div>
          </div>

          {/* Fixed Headline Anchor */}
          <p className="text-xs sm:text-base font-bold uppercase tracking-wider text-teal-400 mb-0.5">
            Krishna Enterprises
          </p>
          <h2 className="text-lg sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Your One-Stop Destination For
          </h2>

          {/* Dynamic Rotating Text Viewport (Fixed height, perfectly responsive) */}
          <div className="relative h-20 sm:h-28 lg:h-32 overflow-hidden mt-1 mb-2 sm:mb-3">
            <div
              className={`absolute inset-0 flex flex-col justify-center transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                motionState === 'active'
                  ? 'opacity-100 translate-y-0 filter-none'
                  : 'opacity-0 translate-y-4 blur-[3px]'
              }`}
            >
              <span className="text-lg sm:text-3xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-teal-200 to-cyan-300 leading-tight">
                {currentMsg.highlightText}
              </span>
              <p className="text-[11px] sm:text-sm text-teal-100 font-medium mt-1 line-clamp-1">
                {currentMsg.subHighlight}
              </p>
            </div>
          </div>

          {/* Fixed Height Description Block */}
          <div className="relative h-16 sm:h-12 overflow-hidden mb-6 sm:mb-8">
            <p
              className={`text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl line-clamp-3 sm:line-clamp-2 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                motionState === 'active'
                  ? 'opacity-100 translate-y-0 filter-none'
                  : 'opacity-0 translate-y-2 blur-[2px]'
              }`}
            >
              {currentMsg.description}
            </p>
          </div>

          {/* Tappable CTAs (Full-width on mobile phones) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={handleExplore}
              className="w-full sm:w-auto px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:brightness-110 text-slate-950 text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all transform active:scale-98"
            >
              <span>Explore Catalog</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <button
              onClick={handleMarketplaces}
              className="w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-xl bg-teal-950/60 hover:bg-teal-900/80 text-teal-100 border border-teal-500/40 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 backdrop-blur-sm transition-all hover:text-white"
            >
              <span>Shop on Marketplaces</span>
              <ExternalLink className="w-4 h-4 text-cyan-300" />
            </button>
          </div>

          {/* Omnichannel Marketplace Badges Indicator */}
          <div className="pt-6 sm:pt-8 flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Available On:</span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="px-2 py-0.5 rounded bg-white/10 text-amber-300 font-bold border border-white/10 text-[10px]">
                Amazon
              </span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-blue-300 font-bold border border-white/10 text-[10px]">
                Flipkart
              </span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-pink-300 font-bold border border-white/10 text-[10px]">
                Meesho
              </span>
            </div>
          </div>

          {/* Interactive Progress Indicator Dots */}
          <div className="flex items-center gap-2 mt-5 sm:mt-6">
            {dynamicMessages.map((msg, idx) => (
              <button
                key={msg.id}
                onClick={() => handleManualSelect(idx)}
                className="py-1 transition-all"
                aria-label={`Slide ${idx + 1}`}
              >
                <div
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-400 ${
                    activeIndex === idx
                      ? 'w-8 sm:w-10 bg-gradient-to-r from-brand-accent to-amber-400 shadow-sm'
                      : 'w-2 sm:w-2.5 bg-slate-700'
                  }`}
                />
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* 3. ROCK-SOLID TRUST METRICS BAR */}
      <div className="relative z-10 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 p-2 bg-slate-800/40 rounded-xl md:bg-transparent">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center flex-shrink-0">
                <Package className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-sm sm:text-lg font-bold text-white leading-tight">10,000+</h4>
                <p className="text-[10px] sm:text-[11px] text-slate-400">Products in Stock</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 p-2 bg-slate-800/40 rounded-xl md:bg-transparent">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-sm sm:text-lg font-bold text-white leading-tight">1 Million+</h4>
                <p className="text-[10px] sm:text-[11px] text-slate-400">Happy Shoppers</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 p-2 bg-slate-800/40 rounded-xl md:bg-transparent">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400" />
              </div>
              <div className="text-left">
                <h4 className="text-sm sm:text-lg font-bold text-white leading-tight">4.8 / 5.0</h4>
                <p className="text-[10px] sm:text-[11px] text-slate-400">Overall Rating</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 p-2 bg-slate-800/40 rounded-xl md:bg-transparent">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-sm sm:text-lg font-bold text-white leading-tight">100% QA</h4>
                <p className="text-[10px] sm:text-[11px] text-slate-400">Certified Sourced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
