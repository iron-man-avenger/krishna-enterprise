import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, ShieldCheck, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartCount,
    cartSubtotal,
    cartOriginalTotal,
    discountAmount,
    finalTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ text: string; isError?: boolean } | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 499;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const shippingProgress = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    setCouponFeedback({ text: res.message, isError: !res.success });
    if (res.success) {
      setInputCoupon('');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderSuccess(true);
      clearCart();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="absolute inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full sm:w-screen sm:max-w-md bg-white shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-600 flex items-center justify-center font-bold">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Your Shopping Bag</h3>
                <p className="text-xs text-slate-500">{cartCount} {cartCount === 1 ? 'item' : 'items'} selected</p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="px-5 py-3 bg-brand-50/50 border-b border-brand-100">
            {amountNeededForFreeShipping > 0 ? (
              <p className="text-xs text-brand-800">
                Add <strong className="text-brand-accent">₹{amountNeededForFreeShipping}</strong> more for <strong>FREE Pan-India Delivery!</strong>
              </p>
            ) : (
              <p className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 bg-emerald-100 text-emerald-700 rounded-full p-0.5" />
                Congratulations! You unlocked FREE Pan-India Shipping!
              </p>
            )}
            <div className="w-full h-1.5 bg-slate-200 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-500 rounded-full"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>

          {/* Drawer Body: Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {orderSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Order Placed Successfully!</h3>
                <p className="text-xs text-slate-600">
                  Thank you for shopping with Krishna Enterprises. Our team will verify and dispatch your items within 24 hours. A confirmation WhatsApp message has been sent.
                </p>
                <button
                  onClick={() => {
                    setOrderSuccess(false);
                    setIsCartOpen(false);
                  }}
                  className="mt-4 px-6 py-2.5 bg-brand-dark text-white text-xs font-bold rounded-xl"
                >
                  Continue Shopping
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400 space-y-3">
                <ShoppingBag className="w-14 h-14 stroke-1 text-slate-300" />
                <h4 className="text-base font-semibold text-slate-700">Your bag is currently empty</h4>
                <p className="text-xs text-slate-500 max-w-xs">
                  Discover electronics, trendy apparel, kitchen essentials, and gadgets at unbeatable prices.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold rounded-xl shadow-md transition-all"
                >
                  Browse Catalog
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3.5 p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.title}
                    className="w-20 h-20 rounded-lg object-cover bg-white border border-slate-200 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-semibold text-slate-900 line-clamp-2">
                          {item.product.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-slate-400 hover:text-rose-500 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-brand-600 font-medium uppercase mt-0.5 block">
                        {item.product.categoryName}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-200/60">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-slate-900">
                          ₹{(item.product.price * item.quantity).toLocaleString()}
                        </span>
                        <span className="text-[10px] text-slate-400 line-through">
                          ₹{(item.product.originalPrice * item.quantity).toLocaleString()}
                        </span>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-slate-100 text-slate-600 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-slate-100 text-slate-600 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer: Coupon & Pricing */}
          {cartItems.length > 0 && !orderSuccess && (
            <div className="p-5 border-t border-slate-200 bg-slate-50/80 space-y-4">
              {/* Coupon Input */}
              <div>
                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-emerald-600" />
                      <span>Coupon <strong>{appliedCoupon}</strong> active</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-rose-600 font-bold hover:underline text-[11px]"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Coupon code (e.g. KRISHNA100)"
                        value={inputCoupon}
                        onChange={(e) => setInputCoupon(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs uppercase font-medium bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponFeedback && (
                  <p className={`text-[11px] mt-1 ${couponFeedback.isError ? 'text-rose-600' : 'text-emerald-600'}`}>
                    {couponFeedback.text}
                  </p>
                )}
              </div>

              {/* Price Calculation Breakdown */}
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Total MRP</span>
                  <span className="line-through text-slate-400">₹{cartOriginalTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span>₹{cartSubtotal.toLocaleString()}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Coupon Discount</span>
                    <span>-₹{discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Pan-India Delivery</span>
                  <span>
                    {amountNeededForFreeShipping === 0 ? (
                      <strong className="text-emerald-600">FREE</strong>
                    ) : (
                      '₹49'
                    )}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-extrabold text-slate-900">
                  <span>Grand Total</span>
                  <span>₹{(finalTotal + (amountNeededForFreeShipping === 0 ? 0 : 49)).toLocaleString()}</span>
                </div>
                <p className="text-[11px] text-emerald-600 font-medium">
                  🎉 You are saving ₹{(cartOriginalTotal - finalTotal).toLocaleString()} on this order!
                </p>
              </div>

              {/* Checkout Action */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-black flex items-center justify-center gap-2 shadow-lg shadow-teal-900/20 transition-all transform active:scale-[0.99] disabled:opacity-75"
              >
                {isCheckingOut ? (
                  <span>Processing Order...</span>
                ) : (
                  <>
                    <span>Proceed to Secure Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>256-bit SSL Encrypted • UPI, Cards, NetBanking, COD Accepted</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};




