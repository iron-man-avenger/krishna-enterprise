import React, { useState } from 'react';
import { ShoppingBag, Star, Eye, Check } from 'lucide-react';
import type { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setSelectedProduct } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      onClick={() => setSelectedProduct(product)}
      className="group relative bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer transform hover:-translate-y-1"
    >
      <div>
        {/* Image Stage */}
        <div className="relative aspect-square overflow-hidden bg-slate-100">
          <img
            src={product.images[0]}
            alt={product.title}
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget;
              if (product.images[1] && target.src !== product.images[1]) {
                target.src = product.images[1];
              } else {
                target.src = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80';
              }
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Product Badge */}
          {product.badge && (
            <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-amber-400 text-slate-950 text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded sm:rounded-md shadow-md border border-amber-300/60">
              {product.badge}
            </span>
          )}

          {/* Discount Tag */}
          <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-teal-700 text-white text-[9px] sm:text-[10px] font-black px-1.5 py-0.5 sm:px-2 rounded shadow">
            {product.discountPercentage}% OFF
          </span>

          {/* Quick View Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProduct(product);
            }}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 bg-white/90 hover:bg-white text-slate-700 hover:text-brand-500 rounded-full shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all"
            title="Quick View"
          >
            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-2.5 sm:p-4">
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-500 block truncate">
            {product.categoryName}
          </span>

          <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 sm:mt-1 line-clamp-2 leading-tight sm:leading-snug group-hover:text-brand-600 transition-colors">
            {product.title}
          </h3>

          {/* Star Rating */}
          <div className="flex items-center gap-1 sm:gap-2 mt-1.5 sm:mt-2">
            <div className="flex items-center gap-0.5 bg-emerald-700 text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">
              <span>{product.rating}</span>
              <Star className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-white" />
            </div>
            <span className="text-[9px] sm:text-[10px] text-slate-400">
              ({product.ratingCount.toLocaleString()})
            </span>
          </div>

          {/* Price Row */}
          <div className="flex items-baseline gap-1.5 sm:gap-2 mt-1.5 sm:mt-2.5">
            <span className="text-sm sm:text-lg font-extrabold text-slate-900">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          </div>

          <div className="text-[9px] sm:text-[10px] text-emerald-700 font-medium mt-1 truncate">
            Free Delivery &bull; COD Available
          </div>
        </div>
      </div>

      {/* Card Action Footers */}
      <div className="p-2.5 sm:p-4 pt-0 space-y-1.5 sm:space-y-2">
        {/* Primary Direct Buy Button */}
        <button
          onClick={handleAdd}
          className="w-full py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl bg-slate-100 hover:bg-brand-dark hover:text-white text-slate-800 font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
        >
          {added ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>Added</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
              <span>Add to Bag</span>
            </>
          )}
        </button>

        {/* Micro Marketplace Badges */}
        <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[9px] sm:text-[10px] text-slate-400">
          <span className="hidden xs:inline">Also on:</span>
          <div className="flex items-center gap-1 font-bold">
            <span className="hover:text-amber-500">Amazon</span>
            <span>&bull;</span>
            <span className="hover:text-blue-500">Flipkart</span>
            <span>&bull;</span>
            <span className="hover:text-pink-500">Meesho</span>
          </div>
        </div>
      </div>
    </div>
  );
};

