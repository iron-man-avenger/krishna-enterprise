import React, { useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Send, Check, ExternalLink } from 'lucide-react';
import { categories } from '../../data/categories';
import { useCart } from '../../context/CartContext';
import logoImg from '../../public/assets/logo.png';

export const Footer: React.FC = () => {
  const { setSelectedCategory } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const handleCategoryClick = (catId: any) => {
    setSelectedCategory(catId);
    const element = document.getElementById('catalog-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & VIP Club Callout */}
        <div className="bg-gradient-to-r from-[#061724] via-[#082a36] to-[#04151e] rounded-3xl p-8 sm:p-10 mb-16 border border-teal-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              VIP Shopper Rewards
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Get ₹150 OFF on Your First Direct Order
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Subscribe to the Krishna Enterprises insider club for exclusive deals, festival previews, and instant coupons.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-2 p-3.5 bg-teal-950/80 border border-teal-600/60 rounded-2xl text-teal-300 text-xs font-semibold">
                <Check className="w-4 h-4 text-teal-400" />
                <span>Coupon code <strong>WELCOME150</strong> sent to your email!</span>
              </div>
            ) : (
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-teal-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 text-xs text-white bg-slate-950/80 border border-teal-900/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-slate-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 text-slate-950 text-xs font-black rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-1.5"
                >
                  <span>Join</span>
                  <Send className="w-3.5 h-3.5 text-slate-950" />
                </button>
              </div>
            )}
          </form>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 p-1 flex items-center justify-center border border-teal-500/30">
                <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-white">KRISHNA</span>
                <span className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">ENTERPRISES</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pr-6">
              Krishna Enterprises is a dynamic e-commerce brand revolutionizing online shopping across India. We specialize in offering an extensive range of products spanning nearly every category—from fashion and electronics to home essentials, beauty, groceries, and lifestyle gadgets. Sourced from reliable suppliers and tested for uncompromising quality.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Pan-India Fulfillment Hubs • Registered in India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>support@krishnaenterprises.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>+91 98765 43210 (Mon-Sat, 9am - 7pm IST)</span>
              </div>
            </div>
          </div>

          {/* Shop by Categories */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Explore Catalog
            </h4>
            <ul className="space-y-2.5 text-xs">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryClick(cat.id)}
                    className="text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Omnichannel Marketplaces */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Our Marketplace Hubs
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="https://www.amazon.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                >
                  <span>Amazon India Storefront</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <p className="text-[11px] text-slate-500">Prime delivery & verified customer reviews</p>
              </li>
              <li>
                <a
                  href="https://www.flipkart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  <span>Flipkart Official Store</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <p className="text-[11px] text-slate-500">Flipkart Assured badge & SuperCoins</p>
              </li>
              <li>
                <a
                  href="https://www.meesho.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-pink-400 hover:text-pink-300 font-semibold transition-colors"
                >
                  <span>Meesho Official Store</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <p className="text-[11px] text-slate-500">Unbeatable value pricing & direct dispatch</p>
              </li>
            </ul>
          </div>

          {/* Customer Trust & Policies */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Customer Trust
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Track Your Consignment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">7-Day Easy Replacement Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Assurance Protocol</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GST Invoicing & Business Bulk</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service & Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & GST info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>GST Registered Indian Enterprise • 100% Tax Compliant & Authentic</span>
          </div>
          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} Krishna Enterprises. All rights reserved. Powering omnichannel e-commerce across India.
          </p>
        </div>
      </div>
    </footer>
  );
};

