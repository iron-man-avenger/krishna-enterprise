import React from 'react';
import { ExternalLink, Check, ShoppingBag, ShieldCheck, Truck, Tag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import logoImg from '../../public/assets/logo.png';

export const MarketplaceHub: React.FC = () => {
  const { setSelectedCategory } = useCart();

  const handleShopDirect = () => {
    setSelectedCategory('all');
    const el = document.getElementById('catalog-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="marketplace-hub" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-500 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            Omnichannel Shopping Network
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Shop Krishna Enterprises on Your Favorite Platform
          </h2>
          <p className="text-sm text-slate-500 mt-2.5 leading-relaxed">
            Whether you love Amazon Prime, collect Flipkart SuperCoins, hunt for value on Meesho, or want exclusive discounts on our direct web store—we have got you covered with certified quality and fast pan-India delivery.
          </p>
        </div>

        {/* 4 Marketplace Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Amazon */}
          <div className="rounded-2xl p-6 bg-gradient-to-b from-amber-500/5 to-white border border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-1">
                  amazon<span className="text-amber-500 text-xs">.in</span>
                </span>
                <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                  Prime Partner
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-800 mb-2">
                Krishna Store on Amazon
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Enjoy blazing-fast Prime 1-day & 2-day delivery with verified buyer reviews and hassle-free Amazon returns.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                  <span>Amazon Prime Delivery Eligible</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                  <span>Verified Customer Ratings</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                  <span>A+ Brand Content & Warranty</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.amazon.in/s?k=Krishna+Enterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>Shop on Amazon</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Flipkart */}
          <div className="rounded-2xl p-6 bg-gradient-to-b from-blue-500/5 to-white border border-blue-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-black text-blue-600 tracking-tight">
                  Flipkart
                </span>
                <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                  Assured Seller
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-800 mb-2">
                Krishna Store on Flipkart
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Backed by the Flipkart Assured quality seal with SuperCoins rewards and special Big Billion Days savings.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>Flipkart Assured 6-step QA</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>Earn & Redeem SuperCoins</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>Easy Exchange & Card Offers</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.flipkart.com/search?q=Krishna+Enterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>Shop on Flipkart</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Meesho */}
          <div className="rounded-2xl p-6 bg-gradient-to-b from-pink-500/5 to-white border border-pink-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-black text-pink-600 tracking-tight">
                  meesho
                </span>
                <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-pink-100 text-pink-800 border border-pink-200">
                  Lowest Prices
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-800 mb-2">
                Krishna Store on Meesho
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Direct-from-supplier pricing with zero middleman commissions, high-volume savings, and free delivery across Bharat.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-pink-600 flex-shrink-0" />
                  <span>0% Middleman Commission Pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-pink-600 flex-shrink-0" />
                  <span>Free Shipping to 25,000+ Pincodes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-pink-600 flex-shrink-0" />
                  <span>Cash on Delivery Everywhere</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.meesho.com/search?q=Krishna+Enterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>Shop on Meesho</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Krishna Direct Store (VIP Perks) */}
          <div className="rounded-2xl p-6 bg-gradient-to-b from-[#051d24] via-[#082a36] to-[#061724] text-white border border-teal-500/30 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-teal-500/20 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/10 p-1 flex items-center justify-center border border-teal-400/30">
                    <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-base font-black text-white tracking-tight flex items-center gap-1">
                    KRISHNA <span className="text-amber-400 text-xs">DIRECT</span>
                  </span>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-extrabold rounded-full bg-amber-400 text-slate-950 shadow">
                  Best Perks
                </span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2">
                Krishna Web Store
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Order directly from our flagship website to unlock custom bundle pricing, instant welcome coupons, and priority VIP support.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <Tag className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Flat ₹100 Off with Code <strong>KRISHNA100</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-300 flex-shrink-0" />
                  <span>Direct 1-Year Brand Replacement</span>
                </li>
                <li className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-cyan-300 flex-shrink-0" />
                  <span>Priority 24-Hour Dispatch</span>
                </li>
              </ul>
            </div>
            <button
              onClick={handleShopDirect}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:brightness-110 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all active:scale-[0.98]"
            >
              <span>Shop Direct & Save</span>
              <ShoppingBag className="w-3.5 h-3.5 text-slate-950" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

