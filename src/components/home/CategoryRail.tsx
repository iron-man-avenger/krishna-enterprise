import React from 'react';
import { Shirt, Headphones, Home, Sparkles, ShoppingBag, Zap, Layers } from 'lucide-react';
import { categories } from '../../data/categories';
import { useCart } from '../../context/CartContext';
import type { CategoryId } from '../../types';

export const CategoryRail: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useCart();

  const getIcon = (id: string, isSelected: boolean) => {
    const iconClass = `w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110 ${
      isSelected ? 'stroke-[2.25px]' : 'stroke-[1.75px]'
    }`;

    switch (id) {
      case 'fashion':
        return <Shirt className={iconClass} />;
      case 'electronics':
        return <Headphones className={iconClass} />;
      case 'home':
        return <Home className={iconClass} />;
      case 'beauty':
        return <Sparkles className={iconClass} />;
      case 'grocery':
        return <ShoppingBag className={iconClass} />;
      case 'gadgets':
        return <Zap className={iconClass} />;
      default:
        return <Layers className={iconClass} />;
    }
  };

  const handleSelect = (id: CategoryId) => {
    setSelectedCategory(id);
    const target = document.getElementById('catalog-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white border-b border-slate-200/80 py-3 sm:py-4 shadow-sm select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean, borderless horizontal icon rail */}
        <div className="flex items-center justify-start sm:justify-between gap-6 sm:gap-8 overflow-x-auto no-scrollbar py-1 px-1">
          
          {/* 'All Items' Icon Button */}
          <button
            onClick={() => handleSelect('all')}
            className={`flex flex-col items-center flex-shrink-0 group cursor-pointer transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'text-brand-500'
                : 'text-slate-500 hover:text-brand-500'
            }`}
          >
            <div className="py-1">
              {getIcon('all', selectedCategory === 'all')}
            </div>
            <span
              className={`text-xs sm:text-sm tracking-tight transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'font-extrabold text-brand-500'
                  : 'font-medium text-slate-600 group-hover:text-brand-500'
              }`}
            >
              All Items
            </span>
            {/* Active Indicator Underline Pill */}
            <div
              className={`h-1 rounded-full mt-1.5 transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'w-6 sm:w-8 bg-gradient-to-r from-teal-600 to-cyan-500 shadow-sm'
                  : 'w-0 bg-transparent group-hover:w-4 group-hover:bg-teal-200'
              }`}
            />
          </button>

          {/* Category Icon Buttons */}
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
                className={`flex flex-col items-center flex-shrink-0 group cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? 'text-brand-500'
                    : 'text-slate-500 hover:text-brand-500'
                }`}
              >
                <div className="py-1">
                  {getIcon(cat.id, isSelected)}
                </div>
                <span
                  className={`text-xs sm:text-sm tracking-tight whitespace-nowrap transition-all duration-300 ${
                    isSelected
                      ? 'font-extrabold text-brand-500'
                      : 'font-medium text-slate-600 group-hover:text-brand-500'
                  }`}
                >
                  {cat.shortName}
                </span>
                {/* Active Indicator Underline Pill */}
                <div
                  className={`h-1 rounded-full mt-1.5 transition-all duration-300 ${
                    isSelected
                      ? 'w-6 sm:w-8 bg-gradient-to-r from-teal-600 to-cyan-500 shadow-sm'
                      : 'w-0 bg-transparent group-hover:w-4 group-hover:bg-teal-200'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
