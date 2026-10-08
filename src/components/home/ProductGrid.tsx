import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, SearchX, RefreshCw } from 'lucide-react';
import { products } from '../../data/products';
import { categories } from '../../data/categories';
import { useCart } from '../../context/CartContext';
import { ProductCard } from './ProductCard';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating';

export const ProductGrid: React.FC = () => {
  const { selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } = useCart();
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (selectedCategory !== 'all') {
      list = list.filter(p => p.category === selectedCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case 'price-low':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  const activeCategoryTitle = selectedCategory === 'all'
    ? 'All Categories'
    : categories.find(c => c.id === selectedCategory)?.name || 'Products';

  return (
    <section id="catalog-section" className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Title & Filtering Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-500">
                Verified Indian Catalog
              </span>
              <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 font-semibold">
                {filteredProducts.length} Items
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-0.5 sm:mt-1 tracking-tight">
              {activeCategoryTitle}
            </h2>
          </div>

          {/* Controls: Sorting */}
          <div className="flex items-center gap-2 bg-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border border-slate-200 shadow-sm text-xs self-start sm:self-auto">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
            <span className="text-slate-500 font-medium hidden xs:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="font-bold text-slate-800 bg-transparent focus:outline-none cursor-pointer text-[11px] sm:text-xs"
            >
              <option value="featured">Featured & Trending</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Category Tab Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 sm:mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex-shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-brand-dark text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            All Items
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex-shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat.shortName}
            </button>
          ))}
        </div>

        {/* Active Search Filter Badge */}
        {searchQuery && (
          <div className="mb-5 flex items-center justify-between p-2.5 sm:p-3 bg-brand-50 border border-brand-200 rounded-xl text-xs text-brand-900">
            <span className="truncate pr-2">
              Results for: <strong className="text-brand-700">"{searchQuery}"</strong>
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-brand-600 font-bold hover:underline flex items-center gap-1 flex-shrink-0"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        )}

        {/* Products Grid: 2 columns on mobile, 4 columns on desktop */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center max-w-md mx-auto space-y-3 sm:space-y-4 shadow-sm">
            <SearchX className="w-10 h-10 sm:w-12 sm:h-12 text-slate-300 mx-auto" />
            <h3 className="text-base sm:text-lg font-bold text-slate-800">No matching products found</h3>
            <p className="text-xs text-slate-500">
              We couldn't find any products matching your current search. Try clearing filters or searching for another term.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-brand-500 text-white text-xs font-bold rounded-xl shadow-md"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
