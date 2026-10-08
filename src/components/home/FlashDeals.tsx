import React, { useState, useEffect } from 'react';
import { Flame, Clock, ShoppingBag, Eye, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { BorderBeam } from '../ui/BorderBeam';

export const FlashDeals: React.FC = () => {
  const { addToCart, setSelectedProduct } = useCart();
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 36, seconds: 28 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 4, minutes: 30, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const flashItems = products.filter(p => p.isFlashDeal).slice(0, 4);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header with Live Countdown */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2 shadow-xs">
              <Flame className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              <span>Limited Stock Steals</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Flash Deals of the Day
            </h2>
          </div>

          {/* Countdown Clock Display */}
          <div className="flex items-center gap-2 bg-[#061724] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-md border border-teal-900/50 self-start sm:self-auto">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            <span className="text-[11px] sm:text-xs font-semibold text-slate-300">Ends in:</span>
            <div className="flex items-center gap-1 font-mono font-bold text-xs sm:text-sm">
              <span className="px-1.5 py-0.5 bg-[#0a2536] rounded text-amber-300">
                {String(timeLeft.hours).padStart(2, '0')}h
              </span>
              <span className="text-teal-400">:</span>
              <span className="px-1.5 py-0.5 bg-[#0a2536] rounded text-amber-300">
                {String(timeLeft.minutes).padStart(2, '0')}m
              </span>
              <span className="text-teal-400">:</span>
              <span className="px-1.5 py-0.5 bg-[#0a2536] rounded text-amber-300">
                {String(timeLeft.seconds).padStart(2, '0')}s
              </span>
            </div>
          </div>
        </div>

        {/* 2-Col Mobile, 4-Col Desktop Grid with BorderBeam on First Card */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {flashItems.map((item, index) => {
            const isHeroDeal = index === 0;
            const claimedPct = 70 + (index * 7);

            return (
              <div
                key={item.id}
                className={`relative rounded-xl sm:rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-sm hover:shadow-xl ${
                  isHeroDeal ? 'border-teal-500/40 ring-1 ring-teal-500/20' : 'border-slate-200'
                }`}
              >
                {isHeroDeal && (
                  <BorderBeam
                    size={200}
                    duration={6}
                    colorFrom="#06b6d4"
                    colorTo="#f59e0b"
                    borderWidth={2}
                  />
                )}

                <div>
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (item.images[1] && target.src !== item.images[1]) {
                          target.src = item.images[1];
                        } else {
                          target.src = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80';
                        }
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-red-600 text-white text-[9px] sm:text-xs font-extrabold px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded sm:rounded-md shadow-md">
                      {item.discountPercentage}% OFF
                    </span>

                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 bg-white/90 hover:bg-white text-slate-700 hover:text-brand-500 rounded-full shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all"
                      title="Quick Preview"
                    >
                      <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>

                  <div className="p-2.5 sm:p-4">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-500 block truncate">
                      {item.categoryName}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 sm:mt-1 line-clamp-2 leading-tight sm:leading-snug group-hover:text-brand-600 transition-colors">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-1 sm:gap-1.5 mt-1 sm:mt-2">
                      <div className="flex items-center gap-0.5 bg-emerald-700 text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">
                        <span>{item.rating}</span>
                        <Star className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-white" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-slate-400">
                        ({item.ratingCount.toLocaleString()})
                      </span>
                    </div>

                    <div className="flex items-baseline gap-1.5 sm:gap-2 mt-1.5 sm:mt-2.5">
                      <span className="text-sm sm:text-lg font-extrabold text-slate-900">
                        ₹{item.price.toLocaleString()}
                      </span>
                      <span className="text-[10px] sm:text-xs text-slate-400 line-through">
                        ₹{item.originalPrice.toLocaleString()}
                      </span>
                    </div>

                    <div className="mt-2 sm:mt-3">
                      <div className="flex justify-between text-[9px] sm:text-[10px] text-slate-500 mb-1">
                        <span>Sold: <strong>{claimedPct}%</strong></span>
                        <span className="text-red-600 font-semibold">{item.stockCount} left</span>
                      </div>
                      <div className="w-full h-1 sm:h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 via-cyan-500 to-amber-500 rounded-full"
                          style={{ width: `${claimedPct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 sm:p-4 pt-0">
                  <button
                    onClick={() => addToCart(item, 1)}
                    className="w-full py-2 sm:py-2.5 px-2 sm:px-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-teal-700 to-brand-dark hover:from-teal-600 hover:to-slate-900 text-white font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-[0.98]"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
                    <span>Claim Deal</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

