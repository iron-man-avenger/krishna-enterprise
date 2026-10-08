import React, { useState } from 'react';
import { X, Star, ShoppingBag, ShieldCheck, Truck, RefreshCw, ExternalLink, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const QuickViewModal: React.FC = () => {
  const { selectedProduct, setSelectedProduct, addToCart, pincodeInfo, setIsPincodeModalOpen } = useCart();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [added, setAdded] = useState(false);

  if (!selectedProduct) return null;

  const handleAddToCart = () => {
    addToCart(selectedProduct, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-10 p-2 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 p-4 sm:p-8">
          {/* Product Image Showcase */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200 group">
              <img
                src={selectedProduct.images[activeImageIndex] || selectedProduct.images[0]}
                alt={selectedProduct.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {selectedProduct.badge && (
                <span className="absolute top-3 left-3 bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md border border-amber-300/50">
                  {selectedProduct.badge}
                </span>
              )}
              <span className="absolute bottom-3 right-3 bg-teal-700 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow">
                {selectedProduct.discountPercentage}% OFF
              </span>
            </div>

            {/* Thumbnail Row */}
            {selectedProduct.images.length > 1 && (
              <div className="flex gap-3">
                {selectedProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-14 h-14 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx ? 'border-teal-500 shadow-sm' : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Quality Seal Box */}
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-amber-600 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide">Krishna Certified Authenticity</h4>
                <p className="text-xs text-amber-800/90 leading-tight mt-0.5">
                  100% genuine product inspected through our 5-point quality assurance protocol before dispatch.
                </p>
              </div>
            </div>
          </div>

          {/* Product Details & Actions */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                {selectedProduct.categoryName}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-1 leading-snug">
                {selectedProduct.title}
              </h2>

              {/* Rating & Social Proof */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1 bg-emerald-700 text-white text-xs font-bold px-2 py-0.5 rounded">
                  <span>{selectedProduct.rating}</span>
                  <Star className="w-3.5 h-3.5 fill-white" />
                </div>
                <span className="text-xs text-slate-500">
                  {selectedProduct.ratingCount.toLocaleString()} Verified Ratings
                </span>
                <span className="text-xs text-slate-300">|</span>
                <span className="text-xs text-emerald-600 font-medium">In Stock ({selectedProduct.stockCount} left)</span>
              </div>

              {/* Price & Savings */}
              <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-slate-900">
                    ₹{selectedProduct.price.toLocaleString()}
                  </span>
                  <span className="text-base text-slate-400 line-through">
                    ₹{selectedProduct.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-sm font-bold text-brand-accent">
                    Save ₹{(selectedProduct.originalPrice - selectedProduct.price).toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Inclusive of all taxes. Free Pan-India Shipping on orders above ₹499.</p>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Key Features List */}
              <div className="mt-4">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2">Highlights:</h4>
                <ul className="space-y-1.5">
                  {selectedProduct.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pincode & Delivery badge */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-brand-500" />
                  <span>
                    Deliver to <strong className="text-slate-900">{pincodeInfo?.pincode || '400001'}</strong> ({pincodeInfo?.city}): <strong className="text-emerald-600">{selectedProduct.deliveryDays}</strong>
                  </span>
                </div>
                <button 
                  onClick={() => setIsPincodeModalOpen(true)}
                  className="text-brand-500 font-semibold hover:underline"
                >
                  Change
                </button>
              </div>
            </div>

            {/* Conversion Actions */}
            <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col gap-3">
              <button
                onClick={handleAddToCart}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-black flex items-center justify-center gap-2 shadow-lg shadow-teal-900/15 hover:shadow-xl transition-all transform active:scale-[0.99]"
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5 text-amber-300" />
                    <span>Add to Cart / Buy Direct (Extra Discounts)</span>
                  </>
                )}
              </button>

              {/* Omnichannel Marketplace Choice */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 text-center mb-2.5">
                  — Or Purchase from Our Official Marketplace Stores —
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={selectedProduct.marketplaceLinks.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-400 transition-all text-center group"
                  >
                    <span className="text-[10px] font-bold text-amber-700 flex items-center gap-1">
                      Amazon <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
                    </span>
                    <span className="text-[9px] text-slate-400">Prime Assured</span>
                  </a>

                  <a
                    href={selectedProduct.marketplaceLinks.flipkart}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-400 transition-all text-center group"
                  >
                    <span className="text-[10px] font-bold text-blue-600 flex items-center gap-1">
                      Flipkart <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
                    </span>
                    <span className="text-[9px] text-slate-400">Flipkart Assured</span>
                  </a>

                  <a
                    href={selectedProduct.marketplaceLinks.meesho}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-white hover:bg-pink-50 border border-slate-200 hover:border-pink-400 transition-all text-center group"
                  >
                    <span className="text-[10px] font-bold text-pink-600 flex items-center gap-1">
                      Meesho <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
                    </span>
                    <span className="text-[9px] text-slate-400">Best Value</span>
                  </a>
                </div>
              </div>

              {/* Guarantees */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Genuine
                </span>
                <span className="flex items-center gap-1">
                  <RefreshCw className="w-3.5 h-3.5 text-brand-500" /> 7-Day Easy Returns
                </span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-amber-500" /> Cash on Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

