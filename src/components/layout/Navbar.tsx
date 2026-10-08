import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingBag, MapPin, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { categories } from '../../data/categories';
import { products } from '../../data/products';
import type { CategoryId } from '../../types';
import logoImg from '../../public/assets/logo.png';

export const Navbar: React.FC = () => {
  const {
    cartCount,
    setIsCartOpen,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    pincodeInfo,
    setIsPincodeModalOpen,
    setSelectedProduct,
  } = useCart();

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        searchContainerRef.current && !searchContainerRef.current.contains(target) &&
        mobileSearchRef.current && !mobileSearchRef.current.contains(target)
      ) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchResults = searchQuery.trim() === ''
    ? []
    : products.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);

  const handleSelectCategory = (catId: CategoryId) => {
    setSelectedCategory(catId);
    setMobileMenuOpen(false);
    const element = document.getElementById('catalog-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-20 gap-1.5 sm:gap-4">
          
          {/* Brand Logo & Mobile Drawer Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <a href="#" className="flex items-center gap-1.5 sm:gap-2.5 group min-w-0">
              <img
                src={logoImg}
                alt="Krishna Enterprises Logo"
                className="h-8 sm:h-11 w-auto max-w-[45px] sm:max-w-none object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1 leading-none">
                  <span className="text-xs xs:text-sm sm:text-2xl font-black tracking-tight text-brand-dark group-hover:text-brand-500 transition-colors whitespace-nowrap">
                    KRISHNA
                  </span>
                  <span className="text-xs xs:text-sm sm:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 whitespace-nowrap">
                    ENTERPRISES
                  </span>
                </div>
                <span className="text-[9px] sm:text-[11px] font-semibold tracking-wider text-slate-500 uppercase mt-0.5 hidden sm:block">
                  Omnichannel Brand & Store
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Delivery Pincode Selector */}
          <button
            onClick={() => setIsPincodeModalOpen(true)}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-left transition-colors flex-shrink-0"
          >
            <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" />
            <div className="text-[11px] leading-tight">
              <span className="text-slate-400 block font-medium">Deliver to</span>
              <span className="font-bold text-slate-800">
                {pincodeInfo ? `${pincodeInfo.city} ${pincodeInfo.pincode}` : 'Select Pincode'}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {/* Desktop Search Bar */}
          <div ref={searchContainerRef} className="relative flex-1 max-w-xl hidden sm:block">
            <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 focus-within:bg-white focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-500/20 transition-all overflow-hidden shadow-inner">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as CategoryId)}
                className="hidden lg:block py-2.5 pl-3 pr-2 text-xs font-semibold text-slate-600 bg-slate-100 border-r border-slate-200 focus:outline-none cursor-pointer hover:bg-slate-200 transition-colors"
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.shortName}
                  </option>
                ))}
              </select>

              <div className="flex-1 flex items-center pl-3 pr-2">
                <Search className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search 10,000+ products across India..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  className="w-full py-2.5 text-xs text-slate-900 bg-transparent focus:outline-none placeholder-slate-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Instant Suggestions */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50 animate-fadeIn">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-4 py-1">
                  Matching Products:
                </p>
                {searchResults.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedProduct(item);
                      setIsSearchFocused(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 text-left transition-colors"
                  >
                    <img
                      src={item.images[0]}
                      alt=""
                      className="w-10 h-10 rounded-lg object-cover bg-slate-100 border border-slate-200"
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-semibold text-slate-900 truncate">
                        {item.title}
                      </h5>
                      <span className="text-[10px] text-brand-500 font-medium">
                        {item.categoryName} • ₹{item.price.toLocaleString()}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Controls: Cart Bag */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            {/* Shopping Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center justify-center p-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-md shadow-teal-950/20 transition-all active:scale-95"
              aria-label="View Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 text-amber-300 flex-shrink-0" />
              <span className="text-xs font-bold hidden sm:inline ml-1.5">Bag</span>
              <span className="absolute -top-1 -right-1 sm:static sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-400 text-slate-950 text-[10px] sm:text-[11px] font-black flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Row (Always visible & interactive on phones) */}
        <div ref={mobileSearchRef} className="pb-2.5 sm:hidden relative">
          <div className="flex items-center px-3 py-2 bg-slate-100 rounded-xl border border-slate-200 focus-within:bg-white focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-500/20 transition-all">
            <Search className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search fashion, earbuds, kitchenware..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              className="w-full text-xs text-slate-800 bg-transparent focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-0.5 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Mobile Instant Suggestions Dropdown */}
          {isSearchFocused && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50 animate-fadeIn max-h-72 overflow-y-auto">
              {searchResults.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedProduct(item);
                    setIsSearchFocused(false);
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-slate-50 text-left border-b border-slate-100 last:border-b-0"
                >
                  <img
                    src={item.images[0]}
                    alt=""
                    className="w-9 h-9 rounded-lg object-cover bg-slate-100 border border-slate-200 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-semibold text-slate-900 truncate">
                      {item.title}
                    </h5>
                    <span className="text-[10px] text-brand-500 font-medium">
                      ₹{item.price.toLocaleString()} • {item.categoryName}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 animate-fadeIn shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Deliver to:</span>
              <strong className="text-slate-800">{pincodeInfo?.city} ({pincodeInfo?.pincode})</strong>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsPincodeModalOpen(true);
              }}
              className="text-xs font-bold text-brand-500 hover:underline"
            >
              Change
            </button>
          </div>

          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 pt-1">
            Shop by Category:
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleSelectCategory('all')}
              className={`p-2.5 rounded-lg text-left text-xs font-semibold transition-colors ${
                selectedCategory === 'all' ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-700'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`p-2.5 rounded-lg text-left text-xs font-semibold transition-colors ${
                  selectedCategory === cat.id ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                {cat.shortName}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};



