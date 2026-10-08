import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, CartItem, CategoryId, PincodeInfo } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  cartOriginalTotal: number;
  discountAmount: number;
  finalTotal: number;
  appliedCoupon: string | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  selectedCategory: CategoryId;
  setSelectedCategory: (cat: CategoryId) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  pincodeInfo: PincodeInfo | null;
  setPincodeInfo: (info: PincodeInfo | null) => void;
  isPincodeModalOpen: boolean;
  setIsPincodeModalOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('krishna_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>('KRISHNA100');
  const [isPincodeModalOpen, setIsPincodeModalOpen] = useState(false);
  const [pincodeInfo, setPincodeInfo] = useState<PincodeInfo | null>(() => {
    const saved = localStorage.getItem('krishna_pincode');
    return saved ? JSON.parse(saved) : {
      pincode: '400001',
      city: 'Mumbai',
      state: 'Maharashtra',
      deliveryDays: 2,
      codAvailable: true,
      freeShipping: true
    };
  });

  useEffect(() => {
    localStorage.setItem('krishna_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (pincodeInfo) {
      localStorage.setItem('krishna_pincode', JSON.stringify(pincodeInfo));
    }
  }, [pincodeInfo]);

  const addToCart = (product: Product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const applyCoupon = (code: string) => {
    const cleaned = code.trim().toUpperCase();
    if (cleaned === 'KRISHNA100') {
      setAppliedCoupon('KRISHNA100');
      return { success: true, message: '🎉 Flat ₹100 Krishna Welcome discount applied!' };
    }
    if (cleaned === 'FESTIVE15') {
      setAppliedCoupon('FESTIVE15');
      return { success: true, message: '✨ 15% Festive Special discount applied!' };
    }
    return { success: false, message: 'Invalid coupon code. Try KRISHNA100 or FESTIVE15' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartOriginalTotal = cartItems.reduce((sum, item) => sum + item.product.originalPrice * item.quantity, 0);

  let discountAmount = 0;
  if (appliedCoupon === 'KRISHNA100' && cartSubtotal > 499) {
    discountAmount = 100;
  } else if (appliedCoupon === 'FESTIVE15') {
    discountAmount = Math.round(cartSubtotal * 0.15);
  }

  const finalTotal = Math.max(0, cartSubtotal - discountAmount);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        cartOriginalTotal,
        discountAmount,
        finalTotal,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        isCartOpen,
        setIsCartOpen,
        selectedProduct,
        setSelectedProduct,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        pincodeInfo,
        setPincodeInfo,
        isPincodeModalOpen,
        setIsPincodeModalOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
