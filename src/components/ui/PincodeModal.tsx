import React, { useState } from 'react';
import { X, MapPin, CheckCircle2, Truck, ShieldAlert } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const samplePincodes: Record<string, { city: string; state: string; days: number }> = {
  '400001': { city: 'Mumbai', state: 'Maharashtra', days: 2 },
  '110001': { city: 'New Delhi', state: 'Delhi', days: 2 },
  '560001': { city: 'Bengaluru', state: 'Karnataka', days: 2 },
  '380001': { city: 'Ahmedabad', state: 'Gujarat', days: 1 },
  '600001': { city: 'Chennai', state: 'Tamil Nadu', days: 3 },
  '700001': { city: 'Kolkata', state: 'West Bengal', days: 3 },
  '500001': { city: 'Hyderabad', state: 'Telangana', days: 2 },
  '302001': { city: 'Jaipur', state: 'Rajasthan', days: 2 },
  '226001': { city: 'Lucknow', state: 'Uttar Pradesh', days: 3 },
  '411001': { city: 'Pune', state: 'Maharashtra', days: 2 },
  '395001': { city: 'Surat', state: 'Gujarat', days: 1 }
};

export const PincodeModal: React.FC = () => {
  const { isPincodeModalOpen, setIsPincodeModalOpen, pincodeInfo, setPincodeInfo } = useCart();
  const [pinInput, setPinInput] = useState(pincodeInfo?.pincode || '');
  const [feedback, setFeedback] = useState<string | null>(null);

  if (!isPincodeModalOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = pinInput.trim();
    if (!/^\d{6}$/.test(clean)) {
      setFeedback('Please enter a valid 6-digit Indian PIN code.');
      return;
    }

    const matched = samplePincodes[clean];
    if (matched) {
      setPincodeInfo({
        pincode: clean,
        city: matched.city,
        state: matched.state,
        deliveryDays: matched.days,
        codAvailable: true,
        freeShipping: true,
      });
    } else {
      // General India coverage
      setPincodeInfo({
        pincode: clean,
        city: 'India Hub',
        state: 'Express Zone',
        deliveryDays: 3,
        codAvailable: true,
        freeShipping: true,
      });
    }
    setFeedback(null);
    setIsPincodeModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsPincodeModalOpen(false)}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Check Delivery & COD</h3>
            <p className="text-xs text-slate-500">Enter your area PIN code to view delivery speed</p>
          </div>
        </div>

        <form onSubmit={handleVerify} className="space-y-4">
          <div>
            <div className="flex gap-2">
              <input
                type="text"
                maxLength={6}
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value.replace(/\D/g, ''))}
                placeholder="Enter 6-digit PIN code (e.g. 400001)"
                className="flex-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold tracking-wider text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white"
                autoFocus
              />
              <button
                type="submit"
                className="px-5 py-3 bg-brand-dark hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-all"
              >
                Check
              </button>
            </div>
            {feedback && (
              <p className="text-xs text-rose-600 mt-2 flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                {feedback}
              </p>
            )}
          </div>

          {/* Quick Pincode Pills */}
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase mb-2">Popular Cities:</p>
            <div className="flex flex-wrap gap-1.5">
              {Object.entries(samplePincodes).slice(0, 6).map(([code, data]) => (
                <button
                  type="button"
                  key={code}
                  onClick={() => setPinInput(code)}
                  className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-600 border border-slate-200 transition-colors"
                >
                  {data.city} ({code})
                </button>
              ))}
            </div>
          </div>

          {pincodeInfo && (
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Delivering to {pincodeInfo.city}, {pincodeInfo.state} ({pincodeInfo.pincode})</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-emerald-700">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" /> Fast {pincodeInfo.deliveryDays} Days Dispatch
                </span>
                <span>✓ Cash on Delivery Available</span>
                <span>✓ Free Pan-India Shipping</span>
                <span>✓ 7-Day Easy Replacement</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
