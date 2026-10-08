import React from 'react';
import { Home, Layers, Flame, ShoppingBag, MapPin } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const MobileBottomNav: React.FC = () => {
  const { cartCount, setIsCartOpen, setIsPincodeModalOpen, setSelectedCategory } = useCart();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl py-1.5 px-4">
      <div className="flex items-center justify-around">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-brand-dark py-1 active:scale-95 transition-transform"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Home</span>
        </button>

        <button
          onClick={() => {
            setSelectedCategory('all');
            scrollToSection('catalog-section');
          }}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-brand-500 py-1 active:scale-95 transition-transform"
        >
          <Layers className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Catalog</span>
        </button>

        <button
          onClick={() => scrollToSection('marketplace-hub')}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-amber-500 py-1 active:scale-95 transition-transform"
        >
          <Flame className="w-5 h-5 text-red-500" />
          <span className="text-[10px] font-semibold">Deals</span>
        </button>

        <button
          onClick={() => setIsPincodeModalOpen(true)}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-brand-500 py-1 active:scale-95 transition-transform"
        >
          <MapPin className="w-5 h-5 text-brand-500" />
          <span className="text-[10px] font-semibold">Pincode</span>
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center gap-0.5 text-slate-600 hover:text-teal-700 py-1 active:scale-95 transition-transform"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-teal-800" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-amber-400 text-slate-950 text-[9px] font-black rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold text-slate-800">Bag</span>
        </button>
      </div>
    </nav>
  );
};
