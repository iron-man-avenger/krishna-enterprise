import React from 'react';
import { Truck, ShieldCheck, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#061724] via-[#0f766e] to-[#061724] text-slate-100 text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-teal-900/50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Mobile-friendly banner text */}
        <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 text-[11px] sm:text-xs text-center w-full sm:w-auto">
          <span className="flex items-center gap-1 text-amber-300 font-extrabold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 flex-shrink-0 text-amber-300" />
            <span>FESTIVE DHAMAKA SALE: Up to 70% OFF</span>
          </span>
          <span className="hidden md:inline-block text-teal-300/40">|</span>
          <span className="hidden md:flex items-center gap-1 text-teal-100 font-medium">
            <Truck className="w-3.5 h-3.5 text-cyan-300" />
            <span>Free Pan-India Delivery &gt; ₹499</span>
          </span>
          <span className="hidden lg:inline-block text-teal-300/40">|</span>
          <span className="hidden lg:flex items-center gap-1 text-teal-100 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
            <span>100% Quality Checked</span>
          </span>
        </div>

        {/* Marketplace Presence Badges (Desktop & Tablet) */}
        <div className="hidden sm:flex items-center gap-1.5 text-[10px] sm:text-[11px]">
          <span className="text-slate-400 font-medium hidden xs:inline">Also on:</span>
          <div className="flex items-center gap-1">
            <span className="px-1.5 py-0.5 rounded bg-slate-800 text-amber-400 font-bold border border-slate-700/60 text-[9px] sm:text-[10px]">
              Amazon
            </span>
            <span className="px-1.5 py-0.5 rounded bg-slate-800 text-blue-400 font-bold border border-slate-700/60 text-[9px] sm:text-[10px]">
              Flipkart
            </span>
            <span className="px-1.5 py-0.5 rounded bg-slate-800 text-pink-400 font-bold border border-slate-700/60 text-[9px] sm:text-[10px]">
              Meesho
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
